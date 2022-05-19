const toggle = (() => {
    let isToggle = false;

    return () => {
        
        if(!isToggle) {
            isToggle = !isToggle;
            //code
        } else {
            isToggle = !isToggle;
            //code
        }
        return isToggle;
    }
    
})(); 


let isToggleMenu = false;

function menu(x) {
    x.classList.toggle("open");

    let elemNavLink = document.getElementById('nav-bar-link-id');
    let elemNavBar = document.getElementById('nav-bar');
    if (!isToggleMenu) {
        isToggleMenu = !isToggleMenu;
        //code
        elemNavLink.style.display = "flex";
        elemNavBar.style.height = "auto";
    } else {
        isToggleMenu = !isToggleMenu;
        //code
        elemNavLink.style.display = "none";
        elemNavBar.style.height = '56px';
    }

};







window.addEventListener('resize', () => {
    let elemNavBarLink = document.querySelectorAll('.nav-bar .nav-bar-link');
    if(window.innerWidth > 768) {
        elemNavBarLink[0].style.display = "flex";
    } else {
        elemNavBarLink[0].style.display = "none";
    }
})



function toggleOurClientLessMore(x) {
    let elemListFieldDetail = x.parentNode.parentNode.parentNode.childNodes[3];
    elemListFieldDetail.classList.toggle('detail-more');
    

    if(elemListFieldDetail.classList.contains('detail-more')) {
        x.innerHTML = "View Less";
    } else {
        x.innerHTML = "View More";
    }

};

let isToggleEmergency = true;
let elemEmergency = document.getElementById('container-emergency');
// setTimeout(() => {
//     if(isToggleEmergency) {
//         elemEmergency.style.display= "flex";

//         setTimeout(() => {
//             elemEmergency.style.width = '100%';
//             elemEmergency.style.height = '100vh';
//         }, 1000);

//         isToggleEmergency  = !isToggleEmergency;
//     }
// },1000);


function toggleEmergency() {
    console.log(isToggleEmergency);
    let elemCloseBtn = document.getElementById('close-emergency');


    if(!isToggleEmergency) {
        elemEmergency.style.width = 0;
        elemEmergency.style.height = 0;

        setTimeout(() => {
            elemEmergency.style.display= "none";
        }, 1000);

        isToggleEmergency  = !isToggleEmergency;
    }
}

let elemMassage = document.getElementById('form-message-description');
let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;

let elemFormName = document.getElementById('form-full-name');
let elemFormEmail = document.getElementById('form-email');
let elemFormPhone = document.getElementById('form-phone');
let elemFormOriginalPass = document.getElementById('form-pass-original');
let elemFormConfirmPass = document.getElementById('form-pass-confirm');

if(elemFormName)
elemFormName.addEventListener('input', () => {
    if(elemFormName.value.length < 3) {
        elemFormName.style.borderColor = "#ec6868";
        elemMassage.innerHTML = "Name must be greater than 3 letter.";
        elemMassage.style.color = "#ec6868";
    } else if(elemFormName.value.length > 30) {
        elemFormName.style.borderColor = "#ec6868";
        elemMassage.innerHTML = "Name must be less than 30 letter.";
        elemMassage.style.color = "#ec6868";
    } else {
        elemFormName.style.borderColor = "#4dc84f";
        elemMassage.innerHTML = "Enter Your Details Below.";
        elemMassage.style.color = "#4dc84f";
    }
});

if(elemFormEmail)
elemFormEmail.addEventListener('input', () => {
    if(elemFormEmail.value.match(validRegex)) {
        elemFormEmail.style.borderColor = "#4dc84f";
        elemMassage.innerHTML = "Enter Your Details Below.";
        elemMassage.style.color = "#4dc84f";
    } else {
        elemFormEmail.style.borderColor = "#ec6868";
        elemMassage.innerHTML = "Email must be valid.";
        elemMassage.style.color = "#ec6868";
    }
});

if(elemFormPhone)
elemFormPhone.addEventListener('input', () => {
    if(elemFormPhone.value.length == 10) {
        elemFormPhone.style.borderColor = "#4dc84f";
        elemMassage.innerHTML = "Enter Your Details Below.";
        elemMassage.style.color = "#4dc84f";
    } else {
        elemFormPhone.style.borderColor = "#ec6868";
        elemMassage.innerHTML = "Phone must be of length 10.";
        elemMassage.style.color = "#ec6868";
    }
});

