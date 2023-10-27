
function getAnagram(str1,str2){
    let str1Upd = str1.replaceAll(" ", "").toLowerCase();
    let str1Letters = str1Upd.split("");
    let str2Upd = str2.replaceAll(" ", "").toLowerCase();
    let str2Letters = str2Upd.split("");
    return str1Letters.sort().join("") === str2Letters.sort().join("")? `"${str1}" is an anagram of "${str2}"` : `"${str1}" and "${str2}" are not anagrams.`
}

console.log(getAnagram("Astronomer","Moon starer"));
console.log(getAnagram("School master", "The classroom"));
console.log(getAnagram("The Morse Code", "Here come dots"));
console.log(getAnagram("The Non-Morse Code", "Here come cats"));
