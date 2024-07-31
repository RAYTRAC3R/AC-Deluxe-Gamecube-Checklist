window.__noodl_modules = [];
window.Noodl = {
    defineModule:function(m) {
        window.__noodl_modules.push(m);
    },
    deployed: true,
    Env: {}
}

window.projectData = {"settings":{"baseUrl":"https://acgc.sterner.digital","sitemap.enabled":true},"components":[{"name":"/App","nodes":[{"id":"246f9453-a119-ac78-171e-3806cf596ecc","type":"Group","parameters":{"flexDirection":"row","sizeMode":"contentWidth","styleCss":"overflow: auto;\r\nheight: 100%;"},"ports":[],"children":[{"id":"e5b2e6b4-37e4-2ff8-29d8-e5f2a35ae2eb","type":"Router","parameters":{"pages":{"routes":["/Home","/Collections","/museum","/ProfilePage"],"startPage":"/Home"},"name":"Main"},"ports":[],"children":[]},{"id":"411e942d-f54e-f71c-8b0e-857c674d84b4","type":"/navbar","parameters":{},"ports":[],"children":[]}]}],"connections":[],"ports":[],"roots":["246f9453-a119-ac78-171e-3806cf596ecc"],"metadata":{"canvasSize":{"width":"1039px","height":"751px"},"canvasPos":{"x":0,"y":0}}},{"name":"/navbar","nodes":[{"id":"97f2084f-7c09-9443-3dfb-cb3371299fe2","type":"Group","parameters":{"flexDirection":"row","nodeLabel":"This group is created to hold the navbar buttons in a horizontal row","sizeMode":"contentHeight","alignY":"bottom","position":"fixed","justifyContent":"center","alignItems":"center","marginBottom":{"value":-11,"unit":"px"},"marginTop":{"value":0,"unit":"px"},"paddingTop":{"value":-40,"unit":"px"},"borderStyle":"solid","borderTopStyle":"solid","borderTopColor":"Nook Tan Dark","borderLeftColor":"transparent","borderLeftStyle":"none","borderBottomStyle":"none","borderRightStyle":"none","borderTopWidth":{"value":5,"unit":"px"},"backgroundColor":"Nook Text Light"},"ports":[],"children":[{"id":"7f327aa8-c226-3a77-50bf-2dc66362d4b6","type":"Group","parameters":{},"ports":[],"children":[{"id":"13d1f06d-1b13-7421-e96c-eee9f87f34f5","type":"Markdown","parameters":{"source":"<a href=\"/#/home\" target=\"_self\" style=\"display: flex; flex-direction: column; align-items: center; background-color: #E0DACA; border: none; text-align: center; text-decoration: none; color: inherit; padding-bottom: 5px;\">\n        <img src=\"images/tom_nook.png\" alt=\"Button Image\" style=\"max-width: 80%; height: 100%;\">\n        <p style=\"margin-top: 0px; font-size: 12px; color: #625544; font-weight: bold; line-height: 1;\">Home</p>\n    </a>\n</body>","openLinksInNewTab":false},"ports":[],"children":[]}]},{"id":"65be96d3-491d-2ae3-8d63-6d0f10ab2a05","type":"Group","parameters":{},"ports":[],"children":[{"id":"d77c43a4-6351-b25d-a495-7c4e0e27a530","type":"Markdown","parameters":{"source":"<body>\n    <a href=\"/#/museum\" target=\"_self\"  style=\"display: flex; flex-direction: column; align-items: center; background-color: #E0DACA; border: none; text-align: center; text-decoration: none; color: inherit; padding-bottom: 5px;\">\n        <img src=\"images/blathers.png\" alt=\"Button Image\" style=\"max-width: 80%; height: 100%;\">\n        <p style=\"margin-top: 0px; font-size: 12px; color: #625544; font-weight: bold; line-height: 1;\">Museum</p>\n    </a>\n</body>\n","openLinksInNewTab":false},"ports":[],"children":[]}]},{"id":"690a2ed1-26f5-b135-b636-bc3931998ecd","type":"Group","parameters":{},"ports":[],"children":[{"id":"1eef5472-18e8-1db6-89d8-90b8a9686717","type":"Markdown","parameters":{"source":"<body>\n    <a href=\"/#/passport\" target=\"_self\"  style=\"display: flex; flex-direction: column; align-items: center; background-color: #E0DACA; border: none; text-align: center; text-decoration: none; color: inherit; padding-bottom: 5px;\">\n        <img src=\"images/passport2.png\" alt=\"Button Image\" style=\"max-width: 80%; height: 100%;\">\n        <p style=\"margin-top: 0px; font-size: 12px; color: #625544; font-weight: bold; line-height: 1;\">Passport</p>\n    </a>\n</body>\n","openLinksInNewTab":false},"ports":[],"children":[]}]},{"id":"c5bb604e-6738-edfb-ac95-052f07cbd9b9","type":"Group","parameters":{},"ports":[],"children":[{"id":"dc9f61a0-2313-cf32-8fa3-f13472f911dd","type":"Markdown","parameters":{"source":"<body>\n    <a href=\"/#/collections\" target=\"_self\"  style=\"display: flex; flex-direction: column; align-items: center; background-color: #E0DACA; border: none; text-align: center; text-decoration: none; color: inherit; padding-bottom: 5px;\">\n        <img src=\"images/leaf.png\" alt=\"Button Image\" style=\"max-width: 80%; height: 100%;\">\n        <p style=\"margin-top: 0px; font-size: 12px; color: #625544; font-weight: bold; line-height: 1;\">Collections</p>\n    </a>\n</body>\n","openLinksInNewTab":false},"ports":[],"children":[]}]},{"id":"d9193a6e-20bd-4821-e12b-e36840d5a86e","type":"Group","parameters":{},"ports":[],"children":[{"id":"82832d54-d83f-ece6-b9ae-5f080027bdb2","type":"Markdown","parameters":{"source":"<body>\n    <a href=\"https://discord.sterner.digital/\" style=\"display: flex; flex-direction: column; align-items: center; background-color: #E0DACA; border: none; text-align: center; text-decoration: none; color: inherit; padding-bottom: 5px;\">\n        <img src=\"images/discord.png\" alt=\"Button Image\" style=\"max-width: 80%; height: 100%;\">\n        <p style=\"margin-top: 0px; font-size: 12px; color: #625544; font-weight: bold; line-height: 1;\">Discord</p>\n    </a>\n</body>\n","openLinksInNewTab":false},"ports":[],"children":[]}]}]}],"connections":[],"ports":[],"roots":["97f2084f-7c09-9443-3dfb-cb3371299fe2"]}],"componentIndex":{"b1-b3118b9f6a422321":{"components":["/Home","/Daily Tasks","/Multi Choice With Pills","/Multi Choice With Pills/Option"],"dependencies":[]},"b2-6a81e47f9eb5cc15":{"components":["/Collections","/Collection Progress"],"dependencies":[]},"b3-dd2b70140f4313a0":{"components":["/museum"],"dependencies":[]},"b4-f228c556de54af3f":{"components":["/ProfilePage","/Profile"],"dependencies":[]},"b5-6e3e6c24cda568db":{"components":["/Multi Choice With Pills/Pill"],"dependencies":[]}},"routerIndex":{"routers":[{"pages":{"routes":["/Home","/Collections","/museum","/ProfilePage"],"startPage":"/Home"},"name":"Main"}],"pages":[{"path":"collections","title":"Collections","component":"/Collections"},{"path":"home","title":"Home","component":"/Home"},{"path":"museum","title":"museum","component":"/museum"},{"path":"passport","title":"Passport","component":"/ProfilePage"}]},"rootComponent":"/App","rootNode":"246f9453-a119-ac78-171e-3806cf596ecc","metadata":{"styles":{"text":{"Display":{"letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none","fontSize":{"value":"40","unit":"px"},"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","color":"#000000"},"Headline":{"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"32","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Title Large":{"fontFamily":"fonts/Roboto/Roboto-Bold.ttf","fontSize":{"value":"24","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120%","unit":"px"},"textTransform":"none"},"Title Medium":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"20","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Title Small":{"fontFamily":"fonts/Roboto/Roboto-Bold.ttf","fontSize":{"value":"16","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Label Large":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"16","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Label Medium":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"14","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Label Small":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"12","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Body Large":{"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"20","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"150","unit":"%"},"textTransform":"none"},"Body Medium":{"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"16","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"150","unit":"%"},"textTransform":"none"},"Body Small":{"letterSpacing":"Auto","lineHeight":{"value":"150","unit":"%"},"textTransform":"none","fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"14","unit":"px"},"color":"#000000"}},"colors":{"Grey - 700":"#4C4C4C","Grey - 300":"#E9E9E9","Grey - 900":"#1F1F1F","Primary":"#46BAA5","Primary Dark":"#3F22B8","Primary Subtle":"#C9BFFC","Primary Light":"#F7F5FF","White":"#FFFFFF","Black":"#000000","Nook Text":"#807256","Nook Text Light":"#e0daca","Nookmiles Blue":"#5B7AD7","Nookmiles Blue Text":"#C0E2FD","Nookmiles Green":"#D6E69D","Nookmiles Brown":"#625544","Mailbox Red":"#F51F18","Police Blue":"#2040A0","Garbage Gray":"#2D3741","Fossil Blue":"#474599","Nook Tan":"#FAF5DF","Nook Tan Dark":"#B9A999","Nook Pale Green":"#ACD6A7","Nook light red":"#D6A7A7"}}},"variants":[{"typename":"net.noodl.controls.button","parameters":{"height":{"value":40,"unit":"px"},"sizeMode":"contentWidth","backgroundColor":"Primary","iconIconSource":{"class":"material-icons","code":"home"},"iconSpacing":{"value":8,"unit":"px"},"borderRadius":{"value":4,"unit":"px"},"textStyle":"Label Medium","paddingTop":{"value":0,"unit":"px"},"paddingLeft":{"value":24,"unit":"px"},"paddingRight":{"value":24,"unit":"px"},"paddingBottom":{"value":0,"unit":"px"},"color":"#FFFFFF","fontFamily":"fonts/Roboto/Roboto-Medium.ttf","minWidth":{"value":80,"unit":"px"},"useIcon":false,"iconSize":{"value":20,"unit":"px"}},"stateParameters":{"hover":{"backgroundColor":"Primary Dark"},"pressed":{"backgroundColor":"Primary","color":"White"},"disabled":{"backgroundColor":"Grey - 300","color":"Grey - 600"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"pressed":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.radiobutton","parameters":{"width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"},"useLabel":true,"labeltextStyle":"Body Large","borderWidth":{"value":1,"unit":"px"},"value":"0","useIcon":false,"fillColor":"transparent","borderColor":"Grey - 700","labelfontSize":{"value":16,"unit":"px"},"marginBottom":{"value":8,"unit":"px"},"labelcolor":"Grey - 900","labelSpacing":{"value":12,"unit":"px"}},"stateParameters":{"checked":{"fillColor":"Primary","borderColor":"Primary","borderWidth":{"value":1,"unit":"px"},"backgroundColor":"transparent","width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"},"fillSpacing":{"value":2,"unit":"px"}},"hover":{"backgroundColor":"transparent","borderColor":"Grey - 700","width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"}},"disabled":{"borderColor":"Grey - 500","labelcolor":"Grey - 500","fillColor":"transparent"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"checked":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"Text","parameters":{"textStyle":"Body Medium"},"stateParameters":{},"stateTransitions":{}},{"typename":"net.noodl.controls.range","parameters":{"thumbColor":"Primary","thumbBorderRadius":{"value":100,"unit":"%"},"trackHeight":{"value":4,"unit":"px"},"trackActiveColor":"Primary","trackColor":"Primary Subtle","width":{"value":100,"unit":"%"},"trackBorderRadius":{"value":100,"unit":"px"},"thumbHeight":{"value":16,"unit":"px"},"thumbWidth":{"value":16,"unit":"px"}},"stateParameters":{"hover":{"thumbColor":"Primary Dark","trackActiveColor":"Primary Dark"},"disabled":{"trackActiveColor":"Grey - 500","trackColor":"Grey - 300","thumbColor":"Grey - 500"}},"stateTransitions":{}},{"typename":"net.noodl.controls.checkbox","parameters":{"width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"},"useIcon":false,"borderWidth":{"value":1,"unit":"px"},"useLabel":true,"labeltextStyle":"Body Medium","borderRadius":{"value":2,"unit":"px"},"borderColor":"Grey - 700","labelfontSize":{"value":16,"unit":"px"},"labelcolor":"Grey - 900","labelSpacing":{"value":12,"unit":"px"}},"stateParameters":{"checked":{"useIcon":true,"iconIconSource":{"class":"material-icons","code":"check"},"backgroundColor":"Primary","borderColor":"Primary","iconSize":{"value":16,"unit":"px"}},"disabled":{"opacity":0.5},"hover":{"borderColor":"Grey - 700"},"pressed":{}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":300,"delay":0},"checked":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.textinput","parameters":{"useLabel":true,"sizeMode":"explicit","height":{"value":40,"unit":"px"},"textStyle":"Body Medium","borderStyle":"solid","borderRadius":{"value":4,"unit":"px"},"borderWidth":{"value":1,"unit":"px"},"borderColor":"Grey - 700","labeltextStyle":"Label Small","paddingLeft":{"value":12,"unit":"px"},"paddingRight":{"value":8,"unit":"px"},"labelSpacing":{"value":4,"unit":"px"},"placeholder":"Type here","color":"Grey - 900","placeHolderOpacity":0.65,"enabled":true,"blockTouch":false,"useIcon":false,"iconIconSource":{"class":"material-icons","code":"home"},"iconSize":{"value":20,"unit":"px"},"iconSpacing":{"value":4,"unit":"px"},"iconColor":"Grey - 700","labelcolor":"Grey - 700"},"stateParameters":{"hover":{"labelcolor":"Grey - 700","borderColor":"Grey - 700","borderStyle":"solid","color":"Grey - 900"},"focused":{"borderColor":"Primary","labelcolor":"Primary","borderWidth":{"value":1,"unit":"px"},"boxShadowEnabled":false,"boxShadowColor":"Primary","borderStyle":"solid"},"disabled":{"labelcolor":"Grey - 500","backgroundColor":"Grey - 200","borderWidth":{"value":1,"unit":"px"},"borderColor":"Grey - 500","color":"Grey - 600"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"focused":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"disabled":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.options","parameters":{"sizeMode":"explicit","height":{"value":40,"unit":"px"},"borderWidth":{"value":1,"unit":"px"},"borderRadius":{"value":4,"unit":"px"},"borderColor":"Grey - 700","boxShadowColor":"Dark Gray","useIcon":true,"iconIconSource":{"class":"material-icons","code":"expand_more"},"iconPlacement":"right","iconSize":{"value":20,"unit":"px"},"paddingRight":{"value":12,"unit":"px"},"textStyle":"Body Medium","paddingLeft":{"value":12,"unit":"px"},"marginTop":{"value":0,"unit":"px"},"width":{"value":100,"unit":"%"},"iconColor":"Grey - 700","placeholderOpacity":0.65,"placeholder":"Select option","useLabel":true,"labelSpacing":{"value":4,"unit":"px"},"labeltextStyle":"Label Small","labelcolor":"Grey - 700","items":"[\n    {\"Label\":\"Option 1\", \"Value\":\"1\"},\n    {\"Label\":\"Option 2\", \"Value\":\"2\"},\n    {\"Label\":\"Option 3\", \"Value\":\"3\"}\n]"},"stateParameters":{"hover":{"borderColor":"Grey - 700","borderRadius":{"value":4,"unit":"px"},"iconColor":"Grey - 900","iconSize":{"value":20,"unit":"px"},"iconPlacement":"right","color":"Grey - 900","labelcolor":"Grey - 700"},"focused":{"borderColor":"Primary","boxShadowColor":"Primary","borderRadius":{"value":4,"unit":"px"},"useIcon":true,"iconColor":"Primary","iconIconSource":{"class":"material-icons","code":"keyboard_arrow_up"},"iconPlacement":"right","color":"Grey - 900","labelcolor":"Primary"},"pressed":{"borderRadius":{"value":4,"unit":"px"}},"disabled":{"labelcolor":"Grey - 500","iconColor":"Grey - 500","borderColor":"Grey - 500","color":"Grey - 600","backgroundColor":"Grey - 200"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"focused":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"pressed":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}}]};
