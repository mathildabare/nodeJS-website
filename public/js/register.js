/*
 * PAGE :  REGISTER
 ************************/


/******  Déclarations Constantes ********/

const pw = document.getElementById('pw')
const pwConfirm = document.getElementById('pw-confirm')



// Check Conditions Générales
const cg = document.getElementById('cg')

// Affichage du message d'erreur
const warnMessage = document.getElementById('prevent')
warnMessage.style.color = 'red'
warnMessage.style.fontSize = '8pt'

// Submit Button
const registerBtn = document.getElementById('register-btn')






/******  Conditions d'utilisation  ********/

registerBtn.addEventListener('click', function(e){
    if (!cg.checked){
e.preventDefault(), warnMessage.innerText ='You have to accept the terms of use to continue.' }
} )

