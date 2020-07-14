addTools = (newTask) => {
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
    editBtn.innerHTML = "Edit";

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('toolsArea__button');
    deleteBtn.classList.add('toolsArea__button--delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

    toolsArea.appendChild(completeBtn);
    toolsArea.appendChild(editBtn);
    toolsArea.appendChild(deleteBtn);
    newTask.appendChild(toolsArea);
}

document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.querySelector('.newTask__input');
    const addTaskBtn = document.querySelector('.newTask__addTaskBtn');
    const tasksInfo = document.querySelector('.tasks__info');
    const tasksList = document.querySelector('.tasks__list');

    addTaskBtn.addEventListener('click', () => {
        if (newTaskInput.value !== "" && newTaskInput.value.length <= 30) {
            console.log(newTaskInput.value);
            tasksInfo.innerHTML = "";

            const newTask = document.createElement('li');
            newTask.classList.add('tasks__item');
            tasksList.appendChild(newTask);

            const newTaskText = document.createElement('span');
            newTaskText.innerHTML = newTaskInput.value;
            newTask.appendChild(newTaskText);

            newTaskInput.value = "";

            addTools(newTask);
            console.log(newTask);
        } else if (newTaskInput.value.length > 30) {
            tasksInfo.innerHTML = "Treść zadania może zawierać maksymalnie 30 znaków."
        } else {
            tasksInfo.innerHTML = "Treść zadania nie może być pusta."
        }
    })

})