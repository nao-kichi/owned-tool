document.getElementById('inputForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // input text
  var inputText = document.getElementById('inputText').value;

  // Remove empty lines
  var nonEmptyLines = inputText.split('\n').filter(function (line) {
    return line.trim() !== '';
  });
  var inputTextWithoutEmptyLines = nonEmptyLines.join('\n');

  // text count
  var charCount = inputTextWithoutEmptyLines.length;
  document.getElementById('char-count').textContent = charCount;

  // replace
  var outputText = inputTextWithoutEmptyLines

    // 漢字→ひらがな
    .replace(/言われています/g, 'いわれています')
    .replace(/下さい/g, 'ください')

    // 短縮
    .replace(/することができます/g, 'できます')
    .replace(/でしょう/g, 'と思います')
    .replace(/をすることが/g, 'が')
    .replace(/することが/g, 'が')

    // 逃げ言葉
    .replace(/いると思います/g, 'いるかもしれません')
    .replace(/いるでしょう/g, 'いるかもしれません')
    .replace(/重要です/g, '重要となります')
    .replace(/認められて/g, 'あるといわれて')
    .replace(/います/g, 'いるといわれています')
    .replace(/行われるべきです/g, '行われます')

    // 言い換え
    .replace(/行いましょう/g, '行うようにしてください')
    .replace(/行うことが/g, 'することが')
    .replace(/するといいです/g, 'することをおすすめします')
    .replace(/しましょう/g, 'することをおすすめします')
    .replace(/いきましょう/g, 'ください')
    .replace(/確認しましょう/g, 'ご確認ください')
    .replace(/専門医/g, '医師')
    .replace(/傷跡/g, '跡')
    .replace(/患者/g, '患者様')
    .replace(/男性型脱毛症（AGA）/g, 'AGA（男性型脱毛症）')
    .replace(/ことができます/g, 'できます')
    .replace(/ことができる/g, 'できる')
    .replace(/ようにすることをおすすめします/g, 'ください')
    .replace(/必要です/g, '必要となります')
    .replace(/相談することをおすすめします/g, 'ご相談ください')
    .replace(/有効な/g, '有効とされている')

    // 間違い修正
    .replace(/人工植毛/g, '人工毛植毛')
    .replace(/人口毛植毛/g, '人工毛植毛')
    .replace(/自毛植毛後/g, '自毛植毛の術後')
    .replace(/AGA（男性脱毛症）/g, 'AGA（男性型脱毛症）')

    // 削除
    .replace(/最大限に/g, '')
    .replace(/最大/g, '')
    .replace(/安全/g, '')

    // 空白行削除
    .replace(/^\s*[\r\n]/gm, '')

    // 句点で改行
    .replace(/。/g, '。\n');

  // output text
  document.getElementById('outputText').value = outputText;
});
