const form = document.getElementById("contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event){
	event.preventDefault();

	const name = document.getElementById("name").value.trim();

	const email = document.getElementById("email").value.trim();

	const phone = document.getElementById("phone").value.trim();

	const message = document.getElementById("message").value.trim();

	if(
		name === "" ||
		email === "" ||
		phone === "" ||
		message === ""
	){
		alert("All fields are required.");
		return;
	}

	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if(!emailPattern.test(email)){
		alert("Please enter a valid email.");
			return;
	}

	const phonePattern = /^[0-9]+$/;

	if(!phonePattern.test(phone)){
		alert("Phone number must contain only digits.");
			return;
	}

	alert("Form submitted successfully!");

	form.reset();
}