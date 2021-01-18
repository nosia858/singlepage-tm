"use strict";

const tasckList = document.querySelector('.tascks'),
      addForm = document.querySelector('form'),
      tasckTittle = addForm.querySelector('.tasck-tittle'),
      tascDesc = addForm.querySelector('.tasck-desc');
    
const allTascks = [];

let errorMessage = document.createElement('div');
        errorMessage.classList.add('alert', 'alert-danger');
        errorMessage.setAttribute("role","alert");
        errorMessage.textContent = 'Название задачи должно быть заполнено';

addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const t = tasckTittle.value;
    const d = tascDesc.value;
    if (t) {
        errorMessage.remove();
        let newTasck = {
            title: t,
            desc: d
        };
        allTascks.push(newTasck);
    } else {
        addForm.prepend(errorMessage);
    }
    e.target.reset();
    createNewList(allTascks, tasckList);
});

function createNewList(tasck, list) {
    list.innerHTML = "";
    tasck.forEach((item, i) => {
        list.innerHTML += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.desc}</p>
          <a href="#" class="btn btn-danger" data-btn="button">Удалить задачу</a>
        </div>
        </div> 
        `;
    });

    document.querySelectorAll('.btn-danger').forEach((btns, i) =>{
        btns.addEventListener('click', () => {
            let rem = document.querySelectorAll('.card');
            rem[i].remove();
            allTascks.splice(i,1);
            createNewList(allTascks, tasckList);
        });
        
    });
}



createNewList(allTascks, tasckList);




