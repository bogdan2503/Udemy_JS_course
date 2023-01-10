document.getElementById ('score--0').textContent = 0
document.getElementById ('score--1').textContent = 0

let throwBone = document.querySelector ('.btn--roll')
let boneNummber

let color0 = document.querySelector ('.player--0')
let color1 = document.querySelector ('.player--1')
const stop = document.querySelector ('.btn--hold')
let sumCurrent = 0
let active = 0
let total = [0, 0]
let isPlaying = true
let newGame = document.querySelector ('.btn--new')

// function for throw bone
    throwBone.addEventListener ('click', ()=> {
        let max = 6
        let min = 1
        boneNummber = Math.floor(Math.random() * (max - min + 1) ) + min;
            if (boneNummber == 1) {document.querySelector('.dice').src= 'dice1.png'}
            else if (boneNummber == 2){document.querySelector('.dice').src= 'dice2.png'}
            else if (boneNummber == 3){document.querySelector('.dice').src= 'dice3.png'}
            else if (boneNummber == 4){document.querySelector('.dice').src= 'dice4.png'}
            else if (boneNummber == 5){document.querySelector('.dice').src= 'dice5.png'}
            else if (boneNummber == 6){document.querySelector('.dice').src= 'dice6.png'}
            if (boneNummber !== 1) {
                sumCurrent += boneNummber
                document.getElementById(`current--${active}`).textContent = sumCurrent
                }  else  {
                sumCurrent = 0
                document.getElementById(`current--${active}`).textContent = sumCurrent
                active = active === 0 ? 1 : 0
                color0.classList.toggle  ('player--active')
                color1.classList.toggle  ('player--active')
                }
                
})

stop.addEventListener ('click', ()=> {
    if (isPlaying = true) {
   total [active] += sumCurrent;
   document.getElementById(`score--${active}`).textContent = 
   total [active];
   sumCurrent = 0
    document.getElementById(`current--${active}`).textContent = sumCurrent
    active = active === 0 ? 1 : 0
    color0.classList.toggle  ('player--active')
    color1.classList.toggle  ('player--active')
        if(total[active] >= 10) {
            isPlaying = false
            document.querySelector (`.player--${active}`).classList.
            add ('player--winner')
            document.querySelector (`.player--${active}`).classList.
            remove ('player--active')
        } else {
            sumCurrent = 0
            document.getElementById(`current--${active}`).textContent = sumCurrent
            active = active === 0 ? 1 : 0
            color0.classList.toggle  ('player--active')
            color1.classList.toggle  ('player--active')
        }
    }
    })

newGame.addEventListener ('click', ()=> {
    document.getElementById ('score--0').textContent = 0
    document.getElementById ('score--1').textContent = 0
    document.getElementById ('current--0').textContent = 0
    document.getElementById ('current--1').textContent = 0
    document.getElementById ('player--0').classList.remove ('player--winner')
    document.getElementById ('player--1').classList.remove ('player--winner')
    document.getElementById ('player--0').classList.remove ('player--active')
    document.getElementById ('player--1').classList.remove ('player--active')
    document.getElementById ('player--0').classList.add ('player--active')
     sumCurrent = 0
    active = 0
    total = [0, 0]
    isPlaying = true
})