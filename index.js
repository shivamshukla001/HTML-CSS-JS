           //user input
// var age = window.prompt("enter your age ?");
// age = Number(age);
// console.log(age);
// var myVar;
          //type conversion
//  myVar = String(3.14);
//  console.log(typeof myVar);
//  console.log(myVar);
           //function
// function sayhello(){
//       console.log("shivam shukla");

// };
// sayhello();
            //or
 //    function shivam(myName,myAge,myWork){
 //     console.log("hello",myName);
 //     console.log("you are just",myAge,"years old");
 //     console.log("it really good for a company like",myWork,);
           
 //    };
 //    shivam("tatti",21,"microsoft");
             // object in java
// var human = {
// Name: "SHIVAM",
// age:19,

// eat: function(){
//   console.log("abe chutia kam kha thoda")
// },
//  drink:function(){
//   console.log("sharab ko haat mat lagaya kar lawde")
//  },
//  bath:function(){
//    console.log("naha mat lana tu thik hai")
//  },
//  nasta:function(){
//     console.log("tu bht sexy nasta bnata hai biduuuu");
//  }
// };
 
//   console.log(human.Name);
//   console.log(human.age) ;
//   human.eat();
//   human.bath();
//   human.nasta();
//   human.drink();
//             // if statement
//     var age = 16
//      if(age>=65){
//     console.log("you are a seniour!");
//      } 
//     else if(age>=18)
//     {
//      console.log("you are adult!");
//     }
//     else if(age<0)
//     {
//      console.log("you havent born yet!");
//     }    
//     else
//          {
//     console.log("you are a child");
//  }
               //or

//        var age =92;
//        if(age>+65){
//         console.log("you are a senoiur!");
//        }
//        else if(age>=18){
//                     console.log("you are adult");
//        }
//        else if(age<0){
//                     console.log("you havet born yet");
//        }
//        else{
//                     console.log("you are a child")

//        }
          //switch statement in javascript
// var grade = "D";
// switch(grade){

// case "A":
// console.log("you did great!");
//       break;
// case "B":
//                     console.log("you did good!");
//                     break;
// case "C":
//                     console.log("YOU need  to try hard");
//                     break;
// case "D":
//                     console.log("YOU need more practice....");
//                     break;
// case "F":
//                     console.log("YOU FAILED");
//                     break;
// default:
//                     console.log(grade,"IS not a letter grade")
// }
       //OR

// var society =  "A";
// switch(society){
// case"A":
//       console.log("the crime rate of this society is very high ");
//       console.log("but this society is very clean");
//      break;
// case "B":
//                     console.log("iss society ma saare chutiya he hai");
//                     console.log("but yaha ka security level kafii high hai");
//                     break;

// case "C":
//                     console.log("the behaviou of people in this society is vey nice");
//                     console.log("lakin yaha la log lanjus bhi bht hai");
//                     break;

// default:
//                     console.log( society,"you  did not enter the correct society no.");
                                      
//                     }
        // useful string property and methods

       //  var myName = "shivam shukla"
       //  var myStreat = "gandhi colony"
       //  var myCity = "bikaner"
       //  var myPhone = "123-456-789";
       //  console.log(myName.charAt(9));
       //  console.log(myName.indexOf(" "));
       //  console.log(myName.toLocaleUpperCase());
       //  console.log(myName.toLowerCase());  
       //  console.log(myName.lastIndexOf("h"));  
       //  var myAddress = myStreat.concat(" ",myCity);
       //  console.log(myAddress)
       //   myPhone = myPhone.replaceAll("-","");
       //   console.log(myPhone);
                     //OR
       // var myName = "shivam shukla";
       // var myStreat ="gandhi collony";
       // var myCity = "Bikaner";
       // var myPhone = "123-456-789";
       
       // console.log(myName.charAt(2));
       // console.log(myName.lastIndexOf("s"));
       // console.log(myName.length);
       // myAddress = myStreat.concat(" ",myCity)
       // console.log(myAddress)
       // myPhone = myPhone.replaceAll("-","");
       // console.log(myPhone)
                 // for each funtion ih java script
// let total = 0;
// let cart = [3, 4, 6, 99, 11];

// function groccery(elements){


//        total+=elements;


// }
// cart.forEach(groccery);
// console.log("your total amount is: $"+total);
         
             //array.map mathod in javascript

//  let storeusd = [6, 7, 33, 54, 11];
  
//  function toEuro(value){
// value*=0.85;
// return value;

//  }
//   let storeEuro = storeusd.map(toEuro);
//   console.log(storeusd);
//   console.log(storeEuro);
       //or
//  let storerupees = [55, 65, 32, 112, 23];
  
//  function tousd(value){
//        value/=61.06;
//   return value;

//  }
//  let storeUsd = storerupees.map(tousd);
//  console.log(storerupees);
//  console.log(storeUsd);


          //filter mathod in javascript
       
//  let student=[18, 17, 21, 16, 20];
 
//  function checkAge(age){

//        if(age>=18);
//        return age;

// //  }
//               // array.reduce method in js

//        let letters =["s", "h", "i", "v", "a", "m"];

//        function combineLetters(total, nextLetters){
//           return total + nextLetters;

//        }

//        let word = letters.reduce(combineLetters);

//        console.log(word)
  
            //or

// let letters = ["h", "e", "l", "", "p"];

// function countLetters(total, nextLetters){
//  return  total  +nextLetters;

// }
// let word = letters.reduceRight(countLetters);
 
// console.log(word)
  
         //