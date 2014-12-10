
/**
 * Author: M. Adan
 * Assignment: Javascript Challenge 
 * Date: December 2014
 */

/* ................/
*                  *
*CHALLENGE # 1     *
*                  *
/................. */

"use strict"; 
function getRelationship(x, y) {
    // when x and y are not numbers
    if (isNaN(x) && isNaN(y)){
        return "Can't compare relationships because" + " " + x + " " + "and" +" " + y + " " + "are not numbers";
    }
    // only when x is not a number
    else if (isNaN(x)){
        return "Can't compare relationships because" + " " + x + " " + "is not a number";
    }
    // only when y is not a number
    else if (isNaN(y)){
        return "Can't compare relationships because" + " " + y + " " + "is not a number";
    }

    // when x is less than y
    else if (x < y){
        return "<"; 
    }
    // x is greater than
    else if (x > y){
        return ">"; 
    }
    
    // y is less than x 
    else if (y < x){
        return "<"; 
    }

    // y is greater than x
    else if (y > x){
        return ">"; 
    }

    // x and y are equal
    else {
        return "="; 
    }
}

// earthlings
var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];


/* ................/
*                  *
*CHALLENGE # 2    *
*                  *
/................. */

function alphabetizer(names) {
    // bucket for array
    var newArray = [];
    // loop through array
    for (var name in names){
        // push every name into array, call some method(s) on it
        newArray.push(names[name].split(" ").reverse().join(", "));
        //newArray.reverse();
       
    }
    // return sorted array
    return newArray.sort();
}



/* ................/
*                  *
*CHALLENGE # 3     *
*                  *
/................. */

// Iterate through the localizedRuleNames in ruleResults and 
// return an array of their strings.
function ruleList(results) {
    // declare an empty array
    var result = [];

    // empty array which will store iteration
    var temp = [];
    // loop through the JSON data 
    for (var index in results.formattedResults.ruleResults) {
  
    // store array  
    temp = results.formattedResults.ruleResults[index].localizedRuleName;

    // push values into results array
    result.push(temp); 


}

// upon success return results array
return result; 
  }

// Iterate through pageStats in the psiResults object and 
// return the total number of bytes to load the website.
function totalBytes(results) {
    // declare a variable that contains final result
    var sum = 0; 
    
    // 
    var bytes; 

    // loop through json to group values for pageStats
    for( var index in results.pageStats){
      
      // search string
      var token = index.indexOf("Bytes");
      
      // check to see if token inside is not zero or less
      if(token > 0) {

        // store parsed string which returns an integer
        bytes = parseInt(results.pageStats[index], 10);
        
        // sum it all up and make type is Number
        sum += Number(bytes); 

      }
    }

    // return the total sum of bytes
    return sum; 
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  
     "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));
