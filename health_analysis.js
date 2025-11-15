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
    ); // Retrieves the gender that the user has selected and assigns it to the variable gender and it belongs to a radio type input element for the user to give the gender of the patient

    const age = document.getElementById(
        "age"
    ).value; // Retrieves the value of the element with the id age and assigns it to the variable age and the id belongs to an input element for the user to give the age of the patient

    const condition = document.getElementById(
        "condition"
    ).value; // Retrieves the value of the element with the id condition and assigns it to the variable condition and the id belongs to select element for the user to give the condition of the patient
    // addPatient Variables Being Defined SE

    // Conditional Actions SS
    if (
        name && gender && age && condition // If all parameters are true then run the following code
    ) {
        patients.push(
            {
                name,
                gender: gender.value,
                age,
                condition
            }
        ); // Adds the details of the patient to the patients array

        resetForm(); // Resets the form for the next user input
        
        generateReport(); // Generates the report for the user to see
    }
    // Conditional Actions SE
}
// addPatient Function Being Defined SE

// resetForm Function Being Defined SS
function resetForm() {
    document.getElementById(
        "name"
    ).value = ""; // Retrieves the value of the element with the id name and sets the value to nothing for the next user input

    document.querySelector(
        'input[name="gender"]:checked'
    ).checked = false; // Retrieves the value of the checkbox input with the checked state as true and sets the value to false for the next user input

    document.getElementById(
        "age"
    ).value = ""; // Retrieves the value of the element with the id age and sets the value to nothing for the next user input

    document.getElementById(
        "condition"
    ).value = ""; // Retrieves the value of the element with the id condition and sets the value to nothing for the next user input
}
// resetForm Function Being Defined SE

// generateReport Function Being Defined SS
function generateReport() {
    // generateReport Variables Being Defined SS
    const numPatients = patients.length;
    // generateReport Variables Being Defined SE
}
// generateReport Function Being Defined SE
// Functions Being Defined SE
