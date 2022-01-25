let log = console.log;
let searchField = document.querySelector(".searchField");
let searchsuggest = document.querySelector(".searchsuggest");
let mainbox = document.querySelector(".mainbox");
let searchresultshower = document.querySelector(".searchresultshower");
let educationphotoscontainer = document.querySelector(
	".educationphotoscontainer"
);
let alltypesofcollection = document.querySelector(".alltypesofcollection");
let bigimgbox = document.querySelector("#bigimgbox");
let navBox = document.querySelector(".navBox");
let navigationBtn = document.querySelector(".navigationBtn");
let navBoxLinkBtns = document.querySelectorAll(".navBoxLinkBtns");

let tags = [];
let hide = false;

for (let i = 0; i < list.length; i++) {
	for (let j = 0; j < list[i].tags.length; j++) {
		tags.push(list[i].tags[j]);
	}
}
tags = [...new Set(tags)];

searchField.addEventListener("keyup", (e) => {
	if (searchField.value != "") {
		if (e.keyCode == 13) {
			log("enter pressed");
			searchsuggest.innerHTML = "";
			searchsuggest.style.display = "none";
			searchField.blur();
		} else {
			searchsuggest.style.display = "block";
			mainbox.classList.add("hidden");
			searchresultshower.classList.remove("hidden");
			searchresultshower.classList.add("flex");
			filter = searchField.value.toUpperCase();
			searchsuggestpos();
			checkthefield();
			searchengine(filter);
		}
	} else {
		searchsuggest.style.display = "none";
		mainbox.classList.remove("hidden");
		searchresultshower.classList.remove("flex");
		searchresultshower.classList.add("hidden");
	}
});

navBoxLinkBtns.forEach((elem, ind) => {
	elem.addEventListener("click", () => {
		hideNavBox();
	});
});
searchField.addEventListener("focus", () => {
	hideNavBox();
});

navigationBtn.addEventListener("click", () => {
	hideOrShowNavBox();
});

mainbox.addEventListener("click", () => {
	hideNavBox();
});
function hideNavBox() {
	hide = true;
	navBox.style.opacity = "0";
	setTimeout(() => {
		navBox.style.display = "none";
		navBox.style.transform = "translateY(-10px)";
	}, []);
	navBox.style.transform = "translateY(10px)";
}
function hideOrShowNavBox() {
	navPos();
	if (hide == true) {
		hide = false;
		navBox.style.display = "block";
		setTimeout(() => {
			navBox.style.transform = "translateY(0px)";
			navBox.style.opacity = "1";
		}, []);
	} else {
		hide = true;
		navBox.style.opacity = "0";
		setTimeout(() => {
			navBox.style.display = "none";
			navBox.style.transform = "translateY(-10px)";
		}, []);
		navBox.style.transform = "translateY(10px)";
	}
}

navigationBtn.addEventListener("click", () => {
	navPos();
});
function navPos() {
	let x =
		navigationBtn.getBoundingClientRect().x +
		navigationBtn.getBoundingClientRect().width -
		200;
	let y =
		navigationBtn.getBoundingClientRect().y +
		navigationBtn.getBoundingClientRect().height +
		20;
	navBox.style.top = y + "px";
	navBox.style.left = x + "px";
}

function searchengine(filter) {
	let sugcount = 0;
	let arr = [];
	searchresultshower.innerHTML = "";
	searchsuggest.innerHTML = "";
	searchresultshower.innerHTML = `<div style="padding-bottom: 30px" class='w-full'>
										<div>Results of your search '<span class="font-extrabold">${searchField.value}</span>'</div>
									<div>`;
	for (let i = 0; i < tags.length; i++) {
		a = tags[i];
		txtValue = a;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			if (sugcount < 10) {
				searchsuggest.innerHTML += `<div class="relative suggestions h-[30px] w-full flex text-sm items-center px-3 hover:bg-gray-100 duration-300 cursor-pointer">${a}</div>`;
			}
			sugcount++;
			for (let i = 0; i < list.length; i++) {
				for (let j = 0; j < list[i].tags.length; j++) {
					if (list[i].tags[j] == a) {
						let alreadyIn = false;
						for (let k = 0; k < arr.length; k++) {
							if (list[i] == arr[k]) {
								log("already printed");
								alreadyIn = true;
								break;
							}
						}
						if (!alreadyIn) {
							arr.push(list[i]);
							searchresultshower.innerHTML += `
								<div class="relative h-auto w-auto">
									<div
										class="relative xl:h-[250px] lg:h-[250px] md:h-[220px] sm:h-[180px] h-[100px] xl:w-[300px] lg:w-[300px] md:w-[270px] sm:w-[230px] w-[120px] text-white rounded imgsboxes cursor-pointer group overflow-hidden"
										style="
											background: url(${list[i].url});
											background-size: cover;
											background-position: center;
											background-repeat: no-repeat;
										"
									>
										<div
											class="absolute left-0 top-0 h-full w-full text-sm flex items-end gap-2 px-3 py-3"
										>
											<div
												class="absolute top-0 left-0 h-full w-full overflow-hidden bg-purple-500 opacity-0 group-hover:opacity-20 duration-200"
											></div>
											<div class="relative h-auto w-auto">
												<div
													class="relative h-auto w-auto text-sm font-extrabold text-white"
												>
													${list[i].title}
												</div>
											</div>
										</div>
									</div>
								</div>`;
							break;
						}
						// the result
					}
				}
			}
		}
	}
	if (searchresultshower.innerHTML != "") {
		let suggestions = document.querySelectorAll(".suggestions");
		suggestions.forEach((elem, ind) => {
			elem.addEventListener("click", () => {
				searchField.value = elem.innerHTML;
				searchsuggest.style.display = "none";
				searchengine(searchField.value.toUpperCase());
			});
		});
	} else {
		searchresultshower.innerHTML = "no result found!";
	}
}

