

function validateForm() 
{ 
        var username =  /^[a-zA-Z][a-zA-Z0-9]{3,15}/;

        if(!document.registerform.username.value.match(username)) { 
                alert('Invalid username format - username should begin with a character [a-zA-Z] and has 3 or more alphanumeric characters')
                return false;
        }
        
        var pass=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        
        if(!document.registerform.password.value.match(pass)) { 
                alert('Invalid password format - password should contain atleast 8 or more characters AND contains at least 1 upper case letter AND 1 number and 1 of the following special characters ( / * - + ! @# $ ^ & * )')
                return false;
        }

        if(document.registerform.confirmpassword.value != document.registerform.password.value) { 
                alert('The passwords do not match with each other')
                return false;
        }
        
        var emailID = document.registerform.email.value;

        atpos = emailID.indexOf("@");
        dotpos = emailID.lastIndexOf(".");
         
        if (atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("Please enter correct email ID");
            return false;
        }
} 