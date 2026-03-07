function shout(){
    alert("Selamat datang di Sistem Informasi");
}

function home(){
    document.getElementById("homePage").style.display="block";
    document.getElementById("menuPage").style.display="none";
    document.getElementById("calcPage").style.display="none";
}

function bukaMenu(){
    alert("Input jumlah pesanan agar dihitung otomatis oleh sistem");
    document.getElementById("homePage").style.display="none";
    document.getElementById("menuPage").style.display="block";
    document.getElementById("calcPage").style.display="none";
}

function bukaCalculator(){
    alert("Masukkan kedua angka untuk menghitung");
    document.getElementById("homePage").style.display="none";
    document.getElementById("menuPage").style.display="none";
    document.getElementById("calcPage").style.display="block";
}

/* MENU */
function hitung(){
    let harga=[12000,10000,15000];
    let inputs=document.querySelectorAll("#menuPage input");

    let total=0;
    for(let i=0;i<inputs.length;i++){
        total+=inputs[i].value*harga[i];
    }

    let diskon=0;
    if(total>50000){
        diskon=total*0.1;
    }

    let bayar=total-diskon;

    document.getElementById("total").innerText=total;
    document.getElementById("diskon").innerText=diskon;
    document.getElementById("bayar").innerText=bayar;
}

function resetMenu(){
    let inputs=document.querySelectorAll("#menuPage input");
    inputs.forEach(i=>i.value=0);

    document.getElementById("total").innerText=0;
    document.getElementById("diskon").innerText=0;
    document.getElementById("bayar").innerText=0;
}

/* CALCULATOR */
function hitungCalc(){
    let a=document.getElementById("angka1").value;
    let b=document.getElementById("angka2").value;
    let op=document.getElementById("operator").value;

    if(a===""||b===""){
        alert("Input tidak boleh kosong");
        return;
    }

    a=parseFloat(a);
    b=parseFloat(b);
    let hasil;

    switch(op){
        case "+": hasil=a+b; break;
        case "-": hasil=a-b; break;
        case "*": hasil=a*b; break;
        case "/": hasil=a/b; break;
        case "%": hasil=a%b; break;
    }

    document.getElementById("hasilCalc").value = hasil;
}

function resetCalc(){
    document.getElementById("angka1").value="";
    document.getElementById("angka2").value="";
    document.getElementById("hasilCalc").innerText="";
}