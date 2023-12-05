const isPalindrome = str => {
    if (str === str.split('').reverse().join('')){
        console.log(str+" is a palindrome")
    }else{
        console.log(str+" is not a plaindrome")
    }
};
isPalindrome("wasitahatisaw")