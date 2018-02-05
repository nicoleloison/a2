//
// SENG 513 - Assignment 2
// Garance Nicole Loison
// UCID: 10083186
// lAB secion B06
//
/* ---- og code --
function getStats(txt) {
    return {
    nChars: 123,
    nWords: 22,
    nLines: 10,
    nNonEmptyLines: 22,
    averageWordLength: 3.3,
    maxLineLength: 33,
    palindromes: ["12321", "kayak", "mom"],
    longestWords: ["xxxxxxxxx", "123444444"],
    mostFrequentWords: [ "hello(7)", "world(1)" ]
    };
}
 */


/*number total chars in the txt*/
var nChars = function (string_txt){
    var characters = string_txt.length;
    return characters;
}


/*number of NON UNIQUE +++++++ words in the txt*/
var nWords = function (string_txt){
    var words = string_txt.split(" ");
    return words.length;
}

/*number of total lines in the txt */
var nLines = function (string_txt){
    var lines = string_txt.split(/\r\n|\r|\n/).length;
    return lines;
}

String.isNullOrEmpty = function (my_string) {
    return !my_string;
}

/*number of non empty lines in txt NOT WORKING*/
var nNonEmptyLines = function (string_txt){
    var lines = string_txt.split(/\r\n|\r|\n/);
    var number_lines = lines.length;
    for (index = 0; index < lines.length; ++index) {
        if(lines[index].localeCompare(" ")){
         number_lines = number_lines - 1;
        }
    }
    return number_lines;
}


/*avg length of words in txt*/
var averageWordLength = function (string_txt){
    var words = string_txt.split(" ");
    var sum=0;
    for (index = 0; index < words.length; ++index) {
       sum = sum + words[index].length;
    }
    return sum/words.length;
}

/*max line length*/
var maxLineLength = function (string_txt){
    var lines = string_txt.split(/\r\n|\r|\n/);
    var temp_max =0;
    for (index = 0; index < lines.length; ++index) {
        if(temp_max<lines[index].split(" ").length){
            temp_max = lines[index].split(" ").length;
        }
    }
    return temp_max;
}


/*find all palindromes of txt*/
var palindromes = function (string_txt){
    var words = string_txt.split(" ");
    var pal;
    for (index = 0; index < words.length; ++index) {
        /*palindromes have only odd number of letters so only check those
        if ((words[index].length % 2) == 1 ){
            pal = pal.append(words[index]);
        }*/
        pal= words[index];
    }
    return pal;
}
 
function getStats(txt)  {
   
    return {
    nChars: nChars(txt),
    nWords: nWords(txt),
    nLines: nLines(txt),
    nNonEmptyLines: nNonEmptyLines(txt), //NOT WORKING
    averageWordLength: averageWordLength(txt),
    maxLineLength: maxLineLength(txt),
    palindromes: palindromes(txt),
    longestWords: ["xxxxxxxxx", "123444444"],
    mostFrequentWords: [ "hello(7)", "world(1)" ]
    };
}


/*

 function nWords(txt){
 return ("numbers of words in the file is /n", 22);
 }
 
 
function nLines(txt){
    return ("numbers of lines in the file is /n", 10);
}

function nNonEmptyLines(txt){
    return ("numbers of non empty in the file is /n", 22);
}

function averageWordLength(txt){
    return ("average word length in the file is /n", 3.3);
}

function maxLineLength(txt){
    return ("The maximum line length of the file is /n", 33);
}

function palindromes(txt){
    var list_pal = ["kayak", "mom"];
    return ("The palindrome of the file are: /n", list_pal);
}

function longestWords(txt){
    var list_long = ["xxxxxxxxx", "123444444"];
  return ("The longest words in the file are: /n", list_long);
}

function mostFrequentWords(txt){
    var list_freq = [ "hello(7)", "world(1)" ];
    return ("numbers of non empty in the file is /n", list_freq);
}

function error_checking_input(txt){
    return ("not implemented yet /n");
}
 */
