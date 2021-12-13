/*
 * PAGE :  REGISTER
 ************************/

console.log('Register JS');

/******  Déclarations Constantes ********/

// Check Conditions Générales
const cg = document.getElementById('cg')

// Affichage du message d'erreur
const warnMessage = document.getElementById('prevent')
warnMessage.style.color = 'red'
warnMessage.style.fontSize = '8pt'

// Submit Button
const registerBtn = document.getElementById('register-btn')

// Mot de Passe
const pw = document.getElementById('pw')

// Confirmation du Mot de Passe
const pwConfirm = document.getElementById('pw-confirm')




/******  Conditions  ********/

registerBtn.addEventListener('click', function (e) {
    if (pw.value !== pwConfirm.value) {
        e.preventDefault(), warnMessage.innerText = 'Passwords are different', console.log('different password');
    } else if (!cg.checked) {
        e.preventDefault(), warnMessage.innerText = 'You have to accept the terms of use to continue.'
    }
})
