let username = document.querySelector("#username");
let password = document.querySelector("#password");
let email = document.querySelector("#email");
let register_btn= document.querySelector("#sign_up");
//ana 3yza lma ydos signup w feh data fadya ytb3 alert , w bw2f el defult bta3 el form
register_btn.addEventListener("click",function(e){
    e.preventDefault();
    if(username.value==="" || password.value==="" || email.value==="" ){
     alert("please fill data");
}
else{
    localStorage.setItem("username",username.value);
    localStorage.setItem("password",password.value);
    localStorage.setItem("email",email.value);

setTimeout(()=> {
    window.location="index.html";
},1500);
}
});
