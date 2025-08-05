document.querySelector("#push").onclick = function () {
    const taskInput = document.querySelector('#newtask input');
    const taskText = taskInput.value.trim();

    if (taskText.length === 0) {
        alert("Please enter a task!");
        return;
    }

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task');

    taskContainer.innerHTML = `
        <span>${taskText}</span>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    `;

    document.querySelector('#tasks').appendChild(taskContainer);

    taskInput.value = '';

    taskContainer.querySelector('.delete').onclick = function () {
        this.parentElement.remove();
    };
};
