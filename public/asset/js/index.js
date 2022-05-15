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


const scheduleForm = (() => {
    let level = 0;

    const elemLevelZero = document.getElementById("content-form-user-details");
    const elemLevelOne = document.getElementById("content-form-vehicle-details");
    const elemLevelTwo = document.getElementById("content-scheduling-details");
    const elemNextBtn = document.getElementById("next-btn");
    const elemSubmitBtn = document.getElementById('submit-btn');


    return () => {
        console.log(level);
        if(level == 0) {
            elemLevelZero.style.display = "flex";
            elemLevelOne.style.display = "none";
            elemLevelTwo.style.display = "none";
            elemSubmitBtn.style.display = "none";
            elemNextBtn.style.display = "inline-block";
            level++;
        } else if(level == 1) {
            elemLevelZero.style.display = "none";
            elemLevelOne.style.display = "flex";
            elemLevelTwo.style.display = "none";
            elemSubmitBtn.style.display = "none";
            elemNextBtn.style.display = "inline-block";
            level++;
        } else {
            elemLevelZero.style.display = "none";
            elemLevelOne.style.display = "none";
            elemLevelTwo.style.display = "flex";
            elemSubmitBtn.style.display = "inline-block";
            elemNextBtn.style.display = "none";
            level = 0;
        }
        return level;
    }
})();

