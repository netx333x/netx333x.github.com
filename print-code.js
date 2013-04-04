window.onload = function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var box = document.getElementsByClassName('box')[0];
      var code = box.getElementsByTagName('code')[0];
      code.textContent = xhr.responseText;
    }
  }
  xhr.open('GET', 'if.js');
  xhr.send();
}
