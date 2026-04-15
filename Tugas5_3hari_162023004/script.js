
function showToast(msg){
    const toast=document.getElementById("toast");
    toast.innerText=msg;
    toast.classList.add("show");
    setTimeout(()=>{toast.classList.remove("show")},3000);
}

function validateForm(){
    const username=document.getElementById("username");
    const email=document.getElementById("email");
    username.classList.remove("error");
    email.classList.remove("error");

    if(username.value.trim()=="" || email.value.trim()==""){
        if(username.value.trim()=="") username.classList.add("error");
        if(email.value.trim()=="") email.classList.add("error");
        showToast("Nama dan email tidak boleh kosong");
        return false;
    }

    const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!pattern.test(email.value)){ 
        email.classList.add("error");
        showToast("Format email tidak valid");
        return false;
    }

    return true;
}