if(elemFormOriginalPass)
elemFormOriginalPass.addEventListener('input', () => {
    if(elemFormOriginalPass.value.match(lowerCaseLetters) && elemFormOriginalPass.value.match(upperCaseLetters) && elemFormOriginalPass.value.match(numbers) && elemFormOriginalPass.value.length >= 8) {
        elemFormOriginalPass.style.borderColor = "#4dc84f";
        elemMassage.innerHTML = "Enter Your Details Below.";
        elemMassage.style.color = "#4dc84f";
    } else {
        elemFormOriginalPass.style.borderColor = "#ec6868";
        elemMassage.innerHTML = "Password must contain the following: <br /> lowercase, uppercase, number and <br /> min length should be 8.";
        elemMassage.style.color = "#ec6868";
    }
});

if(elemFormConfirmPass)
elemFormConfirmPass.addEventListener('input', () => {
    if(elemFormConfirmPass.value == elemFormOriginalPass.value) {
        elemFormOriginalPass.style.borderColor = "#4dc84f";
        elemMassage.innerHTML = "Enter Your Details Below.";
        elemMassage.style.color = "#4dc84f";
    } else {
        elemFormOriginalPass.style.borderColor = "#ec6868";
        elemMassage.innerHTML = "Password must be same";
        elemMassage.style.color = "#ec6868"; 
    }
})

// async function getData() {
//     const response = await fetch(`/user/piyushraj2340@gmail.com`);
//     const result = await response.json();
//     return result;
// }

const formSignUpClient = (() => {
    

    let level = 0;
    
    let elemPanelAccount = document.getElementById('content-panel-account');
    let elemPanelPersonal= document.getElementById('content-panel-personal');

    let elemContentAccount = document.getElementById('content-form-account');
    let elemContentPersonal= document.getElementById('content-form-personal');

    let elemNextBtn = document.getElementById('next-btn');
    let elemSubmitBtn = document.getElementById('submit-btn');

    return async () => {
        
        if(level == 0) {
            if(elemFormName.value.length < 3) {
                elemFormName.style.borderColor = "#ec6868";
                elemMassage.innerHTML = "Name must be greater than 3 letter.";
                elemMassage.style.color = "#ec6868";
                return level;
            } else if(elemFormName.value.length > 30) {
                elemFormName.style.borderColor = "#ec6868";
                elemMassage.innerHTML = "Name must be less than 30 letter.";
                elemMassage.style.color = "#ec6868";
                return level;
            } else if (!elemFormEmail.value.match(validRegex)) {
                elemFormEmail.style.borderColor = "#ec6868";
                elemMassage.innerHTML = "Email must be valid.";
                elemMassage.style.color = "#ec6868";
                
                return level;
            } else if (elemFormPhone.value.length != 10) {
                elemFormPhone.style.borderColor = "#ec6868";
                elemMassage.innerHTML = "Phone must be of length 10.";
                elemMassage.style.color = "#ec6868";
                return level;
            } else if(!(elemFormOriginalPass.value.match(lowerCaseLetters) && elemFormOriginalPass.value.match(upperCaseLetters) && elemFormOriginalPass.value.match(numbers) && elemFormOriginalPass.value.length >= 8)) {
                elemFormOriginalPass.style.borderColor = "#ec6868";
                elemMassage.innerHTML = "Password must contain the following: <br /> lowercase, uppercase, number and <br /> min length should be 8.";
                elemMassage.style.color = "#ec6868";
                return level;
            } else if(elemFormConfirmPass.value != elemFormOriginalPass.value) {
                elemFormOriginalPass.style.borderColor = "#ec6868";
                elemMassage.innerHTML = "Password must be same";
                elemMassage.style.color = "#ec6868"; 
                return level;
            } else {
                const responseEmail = await fetch(`/client/email/${elemFormEmail.value}`);
                const resultEmail = await responseEmail.json();

                const responsePhone = await fetch(`/client/phone/${elemFormPhone.value}`);
                const resultPhone = await responsePhone.json();

                if(resultEmail.email != 'not found') {
                    elemFormEmail.style.borderColor = "#ec6868";
                    elemMassage.innerHTML = "This Email is already in use.";
                    elemMassage.style.color = "#ec6868";
                    return level;
                }

                if(resultPhone.phone != 'not found') {
                    elemFormPhone.style.borderColor = "#ec6868";
                    elemMassage.innerHTML = "This Phone is already in use.";
                    elemMassage.style.color = "#ec6868";
                    return level;
                }

                elemFormOriginalPass.style.borderColor = "#4dc84f";
                elemMassage.innerHTML = "Enter Your Details Below.";
                elemMassage.style.color = "#4dc84f";

                elemPanelAccount.classList.remove('active');
                elemPanelPersonal.classList.add('active');

                console.log(elemPanelAccount);
                console.log(elemPanelPersonal);

                elemContentAccount.style.display = 'none';
                elemContentPersonal.style.display = 'block';
                elemNextBtn.style.display = 'none';
                elemSubmitBtn.style.display = 'inline-block';
    
                level++;
            }
            
        } 
        // else {
        //     elemContentAccount.style.display = 'block';
        //     elemContentPersonal.style.display = 'none';
        // }

        


        return level;
    }
})();

