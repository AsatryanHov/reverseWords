function reverseWords(str) {
  let x = str;
  let wordReverse = x.split("").reverse().join("");
  let sentenceReverse = wordReverse.split(" ").reverse().join(" ");
  return sentenceReverse;
}
