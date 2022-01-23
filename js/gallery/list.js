let list = [
	{
		title: "library",
		url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=628&q=80",
		tags: ["education", "books", "library"],
	},
	{
		title: "labrary",
		url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
		tags: ["education", "books", "library"],
	},
	{
		title: "library",
		url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80",
		tags: ["education", "books", "library"],
	},
	{
		title: "friends",
		url: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		tags: ["partners", "friends"],
	},
	{
		title: "team",
		url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
		tags: ["partners", "friends", "team", "visiting", "keepholding"],
	},
	{
		title: "school",
		url: "https://scontent.fbir2-1.fna.fbcdn.net/v/t1.6435-9/58610205_2712894098782518_5206584403907575808_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Upb-K3VUHHIAX9qYkyt&_nc_ht=scontent.fbir2-1.fna&oh=00_AT8tskfLA2Dlz9P_4XvHuhjsPaoPbe_p0zu5iqQFJz-y7Q&oe=62136300",
		tags: ["yellow-school", "school"],
	},
	{
		title: "school",
		url: "https://scontent.fbir2-1.fna.fbcdn.net/v/t1.6435-9/58543956_2712888872116374_8869067042007810048_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=eFVc0YOBfoMAX-IUk4k&_nc_ht=scontent.fbir2-1.fna&oh=00_AT9am7wOrJ0-iuOnJJPPUDfAZDcYMh_nNfMX36S3nR3lZA&oe=621297A8",
		tags: ["yellow-school", "school"],
	},
	{
		title: "old-school",
		url: "https://scontent.fbir2-1.fna.fbcdn.net/v/t1.6435-9/31938245_1988128834592385_6376482599975518208_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=xPeC7MggPs0AX-QZHB6&tn=sLxi3lPM6wVCI9ZF&_nc_ht=scontent.fbir2-1.fna&oh=00_AT9CbDy0WQAdM8j_leA3W7nZidOJmnvNi8cB7n6REXpSsQ&oe=6210A370",
		tags: ["old-school", "school"],
	},
	{
		title: "clap",
		url: "https://scontent.fbir2-1.fna.fbcdn.net/v/t1.6435-9/58721824_2712959772109284_6202170265640632320_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=grOrwz8r3HYAX-4wpJA&_nc_ht=scontent.fbir2-1.fna&oh=00_AT_a4e76fVwoSGGX1xc63ui28DTC2Lelnym9uunTd1JGBg&oe=62136A5E",
		tags: ["kids", "students", "school"],
	},
	{
		title: "nursery",
		url: "https://scontent.fbir2-1.fna.fbcdn.net/v/t1.6435-9/59380548_2712924778779450_7665765051327840256_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=LaR9IR_5Q-EAX_m-Lcr&_nc_ht=scontent.fbir2-1.fna&oh=00_AT9Dty30ncl2Cmls9EIu0h77i8YZBadpy7mR2hI-Q3MD5g&oe=6211FC46",
		tags: ["nursery", "friends", "kids"],
	},
	{
		title: "kids",
		url: "https://scontent.fbir2-1.fna.fbcdn.net/v/t1.6435-9/58580553_2712924542112807_1967235698926813184_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=CYOkf98VogsAX9bMCGd&tn=sLxi3lPM6wVCI9ZF&_nc_ht=scontent.fbir2-1.fna&oh=00_AT9_MgLp1L7DV1rhe5OgK7mW7MGeORKkH21M-aEOOy_DRg&oe=62128940",
		tags: ["students", "nursery", "class"],
	},
	{
		title: "cute-kid",
		url: "https://scontent.fbir2-1.fna.fbcdn.net/v/t1.6435-9/59039503_2712923805446214_2843097088131072000_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=0UvGoXLj-SEAX9BX9rY&_nc_ht=scontent.fbir2-1.fna&oh=00_AT_guLzVrvYTra9eqfsS62IazcapqPxDzudhSqHL4UpwRA&oe=620FC8C8",
		tags: ["study", "class", "kid"],
	},
	{
		title: "school-students",
		url: "https://scontent.fbir2-1.fna.fbcdn.net/v/t1.6435-9/59358934_2712911898780738_7677158757750538240_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=DIU3bwZpi6MAX_MH4Jz&_nc_ht=scontent.fbir2-1.fna&oh=00_AT9WJ_DcgWARTd7x-u5WZVA7PVBwZhXlAOOKIyAIGYTdfw&oe=620FBF6D",
		tags: ["students", "assembly", "quee"],
	},
	{
		title: "morning-prayer",
		url: "https://scontent.fbir2-1.fna.fbcdn.net/v/t1.6435-9/59295445_2712911772114084_1715854024755904512_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=DsDldakT6rwAX_FlyEi&_nc_ht=scontent.fbir2-1.fna&oh=00_AT_sXceys21FHRchfKAwwn1gcBvll5TCGvfncN_h79-Xpg&oe=6211EFBC",
		tags: ["school", "students"],
	},
	{
		title: "national-song",
		url: "https://scontent.fbir2-1.fna.fbcdn.net/v/t1.6435-9/59431518_2712911715447423_2623938161285267456_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=KeFhwAWYZQEAX-S9kjT&_nc_ht=scontent.fbir2-1.fna&oh=00_AT8DWYnRFarymj-sm50digZ-a5aEUgfMZ5z-KuTt4yD76w&oe=62133085",
		tags: ["students", "school", "national-song"],
	},
	{
		title: "team",
		url: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		tags: ["friends", "team"],
	},
	{
		title: "students",
		url: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
		tags: ["classmates", "friends", "team", "students"],
	},
	{
		title: "fun",
		url: "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
		tags: ["fun", "friends", "team"],
	},
	{
		title: "childhood",
		url: "https://images.unsplash.com/photo-1489942986787-cded4ecf962e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
		tags: ["childhood", "fun", "childhood-friend", "friends", "team"],
	},
	{
		title: "graduate",
		url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		tags: ["graduate", "friends"],
	},
	{
		title: "learners",
		url: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		tags: ["study", "friends"],
	},
	{
		title: "friends",
		url: "https://images.unsplash.com/photo-1522098543979-ffc7f79a56c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
		tags: ["friends", "fun", "team", "deal", "beach", "sunset"],
	},
	{
		title: "team",
		url: "https://images.unsplash.com/photo-1583377585350-58a76bfbdb27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
		tags: ["friends", "team", "beach", "sunset"],
	},
	{
		title: "bestfriends",
		url: "https://images.unsplash.com/photo-1516149893016-813d9a01d5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
		tags: ["friends", "sunset", "bestfriends"],
	},
	{
		title: "class",
		url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
		tags: ["desk-bench", "school", "class"],
	},
	{
		title: "dark-class",
		url: "https://images.unsplash.com/photo-1549980384-d61217e50c4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
		tags: ["class", "desk-bench", "dark-room"],
	},
	{
		title: "team",
		url: "https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png",
		tags: ["group", "friends", "team"],
	},
	{
		title: "our-school",
		url: "https://scontent.fbir2-1.fna.fbcdn.net/v/t1.6435-9/59431817_2712890648782863_1028444032289734656_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=BbVP6_y16AYAX-HhzKG&tn=JrOkN7D8asGqCNKw&_nc_ht=scontent.fbir2-1.fna&oh=00_AT-OyV_huO6O8vfoS0HfHdK72n4u5X4DGE8GeBjB3uf50A&oe=6211D43E",
		tags: ["school", "yellow-wall"],
	},
	{
		title: "stdents",
		url: "https://scontent.fbir2-1.fna.fbcdn.net/v/t1.6435-9/p180x540/59286233_2718443824894212_7371164710395183104_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=0qdUN2BDoJMAX94WG-X&_nc_ht=scontent.fbir2-1.fna&oh=00_AT8P6M9a-F-k10gaeikbxSOC8wyOLVlJ-VAHtaRC692HGw&oe=620F57E2",
		tags: ["blue-dress", "morning-prayer", "school", "students"],
	},
	{
		title: "teachers",
		url: "https://scontent.fbir2-1.fna.fbcdn.net/v/t1.6435-9/59120997_2713033888768539_4729213512105066496_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=7jOQAW0MJpsAX9Qx8Ud&_nc_ht=scontent.fbir2-1.fna&oh=00_AT-TJryUG9LhMcn3IWKsABbS1YUZdc6ntMjqraZ-h4RVVQ&oe=620F0188",
		tags: ["teachers"],
	},
	{
		title: "teacher",
		url: "https://scontent.fbir2-1.fna.fbcdn.net/v/t1.6435-9/58570946_2713033842101877_1245263335830585344_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=Q91ypP9aQjcAX_fROzN&_nc_ht=scontent.fbir2-1.fna&oh=00_AT-VGlUfVyEjaaCLMz_zJ7KoUkODb2Dbfod3_Nwk6a8Yag&oe=6210C8D8",
		tags: ["teacher"],
	},
	{
		title: "group-image",
		url: "https://scontent.fbir2-1.fna.fbcdn.net/v/t1.6435-9/57484986_2713033412101920_7606191565714751488_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=wNj8MKzAoI8AX-MdF5j&_nc_ht=scontent.fbir2-1.fna&oh=00_AT-A7H6bbpWT0JngdATw5QWbPk-KXlOA2L1BdPxX3SDVJA&oe=620F4C90",
		tags: ["all-teachers", "teachers", "group-image", "team"],
	},
	{
		title: "mmorning-prayer",
		url: "https://scontent.fbir2-1.fna.fbcdn.net/v/t1.6435-9/58939827_2712959832109278_2358118284533956608_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=Zfy2tHluVq0AX-v5viV&_nc_ht=scontent.fbir2-1.fna&oh=00_AT-RMcZWQthvbfsFPy1NkIYBcnqVD8-MKxE2HjH5JDE2FQ&oe=6210FF50",
		tags: ["hands-up", "students", "morning-prayer", "track-dress"],
	},
	{
		title: "assembly",
		url: "https://scontent.fbir2-1.fna.fbcdn.net/v/t1.6435-9/58724773_2712896395448955_5664940637972070400_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=luzgvjSniogAX9bfvZ7&_nc_ht=scontent.fbir2-1.fna&oh=00_AT8SuC2R4LNDBO9tTL5HpeMFC8azQAAuhntWiKos-Y15LA&oe=6212AF04",
		tags: ["assembly", "students"],
	},
];
