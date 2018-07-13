if (typeof($) == 'undefined') $ = {};
$.PPP = {
	say: function(something) {
		$.writeln(something); // output to ExtendScript Toolkit Console
		alert(something); // invoke a warning popup
		return "thanks"; // return a string back to JavaScript
	},

	create_sequence: function() {
		var someID	= "xyz123";
		var seqName = prompt('Name of sequence?',	 'Some Descriptive Name', 'Sequence Naming Prompt');
		app.project.createNewSequence(seqName, someID);
		return "done"
	},

	// Example
	logMarkers : function() {
		var activeSequence = app.project.activeSequence;
		if (activeSequence) {
			var markers		= activeSequence.markers;
			if (markers) {
				var numMarkers	= markers.numMarkers;
				if (numMarkers > 0) {
					var marker_index = 1;
					for(var current_marker	=	markers.getFirstMarker();
							current_marker	!==	undefined;
							current_marker	=	markers.getNextMarker(current_marker)){
						if (current_marker.name !== "") {
							$.PPP.updateEventPanel(	'Marker ' + marker_index + ' name = ' + current_marker.name + '.');
						} else {
							$.PPP.updateEventPanel(	'Marker ' + marker_index + ' has no name.');
						}

						if (current_marker.end.seconds > 0) {
							$.PPP.updateEventPanel(	'Marker ' + marker_index + ' duration = ' + (current_marker.end.seconds - current_marker.start.seconds) + ' seconds.');
						} else {
							$.PPP.updateEventPanel(	'Marker ' + marker_index + ' has no duration.');
						}
						$.PPP.updateEventPanel('Marker ' + marker_index + ' starts at ' + current_marker.start.seconds + ' seconds.');
						marker_index = marker_index + 1;
					}
				}
			}
		} else {
			$.PPP.updateEventPanel("No active sequence.");
		}
	},

	createMarker : function(data) {

		var args = JSON.parse(data);

		var index = Number(args.index) || 0
		var time = Number(args.time) || 1
		var duration = Number(args.duration) || 0
		var name = args.name || "Midi Note " + index
		var comments = args.comments || "Created by Midi Timing Panel"

		var activeSequence = app.project.activeSequence;
		if (activeSequence) {

			var markers		= activeSequence.markers;

			var newCommentMarker			= markers.createMarker(time);
			newCommentMarker.name			= name
			newCommentMarker.comments		= comments
			newCommentMarker.end			= time + duration;

		} else {
			$.PPP.updateEventPanel("No active sequence.");
		}

	},

	setSequencePlayhead: function(pos){
		// pos is in the format of seconds.frames (e.g. 10.5 is 10 seconds, 5 frames) or in timecode ('00;00;10;05')
		// This might be a useful reference: https://forums.adobe.com/thread/2420603

		app.enableQE(); // enables the undocumented QE DOM which is necessary to control program monitor playback

		var activeSequence	= qe.project.getActiveSequence(); 	// note: make sure a sequence is active in PPro UI
		if (activeSequence) {
			activeSequence.player.startScrubbing();
			activeSequence.player.scrubTo(String(pos));
			activeSequence.player.endScrubbing();

			// Alternate
			// app.project.activeSequence.setPlayerPosition(pos * 254016000000) // would not be able to use the same pos without parsing as this will assume its a float vs the seconds.frames format

		} else {
			$.PPP.updateEventPanel("No active sequence.");
		}
		return "done"

	},

	updateEventPanel : function(message) {
		app.setSDKEventMessage(message, 'info');
		//app.setSDKEventMessage('Here is some information.', 'info');
		//app.setSDKEventMessage('Here is a warning.', 'warning');
		//app.setSDKEventMessage('Here is an error.', 'error');  // Very annoying; use sparingly.
	},


}
