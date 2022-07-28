    let email = document.getElementById('email');
    let confirmEmail = document.getElementById('re-enter-email');
    let password = document.getElementById('password');
    let confirm_em = document.getElementById('confirm-em');
    let email_quest = document.getElementById('email-quest');
    function showPhone() {  
      email.style.display = 'none';  
      phoneNo.required = true;
      email.required = false;
      phoneNo.style.display = 'block';
      confirm_em.style.display = 'none';
      email_quest.innerText = "What's your phone number?";
      use_email.style.display = 'block';  
      use_number.style.display = 'none'; 
    }
    function showNumber() { 
        phoneNo.style.display = 'none';    
        phoneNo.required = false; 
        email.required = true;
        email.style.display = 'block';
        confirm_em.style.display = 'block';
        email_quest.innerText = "What's your email?";
        use_email.style.display = 'none';
        use_number.style.display = 'block'; 
    }
    let numbers = [];
    for(let i = 48; i < 58; i++) {
        numbers.push(String.fromCodePoint(i));
    }
    let capitalLetters = [];
    for(let i = 65; i < 91; i++) {
        capitalLetters.push(String.fromCodePoint(i));
    }
    
    let passwordRequirments = `
        <div class="password-require">
            <small id="less">Password should be more than eight (8) characters.</small>
            <small id="contain-number">Password should contain a number.</small>
            <small id="contain-capital">Password should contain a capital letter</small></div>`;
   
    function validatePassword() {
        let boolnum = false, boolcap = false, boollen = false ;
        let passwordless = document.getElementById('less');
        let passwordnumber = document.getElementById('contain-number');
        let passwordcapital = document.getElementById('contain-capital')
        let bool1 = false;
        for(let key of Array.from(password.value)) {
             if(numbers.includes(key)) {
                 bool1 = true;
                 break;
             }else {
                 bool1 = false;
             }
         };
         
        let bool2 = false;
        for(let key of Array.from(password.value)) {
             if(capitalLetters.includes(key)) {
                 bool2 = true;
                 break;
             }else {
                 bool2 = false;
             }
         };
         if(bool1 == true) {
             passwordnumber.style.color = 'rgba(202, 140, 140, 0.863)'; 
             boolnum = true;
         }else {
            passwordnumber.style.color = 'red';
            boolnum = false;
         }
         if(bool2 == true) {
             passwordcapital.style.color = 'rgba(202, 140, 140, 0.863)'
             boolcap = true;
         }else {
            passwordcapital.style.color = 'red';
            boolcap = false;
         }         
         if(password.value.length < 8) {
            passwordless.style.color = 'red';
            boollen = false;
         }else {
            passwordless.style.color = 'rgba(202, 140, 140, 0.863)';
            boollen = true;
         }
         return boolnum && boolcap && boollen;
    }
    function fcs() {
        password.insertAdjacentHTML("afterend", passwordRequirments);
    }
    function focusPassword() {
    password.addEventListener('focus', fcs);
    password.addEventListener('blur', () => {
        password.removeEventListener('focus', fcs);
    });
    }
    focusPassword();
    password.addEventListener('keyup', validatePassword);
    
    
    let day = document.getElementById('day');
    let phoneNo = document.getElementById('phone-no');
    let use_email = document.getElementById('use-email');
    let use_number = document.getElementById('use-number');
    use_email.style.display = 'none';
    phoneNo.style.display = 'none';
    let month = document.getElementById('month');
    let year = document.getElementById('year');
    let submit = document.getElementById('submit');
    let profileName = document.getElementById('profileName');
    function validateDOB() {
        let val = month.value;
        let yearVal = (year.value == '')? new Date().getFullYear(): year.value;
        let date = new Date(5, 3, 2022);
        console.log(yearVal);
    }



    function confirmEmailValidation() {
        let bool = false;
        let val = confirmEmail.value;
        let emailVal = document.getElementById('email').value;
        if (emailVal != val) {
            document.getElementById('wrong-email').style.display = 'block';
            bool = true;
        }else {
            document.getElementById('wrong-email').style.display = 'none';
            bool = false;
        }
        confirmEmail.addEventListener('keyup', confirmEmailValidation);
        email.addEventListener('keyup', confirmEmailValidation);
        return bool;
    }
    confirmEmail.addEventListener('blur', confirmEmailValidation);
    confirmEmail.addEventListener('paste', confirmEmailValidation);
    function empty() {
        if(email.style.display == "block") {
            if(email.value.length < 10 || email.value.length > 35) { 
                return false;
            }
            if(confirmEmailValidation() == false) {
                return false;
            }
        }else {
            if(phoneNo.value.length < 5) {
                return false; 
            }
        }
        if(password.value.length < 8 || profileName.value.length < 2) { return false; }
        if(profileName.value.length > 25) {
            alert("Please, check inputs for errors!");
            return false;
        }
        if(day.value > 31 || day.value < 1) { return false; }
        if(year.value > 2022 || year.value < 1930) { return false; }
        return true;
    }

    submit.addEventListener('click', function(e) {
        try {
            if(empty() == false) {
           e.preventDefault();
           alert("Check for empty or invalid inputs!")
        }
        } catch (error) {
            console.error(error);
        }
        try {
            if(validatePassword() == false) {
                console.log("Validate password error"); 
                alert("Invalid password!");
                e.preventDefault();
            }
        } catch (error) {
            console.error(error);
        }
        // validateDOB();

    });