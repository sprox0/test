const email = document.querySelector('.user-email')
const day = document.querySelector('.day-bth')
const month = document.querySelector('.month-bth')
const year = document.querySelector('.year-bth')
const password = document.querySelector('.user-password')
const confirmPassword = document.querySelector('.user-confirm-password')
const userName = document.querySelector('.user-name')
const lastName = document.querySelector('.user-last-name')
const radioBtn = document.querySelectorAll('.user-gender')

const cardNone = document.querySelector('.data-user-section')
const completeCard = document.querySelector('.complete-wrapper')
const footerBtn = document.querySelector('.footer-btn')
const selectedRadio = document.getElementsByName('gendar')
const input = document.querySelectorAll('input')


let dayArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let yearArr = ['2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990',]
let arr = []


function submit() {
    radioCheck()
    nameUser()
    eMail()
    confirmPass()
    console.log(arr)
    if (arr.length === 6){
        completeCard.classList.add('active')
    } 
    if (arr.length < 6){
        arr = []
        input.forEach(function(item, i){
            input[i].value = ''
        })
    }
}


footerBtn.addEventListener('click', submit)

function radioCheck() {
    for (let i = 0; i < radioBtn.length; i++){
        if (radioBtn[i].checked){
            arr.push(radioBtn[i])
        } 
    }
}

function nameUser() {
    
    if(userName.value != ''){
        arr.push(userName.value)
        userName.style.borderColor = '#4ee12a'
    } 
    if(userName.value == ''){
        userName.style.borderColor = '#F2F2F2'
    }
   
    if(lastName.value != ''){
        arr.push(lastName.value)
        lastName.style.borderColor = '#4ee12a'  
    } 
    if(lastName.value == ''){
        lastName.style.borderColor = '#F2F2F2'
    }
}

function confirmPass(){
    if (password.value === confirmPassword.value){
        password.style.borderColor = '#4ee12a'
        confirmPassword.style.borderColor = '#4ee12a'
    } 
    if(password.value.length > 0 && password.value === confirmPassword.value){
        arr.push(password.value)
    }
    if(confirmPassword.value.length > 0 && password.value === confirmPassword.value){
        arr.push(confirmPassword.value)
    }
    if (password.value.length < 8 && confirmPassword.value.length < 8){
        password.style.borderColor = '#e10e0e'
        confirmPassword.style.borderColor = '#e10e0e'
    } 
    if (password.value.length === 0 && confirmPassword.value.length === 0){
        password.style.borderColor = '#F2F2F2'
        confirmPassword.style.borderColor = '#F2F2F2'
    }
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
    if (password.value.length < 8 && confirmPassword.value.length < 8){
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


function eMail() {
    let str = email.value
    if (str.length > 0){
        if (str.length >= 6 && str.includes('@') && str.includes('.')){
            arr.push(str)
            email.style.borderColor = '#4ee12a'
        } else {
            email.style.borderColor = '#e10e0e'
        }
    } 
}


function setEmail(e) {
    
    if (e.type == 'keypress') {
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
confirmPassword.addEventListener('keypress', setpassword)    
email.addEventListener('keypress', setEmail)