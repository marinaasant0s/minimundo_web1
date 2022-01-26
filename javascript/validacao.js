const button= document.getElementById('button')

button.addEventListener('click', (event) => {
    event.preventDefault()

    const email= document.getElementById('email')
    const password= document.getElementById('password')
    const cpf= document.getElementById('cpf')
    const phone= document.getElementById('phone')

    if(password.value == ''){
        password.classList.add("erroInput")
    }else{
        password.classList.remove("erroInput") 
    }

    if(email.value == ''){
        email.classList.add("erroInput")
    }else{
        email.classList.remove("erroInput")
    }

    if(cpf.value == '' ){
        cpf.classList.add("erroInput")
    }else{
        cpf.classList.remove("erroInput")
    }


    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || (email.value.indexOf('.') - email.value.indexOf('@') == 1)){
        email.classList.add("erroInput")
    }
    
    function isValidCPF(cpf) {
        if (typeof cpf !== 'string') return false
        cpf = cpf.replace(/[^\d]+/g, '')
        if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false
        cpf = cpf.split('').map(el => +el)
        const rest = (count) => (cpf.slice(0, count-12)
            .reduce( (soma, el, index) => (soma + el * (count-index)), 0 )*10) % 11 % 10
        return rest(10) === cpf[9] && rest(11) === cpf[10]
    }


})

