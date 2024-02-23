// userAgent argument will depreciate
if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    // Hide the overlay when the user interacts with the screen
    document.body.addEventListener('touchstart', function() {
      document.getElementById('overlay').style.display = 'none';
    });

    // Hide the overlay when the user interacts with the screen
    document.body.addEventListener('wheel', function() {
      document.getElementById('overlay').style.display = 'none';
    });

    // Hide the overlay when the user interacts with the screen
    document.body.addEventListener('mousedown', function() {
      document.getElementById('overlay').style.display = 'none';
    });

    document.addEventListener('DOMContentLoaded', function() {
    var iframe = document.getElementById('pdf-js-viewer');
    var counter = 0; // Initialize the counter
    var maxExecutions = 20; // Set the maximum number of executions

    iframe.onload = function() {
    var PDFViewerApplication = iframe.contentWindow.PDFViewerApplication;
    PDFViewerApplication.initializedPromise.then(function() {
      PDFViewerApplication.eventBus.on('pagechanging', function(evt) {
        if (counter < maxExecutions) { // Check if the counter is less than the maximum number of executions
          var pageNumber = evt.pageNumber;
          if (pageNumber === PDFViewerApplication.pagesCount) {
            document.getElementById('overlay').style.display = 'flex'; // Show the overlay
            // console.log('Finger styling scheme is active');
          } else {
            document.getElementById('overlay').style.display = 'none'; // Hide the overlay
            // console.log('Finger styling scheme is not active');
          }
          counter++; // Increment the counter
        }
      });
    });
    };
  });
}
