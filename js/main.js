/* 
*** Arranged by "The Sly Kai" *** 
** Written by the creative minds of GEOG 575 **
*/

//initialize function called when the script loads
function initialize(){
    cities();
    
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
        { 
            city: 'Baltimore',
            population: 655884
        },
        {
            city: 'Corgi-ston',
            population: 130113
        },
        {
            city: 'Sin City',
            population: 583756
        },
        {
            city: 'Waco-Taco',
            population: 130193
        }
    ];

    //append the table element to the div
    $("#mydiv").append("<table>");

    //append a header row to the table
    $("table").append("<tr>");

//add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" +
        cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);

        
    };

    // call the 'addColumns' function to complete table
    // pass the cityPop varible as argument to add new col
    
    addColumns(cityPop);

    // Create event-driven interactions with the table
    addEvents();

};

// New code from 'debug.js'

/* This function adds a new column category
called "City Size" and classifies the size 
of cities based on population cutoffs
*/

function addColumns(cityPop){


    $('tr').each(function(i){

        /*
        'If' statement determines how to implement a new column
        to the table. '0' case, and adapts for iteration through
        the array argument passed into function  
        */

        if (i == 0){
            
            // Add new column to table
            $(this).append('<th>City Size</th>');

            // Add to 'i' variable to iterate through array object
            i++;

        } else {

                // declare variable for new column 
                var citySize;

                // Numerical population cutoffs for 'City Size' variable
                // Assign value to variable 

                if (cityPop[i-1].population < 100000){
                    citySize = 'Small';

                } else if (cityPop[i-1].population < 500000){
                    citySize = 'Medium';

                } else {
                    citySize = 'Large';
                };

                // Test statement 
                //console.log(cityPop);

                // Add variable 'City Size' to the table 
                $(this).append('<td>' + citySize + '</td>');

                

        };

        // Add to 'i' variable to iterate through array object 
        i++;      

    });
};

/* This function provides instructions for event-driven
methods to 
*/

function addEvents(){

    $("table").mouseover(function(){
        
        var color = "rgb(";

        for (var i=0; i<3; i++){

            var random = Math.round(Math.random() * 255);

            color += random;

            if (i<2){
                color += ",";
            
            } else {
                color += ")";
        };        
           
            // Test statement 
            // console.log(color);
        };

        $(this).css('color', color);
    });

    /* Event activated when user clicks on the table
    Respond with "Hey, you clicked me!" dialogue
    */

    function clickme(){

        alert('Hey, you clicked me!');
    };

    $('table').on('click', clickme);
    $( 'table' ).on( "mouseover", function() {

    });

};


//call the initialize function when the window has loaded
$(document).ready(initialize);