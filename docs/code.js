//
// SENG 513 - Assignment 2
// Garance Nicole Loison
// UCID: 10083186
// lAB secion B06
//

/*global string of the input txt*/
var input_txt;

/*Table of unique words in txt, key:word, val:freq*/
var wordTable={};

function fill_wordTable(){
    var input_words = input_txt.toLowerCase().replace(/\s+/g, " ").split(" ");
    for (index = 0; index < input_words.length; ++index) {
        if( input_words[index] in wordTable ){
            wordTable[input_words[index]] ++;
        }
        else{
            //add word to hash table with value = 1
            wordTable[input_words[index]]=1;
        }
    }
    return wordTable;
}

/*populates global variables depending on input*/
function populate_global_variables(string_txt){
    input_txt = string_txt.replace(/[^\w\s]|'\n'/g, "");
    fill_wordTable();
}

/*empties the stored global variables */
function clear_data(){
    for (var member in wordTable){
        delete wordTable[member];
    }
    input_txt = "";
}

/*filter function for the object, used in most freq and longest word*/
Object.filter = (obj, predicate) => Object.keys(obj)
.filter( key => predicate(obj[key]) )
.reduce( (res, key) => (res[key] = obj[key], res), {} );

/*Will contain the total number of characters in the text, including all white spaces.*/
var nChars = function (string_txt){
    var characters = string_txt.length;
    return characters;
}

/*Will contain the total number of words in the text. For example, “Hello, World-1!” contains three words:
 “hello”, “world” and “1”*/
function nWords(){
    const num_w = Object.values(wordTable).reduce((t, n) => t + n);
    return num_w;
}

/*Will contain the number of lines in the text .*/
function nLines(){
    var lines = input_txt.split(/\r\n|\r|\n/).length;
    return lines;
}

/*Will contain the number of lines in the text containing at least one visible character. We will define visible
 character as any character other than whitespace (space, new-line and tab).*/
function nNonEmptyLines(){
    var lines = input_txt.split(/\r\n|\r|\n/);
    var number_lines = lines.length;
    for (index = 0; index < lines.length; ++index) {
        var first_char =lines[index][0];
        if(first_char===" " || first_char==="/n" ){
         number_lines = number_lines - 1;
        }
    }
    return number_lines;
}

/*returns avg length of words in txt*/
function averageWordLength(){
    var words = Object.keys(wordTable);
    var freq = Object.values(wordTable);
    const sum = words.reduce((cum, w) => cum + w.length, 0);
    const divident =  freq.reduce((cum, f) => cum + f, 0);
    return sum/divident;
}

//if time fix in pretier
/*returns max line length*/
function maxLineLength (){
    var lines = input_txt.split(/\r\n|\r|\n/);
    var temp_max =0;
    for (index = 0; index < lines.length; ++index) {
        
        
        if(temp_max<lines[index].split(" ").length){//need to fix the line to word split
            temp_max = lines[index].split(" ").length;
        }
    }
    return temp_max;
}

/*helper function for pal, return bool*/
function palindrom_check(string) {
    return string == string.split('').reverse().join('');
}

/*returns all palindromes of txt*/
function palindromes (){
    var words =Object.keys(wordTable);
    var pal= [];
    for (index in words){
        if ( palindrom_check(words[index])=== true && words[index].length > 1){
            pal.push(words[index]);
        }
    }
    if (pal.length == 0){
        return null;
    }
    
    else
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
    return longest_w;
}

/*returns all most frequent words with their frequency*/
function mostFrequentWords(){
    var maxfreq = Math.max(...Object.values(wordTable));
    var most_freq = Object.filter(wordTable, value => value == maxfreq);
    clear_data();//is here because last function called
    return most_freq;
}

/******************** og function + my functions **********************/
function getStats(txt)  {
    
    populate_global_variables(txt);
    
    return {
    nChars: nChars(txt), //has to use og txt for proper count
    nWords: nWords(),
    nLines: nLines(),
    nNonEmptyLines: nNonEmptyLines(),
    averageWordLength: averageWordLength(),
    maxLineLength: maxLineLength(),
    palindromes: palindromes(),
    longestWords: longestWords(),
    mostFrequentWords: mostFrequentWords(),
    };
}


