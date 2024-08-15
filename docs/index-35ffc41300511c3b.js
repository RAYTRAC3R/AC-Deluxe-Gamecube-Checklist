window.__noodl_modules = [];
window.Noodl = {
    defineModule:function(m) {
        window.__noodl_modules.push(m);
    },
    deployed: true,
    Env: {}
}

window.projectData = {"settings":{"baseUrl":"https://acgc.sterner.digital","sitemap.enabled":true},"components":[{"name":"/App","nodes":[{"id":"246f9453-a119-ac78-171e-3806cf596ecc","type":"Group","parameters":{"styleCss":"overflow: auto;\r\nheight: 100%;"},"ports":[],"children":[{"id":"16773a13-3529-e352-0c1e-c6a0b9a5aeb0","type":"module.inlineHtml","parameters":{"html":"<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Redirect Example</title>\r\n    <script type=\"text/javascript\">\r\n        function redirectAndroidUsers() {\r\n            var userAgent = navigator.userAgent || navigator.vendor || window.opera;\r\n            if (/android/i.test(userAgent)) {\r\n                window.location.href = \"https://play.google.com/store/apps/details?id=digital.sterner.checklist\";\r\n            }\r\n        }\r\n        redirectAndroidUsers();\r\n    </script>\r\n</head>"},"ports":[],"children":[]},{"id":"777fbd5e-cbc3-2ec8-098a-c4c379618f0e","type":"noodl.googleAnalyticsModule.analyticsLoader","parameters":{"allowTracking":true,"measurementId":"G-VXNZSKW0TN"},"ports":[],"children":[]},{"id":"1657787a-055d-fdfd-ac25-856511a03e08","type":"Group","parameters":{"height":{"value":95,"unit":"%","isFixed":true},"alignItems":"center","alignX":"center","maxWidth":{"value":500,"unit":"px"},"minWidth":{"value":50,"unit":"px"},"alignY":"center","scrollEnabled":true},"ports":[],"children":[{"id":"e5b2e6b4-37e4-2ff8-29d8-e5f2a35ae2eb","type":"Router","parameters":{"pages":{"routes":["/Nav Pages/Home","/Nav Pages/Collections","/Nav Pages/museum","/Nav Pages/ProfilePage","/Nav Pages/About","/Collection Pages/Paintings/Paintings","/Collection Pages/Bugs/Bugs","/Collection Pages/Fish/Fish","/Collection Pages/Fossils/Fossils","/Collection Pages/Clothing/Clothing","/Collection Pages/Fruit/Fruit","/Collection Pages/Furniture/Furniture","/Collection Pages/Furniture/Animal Island/Animal Island","/Collection Pages/Furniture/Summer Camper/Summer Camper","/Collection Pages/Furniture/Igloo/Igloo","/Collection Pages/Furniture/Gulliver/Gulliver","/Collection Pages/Furniture/Nook Store/Nook Store","/Collection Pages/Furniture/Redd/Redd","/Collection Pages/Furniture/Tortimer/Tortimer","/Collection Pages/Furniture/Harvest/Harvest","/Collection Pages/Furniture/Halloween/Halloween","/Collection Pages/Furniture/Snowman/Snowman","/Collection Pages/Furniture/Toy Day/Toy Day","/Collection Pages/Furniture/Miscellaneous/Miscellaneous","/Collection Pages/Furniture/Raffle/Raffle","/Collection Pages/Furniture/Secret Codes/Secret Codes","/Collection Pages/Gyroids/Gyroids","/Collection Pages/Tools/Tools","/Collection Pages/Songs/Songs","/Collection Pages/Stationery/Stationery","/Collection Pages/Carpet/Carpet","/Collection Pages/Wallpaper/Wallpaper","/Collection Pages/Bugs/Spring Bugs","/Collection Pages/Bugs/Summer Bugs","/Collection Pages/Bugs/Fall Bugs","/Collection Pages/Bugs/Winter Bugs","/Collection Pages/Daily/Daily","/Collection Pages/Daily/Daily Fossil"],"startPage":"/Nav Pages/Home"},"name":"Main","clip":"scroll"},"ports":[],"children":[]}]},{"id":"53fe8914-89aa-c50b-7c3d-17da2eed7713","type":"Group","parameters":{"height":{"value":5,"unit":"%","isFixed":true}},"ports":[],"children":[{"id":"b9e5b7c6-32a3-951f-63f0-54062bbc576c","type":"/Navbar 2.0/navbar2.0","parameters":{},"ports":[],"children":[]}]}]},{"id":"a7b7b653-0669-638d-b963-b79a2161925f","type":"CSS Definition","parameters":{"style":".animated {\r\n  opacity: 0;\r\n  transform: scale(0);\r\n  animation: pop-in 0.75s forwards;\r\n}\r\n\r\n@keyframes pop-in {\r\n  0% {\r\n    opacity: 0;\r\n    transform: scale(0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n  }\r\n}\r\n"},"ports":[],"children":[]},{"id":"69609786-85e8-8d53-1e11-7c97025b7034","type":"CSS Definition","parameters":{"style":".fade {\r\n  opacity: 0;\r\n  background-color: transparent;  /* Start with a transparent background */\r\n  animation: fade-in 0.5s forwards, background-fade-in 0.5s forwards;\r\n}\r\n\r\n@keyframes fade-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes background-fade-in {\r\n  0% {\r\n    background-color: transparent;\r\n  }\r\n  100% {\r\n    background-color: your-desired-color;  /* Replace with your desired background color */\r\n  }\r\n}\r\n"},"ports":[],"children":[]},{"id":"580475c7-3907-388a-3241-363f91e89470","type":"CSS Definition","parameters":{"style":".slideup {\r\n  opacity: 0;\r\n  transform: translateY(100%); /* Start with the element positioned below its normal position */\r\n  animation: slide-up 1s forwards;\r\n  animation-delay: 1500ms; /* Add a delay before the animation starts */\r\n}\r\n\r\n@keyframes slide-up {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(100%); /* Start from below */\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0); /* End at its normal position */\r\n  }\r\n}\r\n"},"ports":[],"children":[]}],"connections":[],"ports":[],"roots":["246f9453-a119-ac78-171e-3806cf596ecc"],"metadata":{"canvasSize":{"width":"1039px","height":"751px"},"canvasPos":{"x":0,"y":0}}},{"name":"/Navbar 2.0/navbar2.0","nodes":[{"id":"f7d94ce6-2249-3e2e-9259-eccfc8c0e5cb","type":"Group","parameters":{"backgroundColor":"#000000","flexDirection":"row","alignX":"center"},"ports":[],"children":[{"id":"1efe95ca-e24c-569c-e5b9-ed9f524a268a","type":"Group","parameters":{"flexDirection":"row","maxWidth":{"value":500,"unit":"px"},"alignX":"center"},"ports":[],"children":[{"id":"d18e8bd1-7713-e260-9354-2022bf8b7724","type":"Image","parameters":{"src":"images/back.png","alignX":"center","sizeMode":"explicit"},"ports":[],"children":[]},{"id":"4c974e43-2210-0d1a-903f-96ded42513a4","type":"Image","parameters":{"src":"images/home.png","alignX":"center","sizeMode":"explicit","marginTop":{"value":0,"unit":"px"},"marginBottom":{"value":0,"unit":"px"}},"ports":[],"children":[]},{"id":"3eb40a3c-5061-d12b-9bda-16f8e26fa54a","type":"Image","parameters":{"src":"images/discord.png","alignX":"center","sizeMode":"explicit","mixBlendMode":"luminosity"},"ports":[],"children":[]}]}]},{"id":"375f361d-2b25-f755-f3c6-5685e2cdf04e","type":"RouterNavigate","parameters":{"router":"Main","target":"/Nav Pages/Home"},"ports":[],"children":[]},{"id":"f3f7bff3-7864-0ab4-e173-1622540cb733","type":"JavaScriptFunction","parameters":{"functionScript":"// Listen for the 'OnClick' signal\nif (Inputs.OnClick) {\n    // Check if the previous page URL includes \"splash\"\n    if (document.referrer.includes(\"splash\")) {\n        // If it does, force navigation to the home page\n        window.location.replace('/#/home');\n    } else {\n        // Otherwise, navigate back one page\n        window.history.back();\n    }\n\n    // Signal that the operation was successful\n    Outputs.Success();\n} else {\n    // If 'OnClick' signal is not received, signal a failure\n    Outputs.Failure();\n}\n"},"ports":[{"name":"in-OnClick","displayName":"OnClick","plug":"input","type":"*","group":"Inputs","index":4},{"name":"out-Success","displayName":"Success","plug":"output","type":"signal","group":"Outputs","index":5},{"name":"out-Failure","displayName":"Failure","plug":"output","type":"signal","group":"Outputs","index":6}],"children":[]},{"id":"671f4fb2-0b46-7191-a648-a44dc07c3559","type":"JavaScriptFunction","parameters":{"functionScript":"// Define the audio file path\nconst audioFilePath = Inputs.AudioFilePath || '/audio/press.mp3';\n\n// Create a new Audio object\nconst audio = new Audio(audioFilePath);\n\n// Play the audio file when the script runs\naudio.play().then(() => {\n    Outputs.Success();\n}).catch((error) => {\n    console.error(\"Error playing audio:\", error);\n    Outputs.Failure();\n});\n"},"ports":[{"name":"in-AudioFilePath","displayName":"AudioFilePath","plug":"input","type":"*","group":"Inputs","index":4},{"name":"out-Success","displayName":"Success","plug":"output","type":"signal","group":"Outputs","index":5},{"name":"out-Failure","displayName":"Failure","plug":"output","type":"signal","group":"Outputs","index":6}],"children":[]},{"id":"70e221bb-74a9-2d27-7ed1-2fdb2993ee7d","type":"net.noodl.externallink","parameters":{"link":"https://discord.sterner.digital"},"ports":[],"children":[]}],"connections":[{"sourceId":"4c974e43-2210-0d1a-903f-96ded42513a4","sourcePort":"onClick","targetId":"375f361d-2b25-f755-f3c6-5685e2cdf04e","targetPort":"navigate"},{"sourceId":"d18e8bd1-7713-e260-9354-2022bf8b7724","sourcePort":"onClick","targetId":"f3f7bff3-7864-0ab4-e173-1622540cb733","targetPort":"in-OnClick"},{"sourceId":"3eb40a3c-5061-d12b-9bda-16f8e26fa54a","sourcePort":"onClick","targetId":"70e221bb-74a9-2d27-7ed1-2fdb2993ee7d","targetPort":"do"},{"sourceId":"3eb40a3c-5061-d12b-9bda-16f8e26fa54a","sourcePort":"onClick","targetId":"671f4fb2-0b46-7191-a648-a44dc07c3559","targetPort":"run"},{"sourceId":"d18e8bd1-7713-e260-9354-2022bf8b7724","sourcePort":"onClick","targetId":"671f4fb2-0b46-7191-a648-a44dc07c3559","targetPort":"run"},{"sourceId":"4c974e43-2210-0d1a-903f-96ded42513a4","sourcePort":"onClick","targetId":"671f4fb2-0b46-7191-a648-a44dc07c3559","targetPort":"run"}],"ports":[],"roots":["f7d94ce6-2249-3e2e-9259-eccfc8c0e5cb"]}],"componentIndex":{"b1-879cda3c8c71d452":{"components":["/Nav Pages/Home"],"dependencies":[]},"b2-c715369224723c62":{"components":["/Nav Pages/Collections","/Nav Pages/Collection Progress"],"dependencies":[]},"b3-2fdf54fc41b14d47":{"components":["/Nav Pages/museum"],"dependencies":[]},"b4-fe2a13208ad82df2":{"components":["/Nav Pages/ProfilePage","/Nav Pages/Profile"],"dependencies":[]},"b5-c73889868aba8c84":{"components":["/Nav Pages/About","/Nav Pages/about-splash","/Nav Pages/Aboot"],"dependencies":[]},"b6-0a15fe860a3e4009":{"components":["/Collection Pages/Paintings/Paintings","/Collection Pages/Paintings/Paintings Logic"],"dependencies":["b7-fd9e168bfc4b8f94"]},"b7-fd9e168bfc4b8f94":{"components":["/Collection Pages/Paintings/paintings-splash"],"dependencies":[]},"b8-b6533a6e4cafd518":{"components":["/Collection Pages/Bugs/Bugs","/Collection Pages/Bugs/bug-splash"],"dependencies":["b9-e91f1001e25cf2f3"]},"b9-e91f1001e25cf2f3":{"components":["/Collection Pages/Bugs/Bugs Logic"],"dependencies":[]},"b10-0ac0608e2f898023":{"components":["/Collection Pages/Fish/Fish","/Collection Pages/Fish/fish-splash","/Collection Pages/Fish/Fish Logic"],"dependencies":[]},"b11-017a30ea68a0db55":{"components":["/Collection Pages/Fossils/Fossils","/Collection Pages/Fossils/fossil-splash","/Collection Pages/Fossils/Fossil Logic"],"dependencies":[]},"b12-f59543b216a90640":{"components":["/Collection Pages/Clothing/Clothing","/Collection Pages/Clothing/Clothing Logic"],"dependencies":[]},"b13-f8564a5bdac3a929":{"components":["/Collection Pages/Fruit/Fruit","/Collection Pages/Fruit/Fruit Logic"],"dependencies":[]},"b14-ef7cf6992e3180a9":{"components":["/Collection Pages/Furniture/Furniture","/Collection Pages/Furniture/furniture-splash"],"dependencies":[]},"b15-73015252d48dffc5":{"components":["/Collection Pages/Furniture/Animal Island/Animal Island","/Collection Pages/Furniture/Animal Island/Animal Island Logic"],"dependencies":[]},"b16-d290c7c5e6dd5c08":{"components":["/Collection Pages/Furniture/Summer Camper/Summer Camper","/Collection Pages/Furniture/Summer Camper/Summer Camper Logic"],"dependencies":[]},"b17-afa2b9e6911c00fc":{"components":["/Collection Pages/Furniture/Igloo/Igloo","/Collection Pages/Furniture/Igloo/Igloo Logic"],"dependencies":[]},"b18-fd8d34340b2c7db8":{"components":["/Collection Pages/Furniture/Gulliver/Gulliver","/Collection Pages/Furniture/Gulliver/Gulliver Logic"],"dependencies":[]},"b19-da6959c80bacf163":{"components":["/Collection Pages/Furniture/Nook Store/Nook Store","/Collection Pages/Furniture/Nook Store/Nook Store Logic"],"dependencies":[]},"b20-978560f3a0c28514":{"components":["/Collection Pages/Furniture/Redd/Redd","/Collection Pages/Furniture/Redd/Redd Logic","/Collection Pages/Furniture/Redd/Redd Logic Painting"],"dependencies":[]},"b21-70f0e2bc593018f6":{"components":["/Collection Pages/Furniture/Tortimer/Tortimer","/Collection Pages/Furniture/Tortimer/Tortimer Logic"],"dependencies":[]},"b22-0012898d48cfe5fe":{"components":["/Collection Pages/Furniture/Harvest/Harvest","/Collection Pages/Furniture/Harvest/Harvest Logic"],"dependencies":[]},"b23-877160b628f891b1":{"components":["/Collection Pages/Furniture/Halloween/Halloween","/Collection Pages/Furniture/Halloween/Halloween Logic"],"dependencies":[]},"b24-f82b627101f8ca45":{"components":["/Collection Pages/Furniture/Snowman/Snowman","/Collection Pages/Furniture/Snowman/Snowman Logic"],"dependencies":[]},"b25-ba0f09396b58c3cb":{"components":["/Collection Pages/Furniture/Toy Day/Toy Day","/Collection Pages/Furniture/Toy Day/Toy Day Logic"],"dependencies":[]},"b26-40a7e306b538edb6":{"components":["/Collection Pages/Furniture/Miscellaneous/Miscellaneous","/Collection Pages/Furniture/Miscellaneous/Miscellaneous Logic"],"dependencies":[]},"b27-d6efbcc8568496a0":{"components":["/Collection Pages/Furniture/Raffle/Raffle","/Collection Pages/Furniture/Raffle/Raffle Logic"],"dependencies":[]},"b28-fa8c232ebd0f2987":{"components":["/Collection Pages/Furniture/Secret Codes/Secret Codes","/Collection Pages/Furniture/Secret Codes/Secret Codes Logic"],"dependencies":[]},"b29-1f96c9963469afd1":{"components":["/Collection Pages/Gyroids/Gyroids","/Collection Pages/Gyroids/Gyroids Logic"],"dependencies":[]},"b30-f43716a24efa165a":{"components":["/Collection Pages/Tools/Tools","/Collection Pages/Tools/tools-splash","/Collection Pages/Tools/Tools Logic"],"dependencies":[]},"b31-de9213440acf4370":{"components":["/Collection Pages/Songs/Songs","/Collection Pages/Songs/Songs Logic"],"dependencies":[]},"b32-86d3e1b13c418a8b":{"components":["/Collection Pages/Stationery/Stationery","/Collection Pages/Stationery/Stationery Logic"],"dependencies":[]},"b33-cec35b654f6b9164":{"components":["/Collection Pages/Carpet/Carpet","/Collection Pages/Carpet/Carpet Logic"],"dependencies":[]},"b34-b591f25490bd5777":{"components":["/Collection Pages/Wallpaper/Wallpaper","/Collection Pages/Wallpaper/Wallpaper Logic"],"dependencies":[]},"b35-c1071ccf87b2812d":{"components":["/Collection Pages/Bugs/Spring Bugs"],"dependencies":["b9-e91f1001e25cf2f3"]},"b36-7c8228ec9770f3a8":{"components":["/Collection Pages/Bugs/Summer Bugs"],"dependencies":["b9-e91f1001e25cf2f3"]},"b37-8432fb052bf81bf6":{"components":["/Collection Pages/Bugs/Fall Bugs"],"dependencies":["b9-e91f1001e25cf2f3"]},"b38-a2bfa1d0dc358ac9":{"components":["/Collection Pages/Bugs/Winter Bugs"],"dependencies":["b9-e91f1001e25cf2f3"]},"b39-f100d17be199e876":{"components":["/Collection Pages/Daily/Daily","/Collection Pages/Daily/daily-splash","/Collection Pages/Daily/Daily Tasks","/Collection Pages/Daily/Daily Fossil","/Collection Pages/Daily/Daily Villagers","/Multi Choice With Pills","/Multi Choice With Pills/Option","/Collection Pages/Daily/Daily Misc","/Collection Pages/Daily/Daily Misc Logic"],"dependencies":["b7-fd9e168bfc4b8f94","b40-1547862cb2964fc6"]},"b40-1547862cb2964fc6":{"components":["/Collection Pages/Daily/Daily Fossil Logic"],"dependencies":[]},"b41-d3aed4105db8e081":{"components":["/Collection Pages/Daily/Daily Fossil"],"dependencies":["b7-fd9e168bfc4b8f94","b40-1547862cb2964fc6"]},"b42-78faea8931fff790":{"components":["/#Avatar Components/[Logic] Name Abbreviation","/#Avatar Components/Avatar Group","/#Avatar Components/Avatar Group Item","/#Avatar Components/Sample","/Collection Pages/Bugs/Bugs Logic/Options","/Collection Pages/Carpet/Carpet Logic/Options","/Collection Pages/Clothing/Clothing Logic/Options","/Collection Pages/Daily/Daily Fossil Logic/Options","/Collection Pages/Daily/Daily Misc Logic/Options","/Collection Pages/Fish/Fish Logic/Options","/Collection Pages/Fossils/Fossil Logic/Options","/Collection Pages/Fruit/Fruit Logic/Options","/Collection Pages/Furniture/Animal Island/Animal Island Logic/Options","/Collection Pages/Furniture/Gulliver/Gulliver Logic/Options","/Collection Pages/Furniture/Halloween/Halloween Logic/Options","/Collection Pages/Furniture/Harvest/Harvest Logic/Options","/Collection Pages/Furniture/Igloo/Igloo Logic/Options","/Collection Pages/Furniture/Miscellaneous/Miscellaneous Logic/Options","/Collection Pages/Furniture/Nook Store/Nook Store Logic/Options","/Collection Pages/Furniture/Raffle/Raffle Logic/Options","/Collection Pages/Furniture/Redd/Redd Logic Painting/Options","/Collection Pages/Furniture/Redd/Redd Logic/Options","/Collection Pages/Furniture/Secret Codes/Secret Codes Logic/Options","/Collection Pages/Furniture/Snowman/Snowman Logic/Options","/Collection Pages/Furniture/Summer Camper/Summer Camper Logic/Options","/Collection Pages/Furniture/Tortimer/Tortimer Logic/Options","/Collection Pages/Furniture/Toy Day/Toy Day Logic/Options","/Collection Pages/Gyroids/Gyroids Logic/Options","/Collection Pages/Paintings/Paintings Logic/Options","/Collection Pages/Songs/Songs Logic/Options","/Collection Pages/Stationery/Stationery Logic/Options","/Collection Pages/Tools/Tools Logic/Options","/Collection Pages/Wallpaper/Wallpaper Logic/Options","/Multi Choice With Pills/Pill","/Nav Pages/Furniture Logic","/navbar"],"dependencies":[]}},"routerIndex":{"routers":[{"pages":{"routes":["/Nav Pages/Home","/Nav Pages/Collections","/Nav Pages/museum","/Nav Pages/ProfilePage","/Nav Pages/About","/Collection Pages/Paintings/Paintings","/Collection Pages/Bugs/Bugs","/Collection Pages/Fish/Fish","/Collection Pages/Fossils/Fossils","/Collection Pages/Clothing/Clothing","/Collection Pages/Fruit/Fruit","/Collection Pages/Furniture/Furniture","/Collection Pages/Furniture/Animal Island/Animal Island","/Collection Pages/Furniture/Summer Camper/Summer Camper","/Collection Pages/Furniture/Igloo/Igloo","/Collection Pages/Furniture/Gulliver/Gulliver","/Collection Pages/Furniture/Nook Store/Nook Store","/Collection Pages/Furniture/Redd/Redd","/Collection Pages/Furniture/Tortimer/Tortimer","/Collection Pages/Furniture/Harvest/Harvest","/Collection Pages/Furniture/Halloween/Halloween","/Collection Pages/Furniture/Snowman/Snowman","/Collection Pages/Furniture/Toy Day/Toy Day","/Collection Pages/Furniture/Miscellaneous/Miscellaneous","/Collection Pages/Furniture/Raffle/Raffle","/Collection Pages/Furniture/Secret Codes/Secret Codes","/Collection Pages/Gyroids/Gyroids","/Collection Pages/Tools/Tools","/Collection Pages/Songs/Songs","/Collection Pages/Stationery/Stationery","/Collection Pages/Carpet/Carpet","/Collection Pages/Wallpaper/Wallpaper","/Collection Pages/Bugs/Spring Bugs","/Collection Pages/Bugs/Summer Bugs","/Collection Pages/Bugs/Fall Bugs","/Collection Pages/Bugs/Winter Bugs","/Collection Pages/Daily/Daily","/Collection Pages/Daily/Daily Fossil"],"startPage":"/Nav Pages/Home"},"name":"Main","clip":"scroll"}],"pages":[{"path":"bugs","title":"Bugs","component":"/Collection Pages/Bugs/Bugs"},{"path":"fall-bugs","title":"Fall Bugs","component":"/Collection Pages/Bugs/Fall Bugs"},{"path":"spring-bugs","title":"Spring Bugs","component":"/Collection Pages/Bugs/Spring Bugs"},{"path":"summer-bugs","title":"Summer Bugs","component":"/Collection Pages/Bugs/Summer Bugs"},{"path":"winter-bugs","title":"Winter Bugs","component":"/Collection Pages/Bugs/Winter Bugs"},{"path":"carpet","title":"Carpet","component":"/Collection Pages/Carpet/Carpet"},{"path":"clothing","title":"Clothing","component":"/Collection Pages/Clothing/Clothing"},{"path":"daily","title":"Daily","component":"/Collection Pages/Daily/Daily"},{"path":"daily-fossil","title":"Daily Fossil","component":"/Collection Pages/Daily/Daily Fossil"},{"path":"fish","title":"Fish","component":"/Collection Pages/Fish/Fish"},{"path":"fossils","title":"Fossils","component":"/Collection Pages/Fossils/Fossils"},{"path":"fruit","title":"Fruit","component":"/Collection Pages/Fruit/Fruit"},{"path":"animal-island","title":"Animal Island","component":"/Collection Pages/Furniture/Animal Island/Animal Island"},{"path":"furniture","title":"Furniture","component":"/Collection Pages/Furniture/Furniture"},{"path":"gulliver","title":"Gulliver","component":"/Collection Pages/Furniture/Gulliver/Gulliver"},{"path":"halloween","title":"Halloween","component":"/Collection Pages/Furniture/Halloween/Halloween"},{"path":"harvest","title":"Harvest","component":"/Collection Pages/Furniture/Harvest/Harvest"},{"path":"igloo","title":"Igloo","component":"/Collection Pages/Furniture/Igloo/Igloo"},{"path":"miscellaneous","title":"Miscellaneous","component":"/Collection Pages/Furniture/Miscellaneous/Miscellaneous"},{"path":"nook-store","title":"Nook Store","component":"/Collection Pages/Furniture/Nook Store/Nook Store"},{"path":"raffle","title":"Raffle","component":"/Collection Pages/Furniture/Raffle/Raffle"},{"path":"redd","title":"Redd","component":"/Collection Pages/Furniture/Redd/Redd"},{"path":"secret-codes","title":"Secret Codes","component":"/Collection Pages/Furniture/Secret Codes/Secret Codes"},{"path":"snowman","title":"Snowman","component":"/Collection Pages/Furniture/Snowman/Snowman"},{"path":"summer-camper","title":"Summer Camper","component":"/Collection Pages/Furniture/Summer Camper/Summer Camper"},{"path":"tortimer","title":"Tortimer","component":"/Collection Pages/Furniture/Tortimer/Tortimer"},{"path":"toy-day","title":"Toy Day","component":"/Collection Pages/Furniture/Toy Day/Toy Day"},{"path":"gyroids","title":"Gyroids","component":"/Collection Pages/Gyroids/Gyroids"},{"path":"paintings","title":"Paintings","component":"/Collection Pages/Paintings/Paintings"},{"path":"songs","title":"Songs","component":"/Collection Pages/Songs/Songs"},{"path":"stationery","title":"Stationery","component":"/Collection Pages/Stationery/Stationery"},{"path":"tools","title":"Tools","component":"/Collection Pages/Tools/Tools"},{"path":"wallpaper","title":"Wallpaper","component":"/Collection Pages/Wallpaper/Wallpaper"},{"path":"about","title":"About","component":"/Nav Pages/About"},{"path":"collections","title":"Collections","component":"/Nav Pages/Collections"},{"path":"home","title":"Home","component":"/Nav Pages/Home"},{"path":"museum","title":"museum","component":"/Nav Pages/museum"},{"path":"passport","title":"Passport","component":"/Nav Pages/ProfilePage"}]},"rootComponent":"/App","rootNode":"246f9453-a119-ac78-171e-3806cf596ecc","metadata":{"styles":{"text":{"Display":{"letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none","fontSize":{"value":"40","unit":"px"},"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","color":"#000000"},"Headline":{"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"32","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Title Large":{"fontFamily":"fonts/Roboto/Roboto-Bold.ttf","fontSize":{"value":"24","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120%","unit":"px"},"textTransform":"none"},"Title Medium":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"20","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Title Small":{"fontFamily":"fonts/Roboto/Roboto-Bold.ttf","fontSize":{"value":"16","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Label Large":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"16","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Label Medium":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"14","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Label Small":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"12","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Body Large":{"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"20","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"150","unit":"%"},"textTransform":"none"},"Body Medium":{"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"16","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"150","unit":"%"},"textTransform":"none"},"Body Small":{"letterSpacing":"Auto","lineHeight":{"value":"150","unit":"%"},"textTransform":"none","fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"14","unit":"px"},"color":"#000000"}},"colors":{"Grey - 200":"#F4F4F4","Grey - 500":"#A5A5A5","Grey - 700":"#4C4C4C","Grey - 300":"#E9E9E9","Grey - 900":"#1F1F1F","Primary":"#42A14A","Primary Dark":"#3F22B8","Primary Subtle":"#C9BFFC","Primary Light":"#F7F5FF","White":"#FFFFFF","Black":"#000000","Nook Text":"#74664B","Nook Text Light":"#e0daca","Nookmiles Blue":"#5B7AD7","Nookmiles Blue Text":"#C0E2FD","Nookmiles Green":"#D6E69D","Nookmiles Brown":"#625544","Mailbox Red":"#F51F18","Police Blue":"#2040A0","Garbage Gray":"#2D3741","Fossil Blue":"#474599","Nook Tan":"#F8F5DF","Nook Tan Dark":"#B9A999","Nook Pale Green":"#80BF70","Nook light red":"#D6A7A7","Settings Gray":"#BCBCBC","Settings BG":"#D0D0D0","Nook Orange":"#FFE1AE","Nookmiles BG Light":"#C2F4FF"}}},"variants":[{"typename":"net.noodl.controls.button","parameters":{"height":{"value":40,"unit":"px"},"sizeMode":"contentWidth","backgroundColor":"Primary","iconIconSource":{"class":"material-icons","code":"home"},"iconSpacing":{"value":8,"unit":"px"},"borderRadius":{"value":4,"unit":"px"},"textStyle":"Label Medium","paddingTop":{"value":0,"unit":"px"},"paddingLeft":{"value":24,"unit":"px"},"paddingRight":{"value":24,"unit":"px"},"paddingBottom":{"value":0,"unit":"px"},"color":"#FFFFFF","fontFamily":"fonts/Roboto/Roboto-Medium.ttf","minWidth":{"value":80,"unit":"px"},"useIcon":false,"iconSize":{"value":20,"unit":"px"}},"stateParameters":{"hover":{"backgroundColor":"Primary Dark"},"pressed":{"backgroundColor":"Primary","color":"White"},"disabled":{"backgroundColor":"Grey - 300","color":"Grey - 600"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"pressed":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.radiobutton","parameters":{"width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"},"useLabel":true,"labeltextStyle":"Body Large","borderWidth":{"value":1,"unit":"px"},"value":"0","useIcon":false,"fillColor":"transparent","borderColor":"Grey - 700","labelfontSize":{"value":16,"unit":"px"},"marginBottom":{"value":8,"unit":"px"},"labelcolor":"Grey - 900","labelSpacing":{"value":12,"unit":"px"}},"stateParameters":{"checked":{"fillColor":"Primary","borderColor":"Primary","borderWidth":{"value":1,"unit":"px"},"backgroundColor":"transparent","width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"},"fillSpacing":{"value":2,"unit":"px"}},"hover":{"backgroundColor":"transparent","borderColor":"Grey - 700","width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"}},"disabled":{"borderColor":"Grey - 500","labelcolor":"Grey - 500","fillColor":"transparent"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"checked":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"Text","parameters":{"textStyle":"Body Medium"},"stateParameters":{},"stateTransitions":{}},{"typename":"net.noodl.controls.range","parameters":{"thumbColor":"Primary","thumbBorderRadius":{"value":100,"unit":"%"},"trackHeight":{"value":4,"unit":"px"},"trackActiveColor":"Primary","trackColor":"Primary Subtle","width":{"value":100,"unit":"%"},"trackBorderRadius":{"value":100,"unit":"px"},"thumbHeight":{"value":16,"unit":"px"},"thumbWidth":{"value":16,"unit":"px"}},"stateParameters":{"hover":{"thumbColor":"Primary Dark","trackActiveColor":"Primary Dark"},"disabled":{"trackActiveColor":"Grey - 500","trackColor":"Grey - 300","thumbColor":"Grey - 500"}},"stateTransitions":{}},{"typename":"net.noodl.controls.checkbox","parameters":{"width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"},"useIcon":false,"borderWidth":{"value":1,"unit":"px"},"useLabel":true,"labeltextStyle":"Body Medium","borderRadius":{"value":2,"unit":"px"},"borderColor":"Grey - 700","labelfontSize":{"value":16,"unit":"px"},"labelcolor":"Grey - 900","labelSpacing":{"value":12,"unit":"px"}},"stateParameters":{"checked":{"useIcon":true,"iconIconSource":{"class":"material-icons","code":"check"},"backgroundColor":"Primary","borderColor":"Primary","iconSize":{"value":16,"unit":"px"}},"disabled":{"opacity":0.5},"hover":{"borderColor":"Grey - 700"},"pressed":{}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":300,"delay":0},"checked":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.textinput","parameters":{"useLabel":true,"sizeMode":"explicit","height":{"value":40,"unit":"px"},"textStyle":"Body Medium","borderStyle":"solid","borderRadius":{"value":4,"unit":"px"},"borderWidth":{"value":1,"unit":"px"},"borderColor":"Grey - 700","labeltextStyle":"Label Small","paddingLeft":{"value":12,"unit":"px"},"paddingRight":{"value":8,"unit":"px"},"labelSpacing":{"value":4,"unit":"px"},"placeholder":"Type here","color":"Grey - 900","placeHolderOpacity":0.65,"enabled":true,"blockTouch":false,"useIcon":false,"iconIconSource":{"class":"material-icons","code":"home"},"iconSize":{"value":20,"unit":"px"},"iconSpacing":{"value":4,"unit":"px"},"iconColor":"Grey - 700","labelcolor":"Grey - 700"},"stateParameters":{"hover":{"labelcolor":"Grey - 700","borderColor":"Grey - 700","borderStyle":"solid","color":"Grey - 900"},"focused":{"borderColor":"Primary","labelcolor":"Primary","borderWidth":{"value":1,"unit":"px"},"boxShadowEnabled":false,"boxShadowColor":"Primary","borderStyle":"solid"},"disabled":{"labelcolor":"Grey - 500","backgroundColor":"Grey - 200","borderWidth":{"value":1,"unit":"px"},"borderColor":"Grey - 500","color":"Grey - 600"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"focused":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"disabled":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.options","parameters":{"sizeMode":"explicit","height":{"value":40,"unit":"px"},"borderWidth":{"value":1,"unit":"px"},"borderRadius":{"value":4,"unit":"px"},"borderColor":"Grey - 700","boxShadowColor":"Dark Gray","useIcon":true,"iconIconSource":{"class":"material-icons","code":"expand_more"},"iconPlacement":"right","iconSize":{"value":20,"unit":"px"},"paddingRight":{"value":12,"unit":"px"},"textStyle":"Body Medium","paddingLeft":{"value":12,"unit":"px"},"marginTop":{"value":0,"unit":"px"},"width":{"value":100,"unit":"%"},"iconColor":"Grey - 700","placeholderOpacity":0.65,"placeholder":"Select option","useLabel":true,"labelSpacing":{"value":4,"unit":"px"},"labeltextStyle":"Label Small","labelcolor":"Grey - 700","items":"[\n    {\"Label\":\"Option 1\", \"Value\":\"1\"},\n    {\"Label\":\"Option 2\", \"Value\":\"2\"},\n    {\"Label\":\"Option 3\", \"Value\":\"3\"}\n]"},"stateParameters":{"hover":{"borderColor":"Grey - 700","borderRadius":{"value":4,"unit":"px"},"iconColor":"Grey - 900","iconSize":{"value":20,"unit":"px"},"iconPlacement":"right","color":"Grey - 900","labelcolor":"Grey - 700"},"focused":{"borderColor":"Primary","boxShadowColor":"Primary","borderRadius":{"value":4,"unit":"px"},"useIcon":true,"iconColor":"Primary","iconIconSource":{"class":"material-icons","code":"keyboard_arrow_up"},"iconPlacement":"right","color":"Grey - 900","labelcolor":"Primary"},"pressed":{"borderRadius":{"value":4,"unit":"px"}},"disabled":{"labelcolor":"Grey - 500","iconColor":"Grey - 500","borderColor":"Grey - 500","color":"Grey - 600","backgroundColor":"Grey - 200"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"focused":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"pressed":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}}]};