let elemDateOfBirth = document.getElementById('form-date-of-birth');
let elemGender = document.getElementById('form-date-of-birth');
let elemCountry = document.getElementById('form-date-of-birth');
let elemCity = document.getElementById('form-date-of-birth');



const formSignUpEmployee = (() => {
    

    let level = 0;
    
    let elemPanelAccount = document.getElementById('content-panel-account');
    let elemPanelPersonal = document.getElementById('content-panel-personal');
    let elemPanelWork = document.getElementById('content-panel-work');

    let elemContentAccount = document.getElementById('content-form-account');
    let elemContentPersonal = document.getElementById('content-form-personal');
    let elemContentWork = document.getElementById('content-form-work');

    let elemNextBtn = document.getElementById('next-btn');
    let elemSubmitBtn = document.getElementById('submit-btn');

    return async () => {
        
        if(level == 0) {
            if(elemFormName.value.length < 3) {
                elemFormName.style.borderColor = "#ec6868";
                elemMassage.innerHTML = "Name must be greater than 3 letter.";
                elemMassage.style.color = "#ec6868";
                return level;
            } else if(elemFormName.value.length > 30) {
                elemFormName.style.borderColor = "#ec6868";
                elemMassage.innerHTML = "Name must be less than 30 letter.";
                elemMassage.style.color = "#ec6868";
                return level;
            } else if (!elemFormEmail.value.match(validRegex)) {
                elemFormEmail.style.borderColor = "#ec6868";
                elemMassage.innerHTML = "Email must be valid.";
                elemMassage.style.color = "#ec6868";
                
                return level;
            } else if (elemFormPhone.value.length != 10) {
                elemFormPhone.style.borderColor = "#ec6868";
                elemMassage.innerHTML = "Phone must be of length 10.";
                elemMassage.style.color = "#ec6868";
                return level;
            } else if(!(elemFormOriginalPass.value.match(lowerCaseLetters) && elemFormOriginalPass.value.match(upperCaseLetters) && elemFormOriginalPass.value.match(numbers) && elemFormOriginalPass.value.length >= 8)) {
                elemFormOriginalPass.style.borderColor = "#ec6868";
                elemMassage.innerHTML = "Password must contain the following: <br /> lowercase, uppercase, number and <br /> min length should be 8.";
                elemMassage.style.color = "#ec6868";
                return level;
            } else if(elemFormConfirmPass.value != elemFormOriginalPass.value) {
                elemFormOriginalPass.style.borderColor = "#ec6868";
                elemMassage.innerHTML = "Password must be same";
                elemMassage.style.color = "#ec6868"; 
                return level;
            } else {
                // const responseEmail = await fetch(`/employee/email/${elemFormEmail.value}`);
                // const resultEmail = await responseEmail.json();

                // const responsePhone = await fetch(`/employee/phone/${elemFormPhone.value}`);
                // const resultPhone = await responsePhone.json();

                // if(resultEmail.email != 'not found') {
                //     elemFormEmail.style.borderColor = "#ec6868";
                //     elemMassage.innerHTML = "This Email is already in use.";
                //     elemMassage.style.color = "#ec6868";
                //     return level;
                // }

                // if(resultPhone.phone != 'not found') {
                //     elemFormPhone.style.borderColor = "#ec6868";
                //     elemMassage.innerHTML = "This Phone is already in use.";
                //     elemMassage.style.color = "#ec6868";
                //     return level;
                // }

                elemFormOriginalPass.style.borderColor = "#4dc84f";
                elemMassage.innerHTML = "Enter Your Details Below.";
                elemMassage.style.color = "#4dc84f";

                elemPanelAccount.classList.remove('active');
                elemPanelPersonal.classList.add('active');

                console.log(elemPanelAccount);
                console.log(elemPanelPersonal);

                elemContentAccount.style.display = 'none';
                elemContentPersonal.style.display = 'block';
                
    
                level++;
            }
            
        } else if(level == 1){
            elemContentPersonal.style.display = 'none';
            elemContentWork.style.display = 'block';
            elemNextBtn.style.display = 'none';
            elemSubmitBtn.style.display = 'inline-block';
            elemPanelPersonal.classList.remove('active');
            elemPanelWork.classList.add('active');
            level++;
         }
        // else {
        //     elemContentAccount.style.display = 'block';
        //     elemContentPersonal.style.display = 'none';
        // }
        return level;
    }
})();


