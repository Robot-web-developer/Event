const taskList = [];

const main = document.createElement('main');
const section = document.createElement('section');
const box = document.createElement('div');
const input = document.createElement('input');
const btn = document.createElement('button');
const list = document.createElement('ul');

document.body.appendChild(main);
main.appendChild(section);
section.appendChild(box);
box.append(input, btn);
section.appendChild(list); // Append the list to the section once at the start

// --- Styling ---
main.style.height = '100dvh';
main.style.display = 'flex';
main.style.justifyContent = 'center';
main.style.alignItems = 'center';

section.style.width = '30dvw';
section.style.minHeight = '30dvw'; // Changed to minHeight so it grows with tasks
section.style.background = 'blue';
section.style.padding = '20px';

box.style.display = "flex";
box.style.justifyContent = 'center';
box.style.marginBottom = '20px';

btn.textContent = 'Save';
input.style.width = '15dvw';
input.placeholder = "Enter a Task";

// --- Logic ---

const renderListElement = () => {
    // Clear the visual list before re-rendering
    list.innerHTML = ""; 

    taskList.forEach((task) => {
        const listItem = document.createElement('li');
        listItem.style.color = 'white';
        listItem.style.fontSize = '1.2rem';
        listItem.textContent = task;
        list.appendChild(listItem);
    });
};

const addTask = () => {
    const item = input.value.trim(); // .trim() prevents adding empty spaces
    
    if (item !== "") {
        taskList.push(item);   // Add to array
        input.value = "";      // THIS CLEARS THE INPUT FIELD
        renderListElement();   // Update the UI
    }
};

const handleKeyboard = (e) => {
    if (e.key === "Enter") {
        addTask();
    }
};

// --- Event Listeners ---
btn.addEventListener('click', addTask);
input.addEventListener('keydown', handleKeyboard);