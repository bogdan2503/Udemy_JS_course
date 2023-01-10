const btnShowModalWindow = document.querySelectorAll (".show-modal-window")
const modalWindow = document.querySelector (".modal-window")
const btnCloseModalWindow = document.querySelector (".close-modal-window")
const overlay = document.querySelector (".overlay")

function closeModal () {
    // console.log ("function close Modal by add CSS class .hidden for html tag")
    modalWindow.classList.add ("hidden")
    overlay.classList.add ("hidden")
}

for (let i = 0; i < btnShowModalWindow.length; i++) {
    btnShowModalWindow[i].addEventListener('click', ()=> {
        // console.log ("function for open Modal by remove CSS class .hidden from html tag")
        modalWindow.classList.remove ("hidden")
        overlay.classList.remove ("hidden")
    });
}

btnCloseModalWindow.addEventListener ('click', closeModal)
overlay.addEventListener ('click', closeModal)

document.addEventListener ('keydown',(e)=> {
// console.log (e.key)
    if (e.key == 'Escape' && !modalWindow.classList.contains('hidden')) {
        // console.log ("check work")
        closeModal () 
    }
})