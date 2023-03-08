const email = document.querySelector('.user-email')
const day = document.querySelector('.day-bth')
const month = document.querySelector('.month-bth')
const year = document.querySelector('.year-bth')
const password = document.querySelector('.user-password')
const confirmPassword = document.querySelector('.user-confirm-password')


let dayArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'Julay', 'Augost', 'September', 'October', 'Nivember', 'December']
let yearArr = ['2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990',]


function confirmPass(){
    if (password.value === confirmPassword.value){
        password.style.borderColor = '#4ee12a'
        confirmPassword.style.borderColor = '#4ee12a'
    } 
    else {
        password.style.borderColor = '#e10e0e'
        confirmPassword.style.borderColor = '#e10e0e'
    }
    password.style.borderColor = '#F2F2F2'
        confirmPassword.style.borderColor = '#F2F2F2'
}



function setpassword(e) {
    
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            password.blur();
            confirmPassword.blur();
        }
    } 

    if (password.value === confirmPassword.value){
        password.style.borderColor = '#4ee12a'
        confirmPassword.style.borderColor = '#4ee12a'
    } 
    else {
        password.style.borderColor = '#e10e0e'
        confirmPassword.style.borderColor = '#e10e0e'
    }  
    
    
}


function yearNum() {
    for (let i = 0; i < yearArr.length; i++){
        let option = document.createElement('option')
        option.setAttribute('value', yearArr[i])
        option.text = yearArr[i]
        year.appendChild(option)
    }
}

yearNum()

function monthNum() {
    for (let i = 0; i < monthArr.length; i++){
        let option = document.createElement('option')
        option.setAttribute('value', monthArr[i])
        option.text = monthArr[i]
        month.appendChild(option)
    }
    
}
monthNum()



function dayNum() {
    
    for (let i = 0; i < dayArr.length; i++){
        let option = document.createElement('option')
        option.setAttribute('value', dayArr[i])
        option.text = dayArr[i]
        day.appendChild(option)
    }
    
}
dayNum()

function eMail () {
    let str = email.value
    
    if (str.length > 0){
        if (str.length >= 6 && str.includes('@') && str.includes('.')){
            email.style.borderColor = '#4ee12a'
        } 
        else {
            email.style.borderColor = '#e10e0e' 
        }
    }
}

function setEmail(e) {
    
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            email.blur();
        }
    } 
    
    let str = email.value
   
    if (str.length > 0){

        if (str.length >= 6 && str.includes('@') && str.includes('.')){
            email.style.borderColor = '#4ee12a'
        } 
        else {
            email.style.borderColor = '#e10e0e' 
        }
    }
    if (str.length === 0){
        email.style.borderColor = '#e10e0e' 
    }
}

window.addEventListener('click', confirmPass) 
confirmPassword.addEventListener('click', confirmPass)
window.addEventListener('keypress', setpassword)
window.addEventListener('click', eMail) 
email.addEventListener('keypress', setEmail)