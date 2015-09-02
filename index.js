var copy = require('copy-paste').copy;
var charMap = {
  'A': 'Ⓐ',
  'B': 'Ⓑ',
  'C': 'Ⓒ',
  'D': 'Ⓓ',
  'E': 'Ⓔ',
  'F': 'Ⓕ',
  'G': 'Ⓖ',
  'H': 'Ⓗ',
  'I': 'Ⓘ',
  'J': 'Ⓙ',
  'K': 'Ⓚ',
  'L': 'Ⓛ',
  'M': 'Ⓜ',
  'N': 'Ⓝ',
  'O': 'Ⓞ',
  'P': 'Ⓟ',
  'Q': 'Ⓠ',
  'R': 'Ⓡ',
  'S': 'Ⓢ',
  'T': 'Ⓣ',
  'U': 'Ⓤ',
  'V': 'Ⓥ',
  'W': 'Ⓦ',
  'X': 'Ⓧ',
  'Y': 'Ⓨ',
  'Z': 'Ⓩ',
  'a': 'ⓐ',
  'b': 'ⓑ',
  'c': 'ⓒ',
  'd': 'ⓓ',
  'e': 'ⓔ',
  'f': 'ⓕ',
  'g': 'ⓖ',
  'h': 'ⓗ',
  'i': 'ⓘ',
  'j': 'ⓙ',
  'k': 'ⓚ',
  'l': 'ⓛ',
  'm': 'ⓜ',
  'n': 'ⓝ',
  'o': 'ⓞ',
  'p': 'ⓟ',
  'q': 'ⓠ',
  'r': 'ⓡ',
  's': 'ⓢ',
  't': 'ⓣ',
  'u': 'ⓤ',
  'v': 'ⓥ',
  'w': 'ⓦ',
  'x': 'ⓧ',
  'y': 'ⓨ',
  'z': 'ⓩ',
  '1': '①',
  '2': '②',
  '3': '③',
  '4': '④',
  '5': '⑤',
  '6': '⑥',
  '7': '⑦',
  '8': '⑧',
  '9': '⑨',
  '0': '⓪'
};


function bubs(message, options) {
  if (message) {
    message = message.trim().replace(/[a-z0-9]+?/gi, function(letter) {
      var replacement = charMap[letter];
      if (replacement) {
        if (options && options.loud) replacement = replacement.toUpperCase();
      }
      return replacement;
    });
    return message.replace(/\s{2,}/, ' ');
  }
  return "";
}

module.exports = bubs;

if (process.argv.length > 2) {
  var loud = !!(process.argv.length > 3 && process.argv[3] && process.argv[3].toLowerCase() === '--loud');
  var message = bubs(process.argv[2], { loud: loud });

  var ret = copy(message, function(err) {
    console.log(message);
    if (err) {
      console.log('Failed to write to clipboard: ' + err.message);
    }
    process.exit(0);
  });
}
