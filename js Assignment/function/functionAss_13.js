//Write a function to check if an input string is a palindrome Function

function palindrome(str){
    str=str.toLowerCase();
    for(i=0; i<str.length; i++){
        if(str.charAt(i)!=str.charAt(str.length-1)){
            return false
        }
        return true;
    }
}
console.log(palindrome("madam"));
console.log(palindrome("Madam"));
console.log(palindrome("Banana"));
console.log(palindrome("Radar"));