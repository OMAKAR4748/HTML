function validateForm() {
     let val = true; 
    let name = document.formName.nameName.value;
    let phone = document.formName.phoneNo.value;
    let password = document.formName.passName.value;
    let confirmPassword = document.formName.passName2.value;
    let gender = document.querySelector('input[name=gender]:checked');
    let dropdown = document.getElementById('job').value;

    let emailValue =document.formName.emailname.value;
    let atPosition =emailValue.indexOf("@");
    let dotPosition =emailValue.indexOf(".");
     
    if(atPosition < 1 || dotPosition < 1 || dotPosition < atPosition +2 || dotPosition +2 >= emailValue.length){
        
        val=false;
    }

    if (!(name.length >= 6 && name.length <= 12)) {
        val = false;
    }
    console.log(phone);
    console.log(password);
    console.log(confirmPassword);
    alert("stop here");

    if (password !==confirmPassword ) {
        alert("Passwords do not match");
        val = false; 
    }
    if (phoneNo.length !== 10) {
        document.getElementById(passId).innerText="Please enter a valid 10-digit phone number";
        val = false;
        setError("do not valid number");
    }
    function setError(id,message){
        document.getElementById(id).innerText=message;
        alert("error");
    }
    return val; 
    
    function validateEmail(){
        val=false;
    }

    function clearForm(){
        document.formName.nameName.value="";
        document.formName.phoneNo.value="";
        password = document.formName.passName.value="";
        confirmPassword = document.formName.passName2.value="";
        gender = document.querySelector('input[name=gender]:checked');
        dropdown = document.getElementById('job').value="";
        emailValue =document.formName.emailname.value="";
    }
}

