# Premiere Pro Midi Marker Import Panel


<!-- _One liner + link to confluence page_

_Screenshot of UI - optional_ -->


## TODO

Add in midi-timing library to parse midi into json with absolute times
Add function inside index to parse through json and run the add marker function for each note. 

## Setup

_stack - optional_

_How to build and run the code/app_


Download the code and put the folder in one of these places:  
Win: `C:\<username>\AppData\Roaming\Adobe\CEP\extensions`  
Mac: `~/Library/Application Support/Adobe/CEP/extensions`  

Since Premiere only accepts signed extension, you should tell it to accept unsigned extensions like this as well:
https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_8.x/Documentation/CEP%208.0%20HTML%20Extension%20Cookbook.md#debugging-unsigned-extensions

Launch Premiere Pro and open this Panel under Window > Extensions > autoEdit

Official Adobe Sample Panel: https://github.com/Adobe-CEP/Samples/tree/master/PProPanel
Semi Official API Docs: http://ppro.aenhancers.com/
Non Official but very nice API Docs: http://www.brysonmichael.com/premiereapi-home


## Usage



## System Architecture

_High level overview of system architecture_



## Development env

 _How to run the development environment_

_Coding style convention ref optional, eg which linter to use_

_Linting, github pre-push hook - optional_

Access chrome dev tools for panel at localhost:8099. This will lose connection when you close the app so you must refresh the page when you close and reopen.





## Build

_How to run build_



## Tests

_How to carry out tests_



## Deployment

_How to deploy the code/app into test/staging/production_
