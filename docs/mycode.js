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


/*
 TODO
 
 1. FIX WORDS BY ALLOWING PUNCTUATION TO BE A WORD DIVIDER
 2. FIX NON EMPTY LINES
 3. FINISH PALINDROMES AND LONGEST WORD 
 4. DO MOST FREQUENT WORD.
 5. MAKE IT WAY NICER, GLOBAL ARRAY OF ALL WORDS WOULD BE FOR INSTANCE A GO TO
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

/*number of non empty lines in txt NOT WORKING*/
var nNonEmptyLines = function (string_txt){
    var lines = string_txt.split(/\r\n|\r|\n/);
    var number_lines = lines.length;
    for (index = 0; index < lines.length; ++index) {
        var first_char =lines[index][0];
        if(first_char===" "){
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
        /*palindromes have only odd number of letters so only check those*/
        if ((words[index].length % 2) == 1 ){
            //for now only will show last odd word TODO
            //righ now return last odd word
            pal= words[index];
        }
    }
    return pal;
}
/*TODO*/
var longestWords = function (string_txt){
    var words = string_txt.split(" ");
    var long_word = words[0];
    for (index = 0; index < words.length; ++index) {
        /*palindromes have only odd number of letters so only check those*/
        if (words[index].length > long_word.length ){
            //for now only return last longest word
            long_word = words[index];
        }
    }
    return long_word;
}
/******************** og function + my functions **********************/
function getStats(txt)  {
   
    return {
    nChars: nChars(txt),
    nWords: nWords(txt),//NEED TO ADD SPERATOR AS NOT ONLY WHITE SPACES
    nLines: nLines(txt),
    nNonEmptyLines: nNonEmptyLines(txt), //NOT WORKING
    averageWordLength: averageWordLength(txt),
    maxLineLength: maxLineLength(txt),
    palindromes: palindromes(txt),//NOT FINISHED
    longestWords: longestWords(txt),//NOT FINISHED
    mostFrequentWords: [ "hello(7)", "world(1)" ]
    };
}


