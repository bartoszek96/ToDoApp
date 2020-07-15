const newTaskInput = document.querySelector('.newTask__input');
const addTaskBtn = document.querySelector('.newTask__addTaskBtn');
const tasksInfo = document.querySelector('.tasks__info');
const tasksList = document.querySelector('.tasks__list');

const editWindow = document.querySelector('.editWindow');
const editWindowInfo = document.querySelector('.editWindow__info');
const editWindowInput = document.querySelector('.editWindow__input');
const editWindowAcceptBtn = document.querySelector('.editWindow__button--accept');
const editWindowCancelBtn = document.querySelector('.editWindow__button--cancel');

let itemToBeEdited;

const addTools = (newTask) => {
    const toolsArea = document.createElement('div');
    toolsArea.classList.add('tasks__toolsArea');
    toolsArea.classList.add('toolsArea');

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('toolsArea__button');
    completeBtn.classList.add('toolsArea__button--complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';

    const editBtn = document.createElement('button');
    editBtn.classList.add('toolsArea__button');
    editBtn.classList.add('toolsArea__button--edit');
    editBtn.innerHTML = "EDIT";

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('toolsArea__button');
    deleteBtn.classList.add('toolsArea__button--delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

    toolsArea.appendChild(completeBtn);
    toolsArea.appendChild(editBtn);
    toolsArea.appendChild(deleteBtn);
    newTask.appendChild(toolsArea);
}

const addNewTask = () => {
    if (newTaskInput.value !== "" && newTaskInput.value.length <= 30) {
        console.log(newTaskInput.value);
        tasksInfo.innerHTML = "";

        const newTask = document.createElement('li');
        newTask.classList.add('tasks__item');
        tasksList.appendChild(newTask);

        const newTaskText = document.createElement('span');
        newTaskText.classList.add('tasks__itemSpan')
        newTaskText.innerHTML = newTaskInput.value;
        newTask.appendChild(newTaskText);

        newTaskInput.value = "";

        addTools(newTask);
    } else if (newTaskInput.value.length > 30) {
        tasksInfo.innerHTML = "Treść zadania może zawierać maksymalnie 30 znaków."
    } else {
        tasksInfo.innerHTML = "Treść zadania nie może być pusta."
    }
}

const checkFormClick = (e) => {
    if (e.target.closest('button').classList.contains('toolsArea__button--complete')) {
        completeTask(e);
    }
    else if (e.target.closest('button').classList.contains('toolsArea__button--edit')) {
        editTask(e);
    }
    else if (e.target.closest('button').classList.contains('toolsArea__button--delete')) {
        deleteTask(e);
    }
}

const completeTask = (e) => {
    const date = new Date();
    const completeTaskTime = `${date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}`

    e.target.closest('li').classList.toggle('tasks__doneTask');
    console.log(e.target.closest('li'));
    e.target.closest('li').firstChild.innerHTML += ` - wykonano o ${completeTaskTime}`
    e.target.closest('button').disabled = true;
    e.target.closest('button').classList.add('toolsArea__button--disabled'); a
}

const editTask = (e) => {
    editWindow.classList.add('editWindow--show');
    itemToBeEdited = e.target.closest('li');
    editWindowInput.value = itemToBeEdited.firstChild.innerHTML;
}

const deleteTask = (e) => {
    e.target.closest('li').remove();

    const newTasksList = document.getElementsByClassName('tasks__item');
    const tasksInfo = document.querySelector('.tasks__info');

    if (newTasksList.length <= 0) {
        tasksInfo.innerText = "Brak zadań do wykonania.";
    }
}

const editBtnHandler = () => {

}

const closeEditWindow = () => {
    editWindow.classList.remove('editWindow--show');
}

document.addEventListener('DOMContentLoaded', () => {
    addTaskBtn.addEventListener('click', addNewTask);
    tasksList.addEventListener('click', checkFormClick);
    editWindowAcceptBtn.addEventListener('click', editBtnHandler);
    editWindowCancelBtn.addEventListener('click', closeEditWindow);
})