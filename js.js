 let button =  document.getElementById("button")



function genpass(length, inclow, incupp, incno, incsymb){
    const lowerchars = "qwertyuiopasdfghjklzxcvbnm";
    const upperchars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const numberchars = "0123456789";
    const symbolchars = "!@#$%^&*()_+-=/";

    let allowedchars = "";
    let password = "";

    allowedchars += inclow ? lowerchars : "";
    allowedchars += incupp ? upperchars : "";
    allowedchars += incno ? numberchars : "";
    allowedchars += incsymb ? symbolchars : "";

    for(let i = 0; i < length; i++){
        const randomindex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomindex];

        
    }
    return password;
    

}

const passwordlength = 10;
const inclow = true;
const incupp = true;
const incno = true;
const incsymb = true;



 
                    

button.addEventListener("click", () => {
  
const password = genpass(passwordlength,
                        inclow,
                        incupp,
                        incno,
                        incsymb);


});

document.getElementById("password").innerHTML = password;








