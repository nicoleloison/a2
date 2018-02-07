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
 
 1. check non empty line
 2. fix longest word redundancy
 3. compute proper palindrom check
 */

/*Table of unique words in txt, key:word, val:freq*/

var wordTable={};

function fill_wordTable(input){
    for (index = 0; index < input.length; ++index) {
        if( input[index] in wordTable ){
            wordTable[input[index]] ++;
        }
        else{
            //add word to hash table with value = 1
            wordTable[input[index]]=1;
        }
    }
}

Object.filter = (obj, predicate) => Object.keys(obj)
.filter( key => predicate(obj[key]) )
.reduce( (res, key) => (res[key] = obj[key], res), {} );

function mostFrequentWords(){
    var maxfreq = Math.max(...Object.values(wordTable));
    var most_freq = Object.filter(wordTable, value => value == maxfreq);
    return most_freq;
}


/*removes punctuation from txt , keeping only white spaces and new lines*/
var no_punc = function (string_txt){
   var  no_punc = string_txt.replace(/[^\w\s]|'\n'/g, "");
    return no_punc;
}

/*moves words from txt to table*/
var transfer_to_table = function (string_txt){
    var array_w = no_punc(string_txt).toLowerCase().replace(/\s+/g, " ").split(" ");
    fill_wordTable(array_w);
}

//to be deprec
/*returns just the words in a array */
var the_words = function (string_txt){
    var the_words = no_punc(string_txt).toLowerCase().replace(/\s+/g, " ");
    the_words = the_words.split(" ");
    return the_words;
}

/*Will contain the total number of characters in the text, including all white spaces.*/
var nChars = function (string_txt){
    var characters = string_txt.length;
    return characters;
}

/*Will contain the total number of words in the text. For example, “Hello, World-1!” contains three words:
 “hello”, “world” and “1”*/
var nWords = function (string_txt){
    transfer_to_table(string_txt);
    const num_w = Object.values(wordTable).reduce((t, n) => t + n);
    return num_w;
}

/*Will contain the number of lines in the text .*/
var nLines = function (string_txt){
    var lines = string_txt.split(/\r\n|\r|\n/).length;
    return lines;
}

/*Will contain the number of lines in the text containing at least one visible character. We will define visible
 character as any character other than whitespace (space, new-line and tab).*/
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

/*returns avg length of words in txt*/
var averageWordLength = function (string_txt){
    var words = Object.keys(wordTable);
    var freq = Object.values(wordTable);
    const sum = words.reduce((cum, w) => cum + w.length, 0);
    const divident =  freq.reduce((cum, f) => cum + f, 0);
    return sum/divident;
}



/*TOFIX for some reason but ugly */
/*returns max line length*/
var maxLineLength = function (string_txt){
    var lines = string_txt.split(/\r\n|\r|\n/);
    var temp_max =0;
    for (index = 0; index < lines.length; ++index) {
        
        
        if(temp_max<lines[index].split(" ").length){//need to fix the line to word split
            temp_max = lines[index].split(" ").length;
        }
    }
    return temp_max;
}

function checkPalindrom(word) {
    return word == word.split('').reverse().join('');
}

/*returns all palindromes of txt*/
var palindromes = function (string_txt){
    var words =Object.keys(wordTable);
    var pal= [];
    for (index in words){
        if ( checkPalindrom(words[index])=== true && words[index].length > 1){
            pal.push(words[index]);
        }
    }
    return pal;
}

/*returns all longest word in txt*/
function longestWords(){
    var words = Object.keys(wordTable);
    var word_length = words.map(elem => elem.length);
    var max_l = Math.max(...word_length);
    var longest_w =[];
    for (index=0; index< words.length; index ++){
        if (words[index].length == max_l){
            longest_w.push(words[index]);
        }
       
    }
    //IF TIME ONLY, find a filter for array words with the condition
    return longest_w;
}
/******************** og function + my functions **********************/
function getStats(txt)  {

    return {
    nChars: nChars(txt),
    nWords: nWords(txt),
    nLines: nLines(txt),
    nNonEmptyLines: nNonEmptyLines(txt), //WORKING ????
    averageWordLength: averageWordLength(txt),
    maxLineLength: maxLineLength(txt),
    palindromes: palindromes(txt),//TOFIX proper algo
    longestWords: longestWords(),//TOFIX redundant longes words
    mostFrequentWords: mostFrequentWords()
    };
}


