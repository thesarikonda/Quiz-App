    // creating a function on register button to store the data from input section
async function register(e){
    event.preventDefault();

    let username = document.getElementById('uname').value;
    let useremail = document.getElementById('uemail').value;
    let userpassword = document.getElementById('upassword').value;


    // creating an object to store the data of the user
    let userData = {
        username : username,
        email : useremail,
        password : userpassword,
        
    }
    // Storing the data in the local storage as JSON string
    let ConvertedUserData = JSON.stringify(userData);
    localStorage = localStorage.setItem('userdetails', ConvertedUserData);
    if(username.length!=0 && useremail!=0 && userpassword!=0 ){ 
        alert("Registered Succesfully");
        location.href = 'Login.html';
    }else{
        alert('Please fill the empties!')
    }

    
}
function getdata(){
    // Getting the data from the localstorage to a variable

    let usergetdata = localStorage.getItem('userdetails');

    // JSON.parse() converted the string data into object
    // stored data into another variable as object

    var Convertedvalue = JSON.parse(usergetdata);

}
getdata();