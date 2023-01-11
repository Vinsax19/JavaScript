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
myStr[0] = "H"; This won't work because you can't alter the string literal.
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

ACCESSING ARRAY DATA WITH INDEXES
ourArray = [50,60,70];
ourData = ourArray[0];
console.log(ourData);

MODIFY ARRAY DATA WITH INDEXES 
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

GLOBAL SCOPE VS LOCAL SCOPE

var outerWear = "T-shirt";
function myOutfit(){
    var outerWear = "sweater";
    return outerWear;
}
console.log(myOutfit());//Here the local scope takes precidence over the global scope because i logged the function. Since i called the function in the log it will output the variable declared in the function
console.log(outerWear);//Here it will log the variable declared outside the function because it is a global scope. 

RETURN A VALUE FROM A FUNCTION WITH RETURN
function minusSeven(num){
    return num - 7;
}
console.log(minusSeven(10));//Using the concept of passing values to functions with arguments, "num" is the argument and then you use the return keyword to subtract 7 from the argument

UNDERSTANDING UNDEFINED VALUE RETURNED FROM A FUNCTION
var sum = 0;
function addThree(){
    sum += 3;
}
console.log(addThree())//This is going to be undefined because you are not returning anything

ASSIGNMENT WITH A RETURNED VALUE
let changed = 0 //Initializing the variable
function change(num){
    return(num + 5) / 3
}

changed = change(10)// Assigning the returned value to the already initialiazed variable

STAND IN LINE
In computer science, a "Cue" is an abstract data structure where items are kept in order. New items can be added to the back of the cue and old items are taken off from the front of the cue 
function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
}

let testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));//JSON.stringify just basically converts the array into a string format
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

BOOLEAN VALUES: They are data types that return true or false values

USE CONDITIONAL LOGIC WITH IF STATEMENTS
An If statement is used to make decisions in code. The keyword "If" tells Javascript to execute the code in the curly braces under certain conditions defined in the parenthesis

function trueOrFalse(isItTrue){
    if (isItTrue) {
        return "Yes, it is true";
    }
   return "No, it is false"
}
console.log(trueOrFalse(false));

COMPARISON WITH THE EQUALITY OPERATOR
function testEqual(val){
    if (val == 12){// recall "==" is a comparsion operator while "=" is an assignment operator
        return "Equal";
    }// if the conditions here are met then it equls a true value, the code block would run else it will output the code block below it.
    return "Not Equal";
}

console.log(testEqual(10));

COMPARISON WITH THE STRICTLY EQUALITY OPERATOR
function testStrict(val){
    if(val === 7){ // The "===" operator checks for data type and value, unlike the equality operator that checks for only value and performs a type conversion. Strict equality does not perform type conversion
        return "Equal"
    }
    return "Not equal";
}

console.log(testStrict(10));

COMPARISON WITH THE INEQUALITY OPERATOR
function testNotEqual(value){
    if(value != 70){
        return "not equal";
    }
    return "equal";
}
console.log(testNotEqual(7));

COMPARISON WITH THE STRICTLY INEQUALITY OPERATOR
function testStrictNotEqual(value){
    if(value !== 17){
        return "not equal"
    }
    return "equal"
}
console.log(testStrictNotEqual("17"));

COMPARISONS WITH THE LOGICAL AND OPERATOR
function testGreaterThan(val){
    if(val > 100){
        return "Over 100";
    }

    if(val > 10){
        return "Over 10"
    }

    return "10 or under"
}

console.log(testGreaterThan(50));

COMPARISONS WITH THE GREATER THAN OR EQUAL TO OPERATOR
function testGreaterThanOrEqual (val){
    if (val >= 20){
        return "20 or Over"
    }
    if (val >= 10){
        return "10 or Over"
    }
    return "Less than 10"
}
console.log(testGreaterThanOrEqual(5));

COMPARISON WITH THE LESS THAN OPERATOR
function testLessThan(val){
    if (val < 20){
        return "Less than 20"
    }
}
console.log(testLessThan(5));


COMPARISON WITH THE LESS THAN OR EQUAL OPERATOR
function testLessThanOrEqual (val){
    if (val <= 20){
        return "20 or Less"
    }
}
console.log(testLessThanOrEqual(5));

COMPARISON WITH THE LOGICAL AND OPERATOR
function testLogicalAnd(val){
    if (val <= 50 && val >=25){
        return "yes";
    }
    return "no";
}
console.log(testLogicalAnd(5));

COMPARISON WITH THE LOGICAL OR OPERATOR
function testLogicalOr(val){
    if (val < 10 || val > 20){
        return "Outside";
    }
    return "Inside";
}
console.log(testLogicalOr(5));

ELSE STATEMENTS
function testElse(val){
    let result = ""
    if (val > 5){
        result ="Bigger than 5";
    }
    else {result ="5 or smaller";
    }
    return result
}
console.log(testElse(5));

ELSE IF STATEMENTS
*/
function testElseIf(val){
    if (val > 10){
        return "Greater than 10";
    }
    else if(val < 5) {
        return "smaller than 5";
    }
    else{
         return "Between 5 and 10"
    }
}
console.log(testElseIf(5));


