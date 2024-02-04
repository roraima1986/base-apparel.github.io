document.addEventListener('DOMContentLoaded', () => {
    
    const emailInput = document.querySelector('#email')
    const btn = document.querySelector('#form-btn')
    const iconError = document.querySelector(".form__icon-error")
    const msgError = document.querySelector(".form__msg")

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    btn.addEventListener('click', e => {
        e.preventDefault()

        if(emailRegex.test(emailInput.value)) {
            iconError.style.display = 'none'
            msgError.style.display = 'none'
            emailInput.value = ''

            setTimeout(() => {
                alert('Email sent')
            }, 1000)
        } else {
            iconError.style.display = 'block'
            msgError.style.display = 'block'
        }
    })
    
})