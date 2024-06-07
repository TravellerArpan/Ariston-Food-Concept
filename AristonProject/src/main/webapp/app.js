/**
 * 
 */
let username = document.querySelectorAll(".input")[0];
let email =  document.querySelectorAll(".input")[1];
let text = document.querySelectorAll(".input")[2] ; 
let btn = document.querySelectorAll(".input")[3] ; 
let form = document.querySelector("form") ; 
let nameError = document.querySelector("#error1") ;
let emailError = document.querySelector("#error2"); 
let sidebar = document.querySelector("#bars");
let hiddenSideMenu = document.querySelector("#hideSideBar") ; 
let sideCross = document.querySelector(".fa-xmark") ;
let changeImage = document.querySelector("#head") ; 
let anglesleft = document.querySelector(".fa-angles-left"); 
let anglesright =document.querySelector(".fa-angles-right")
console.log(changeImage , anglesleft , anglesright) ; 
let carasol = [ "Images/seafood.jpg" ,  
                "Images/FinalWall.jpg" , 
                "./Images/DishWallpaper.jpg"
              ]; 
let i = 0 ; 
changeImage.style.backgroundImage  = `url(${carasol[i]})`;
console.log(carasol[i]) ; 
anglesleft.addEventListener("click" , ()=> {
    i-- ; 
    if(i < 0){
        i = carasol.length - 1 ;  
    } 
    changeImage.style.backgroundImage  = `url(${carasol[i]})`;
} ) ; 
anglesright.addEventListener("click" , ()=> {
    i++ ; 
    if(i > carasol.length - 1 ){
        i = 0 ;  
    } 
    changeImage.style.backgroundImage = `url(${carasol[i]})`;
} ) ; 
setInterval(()=>{
    i++ ; 
    if(i > carasol.length - 1 ){
        i = 0 ;  
    } 
    changeImage.style.backgroundImage = `url(${carasol[i]})`;
}, 3000)


let storage = [] ; 
let localData = JSON.parse(localStorage.getItem("AristonData"))  ; 
console.log(localData) ; 
if(localData) {
    storage = localData ; 
    console.log(storage); 
}
form.addEventListener("submit" , (e)=>{
    nameError.innerHTML = "" ;
    emailError.innerHTML = "";
    let flag = true ;
    let regxName =/^[A-Za-z" "]{2,14}$/ ;  
    if(username.value == ""){
        nameError.innerHTML = "* Please Enter Name" ;
        flag = false ; 
        e.preventDefault() ; 
    }else if(regxName.test(username.value)){
        
    }else{
        nameError.innerHTML = "* Invalid User Name" ; 
        flag = false ; 
        e.preventDefault() ;
    }
    if(email.value == ""){
        emailError.innerHTML = "* Please Enter Email"; 
        flag = false ; 
        e.preventDefault() ; 
    }

    if(flag){
        let object = {
            UserName : username.value ,
            Email : email.value , 
            TextArea : text.value 
        }
        storage.push(object) ; 
        console.log(storage) ; 
        localStorage.setItem("AristonData" , JSON.stringify(storage)) ; 
    }
}) ; 

sidebar.addEventListener("click" , ()=>{
    hiddenSideMenu.style.display = "block" ; 
    hiddenSideMenu.style.left = "0%" ; 
} ) ; 
// sidebar.addEventListener("onScroll" , () => {
//     hiddenSideMenu.style.left = "0%" ;
// }) ; 
sideCross.addEventListener("click" , ()=> {
    hiddenSideMenu.style.left = "-50%" ; 
})  ; 