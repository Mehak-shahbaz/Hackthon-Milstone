// Get references to the form elements
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var educationInput = document.getElementById("education");
var experienceInput = document.getElementById("experience");
var skillsInput = document.getElementById("skills");
// Get references to the display elements
var displayName = document.getElementById("display-name");
var displayEmail = document.getElementById("display-email");
var displayEducation = document.getElementById("display-education");
var displayExperience = document.getElementById("display-experience");
var displaySkills = document.getElementById("display-skills");
// Function to validate email format
function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
// Function to update the resume display
function updateResume() {
    // Validate the form fields
    if (nameInput.value.trim() === "") {
        displayName.textContent = "Name is required.";
    }
    else {
        displayName.textContent = nameInput.value;
    }
    if (validateEmail(emailInput.value)) {
        displayEmail.textContent = emailInput.value;
    }
    else {
        displayEmail.textContent = "Invalid email format.";
    }
    displayEducation.textContent = educationInput.value.trim() || "Not provided";
    displayExperience.textContent = experienceInput.value.trim() || "Not provided";
    displaySkills.textContent = skillsInput.value.trim() || "Not provided";
}
// Add an event listener to the "Generate Resume" button
var generateResumeButton = document.getElementById("generate-resume-button");
generateResumeButton.addEventListener("click", updateResume);
var workExperience = document.getElementById("workExperience");
var workSkills = document.getElementById("workSkills");
var workEducation = document.getElementById("workEducation");
workExperience === null || workExperience === void 0 ? void 0 : workExperience.addEventListener("input", function (event) {
    var updateExperience = (event === null || event === void 0 ? void 0 : event.target).innerText;
    console.log(updateExperience);
});
workSkills === null || workSkills === void 0 ? void 0 : workSkills.addEventListener("input", function (event) {
    var updateSkills = (event === null || event === void 0 ? void 0 : event.target).innerText;
    console.log(updateSkills);
});
workEducation === null || workEducation === void 0 ? void 0 : workEducation.addEventListener("input", function (event) {
    var updateEducation = (event === null || event === void 0 ? void 0 : event.target).innerText;
    console.log(updateEducation);
});