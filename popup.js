/*
document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var url = tabs[0].url;
    document.getElementById("url").textContent = url;

    // Call the sendToApi function with the URL
    sendToApi(url);
  });
});

function sendToApi() {
  // Simulate a positive response for testing
  var response = true;

  // Display the result on the popup HTML page
  showResult(response);
}

function showResult(result) {
  // Display the result on the popup HTML page
  document.getElementById('url').textContent = result.toString(); // Convert to string for display
  if (result === true) {
    document.getElementById('url').style.color = 'green';
    // If the response is true, trigger an alert
    //let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    //width=0,height=0,left=-1000,top=-1000`;
    //open('/', 'test', params);
    //showAlert();


  } else {
    document.getElementById('url').style.color = 'red';
  }
}

function showAlert() {
  // Display an alert on the popup HTML page
  var alertMessage = 'The site is not safe to enter!';
  alert(alertMessage);
}

// ... rest of the code remains the same

*/
//_____________________________________________________________________

/*
// popup.js
document.addEventListener("DOMContentLoaded", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var url = tabs[0].url;
      document.getElementById("url").textContent = url;
  
      // Call the sendToApi function with the URL
      sendToApi(url);
    });
  });
  
  function sendToApi(url) {
    // Simulate a positive response for testing
    var response = true;
  
    // Display the result on the popup HTML page
    showResult(response);
  }
  
  function showResult(result) {
    // Display the result on the popup HTML page
    document.getElementById('url').textContent = result.toString(); // Convert to string for display
    if (result === true) {
      document.getElementById('url').style.color = 'green';
      // If the response is true, open a new window with the image
      openImageWindow();
    } else {
      document.getElementById('url').style.color = 'red';
      // If the response is not true, trigger an alert
      showAlert();
    }
  }
  
  function showAlert() {
    // Display an alert on the popup HTML page
    var alertMessage = 'The site is not safe to enter!';
    alert(alertMessage);
  }
  
  function openImageWindow() {
    // Open a new window with the image
    var params = 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=500,height=500,left=100,top=100';
    window.open('popup.html', 'ImageWindow', params);
  }
*/

// In popup.js
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('okayButton').addEventListener('click', function () {
    console.log("Button clicked");
    chrome.runtime.sendMessage({ action: 'closePopup' });
    window.close();
  });
});
