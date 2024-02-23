function isiOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  }
  window.onload = function() {
    if (isiOS()) {
      document.getElementById('pdf-js-viewer-ios').classList.add('ios-scroll');
    } else {
      document.getElementById('pdf-js-viewer-ios').remove();
      var iframe = document.createElement('iframe');
      iframe.src = "/web/viewer.html?file=/assets/pdf/LT-SK37W-03.pdf#page=1#zoom=automatic-zoom";
      iframe.title = "webviewer";
      iframe.frameBorder = "0";
      iframe.width = "100%";
      iframe.height = "100%";
      document.body.insertBefore(iframe, document.body.firstChild);
    }
  };