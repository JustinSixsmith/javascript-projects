// Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let start = 0;
  let charMap = {};

  for (let end = 0; end < s.length; end++) {
    const currentChar = s.charAt(end);

    if (charMap[currentChar] >= start) {
      start = charMap[currentChar] + 1;
    }

    charMap[currentChar] = end;

    const currentLength = end - start + 1;
    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
};

const inputString = 'abcabcbb';
const result = lengthOfLongestSubstring(inputString);
console.log(result);