function searchsuggestpos() {
	let x = searchField.getBoundingClientRect().x;
	let y =
		searchField.getBoundingClientRect().y +
		searchField.getBoundingClientRect().height;

	searchsuggest.style.top = `${y}px`;
	searchsuggest.style.left = `${x}px`;
}

function checkthefield() {
	if (searchField.value != "") {
		searchsuggest.style.display = "block";
	} else {
		searchsuggest.style.display = "none";
	}
}

window.onload = () => {
	checkheaderlink();
	checkthefield();
	searchsuggestpos();
	putimgonbigbox();
};
window.onresize = () => {
	searchsuggestpos();
};

function putimgonbigbox() {
	bigimgbox.src = `${list[Math.floor(Math.random() * list.length)].url}`;
}

education();
function education() {
	educationphotoscontainer.innerHTML = "";
	for (let i = 0; i < list.length; i++) {
		for (let j = 0; j < list[i].tags.length; j++) {
			if (list[i].tags[j] == "education") {
				educationphotoscontainer.innerHTML += `
					<div class="relative h-auto w-auto imgsboxes">
						<div
							class="relative xl:h-[250px] lg:h-[250px] md:h-[220px] sm:h-[180px] h-[180px] xl:w-[300px] lg:w-[300px] md:w-[270px] sm:w-[230px] w-[200px] text-white rounded cursor-pointer group overflow-hidden"
							style="
								background: url(${list[i].url});
								background-size: cover;
								background-position: center;
								background-repeat: no-repeat;
							"
						>
							<div
								class="absolute left-0 top-0 h-full w-full text-sm flex items-end gap-2 px-3 py-3"
							>
								<div
									class="absolute top-0 left-0 h-full w-full overflow-hidden bg-purple-500 opacity-0 group-hover:opacity-20 duration-200"
								></div>
								<div class="relative h-auto w-auto">
									<div
										class="relative h-auto w-auto text-sm font-extrabold text-white"
									>
										${list[i].title}
									</div>
								</div>
							</div>
						</div>
					</div>
				`;
			}
		}
	}
	if (educationphotoscontainer != "") {
		let imgsboxes = document.querySelectorAll(".imgsboxes");
		imgsboxes.forEach((elem, ind) => {
			elem.addEventListener("click", () => {
				log(ind);
			});
		});
	}
}

collections();
function collections() {
	alltypesofcollection.innerHTML = "";
	let numArr = [];
	for (let i = 0; i < 100; i++) {
		if (numArr.length >= 10) {
			break;
		} else {
			numArr.push(Math.floor(Math.random() * list.length));
			numArr = [...new Set(numArr)];
		}
	}
	for (let i = 0; i < numArr.length; i++) {
		alltypesofcollection.innerHTML += `
			<div class="relative h-auto w-auto">
				<div
					class="relative xl:h-[250px] lg:h-[250px] md:h-[220px] sm:h-[180px] h-[180px] xl:w-[300px] lg:w-[300px] md:w-[270px] sm:w-[230px] w-[200px] text-white rounded imgsboxes cursor-pointer group overflow-hidden"
					style="
						background: url(${list[numArr[i]].url});
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
					"
				>
					<div
						class="absolute left-0 top-0 h-full w-full text-sm flex items-end gap-2 px-3 py-3"
					>
						<div
							class="absolute top-0 left-0 h-full w-full overflow-hidden bg-purple-500 opacity-0 group-hover:opacity-20 duration-200"
						></div>
						<div class="relative h-auto w-auto">
							<div
								class="relative h-auto w-auto text-sm font-extrabold text-white"
							>
								${list[numArr[i]].title}
							</div>
						</div>
					</div>
				</div>
			</div>
		`;
	}
}
function checkheaderlink() {
	let text = "";
	let ins = false;
	let linkData = [];
	if (window.location.href.includes("?")) {
		for (let i = 0; i < window.location.href.length; i++) {
			if (ins) {
				text += window.location.href[i];
			}
			if (window.location.href[i] == "?") {
				ins = true;
			}
		}
		log(getUrlVars());
	}
}
function getUrlVars() {
	var vars = [],
		hash;
	var hashes = window.location.href
		.slice(window.location.href.indexOf("?") + 1)
		.split("&");
	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split("=");
		vars[hash[0]] = hash[1];
	}
	return vars;
}
