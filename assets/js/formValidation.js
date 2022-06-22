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
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
					form.classList.add("was-validated");
				} else {
					event.preventDefault();
					joinerFormSubmitDetails();
					form.reset();
					form.classList.remove("was-validated");
				}
			},
			false
		);
	});
})();

// print joiner form details

function joinerFormSubmitDetails() {
	let joinerName = document.getElementById("joinerName").value;
	let joinerNickname = document.getElementById("joinerNickname").value;
	let joinerPosition = document.getElementById("joinerPosition").value;
	let joinerPrefernce = document.querySelectorAll(
		'input[type="checkbox"]:checked'
	);
	let joinerPrefernceList = [...joinerPrefernce].map((c) => c.value);
	let joinerTraining = document.getElementById("joinerTraining").value;

	console.log(
		joinerName,
		joinerNickname,
		joinerPosition,
		joinerPrefernceList,
		joinerTraining
	);
}

// prints form value

function checker() {
	alert("ewere");
	let nameInput = document.getElementById("floatingInputName");
	let emailInput = document.getElementById("floatingInputEmail").value;
	if (nameInput != null) {
		console.log(nameInput.value);
	}

	console.log("your name is " + emailInput);
}
