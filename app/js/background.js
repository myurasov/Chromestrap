chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('views/index.html', {
    'innerBounds': {
      'width': 800,
      'height': 600
    },
    resizable: true
  });
});
