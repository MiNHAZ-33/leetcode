const romanToInt = (s) => {
  const romanTable = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanTable[s[i]] < romanTable[s[i + 1]] ? -romanTable[s[i]] : romanTable[s[i]];
    result += current;
  }
  console.log(result)
}
romanToInt("III"); // Example usageAAA
