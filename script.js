function breakAtPeriod() {
  var inputText = document.getElementById('input-text').value;
  var outputText = inputText.replace(/。/g, '。<br>');
  document.getElementById('output-text').innerHTML = outputText;
}
