/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/


function countCharacters(string) {
	// Your code here
	let letters = string.split("")
	let output = {}
	for(let i=0; i<letters.length;i++){
		let count = 0
		for(let j=0;j<letters.length;j++){
			if (string[i]===string[j]){
			count+=1
			}
		}
		output[string[i]]=count
	}
	return output
}

function duplicateCharMinCount(string, minCount) {
	// Your code here
	let obj = countCharacters(string)
	let output = []
	for(key in obj){
		if(obj[key]>=minCount){
			output.push(key)
		}
	}
	console.log(output)
	return output

}

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
