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

//

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

    let backgroundImageURL = item.activityItems[0].achievementIcon
    let w = new ListWidget()

    // Load and show Background Image of Widget
    //
    let imgReq = new Request(backgroundImageURL)
    let img = await imgReq.loadImage()
    w.backgroundImage = img

    w.addSpacer()

    // Show last Achievement
    //
    let achievement1game = w.addText(item.activityItems[0].contentTitle)
    achievement1game.font = Font.boldSystemFont(10)
    achievement1game.textColor = Color.white()

    let achievement1name = w.addText(item.activityItems[0].achievementName)
    achievement1name.font = Font.boldSystemFont(20)
    achievement1name.textColor = Color.white()

    let achievement1gamerscore = w.addText(item.activityItems[0].gamerscore + ' Gamerscore')
    achievement1gamerscore.font = Font.boldSystemFont(10)
    achievement1gamerscore.textColor = Color.white()

    w.addSpacer(8)
        
    // Widget anzeigen
    //
    return w
}

// API Call
//
async function loadItems() {
    let url = `${apiURL}/${xboxProfileUserID}/activity`
    let req = new Request(url)
    req.headers = { 
        "X-AUTH": apiToken,
        "Content-Type": "application/json"
    }
    let json = await req.loadJSON()
    return json
}