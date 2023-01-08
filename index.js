/* Data types
Undefined, null, boolean, string, symbol, number and object
*/

//Every line in javascript should end with a semicolon ';'

// A variable is a way to store and manipulate data
/* Ways of declaring variables are
var myName = "Alvin" "var is a way to declare a variable that is going to be used through out your program, it can be changed later....."
let ourName = "Vin music" "let will only be used within the scope in which it is declared "
const pi = 3.14  "const is a variable that should never change or it can't be changed"


var a; 'this is just declaring a variable'
var b = 2; 'this is declaring and assigning in one'

console.log: it allows you to see things in the console*/
//JavaScript is a case sensitive language and it's common practice to use carmel case
/* Addition
var sum = 10 + 10
console.log(sum) 

SUBTRACTION OPERATOR: -
DIVISION OPERATOR: /
MULTIPLICATION OPERATOR: *
REMAINDER OPPERATOR: %
COMPOUND ASSIGNMENT WITH AUGUMENTED ADDITION:
var a = 3;

a = a + 12;
    OR
a += 12; //Shorthand  

COMPOUND ASSIGNMENT WITH AUGUMENTED SUBTRACTION:
var a = 3;

a = a - 12;
    OR
a -= 12; //Shorthand  

COMPOUND ASSIGNMENT WITH AUGUMENTED MULTIPLICATION:
var a = 3;

a = a * 12;
    OR
a *= 12; //Shorthand  

COMPOUND ASSIGNMENT WITH AUGUMENTED DIVISION:
var a = 3;

a = a / 12;
    OR
a /= 12; //Shorthand  



INCREMENTING A NUMBER

myVar = 87;
myVar = myVar + 1;
myVar++; //shorthand to incrementing 
console.log(myVar)

DECREMENTING A NUMBER
myVar = 87;
myVar = myVar - 1;
    OR
myVar--; // shorthand for decrementing    

DECLARING STRING VARIABLES
myFirstName = "Alvin"; The words/characters in the quotation mark are called strings literals

ESCAPING LITERAL QUOTES IN STRINGS
var myStr = "I am a "double quoted" string inside "double quotes"";
To fix the problem above, you use the escape character which is a back slash "\"
It is used by putting the back slash in the front of each character you wan escape
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
You can also avoid the problem by using single quotes to surround the string i.e 'I am a "double quoted" string in a "single quote"';

There are things you can escape also for example
\' single quote
\"  double quote
\\  backslash
\n  newline
\r  carriage return
\t  tab
\b  backspace
\f  form feed

CONCATENATION WITH PLUS OPERATOR
myVar = "i come first"  + " I come second"

CONCATENATION WITH PLUS EQUALS OPERATOR
var ourStr = "I come first. ";
ourStr += "I come second.";

CONSTRUCTING STRINGS WITH VARIABLE
var myName = "Alvin";
var ourStr = "Hey, my name is " + myName + ", how are you?";

APPENDING VARIABLES TO STRINGS
var anAdjective  = "awesome!";
var ourString = "Alvin is ";
ourString += anAdjective;
console.log(ourString);

FINDING THE LENGTH OF A STRING
var firstNameLength = 0
var myFirstName = "Ada";
firstNameLength = myFirstName.length;
console.log(firstNameLength);

BRACKET NOTATION TO FIND FIRST CHARACTER IN STRING
var firstName = "Alvin"
firstLetterOfFirstName = firstName[0] This is just basically a way to get the first letter of the firstname using the index number. Because javascript is a zero-index language, the first index number would be zero 

STRING IMMUTABILITY: It implies that a string cannot be altered once created which means you can't change the string literals individually. But it doesn't mean the string can't be changed
var myStr = "Jello world";
myStr[0] = "H"; This won't work because you can alter the string literal.
myStr = "Hello world"; This is the way to fix the problem, you have just replaced the other string with a new one by assigning it to the variable of the old string.

BRACKET NOTATION TO FIND NTH CHARACTER IN STRING
var firstName = "Alvin"
secondLetterOfFirstName = firstName[1] It's the same concept as finding the first letter

BRACKET NOTATION TO FIND THE LAST CHARACTER IN STRING
var firstName = "Alvin"
lastLetterOfFirstName = firstName[firstName.length - 1] This a way to find the last letter/character of a string by putting the '.length' operator in a square bracket then subtracting 1 because javascript is zero-index language

BRACKET NOTATION TO FIND NTH-TO-LAST CHARACTER IN STRING
var firstName = "Alvin"
secondToLastLetterOfFirstName = firstName[firstName.length - 2] This a way to find the second-to-last letter/character of a string by putting the '.length' operator in a square bracket then subtracting 2, since you're looking for the second to last character

WORD BLANKS

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = '';
    result += "The " + myAdjective + " " +myNoun + " " + myVerb + " to the store " + myAdverb
    return result
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));

ARRAYS: It allows you to store several pieces of data in one place.
var ourArray = ["John", 23];

NESTED ARRAYS: When one of the elements in an array is another it's called a nested array or a multidimensional array.
var myArray = [["Alvin", 20],["temi",21]];

ACCESSING ARRAY DATA WITH INDEXED
ourArray = [50,60,70];
ourData = ourArray[0];
console.log(ourData);

MODIFY ARRY DATA WITH INDEXES 
let ourArray = [16,17,19];
ourArray[1] = 20;
console.log(ourArray);

ACCESS MULTI-DIMENSIONAL OR NESTED ARRAYS WITH INDEXES 
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
let myData = myArray[3][0][0]
console.log(myData);

MANIPULATE ARRAYS WITH push(): The ".push()" function is used to add data to the end of an array

let ourArray = ['cassava', 'garri', 'eba'];
ourArray.push('happy','balablue');
console.log(ourArray); 

MANIPULATE DATA WITH pop(): The ".pop()" function is used to remove the last data from an array 

let ourArray = [1,2,3];
let deletedData = ourArray.pop(); //This is if you want save the deleted data into a variable.....
console.log(ourArray);

MANIPULATE ARRAYS WITH shift(): The ".shift()" function is similar to the ".pop()" function but the difference is that the ".shift()" function is used to remove the first element in the array.
let ourArray = ["vinsax", 20]
ourArray.shift()
console.log(ourArray);

MANIPULATE ARRAYS WITH unshift(): The ".unshift()" function is used to add elements to the beginning of an array
let ourArray = ["amarachi","alvin", "timi", "busayo","temi"]
ourArray.shift();
ourArray.pop();
ourArray.unshift('temi');
ourArray.push('amarachi');
console.log(ourArray);

WRITING REUSABLE CODE WITH FUNCTIONS
Functions allows us to create reusable code. it is written in this manner: 

function ourReusableFunction(){
    console.log('Hey bro');
}// The block of code inside the curly braces will run anytime the function is called

ourReusableFunction();

PASSING VALUES TO FUNCTIONS WITH ARGUMENTS

function ourFunctionWithArgs(a,b) {
    console.log(a + b);
}
ourFunctionWithArgs("Hey ","world")

GLOBAL SCOPE AND FUNCTIONS
Scopes refers to the visiblity of variables, variables which are defined outside of a function block have global scope. Global scope means they can be seen everywhere in your Javascript code.

LOCAL SCOPE AND FUNCTIONS: Variables declared within a function as well as the function parameters have local scope. That means they are only visible from within the function
*/

















