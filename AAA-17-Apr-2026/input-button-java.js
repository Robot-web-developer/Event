// Store the elements in variables using their IDs
const myInput = document.getElementById('user-input');
const myButton = document.querySelector('#submit-btn');

// Now you can use those variables
myButton.addEventListener('click', () => {
    const value = myInput.value; // Access the text inside the input
    console.log("User entered:", value);
});

// 1. Create the elements and store them in variables
const dynamicInput = document.createElement('input');
const dynamicButton = document.createElement('button');

// 2. Set their properties
dynamicInput.type = 'text';
dynamicInput.placeholder = 'Enter your name';
dynamicButton.textContent = 'Submit';

// 3. Add them to the actual webpage (e.g., the body)
document.body.appendChild(dynamicInput);
document.body.appendChild(dynamicButton);
