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

const addNewTask = (input, info, list) => {
    if (input.value !== "" && input.value.length <= 30) {
        console.log(input.value);
        info.innerHTML = "";

        const newTask = document.createElement('li');
        newTask.classList.add('tasks__item');
        list.appendChild(newTask);

        const newTaskText = document.createElement('span');
        newTaskText.classList.add('tasks__itemSpan')
        newTaskText.innerHTML = input.value;
        newTask.appendChild(newTaskText);

        input.value = "";

        addTools(newTask);
    } else if (input.value.length > 30) {
        info.innerHTML = "Treść zadania może zawierać maksymalnie 30 znaków."
    } else {
        info.innerHTML = "Treść zadania nie może być pusta."
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
    const completeTaskDate = new Date();

    e.target.closest('li').classList.toggle('tasks__doneTask');
    console.log(e.target.closest('li'));
    e.target.closest('li').firstChild.innerHTML += ` - wykonano ${completeTaskDate.toISOString().slice(0, 10)}`
    e.target.closest('button').disabled = true;
    e.target.closest('button').classList.add('toolsArea__button--disabled');
}

const editTask = (e) => {

}

const deleteTask = (e) => {
    e.target.closest('li').remove();

    const newTasksList = document.getElementsByClassName('tasks__item');
    const tasksInfo = document.querySelector('.tasks__info');

    if (newTasksList.length <= 0) {
        tasksInfo.innerText = "Brak zadań do wykonania.";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.querySelector('.newTask__input');
    const addTaskBtn = document.querySelector('.newTask__addTaskBtn');
    const tasksInfo = document.querySelector('.tasks__info');
    const tasksList = document.querySelector('.tasks__list');

    addTaskBtn.addEventListener('click', () => {
        addNewTask(newTaskInput, tasksInfo, tasksList);
    });

    tasksList.addEventListener('click', checkFormClick);
})