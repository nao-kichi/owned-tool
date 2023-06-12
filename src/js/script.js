document.getElementById('inputForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // input text
  var inputText = document.getElementById('inputText').value;

  // Remove empty lines
  var nonEmptyLines = inputText.split('\n').filter(function(line) {
    return line.trim() !== '';
  });
  var inputTextWithoutEmptyLines = nonEmptyLines.join('\n');

  // text count
  var charCount = inputTextWithoutEmptyLines.length;
  document.getElementById('char-count').textContent = charCount;

  // replace
  var outputText = inputTextWithoutEmptyLines
    .replace(/言われています/g, 'いわれています')
    .replace(/下さい/g, 'ください')
    .replace(/でしょう/g, 'と思います')
    .replace(/することができます/g, 'できます')
    .replace(/をすることが/g, 'が')
    .replace(/することが/g, 'が')
    .replace(/いるでしょう/g, 'いるかもしれません')
    .replace(/いると思います/g, 'いるかもしれません')
    .replace(/行いましょう/g, '行うようにしてください')
    .replace(/するといいです/g, 'することをおすすめします')
    .replace(/しましょう/g, 'することをおすすめします')
    .replace(/いきましょう/g, 'ください')
    .replace(/傷跡/g, '跡')
    .replace(/人工植毛/g, '人工毛植毛')
    .replace(/人口毛植毛/g, '人工毛植毛')
    .replace(/自毛植毛後/g, '自毛植毛の術後')
    .replace(/確認しましょう/g, 'ご確認ください。')
    .replace(/AGA（男性脱毛症）/g, 'AGA（男性型脱毛症）')
    .replace(/患者/g, '患者様')
    .replace(/いるでしょう/g, 'いるかもしれません')
    .replace(/います/g, 'いるといわれています')
    .replace(/認められて/g, 'あるといわれて')
    .replace(/行われるべきです/g, '行われます')
    .replace(/^\s*[\r\n]/gm, '') // Remove empty lines
    .replace(/。/g, '。\n'); // Add line break after each sentence

  // output text
  document.getElementById('outputText').value = outputText;
});
