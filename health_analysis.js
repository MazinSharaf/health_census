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
        'input[name="gender"]:checked'
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
    const numPatients = patients.length; // Takes the length of the patients array and assigns it to the variable numPatients

    const conditionsCount = {
        Diabetes: 0,
        Thyroid: 0,
        "High Blood Pressure": 0,
    } // Sets the count of each condition to zero and assigns it to the object conditionsCount

    const genderConditionsCount = {
        Male: {
            Diabetes: 0,
            Thyroid: 0,
            "High Blood Pressure": 0,
        }, // Sets the count of each condition for males to zero and assigns it to the key Male

        Female: {
            Diabetes: 0,
            Thyroid: 0,
            "High Blood Pressure": 0,
        } // Sets the count of each condition fo females to zero and assigns it to the key Female
    }; // Sets the condition count for each gender to zero and assigns it to the object genderConditionsCount 
    // generateReport Variables Being Defined SE

    // generateReport Loops and HTML Updates SS
    report.innerHTML = `Number of patients: ${numPatients}<br><br>`; // Number of patients for the report
    for (
        const patient of patients // For each patient in the array of patients run the following code
    ) {
        conditionsCount[
            patient.condition
        ]++; // Increases the value of the patient condition by one

        genderConditionsCount[
            patient.gender
        ][
            patient.condition
        ]++; // Increases the value of the count of the gender of the patient by one
    } // Keeps track of the patient condition count and gender patient condition count

    report.innerHTML += `Conditions Breakdown:<br>`; // Conditions section for the report
    for (
        const condition in conditionsCount // For each condition in the conditionsCount object
    ) {
        report.innerHTML += `${condition}: ${conditionsCount[condition]}<br>`; // Changes the HTML of the report to include the count of the condition
    } // Updates the HTML file to include the count of the condition for each condition in the conditionsCount object

    report.innerHTML += `<br>Gender-Based Conditions:<br>`; // Gender based conditions section for the report
    for (
        const gender in genderConditionsCount // For each gender in the genderConditionsCount object
    ) {
        report.innerHTML += `${gender}:<br>`; // Adds the gender of the patient to the report
        for (
            const condition in genderConditionsCount[
                gender
            ] // For each condition in the specific gender
        ) {
            report.innerHTML += `&nbsp;&nbsp;${condition}: ${genderConditionsCount[gender][condition]}<br>`; // Updates the HTML to include the amount of the condition for that gender
        }
    } // Updates the HTML file to include the gender for each gender in the genderConditionsCount object
    // generateReport Loops and HTML Updates SE
}
// generateReport Function Being Defined SE

// searchCondition Function Being Defined SS
function searchCondition() {
    // searchCondition Variables Being Defined SS
    const input = document.getElementById(
        'conditionInput'
    ).value.toLowerCase(); // Retrieves the value of the element with the id conditionInput and turns it into all lowercase and then assigns it to the variable input

    const resultDiv = document.getElementById(
        'result'
    ); // Retrieves the element with the id result and assigns it to the variable resultDiv and the element with that id is a div element and it is for the section where the results come in for the user
    // searchCondition Variables Being Defined SE
    resultDiv.innerHTML = ''; // Sets the inside of the result div HTML to nothing

    // searchCondition Fetch SS
    fetch(
        'health_analysis.json'
    )
        .then(
            response => response.json()
        ) // When the JSON file is fetched then turn the response into a JSON format

        .then(
            data => {
                const condition = data.conditions.find(
                    item => item.name.toLowerCase() === input
                ); // Turn the item into lowercase and searches for the item that is the same as the input

                // Conditional Code SS
                if (
                    condition // If there is a match then run the following code
                ) {
                    // searchCondition if Variables Being Defined SS
                    const symptoms = condition.symptoms.join(
                        ', '
                    ); // Joins the symptoms of the condition by joining it with a comma and assigning it to the variable symptoms

                    const prevention = condition.prevention.join(
                        ', '
                    ); // Joins the preventions of the condition by joining it with a comma and assigning it to the variable prevention

                    const treatment = condition.treatment; // Takes the treatment of the condition and assigns it to the variable treatment
                    // searchCondition if Variables Being Defined SE

                    // HTML Changes SS
                    resultDiv.innerHTML += `
                    <h2>${condition.name}</h2>

                    <img src="${condition.imagesrc}" alt="hjh">

                    <p>
                        <strong>
                            Symptoms:
                        </strong>
                        ${symptoms}
                    </p>
                    
                    <p>
                        <strong>
                            Prevention:
                        </strong>
                        ${prevention}
                    </p>

                    <p>
                        <strong>
                            Treatment:
                        </strong>
                        ${treatment}
                    </p>
                    `;
                    // HTML Changes SE
                } else {
                    resultDiv.innerHTML = 'Condition not found.'; // If the condition is not found then replace the inside HTML of the result div with the following text
                }
                // Conditional Code SE
            }
        ) // After the response is turned into a JSON format then turn the data into code that searches for the condition that matches the user input and if it is true then run some code otherwise run another piece of code

        .catch(
            error => {
                console.error(
                    'Error:',
                    error
                );

                resultDiv.innerHTML = `An error occured while fetching data.`;
            }
        ) // If any error has occurred then turn the error into a console error and a HTML update for the result div
    // searchCondition Fetch SE
}
// searchCondition Function Being Defined SE
// Functions Being Defined SE

addPatientButton.addEventListener(
    "click", 
    addPatient
); // Makes it so when the addPatientButton is clicked the patient is added with inputs
btnSearch.addEventListener(
    "click",
    searchCondition
); // Makes it so when the btnSearch is clicked the condition is searched for with input