document.addEventListener('DOMContentLoaded', function(){

    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmpasswordError = document.getElementById('confirmpasswordError');

    loginForm.addEventListener('submit', function(event){
        event.preventDefault();
        //TODO: agregar metodo que valide el formulario
    })

    emailInput.addEventListener('blur', function(){ // blur es un evento cuando salimos del formulario
        //TODO: agregar metodo que valide el mail
    })

    emailInput.addEventListener('change', function(){ // change es cuando hay un cambio, ej cuando escribo algo
        //TODO: agregar metodo que limpie el error
    })

    passwordInput.addEventListener('change', function(){ // change es cuando hay un cambio, ej cuando escribo algo
        //TODO: agregar metodo que limpie el error
    })

    confirmPasswordInput.addEventListener('change', function(){ // change es cuando hay un cambio, ej cuando escribo algo
        //TODO: agregar metodo que limpie el error
    })

    function validateForm(){

    }

    function validateEmail(){
        const regex = 
    }

})