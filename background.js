/*
chrome.webNavigation.onCompleted.addListener(function(details) {
  // Check if the navigation is to a new URL
  if (details.transitionType === 'typed' && details.url.startsWith('http')) {
    // Get the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      // Show the popup for the active tab
      chrome.browserAction.setPopup({ tabId: tabs[0].id, popup: 'popup.html' });
    });
  }
});
*/

// In background.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "closePopup") {
    console.log("Popup closed.");
  }
});

