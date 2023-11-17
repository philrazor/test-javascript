let health = 100 ;
let xp = 0;
let gold = 50;
let PrimaryWeapon;
let secondaryWeapon;


//the inner.text values

const primaryWeapon_text = document.querySelector("#PrimaryWeapon");
const secondaryWeapon_text = document.querySelector("#secondaryWeapon");
const Health_text = document.querySelector("#health");
const xp_text = document.querySelector("#experience");
const button1 = document.querySelector("#button-1");
const button2 = document.querySelector("#button-2");
const button3 = document.querySelector("#button-3");
const button4 = document.querySelector("#button-4");
const goldtext = document.querySelector("#gold");
const text = document.querySelector("#text");


// initialize buttons
button1.onclick = Fight
button2.onclick = goBase
button3.onclick = restoreHealth
button4.onclick = goStore

// create the funtions above
function Fight(){
    if(health>0){
    health-=10
    xp+=10
    gold+=30
    button1.innerText = "shoot"
    button2.innerText = "knife attack"
    button3.innerText = "hide"
    button4.innerText = "quit"
    text.innerText="you are in fight mode"
    Health_text.innerText=health
    goldtext.innerText=gold
    xp_text.innerText=xp

    }
}
