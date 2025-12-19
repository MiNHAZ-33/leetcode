const longestCommonPrefix = (strs) => {
    if (strs.length === 0) return "";
    let res = "";
    strs.sort((a, b) => b.length - a.length);
    const firstStr = strs.pop();
    for (let i = 0; i < firstStr.length; i++) {
        let charToMatch = firstStr[i];
        for (let j = 0; j < strs.length; j++) {
            if (j == strs[j].length || charToMatch !== strs[j][i]) {
                return firstStr.substring(0, i);
            }
        }
    }

    return res;

}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
