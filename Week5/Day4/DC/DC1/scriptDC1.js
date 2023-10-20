// 1. Create a variable called sentence.The value of the variable should be a string that contains the words “not” and “bad”.
// 2. Create a variable called wordNot where it’s value is the first appearance(ie.the position) of the substring “not” (from the sentence variable).
// 3. If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// 4. If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.

let sentence = "This dinner is not so bad.";
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");


if (wordNot < wordBad && wordNot != -1 && wordBad != -1) {
    let newSentence = sentence.substring(0, wordNot) + "good" + sentence.substring(wordBad + 3);
    console.log(newSentence);
} else {
    console.log(sentence);
}












