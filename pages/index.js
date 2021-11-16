const inputCEP = document.querySelector("#CEP")
const button = document.querySelector("button")


button.addEventListener('click', (event) => 
{
    const CEPvalue = inputCEP.value
    if(CEPvalue.match(/\D/g))
    {
        event.preventDefault()
        alert("CEP inválido!!!!")
        return false
    }

})