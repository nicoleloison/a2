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
 
 
 
 
 IDEAS: PUT ALL WORDS IN GLOBAL HASHTABLE WITH WORD => LENGTH OR WORD => FREQ
 */
var my_words = function (string_txt){
    var words = string_txt.split(" ").toLowerCase();//need to fix the line to word split
    return words;
}



/*return number total chars in the txt*/
var nChars = function (string_txt){
    var characters = string_txt.length;
    return characters;
}


/*returns number of NON UNIQUE +++++++ words in the txt*/
var nWords = function (string_txt){
    var words = string_txt.split(" ");//need to fix the line to word split
    return words.length;
}

/*returns number of total lines in the txt */
var nLines = function (string_txt){
    var lines = string_txt.split(/\r\n|\r|\n/).length;
    return lines;
}

/*returns number of non empty lines in txt NOT WORKING*/
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
    var words = string_txt.split(" ");//need to fix the line to word split
    var sum=0;
    for (index = 0; index < words.length; ++index) {
       sum = sum + words[index].length;
    }
    return sum/words.length;
}

/*TOFIX*/
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


/*TOFIX*/
/*returns all palindromes of txt*/
var palindromes = function (string_txt){
    var words = string_txt.split(" ");
    var pal= [];
    for (index = 0; index < words.length; ++index) {
        var current_word =  words[index].split('');
        //palindromes cannot be just one letters
        if (words[index].length !== 1 && words[index].length !== 0){
            if (current_word[0] == current_word[current_word.length-1]){
                  pal.push(words[index]);
            }
        }
    }
    return pal;
}

/*TOFIX*/
/*returns all longest word in txt*/
var longestWords = function (string_txt){
    var words = string_txt.split(" ");
    var long_word = ["0"];//needs initialisation for comparaison
   
    for (index = 0; index < words.length; ++index) {
        var current_word = words[index];

        if (current_word.length > long_word[0].length ){
            long_word.length = 0 ;
            long_word.push(current_word);
        }
        else if (current_word.length == long_word[0].length) {
            long_word.push(current_word);
        }
    }
    return long_word;
}


/*TOFIX*/
/*returns all most frequent word in txt*/
var mostFrequentWords = function (string_txt){
    var words = string_txt.split(" ");
    
    //all words in text will be in a hashtable word_hash
    var word_hash = {};
    
    var most_freq = {
    word:[],
    freq: 0,
    };
    
    for (index = 0; index < words.length; ++index) {
        //case 1: word already in hash table
        if( words[index] in word_hash ){
            var current_word = words[index];
            
            //increase value in hash table for word by 1
            word_hash[current_word] ++;
            
            //if the max fqcy is smaller than the fqcy of the word, replace
            if ( word_hash[current_word] > most_freq.freq){
                most_freq.word.length =0; //clears the word array
                most_freq.word.push(current_word);
                most_freq.freq = word_hash[current_word];
            }
            
            //if the max fqcy is equal to the fqcy of the word, add
            else if ( word_hash[current_word] == most_freq.freq){
                most_freq.word.push(current_word);
                most_freq.freq = word_hash[current_word];
            }
        }
        //case 2: word not in hash table
        else{
            //add word to hash table with value = 1
            word_hash[words[index]]=1;
        }
    }
    var results = most_freq.word.concat(most_freq.freq);
    return results;
}


/******************** og function + my functions **********************/
function getStats(txt)  {
   
    return {
    nChars: nChars(txt),
    nWords: nWords(txt),//TOFIX NEED TO ADD SPERATOR AS NOT ONLY WHITE SPACES
    nLines: nLines(txt),
    nNonEmptyLines: nNonEmptyLines(txt), //WORKING ????
    averageWordLength: averageWordLength(txt),
    maxLineLength: maxLineLength(txt),
    palindromes: palindromes(txt),//TOFIX NOT FINISHED
    longestWords: longestWords(txt),//TOFIX
    mostFrequentWords: mostFrequentWords(txt)//TOFIX
    };
}


