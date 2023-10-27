const botaoEnviar= document.querySelector('.btn-enviar');
const inputText = document.querySelectorAll('.input');


botaoEnviar.addEventListener('click', (event) =>{
    event.preventDefault()
    inputText.forEach((elemento) =>{
        if(elemento.value === ""){
            elemento.classList.remove('preenchido')
            elemento.classList.add('error')
            elemento.nextElementSibling.classList.add('visivel')
        }else{
            elemento.classList.add('preenchido')
            elemento.classList.remove('error')
            elemento.nextElementSibling.classList.remove('visivel')
           
        }    
    })
})



