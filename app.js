// JS Assignments #01
// chapter 1 
// Question 1
// alert("hello user")
// // Question 2
// alert("Error! Enter a valid password")
// q3
// alert("Welcome to JS Land...\nHappy Coding!");
// q5
// alert("Hello...I can run JS through my web brower's console")
// q6
// chap2
// q1
// var username
// q2
// var myname = ("Azmat Noor")
// q3
// var message = ("Hello World!")
// alert(message)
// q4
// var studentname = ("jhone Doe")
// var age = ("He is 16 year old")
// var skill = ("Certified Mobile App Developer")

// alert(studentname)
// alert(age)
// alert(skill)
// q5
// var pizza = ("PIZZA\nPIZZ\nPIZ\nPI\nP")
// alert(pizza)
// q6
// var email = ("azmatnoorkp17@gmail.com")
// alert("My email address is "+ email)
// q7
// var book = ("A smarter way to learn JS")
// alert("I am trying to learn from the book "+ book)
// q8
// document.write("<p>Yah! I can write HTML content through JS</p>")
// q9
// var font = ("꧁ ㄎひマ尺乞爪乞 ꧂")
// alert(font)

// chap3
// q1
// var age= ("I am 18 years old")
// alert(age)
// q2

// q3
// var birthyear = ("2006")
// document.write("My birth year is "+ birthyear+ "<br>Data type of my declared variable is number")
//  q 4
// var visiterName = prompt("Enter your name")
// var product = prompt("What product you wanna buy?")
// var quantity = +prompt("tell the quantity of product")

// document.write(visiterName + " ordered "+ quantity + " " +  product + " on KP clothing store")

// chap4
// q1
// var username,fathername,age
// q2
// var purchase,unit,name,age,height
// var 23hassan,%design,WEIGHT
// q3
// document.write("<h1>Rule of naming JS variables</h1> Variable names can only contain numbers ,$,and _ .for example <b>$my_1stVariable</b><br>Variable must begin with a letter , $ or _ . for example <b>$name,_name or name</b> <br> Variable names are case sensitive. <br>Variable names should not be JS keywords")
// chap 5
// q1
// var num1 = +prompt("Enter a number")
// var num2 = +prompt("Enter again a number")
// var total = num1+num2
// document.write("Sum of "+ num1 + " and "+ num2 +" is "+ total)
// q2
// var num1 = +prompt("Enter a number")
// var num2 = +prompt("Enter again a number")
// var total = num1-num2
// document.write("Subtraction of "+ num2+ " from "+ num1 +" is "+ total)
// 
// var num1 = +prompt("Enter a number")
// var num2 = +prompt("Enter again a number")
// var total = num1*num2
// document.write("Multiplication  of "+ num1+ " to "+ num2 +" is "+ total)
// 
// var num1 = +prompt("Enter a number")
// var num2 = +prompt("Enter again a number")
// var total = num1/num2
// document.write("division of "+ num1+ " from "+ num2 +" is "+ total)
// 
// var num1 = +prompt("Enter a number")
// var num2 = +prompt("Enter again a number")
// var total = num1%num2
// document.write("Modulus of "+ num2+ " to "+ num1 +" is "+ total)

// q3

// q4
// var ticketprice = 600
// var numberoftickets = 5
// var cost = ticketprice*numberoftickets

// document.write("Total cost to buy "+numberoftickets+ " tickets to a movie is "+ cost)
// q5
// var number = +prompt ("Enter the number you want table of")
// document.write("Table of "+ number +"<br>"+ number +" x 1 = "+ number*1+"<br>"+ number +" x 2 = "+ number*2+"<br>"+ number +" x 3 = "+ number*3
//     +"<br>"+ number +" x 4 = "+ number*4+"<br>"+ number +" x 5 = "+ number*5+"<br>"+ number +" x 6 = "+ number*6+"<br>"+ number +" x 7 = "+ number*7+"<br>"+ number +" x 8 = "+ number*8+"<br>"+ number +" x 9 = "+ number*9+"<br>"+ number +" x 10 = "+ number*10)

// Q6

// var celsius = +prompt("Enter temperature in Celsius you want to convert in Fahrenheit")
// var fahrenheit = +prompt("Enter temperature in Fahrenheit you want to convert in Celsius")

// var converfahren = (celsius * 9/5) + 32
// var convercelsi = (fahrenheit-32)* 5/9


// document.write(celsius + " celsius is equals to " + converfahren + " fahrenheit "+ " " )
// document.write(" and "+fahrenheit + " fahrenheit is equals to " + convercelsi + " celsius" )

// q7
// var shirtprice = 300
// var quantity = 5
// var shippingcost = 200
// var total = (shirtprice*quantity)+shippingcost
 
// document.write("Item price = "+shirtprice+ "<br>Quantity = "+quantity+ "<br>Shipping Cost = "+shippingcost+ "<br>Total Amount = "+total)



// JS Assignment #02
// q1 

// var num = +prompt("Enter a number ")
// if(num % 3 ===0){
//     console.log(num +" is divisible by 3")
// }else{
//     console.log(num +" is not divisible by 3 ")
// }

// q2
// var num = +prompt("Enter a number")
// if(num % 2 ===0){
//     console.log(num +" is an even number")
// }else {
//     console.log(num +" is an odd number")
// }

// q3

// var age = +prompt("Enter your age")
// if (age>18){
//     console.log("Old enough")
// }else{
//     console.log("Too young")
// }

// q4

// var username = prompt("Enter your name")
// var myname = "Azmat"
// if(username===myname){
//     console.log("Hey Azmat, looks like we’ve got the same name good choice!")
// }

// q7

// var num1= +prompt("Enter a number")
// var num2= +prompt("Enter a number again")
// var operator= prompt("Enter any operator +,-,*,/,%")

// if(operator==='+'){
//     console.log(num1 + num2)
// }else if (operator==='-'){
//     console.log(num1 - num2)
// }else if (operator==='*'){
//     console.log(num1 * num2)
// }else if (operator==='/'){
//     console.log(num1 / num2)
// }else if (operator==='%'){
//     console.log(num1 % num2)
// }else{
//     console.log("ERROR")
// }


// q8


// q9

// var year= prompt("Enter a year in YYYY format:")

// if(year% 4===0 && year% 100!==0 || year%400===0){
//     console.log(year +" is a leap year.")
// }else{
//     console.log(year +" is not a leap year.")
// }

// q10

// var js="hellojs"
// var password= prompt("Enter your password")
// if(password===''){
//     console.log("Please enter your password")
// }
// else if(js===password){
//     console.log("Correct! The password you entered matches the original password")
// }else{
//     console.log("Incorrect password")
// }

// q11

// var firstName = "Ali";
// if (firstName === "Fahad") {
//  document.write("Hello Fahad!");
// }else{
//     document.write("You're not Fahad")
// }

// q12

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }else{
// greeting = "Good evening";
// } 
// console.log(greeting)

// q13

var num1= parseInt(prompt("Enter a number"))
var num2= parseInt(prompt("Enter a number again"))

if(num1>num2){
    console.log(num1)
}else if(num1<num2){
    console.log(num2)
}else if(num1===num2){
    console.log("both numbers are equal to each other")
}