const taskList = []

const main = document.createElement('main');
const section = document.createElement('section');
const box = document.createElement('div');
const input = document.createElement('input');

const btn = document.createElement('button');

const list = document.createElement('ul');


document.body.appendChild(main);
main.appendChild(section)
section.appendChild(box)
box.append(input, btn)


//main styling
main.style.height = '100dvh'
main.style.display = 'flex'
main.style.justifyContent = 'center'
main.style.alignItems = 'center'

//section styling
section.style.width = '30dvw'
section.style.height = '30dvw'
section.style.background = 'blue'
section.style.paddingTop = '20px'
//box
box.style.display = "flex"
box.style.justifyContent = 'center'
//btn 
btn.textContent = 'Save'


//input
input.style.width = '15dvw';
input.placeholder = "Enter a Task"

const addTask = () => {
    const item = input.value;
    taskList.push(item)
    input.value = "";
    renderListElement()
}

const handleKeyboard = (e) => {
    if (e.key === "Enter") {
        addTask();
    }
}


const renderListElement = () => {
    section.appendChild(list);
    for (let index = 1; index < taskList.length; index++) {
        const listItem = document.createElement('li');
        listItem.style.color = 'white'
        const element = taskList[index];
        listItem.textContent = element;
        list.appendChild(listItem)
    }
}

btn.addEventListener('click', addTask)
input.addEventListener('keydown', (e) => handleKeyboard(e))

