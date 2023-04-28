// const weather = document.querySelector(".weather-info")
// const city = document.querySelector(".city")
// const weatherURL = 'https://weatherapi-com.p.rapidapi.com/current.json?q=17.99702%2C-76.79358'

// const firstname = document.getElementById("firstname").value
// const lastname = document.getElementById("lastname").value
// const email = document.getElementById("email").value
// const phone = document.getElementById("phonenumber").value;
// const message = document.getElementById("message").value
// const form = document.getElementById("contact-form")
// var body = "First Name:" + " " + firstname + "LastName" + "<br/>" + "Email:" + email + "<br/>" 
// + "Phone Number: " + phone + "<br/>" + "Message:" + message

// console.log(email)

// form.addEventListener("submit",(event)=>{
// 	event.preventDefault(); //Prevents form from submitting without input

// 	Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "tywaynebuchanan@gmail.com",
//     Password : "5328D266AB836BD2ED0CD379C1554CD2D224",
//     To : "tywaynebuchanan@gmail.com",
//     From : "tywaynebuchanan@gmail.com",
//     Subject : "Requesting Info",
//     Body : message
// }).then(
//   message => alert(message)
// );

// })

// //This object stores the data for API to access the weather. In a production level 
// // application, this information would be stores in a .env file
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '6964ef0080msh9e5f8219d68b5d8p123ccfjsn5d36073716a9',
// 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };

// //Get Weather information 

// const getCity = async()=>{
//     await fetch(weatherURL, options)
// 	.then(response => response.json())
// 	.then(response => {
//         const data = response
//         weather.innerHTML += data.current.condition.text
//         city.innerHTML += data.location.name
//     })
// 	.catch(err => console.error(err));
// }

// getCity();


//Loan Calculator

const principal = document.getElementById("loanAmount")
const rate = document.getElementById("interestRate")
const years = document.getElementById("years")

const outputPrincipal = document.getElementById("principal")
const outputInterest = document.getElementById("interest")
const outputMonths = document.getElementById("months")
const outputPayback = document.getElementById("payback")
const calculate = document.getElementById("cal-btn")

console.log(principal)
// outputPrincipal.innerText = 0
// outputInterest.innerText = 0
// outputMonths.innerText = 0
// outputPayback.innerText = 0

calculate.addEventListener("click",()=>{
const payment = (principal.value * rate.value * (years.value * 12)) / 100
console.log(payment)
outputPrincipal.innerText = `$${principal.value}`
outputInterest.innerText = rate.value
outputMonths.innerText = years.value * 12
outputPayback.innerText = `$${payment}`
})










