var firstName=""; 
var SecondName="";
var dateofBirth="";
var emailId ="";
var Gender="";
var password="";
function register(){
    alert("i am in login function");
       
       FirstName = document.getElementById("FIRST").value;
       SecondName = document.getElementById("SECOND").value;
       dateofBirth = document.getElementById("DOB").value;
       emailId = document.getElementById("email").value;
       Gender = document.getElementById("GENDER").value;
       password = document.getElementById("pswd").value;

       console.log(FirstName+" "+SecondName+ " " +dateofBirth +" " +emailId+" "+Gender+" "+password);

      if(FirstName == "BHANU"  &&  SecondName =="PRAKASH"  && dateofBirth=="2000-01-01" &&  emailId == "prakash@gmail.com" &&  Gender == "Male"   && password == "123456"){

        document.getElementById("result").innerHTML="successfully logged in";
        document.getElementById("result").style.color="white";
        console.log("successfully Logged in ");
        window.location.href="https://www.google.com/";
    }
   else{
       console.log("Invalid email/password please check.");
       document.getElementById("result").style.color="white";
       document.getElementById("result").innerHTML = "Invalid email/password, please check";
 
  }
  return false;
}
