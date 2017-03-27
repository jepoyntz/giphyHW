
//SETUP VARIABLES

var authkey = "a6f9a5320d1840048ffb027df13c74fe";


//Search Parameters
var queryTerm =     "";
var numResults =     0;
var startYear =      0;
var endYear =        0;

//URL Base
var queryURLBase = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authkey;


//Variable to track number of articles
var articleCounter = 0;

//FUNCTIONS
//
 function runQuery(numArticles, queryURL){
    //AJAX function
    $.ajax(url: queryURL,
            method: "GET")
    .done(function(NYTData) {   //nyt data is usually (response)
        //NYTData will store everything recieved in the Json
        console.log(NYTData);
    });
 }


 // MAIN PROCESSES
 //create onclick event

 $("#searchButton").on('click', function(){
    //this runQuery function expecting 2 arguements
    runQuery
 })