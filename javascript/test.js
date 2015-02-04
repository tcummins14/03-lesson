//this is a single-line comment in javascript

/*BLOCK COMMENT good for whole section in comments    */


//VARIABLES ***********************************

var firstName = "Theresa"; //setting a variable
var lastName = "Cummins"; 


//userName = "Bob"; //using a variable
// the = is the assignment operator

/* 
Bad variable names: 
-starting with number
-"Time"
-"var"
-"variable111"
-really long variable names
*/


//USING SINGLE AND DOUBLE QUOTES ***********************************
var myComment = "Who said this:";
var myQuote = '"All the world\'s a stage."'; //single quotes print literal characters
//console.log(myQuote);//shows the value of myComment to the console, when we reload

var message = firstName + " " + lastName; //joining two variables with a space between
console.log(message);


//target and replace elements on the page
var string1 = document.getElementById("string1");
string1.innerHTML = message;
var imagePath = 'images/water-color/thumbs/artwork_01.jpg';
console.log(imagePath);
message = message.toUpperCase();
console.log(message);

//NUMBER ***********************************
var level = 1;
var lives = 3;
var ssNumber = 135673578;//this is integer
var cost = 1.50; //this is a float type number
var cost1 = 50;
var cost2 = 50;
var total = cost1 + cost2; //perform math by adding +
console.log(total);

console.log(level);

//ARRAY DATA TYPE ***********************************
//create an array
var imageList = new Array;
imageList[0] = "images/oil/thumbs/artwork_1.jpg";
imageList[1] = "images/oil/thumbs/artwork_2.jpg";
imageList[2] = "images/oil/thumbs/artwork_3.jpg";
imageList[3] = "images/oil/thumbs/artwork_4.jpg";
imageList[4] = "images/oil/thumbs/artwork_5.jpg";
imageList[5] = "images/oil/thumbs/artwork_6.jpg";
imageList[6] = "images/oil/thumbs/artwork_7.jpg";

var imagePlaceholder = document.getElementById("placeholder");
imagePlaceholder.setAttribute("src", imageList[2]); //update the src attribute of the image

console.log(imageList.length);

//Boolean DATA TYPE ***********************************
//truth or false, yes or no, 1 or 0
var oldEnough = false;
var hasContent = true;

var age = 20;
//****ifthen statements (branching logic, application logic, business logic)
//check the age...

if (age <= 20){//less than or equal to 20
       //too young
    oldEnough = false;
}else{
    oldEnough = true;
}

if (oldEnough == true){
    //== means is equal to
    //= means "gets set to"
    //code block
    console.log("you may go on the roler coaster");   
}else{
    console.log("you may NOT go on the roller coaster")
}

//Functions ***********************************
function dynamicGreeting(){
    //create the built-in date object
    var now = new Date();
    var time = now.getHours(); //extract the hours
    
    if(time < 12){
    alert("good morning");
    }  
    if(time == 12){
        alert("time to eat lunch at luna park")
    }
    if(time > 12){
        alert("good evening, the time is..." + now.toLocaleString());
    }
}

dynamicGreeting();