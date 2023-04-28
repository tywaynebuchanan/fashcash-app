// //Function to check if the form inputs are blank
// const checkInputs=(input,validation,message)=>{
// 	if(input.value !== ""){
// 		input.classList.remove("is-invalid");
// 		input.classList.add("is-valid")
// 		validation.innerText = ""
// 		return true
// 	}else{
// 		input.classList.remove("is-valid");
// 		input.classList.add("is-invalid");
// 		validation.innerText = message
// 		return false
// 	}
// }
// // //This function is called on the onsubmit event on the form
// function validate(){
// 	checkInputs(form.firstname,validateFirstname,"Please enter your first name")
// 	checkInputs(form.lastname,validateLastname,"Please enter your last name")
// 	checkInputs(form.email,validateEmail,"Please a valid email")
// 	checkInputs(form.phonenumber,validatePhone,"Please a valid phone number")
// 	checkInputs(form.message,validateMessage,"Please enter a message")
// }


// Form.addEventListener("submit",(e)=>{
// 	if(!validate()){
// 		e.preventDefault();	
// 	}else if(validate()){
// 		alert("Form Submitted")
// 	}
// })