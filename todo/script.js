let inp = document.querySelector('#taskInput');
let btn = document.querySelector('#addTaskBtn');
let taskli = document.querySelector('#taskList');



btn.addEventListener('click', ()=>{
    let task = document.createElement('li');
    task.textContent = `${inp.value}`;
    taskli.append(task);

    let delbtn = document.createElement('button');
    delbtn.textContent = "DELETE";
    delbtn.className = 'delete';
    task.appendChild(delbtn)


    delbtn.addEventListener("click", () => {
        task.remove();
    });

    inp.value = "";
})