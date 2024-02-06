function login(){
    var userdetails = localStorage.getItem('userdetails');
    var object = JSON.parse(userdetails);

    var uemail = document.getElementById('uemail').value;
    var upassword = document.getElementById('upswd').value;

    if (object.email == uemail && object.password == upassword){
        alert("Logged in succesfully!");
        location.href = 'dashboard.html';
    } else{
        alert("Invalid Credentials!")
    }  
}
