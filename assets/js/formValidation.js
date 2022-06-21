// form validation

// function validaion() {
// 	let email = document.getElementById("floatingInputMail");
// 	let bt = document.getElementById("submit");
// 	if (email.value != "") {
// 		bt.disabled = false;
// 	} else {
// 		bt.disabled = true;
// 	}
// }

// join news letter

// let nameInput = document.getElementById("floatingInputMail");
// let form = document.getElementById("emailForm");
// form.addEventListener("submit", function (e) {
// 	//prevent the normal submission of the form
// 	e.preventDefault();
// 	console.log(nameInput.value);
// 	form.reset();
// });

// comments and newsletter form valdiation

(function () {
	"use strict";

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll(".needs-validation");

	// Loop over them and prevent submission
	Array.prototype.slice.call(forms).forEach(function (form) {
		form.addEventListener(
			"submit",
			function (event) {
				let form = document.getElementById("emailForm");
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
					form.classList.add("was-validated");
				} else {
					event.preventDefault();
					checker();
					form.reset();
					form.classList.remove("was-validated");
				}
			},
			false
		);
	});
})();

// join form validation

(function () {
	"use strict";

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll(".needs-validation-join");

	// Loop over them and prevent submission
	Array.prototype.slice.call(forms).forEach(function (form) {
		form.addEventListener(
			"submit",
			function (event) {
				let form = document.getElementById("emailForms");
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
					form.classList.add("was-validated");
				} else {
					event.preventDefault();
					checker();
					form.reset();
					form.classList.remove("was-validated");
				}
			},
			false
		);
	});
})();

// prints form value

function checker() {
	alert("ewere");
	let nameInput = document.getElementById("floatingInputMail");

	console.log(nameInput.value);
}
