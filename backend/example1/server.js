// // step 1 : Importing the required Module
// // How to import the required in node js by using the required ('moduel name') function

// const express = require('express')

// // step 2 Creating an instance of the express application 
// // Creating an instance of the express application by calling the express() function

// const app = express()

// // step 3 : Defining a route handler for the root URL ('/')

// // get mathod : It means to retrive data from the server
// //When users make a request to the root URL ('URL-API') than the server will response with data
// app.get('/', (req,res)=>{

//     res.send('Hello Backend server is running Succesfuly')

// })

// // 2. Defining a route / Path - API

// app.get('/login', (req,res)=>{

//     res.send('This is login API Fill The Form')
// })

// // Step 4 :  HOw to Start the server and listening the specific port
// // What is Port : It is a Communication end point That allows The server to recieve Request from Client

// app.listen(3000, ()=>{
//     console.log('The server is running on port 3000 - http://localhost:3000')
// })

// Example using internal module in node js - url module 

const url = require('url')

var add1 = 'https://www.amazon.in/s?k=laptop&crid=2ZEUNQFL7559G&sprefix=laptop%2Caps%2C313&ref=nb_sb_noss_2'
var add2 = 'https://www.youtube.com/watch?v=ThZMClhU35I'

// parsing the url using the url.parse() mathod

var parsedUrl1 = url.parse(add1)
var parsedUrl2 = url.parse(add2)

// login the parsed url component to the console

console.log('Parsed Url1 :', parsedUrl1)
console.log('Parsed Url2 :', parsedUrl2)