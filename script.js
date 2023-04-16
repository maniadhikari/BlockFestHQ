

  // Initialize Database
    
var registerFormDB = firebase.database().ref("registerForm");


document.getElementById("registerForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var email = getElementVal("email");
    var company = getElementVal("company");
    var website = getElementVal("website");
    var logo = getElementVal("logo");

    console.log(name, email, company, website, logo);

  }


  const getElementVal = (id) => {
          return document.getElementById(id).value;
    };

