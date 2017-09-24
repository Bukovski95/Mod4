(function (name) { 
		var name = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
		
		for (var i = 0; i < name.length; i++) {
		

		

(function (window) {
	
	var helloSpeaker = {};
	var speakWord = "Hello";

	helloSpeaker.speak = function (name) {
  	console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);
		
(function (window) {

	var byeSpeaker = {};
	var speakWord = "Good Bye";

	byeSpeaker.speak = function (name) {
  	console.log(speakWord + " " + name);
	}

	window.byeSpeaker = byeSpeaker;

})(window);
		
		
		var firstLetter = name[i].charAt(0).toLowerCase();
		
		  if (firstLetter === 'j') {
    byeSpeaker.speak(name[i]);
  } else {
    helloSpeaker.speak(name[i]);
  }
}

})(name);