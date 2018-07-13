# Premiere Pro Midi Marker Import Panel


<!-- _One liner + link to confluence page_

_Screenshot of UI - optional_ -->


## TODO
- [X] Create function in Premiere.jsx to handle create markers from time and duration input from panel
- [ ] Add in midi-timing library to parse midi into json with absolute times
- [ ] Add function inside index to parse through json and run the add marker function for each note.

## Setup

_How to build and run the code/app_

Download the code and put the folder in one of these places:  
Win: `C:\<username>\AppData\Roaming\Adobe\CEP\extensions`  
Mac: `~/Library/Application Support/Adobe/CEP/extensions`  

Since Premiere only accepts signed extension, you should tell it to accept unsigned extensions like this as well:
https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_8.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#debugging-unsigned-extensions

Launch Premiere Pro and open this Panel under Window > Extensions > Midi Timing

Official Adobe Sample Panel: https://github.com/Adobe-CEP/Samples/tree/master/PProPanel
Semi Official API Docs: http://ppro.aenhancers.com/
Non Official but very nice API Docs: http://www.brysonmichael.com/premiereapi-home




## Dev Tools

Access chrome dev tools for panel at localhost:8099. This will lose connection when you close the window so you must refresh the web page when you close and reopen the extension.