const scheduleForm = (() => {
    let level = 0;
    
    let elemPanelUser = document.getElementById('content-panel-account');
    let elemPanelVehicle = document.getElementById('content-panel-personal');
    let elemPanelSchedule = document.getElementById('content-panel-work');

    let elemContentUser = document.getElementById('content-form-user-details');
    let elemContentVehicle = document.getElementById('content-form-vehicle-details');
    let elemContentSchedule = document.getElementById('content-scheduling-details');

    let elemNextBtn = document.getElementById('next-btn');
    let elemSubmitBtn = document.getElementById('submit-btn');

    return async () => {
        
        if(level == 0) {
            if(elemFormName.value.length < 3) {
                elemFormName.style.borderColor = "#ec6868";
                elemMassage.innerHTML = "Name must be greater than 3 letter.";
                elemMassage.style.color = "#ec6868";
                return level;
            } else if(elemFormName.value.length > 30) {
                elemFormName.style.borderColor = "#ec6868";
                elemMassage.innerHTML = "Name must be less than 30 letter.";
                elemMassage.style.color = "#ec6868";
                return level;
            } else if (!elemFormEmail.value.match(validRegex)) {
                elemFormEmail.style.borderColor = "#ec6868";
                elemMassage.innerHTML = "Email must be valid.";
                elemMassage.style.color = "#ec6868";
                
                return level;
            } else if (elemFormPhone.value.length != 10) {
                elemFormPhone.style.borderColor = "#ec6868";
                elemMassage.innerHTML = "Phone must be of length 10.";
                elemMassage.style.color = "#ec6868";
                return level;

            } else {
                elemMassage.innerHTML = "Enter Your Details Below.";
                elemMassage.style.color = "#4dc84f";

                elemPanelUser.classList.remove('active');
                elemPanelVehicle.classList.add('active');

                elemContentUser.style.display = 'none';
                elemContentVehicle.style.display = 'block';
                level++;
            }
            
        } else if(level == 1) {
            elemPanelVehicle.classList.remove('active');
            elemPanelSchedule.classList.add('active');

            elemContentVehicle.style.display = 'none';
            elemContentSchedule.style.display = 'block';

            elemNextBtn.style.display = 'none';
            elemSubmitBtn.style.display = 'inline-block';
            level++;
        } 
        // else {
        //     elemPanelUser.classList.remove('active');
        //     elemPanelSchedule.classList.add('active');

        //     elemPanelUser.style.display = 'none';
        //     elemContentSchedule.style.display = 'block';
        // }
        return level;
    }
})();

async function patchData(id,employeeId) {
    const queryEmployee = await fetch(`/employee/user/${employeeId}`);
    const result = await queryEmployee.json();

    const data = {
        employeeId: result._id,
        employeeName: result.name,
        employeeEmail: result.email,
        employeePhone: result.phone,
        employeeGarageName: result.garageName,
        servicingStatus: 'service Accepted'
    }

    const response = await fetch(`/servicing/schedule/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const updateResult = await response.json();

    console.log(updateResult);
    window.location.reload();
}