let timeout;
let password = document.getElementById('PassEntry')
let strengthBadge =document.getElementById('StrengthDisp')
let SuggestedPass = document.getElementById('SuggestedPass')
let weakPassword =new RegExp('(?=.*[0-9|a-z|A-Z])')
let strongPassword = new RegExp('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])')
let mediumPassword = new RegExp('(?=.*[0-9])(?=.*[a-z])')
let unbreakablePassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])')
function generatePassword() {
var length = 8, charset ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", retVal = "";
for (var i = 0, n = charset.length; i <length; ++i) { 
    retVal +=charset.charAt(Math.floor(Math.random() * n)); 
} return retVal; } 
function StrengthChecker(PasswordParameter){ 
if(strongPassword.test(PasswordParameter)) {
    strengthBadge.style.backgroundColor="blue" 
    strengthBadge.textContent='Strong' 
    SuggestedPass.style.display='none'
    password.setAttribute('title', 'length of password: ' +val) } 
else if(mediumPassword.test(PasswordParameter)){
    strengthBadge.style.backgroundColor='orange' 
    strengthBadge.textContent='Moderate'
    SuggestedPass.textContent='Suggested Password : ' +generatePassword()
    password.setAttribute('title', 'length of password: ' +val+' Suggested Password: '+generatePassword()); 
} 
else if(weakPassword.test(PasswordParameter)){ 
    strengthBadge.style.backgroundColor = ' red' 
    strengthBadge.textContent='Weak'
    SuggestedPass.textContent='Suggested Password: ' +generatePassword()
    password.setAttribute('title', 'length of password: ' +val+' Suggested Password : '+generatePassword()); 
}
else if(unbreakablePassword.test(PasswordParameter)){ 
    strengthBadge.style.backgroundColor = ' green' 
    strengthBadge.textContent='Unbreakable'
    password.setAttribute('title', 'length of password: ' +val); } 
} 
password.addEventListener("input", ()=> {
    strengthBadge.style.display= 'block'
    clearTimeout(timeout);
    timeout =setTimeout(() => StrengthChecker(password.value), 500);
    if(password.value.length !== 0){
    strengthBadge.style.display!= 'block'
    }
    else{
    strengthBadge.style.display = 'none'
    }
    }); 
function myFunction() {
    var x = document.getElementById("PassEntry");
    if (x.type === "password") {
    x.type = "text";
    } else {
    x.type = "password";
    } }
password.addEventListener("input", lenclc); 
function lenclc(event) {
    val =event.target.value.length;
    return val;
    }
