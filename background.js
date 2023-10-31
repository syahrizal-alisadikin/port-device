chrome.app.runtime.onLaunched.addListener(function() {

  chrome.app.window.create('index.html', {
    'outerBounds': {
      'width': 1230,
      'height': 750
    },
	'resizable': true
  });
});