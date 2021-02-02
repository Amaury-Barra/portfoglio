const openModalButtons = document.querySelectorAll("[data-popup-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById('overlay');


openModalButtons.forEach(button => {
   
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const modal = document.querySelector(button.dataset.popupTarget);
        openModal(modal);
    })
})

overlay.addEventListener('click', (e) => {
    e.preventDefault();
     const modals = document.querySelectorAll(".card__popup.active");
     modals.forEach(modals => {
         closeModal(modals);
     })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const modal = button.closest('.card__popup');
        closeModal(modal);
    })
})


function openModal(modal) {
    if(modal==null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if(modal==null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}