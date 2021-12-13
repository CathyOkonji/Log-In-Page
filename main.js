
const loginForm = document.querySelector("#login");
const createAccountForm = document.querySelector("#createAccount");

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form_message");

    messageElement.textContent = message;
    messageElement.classList.remove("form_message-success", "form_message-error");
    messageElement.classList.add(`form_message-${type}`);
};

function setInputError (inputElement, message) { /* for the individual input fields */
    console.log(inputElement, 'setInputError');
    inputElement.classList.add("form_input-error");
    inputElement.nextElementSibling.textContent = message; /*going to the input field itself then fetch from the parent (form_input-group) then set the text content*/
}


function clearInputError(inputElement) { 
   
    inputElement.classList.remove("form_input-error");
    inputElement.nextElementSibling.textContent = "";

    
}


/*setFormMessage(logInForm, "success", "You're logged in!");*/

document.querySelector("#linkCreateAccount").addEventListener("click", e => { /* when you cleck on the create account link, it'll take out the log in and replace with the create account*/
    e.preventDefault(); /* prevents the default behaviour of the link*/
    loginForm.classList.add("form_hidden"); /* to hide the logIn Form*/
    createAccountForm.classList.remove("form_hidden"); /* to view the Create Account Form*/
});

document.querySelector("#linkLogin").addEventListener("click", e => {       /* opposite of the above */
    e.preventDefault();
    loginForm.classList.remove("form_hidden"); 
    createAccountForm.classList.add("form_hidden"); 
});

loginForm.addEventListener("submit", e => {
    e.preventDefault();

    /* after form has been submitted, depending on whether success or failure */

    setFormMessage(loginForm, "error", "Invalid username/password");
})

document.querySelectorAll(".form_input").forEach(inputElement => { /* on every single input field, when the user clicks out of the input field, do the check below*/
    inputElement.addEventListener("blur", e => {
        if (e.target.id === "signUpUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
            setInputError(inputElement, "Username must be at least 10 characters in length");
        }
    });

    inputElement.addEventListener("input", e => { /*clear any error message set against an input field*/
        clearInputError(inputElement);
    })
})
