// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.

// =====
// Thx simonbs for all! https://talk.automators.fm/t/widget-examples/7994/2
//
// Widget Background from (C) Xbox Wire / Free Press Images - modified by gnrmarcel for InsideXbox.de
// =====

//     _____  _____________  _____  _____  ____  _  __  ___  ____
//    /  _/ |/ / __/  _/ _ \/ __/ |/_/ _ )/ __ \| |/_/ / _ \/ __/
//   _/ //    /\ \_/ // // / _/_>  </ _  / /_/ />  <_ / // / _/  
//  /___/_/|_/___/___/____/___/_/|_/____/\____/_/|_(_)____/___/  
//                                                                                                                                          
                                                                                                                        

// API Information from xapi.us/profile
//
const apiURL = 'https://xapi.us/v2'
const apiToken = 'xxx'
const xboxProfileUserID = 'xxx'
const backgroundImage = 'https://raw.githubusercontent.com/gnrmarcel/scriptable-xbox-gamercard/main/xbox-series-x-background-widget.jpg'



let items = await loadItems()
let widget = await createWidget(items)

if (!config.runsInWidget) {
    await widget.presentMedium()
}

Script.setWidget(widget)
Script.complete()

async function createWidget(items) {
    let item = items
    // console.log(item)

    let backgroundImageURL = backgroundImage
    let w = new ListWidget()

    // Load and show Background Image of Widget
    //
    let imgReq = new Request(backgroundImageURL)
    let img = await imgReq.loadImage()
    w.backgroundImage = img
    w.backgroundColor = new Color("#ffd230")

    w.addSpacer()

    // Show gamertag
    //
    let gamertag = w.addText(item.gamertag)
    gamertag.font = Font.boldSystemFont(30)
    gamertag.textColor = Color.white()

    w.addSpacer(8)
    
    // Show gamerscore
    //
    let gamerscore = w.addText('Gamerscore: ' + item.gamerScore)
    gamerscore.font = Font.mediumSystemFont(15)
    gamerscore.textColor = Color.white()
    gamerscore.textOpacity = 0.9

    w.addSpacer(8)

    // Show last seen
    //
    let lastseen = w.addText('Zu letzt gesehen: ' + item.presenceText)
    lastseen.font = Font.italicSystemFont(10)
    lastseen.textColor = Color.white()
    lastseen.textOpacity = 0.9
    
    w.addSpacer()

    return w
}

// API Call
//
async function loadItems() {
    let url = `${apiURL}/${xboxProfileUserID}/new-profile`
    let req = new Request(url)
    req.headers = { 
        "X-AUTH": apiToken,
        "Content-Type": "application/json"
    }
    let json = await req.loadJSON()
    return json
}