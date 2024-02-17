/**
 * Write a function to determine if one String is 
 * a case-insensitive anagram of another String
 */

let isAnagram = function (str1, str2) {
    const letterStr1 = str1.split('');
    const letterStr2 = str2.split('');
     
    for (let i = 0; i <= str2.length - 1 ; i++) {
        if(letterStr1.length !== letterStr2.length || !letterStr1.includes(letterStr2[i])) {
            return false;
        } 

    }
    
    return true  
}

console.log(isAnagram('hello', 'jello'));
console.log(isAnagram('hello', 'loelh'));