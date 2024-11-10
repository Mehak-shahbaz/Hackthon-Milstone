
// Get references to the form elements
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const educationInput = document.getElementById("education") as HTMLInputElement;
const experienceInput = document.getElementById("experience") as HTMLTextAreaElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;

// Get references to the display elements
const displayName = document.getElementById("display-name")!;
const displayEmail = document.getElementById("display-email")!;
const displayEducation = document.getElementById("display-education")!;
const displayExperience = document.getElementById("display-experience")!;
const displaySkills = document.getElementById("display-skills")!;

// Function to validate email format
function validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to update the resume display
function updateResume() {
  // Validate the form fields
    if (nameInput.value.trim() === "") {
    displayName.textContent = "Name is required.";
    } else {
    displayName.textContent = nameInput.value;
    }

    if (validateEmail(emailInput.value)) {
    displayEmail.textContent = emailInput.value;
    } else {
    displayEmail.textContent = "Invalid email format.";
    }

    displayEducation.textContent = educationInput.value.trim() || "Not provided";
    displayExperience.textContent = experienceInput.value.trim() || "Not provided";
    displaySkills.textContent = skillsInput.value.trim() || "Not provided";
}
const workExperience = document.getElementById("workExperience");

const workSkills = document.getElementById("workSkills");

const workEducation = document.getElementById("workEducation");

workExperience?.addEventListener("input",(event)=>{
  const updateExperience=(event?.target as HTMLElement).innerText;
  console.log(updateExperience);
  
});

workSkills?.addEventListener("input",(event)=>{
  const updateSkills=(event?.target as HTMLElement).innerText;
  console.log(updateSkills);
  
});

workEducation?.addEventListener("input",(event)=>{
  const updateEducation=(event?.target as HTMLElement).innerText;
  console.log(updateEducation);
  
});
// Add an event listener to the "Generate Resume" button
const generateResumeButton = document.getElementById("generate-resume-button")!;
generateResumeButton.addEventListener("click", updateResume);

// const workExperience = document.getElementById("workExperience");

// const workSkills = document.getElementById("workSkills");

// const workEducation = document.getElementById("workEducation");

// workExperience?.addEventListener("input",(event)=>{
//   const updateExperience=(event?.target as HTMLElement).innerText;
//   console.log(updateExperience);
  
// });

// workSkills?.addEventListener("input",(event)=>{
//   const updateSkills=(event?.target as HTMLElement).innerText;
//   console.log(updateSkills);
  
// });

// workEducation?.addEventListener("input",(event)=>{
//   const updateEducation=(event?.target as HTMLElement).innerText;
//   console.log(updateEducation);
  
// });