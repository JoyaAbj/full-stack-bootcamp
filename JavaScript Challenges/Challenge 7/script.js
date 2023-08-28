//step 1
const containerDiv = document.createElement("div");
containerDiv.classList.add("container");


const loginContainerDiv = document.createElement("div");
loginContainerDiv.classList.add("login__container");


const loginSigninDiv = document.createElement("div");
loginSigninDiv.classList.add("login__signin");


const loginSigninNowDiv = document.createElement("div");
loginSigninNowDiv.classList.add("login__signin-now");

const h1Element = document.createElement("h1");
h1Element.textContent = "Sign up NOW!";

const h3Element = document.createElement("h3");
h3Element.textContent = "Enter your details";


const formElement = document.createElement("form");


const emailLabel = document.createElement("label");
emailLabel.textContent = "Email";
const emailInput = document.createElement("input");
emailInput.classList.add("input-field");
emailInput.type = "email";
emailInput.placeholder = "Email";
emailInput.required = true;
emailLabel.appendChild(emailInput);


const passwordLabel = document.createElement("label");
passwordLabel.textContent = "Password";
const passwordInput = document.createElement("input");
passwordInput.classList.add("input-field");
passwordInput.type = "password";
passwordInput.placeholder = "Password";
passwordInput.required = true;
passwordLabel.appendChild(passwordInput);


const confirmPasswordLabel = document.createElement("label");
confirmPasswordLabel.textContent = "Confirm Password";
const confirmPasswordInput = document.createElement("input");
confirmPasswordInput.classList.add("input-field");
confirmPasswordInput.type = "password";
confirmPasswordInput.placeholder = "Confirm Password";
confirmPasswordInput.required = true;
confirmPasswordLabel.appendChild(confirmPasswordInput);


const submitButton = document.createElement("button");
submitButton.classList.add("filled-btn");
submitButton.id = "submit-btn";
submitButton.textContent = "Submit";

formElement.appendChild(emailLabel);
formElement.appendChild(passwordLabel);
formElement.appendChild(confirmPasswordLabel);
formElement.appendChild(submitButton);

loginSigninNowDiv.appendChild(h1Element);
loginSigninNowDiv.appendChild(h3Element);
loginSigninNowDiv.appendChild(formElement);

loginSigninDiv.appendChild(loginSigninNowDiv);

loginContainerDiv.appendChild(loginSigninDiv);

containerDiv.appendChild(loginContainerDiv);

document.body.appendChild(containerDiv);

//step 1.1
const errorMessage = document.createElement('p');
errorMessage.style.color = 'red';
const all = [emailInput, passwordInput, confirmPasswordInput];
function handleSubmit(event) {
  event.preventDefault();

  const passwordInput = document.querySelector('input[type="password"]');

  if (passwordInput.value !== confirmPasswordInput.value) {
    errorMessage.textContent = 'Passwords do not match';
    confirmPasswordInput.parentNode.appendChild(errorMessage);
  } else {
    errorMessage.textContent = ''; 
    window.location.href = 'http://127.0.0.1:5500/full-stack-bootcamp/JavaScript%20Challenges/Challenge%207/quotes.html'; 
  }
}
submitButton.addEventListener('click', handleSubmit);



