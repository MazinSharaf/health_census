// Legend:
// SS = Section Start
// SE = Section End

// Variables Being Defined SS
const addPatientButton = document.getElementById(
    "addPatient"
); // Retrieves the element with id addPatient and assigns it to variable addPatientButton and the id belongs to a button element for adding a patient with given inputs

const report = document.getElementById(
    "report"
); // Retrieves the element with id report and assigns it to variable report and the id belongs to a div element for returning the result of the user

const btnSearch = document.getElementById(
    "btnSearch"
); // Retrieves the element with id btnSearch and assigns it to variable btnSearch and the id belongs to a button element for search

const patients = []; // A new empty array that is assigned to patients variable
// Variables Being Defined SE

// Functions Being Defined SS
// addPatient Function Being Defined SS
function addPatient() {
    // addPatient Variables Being Defined SS
    const name = document.getElementById(
        "name"
    ).value; // Retrieves the value of the element with the id name and assigns it to the variable name and the id belongs to an input element for the user to give the name of the patient

    const gender = document.querySelector(
        'input=[name="gender"]:checked'
    ); // Retrieves the gender that the user has selected and assigns it to the variable gender
    // addPatient Variables Being Defined SE
}
// addPatient Function Being Defined SE
// Functions Being Defined SE