export function checkhole(hole) {
    const counterDead = document.getElementById('dead')
    const counterLost = document.getElementById('lost')
    hole.onclick = (event) => {
        event.preventDefault();
        if (hole.className.includes('hole_has-mole')) {
            counterDead.textContent = Number(counterDead.textContent) + 1
            const element = document.querySelector('.hole.hole_has-mole')
            element.className = 'hole'
            
        } else {
            counterLost.textContent = Number(counterLost.textContent) + 1
        }
        

        if (counterDead.textContent == 10) {
            alert('Победа!')
            counterDead.textContent = 0
            counterLost.textContent = 0
        }

        if (counterLost.textContent ==5) {
            alert('Вы проиграли!')
            counterDead.textContent = 0
            counterLost.textContent = 0
        }

    }
}