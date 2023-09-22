// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData(){
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const city = document.getElementById('city').value
    const zipCode = document.getElementById('zip-code').value
    const status = document.getElementById('status').checked

    return {
            name : name,
            email : email,
            city : city,
            zipCode : zipCode,
            status : status
    }
}

function isNumber(Data){
    return (!isNaN(Data) && Data !== "")
}

function checkboxIsChecked(){
    return document.getElementById('status').checked
}

function validateFormData(Data){
    if (Data !== "" && isNumber(Data.zipCode) !== false && checkboxIsChecked(Data.status) !== false){
        return true
    } else {
        return false
    }
}

function submit(){
    const warning = document.getElementById('warning');
    if (validateFormData(handleGetFormData()) == false){
        warning.innerHTML ="Periksa form anda sekali lagi"
    } else {
        warning.innerHTML =""
    }
}

document.getElementById('submit-form').addEventListener('click', (event) => {
    event.preventDefault();
    submit()
})


