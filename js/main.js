var midiTiming = require('midi-timing');

window.onload = function(){
    document.getElementById('files').addEventListener('change', handleFileSelect, false);
}

var timing
var hasData = false

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
    output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                f.size, ' bytes, last modified: ',
                f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';

    var reader = new FileReader();
      // Closure to capture the file information.
      reader.onload = (function(file) {
        return function(e) {

            handleMidiData(e.target.result)
        };
      })(files[0]);

      // Read in the image file as a data URL.
      reader.readAsBinaryString(files[0]);

}

function handleMidiData(midi) {
    timing = midiTiming(midi)
    hasData = true
}

function addMidiMarkers(){
    if (hasData){
        var trackOne = timing.tracks[0];
        console.log("making " + trackOne.length + " notes")
        // let testNote = trackOne[0]
        // addMarker({
        //     time: testNote.time / 1000,
        //     duration: testNote.duration / 1000,
        //     index: 1,
        // })

        trackOne.forEach(function(note, index) {
            addMarker({
                time: note.time / 1000,
                duration: note.duration / 1000,
                index,
            })
          });
    }
}


function traverse() {
    window.__adobe_cep__.evalScript("$._PPP.traverse_project_items()", callback);
}
function callback(data) {
    if (!data || data.length < 0) return;
    try {
        var file_paths = JSON.parse(data);
        console.log(file_paths);
        document.getElementById("result").innerHTML = file_paths;
    } catch(error) {
        console.log(error);
    }
}
function createSeq(){
    console.log("Creating!")
    window.__adobe_cep__.evalScript("$.PPP.create_sequence()", log);

}
function addMarker(options){
    // Into options you can pass time(in seconds), duration (in seconds), index (integer of midi note index),
    // name (string, name of marker), and comments (string, marker comments)
    window.__adobe_cep__.evalScript("$.PPP.createMarker('" + JSON.stringify(options)+"')", log);
}

function addMarkerInput(){
    let time = document.getElementById("time-input").value
    let duration = document.getElementById("duration-input").value
    let index = 0

    // Into data you can pass time(in seconds), duration (in seconds), index (integer of midi note index),
    // name (string, name of marker), and comments (string, marker comments)
    let data = {time, duration, index}

    window.__adobe_cep__.evalScript("$.PPP.createMarker('" + JSON.stringify(data)+"')", log);
}

function logMarkers(){
    window.__adobe_cep__.evalScript("$.PPP.logMarkers()", log);
}
function log(data){
    console.log(data)
}