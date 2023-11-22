// content.js

// Send a message to the background script to check if the site is safe
chrome.runtime.sendMessage({ action: "checkSafety", url: window.location.href }, function(response) {
  if (!response.safe) {
    // If the site is not safe, display a warning
    alert("The site is not safe to enter!");
  }
});
