document.addEventListener("DOMContentLoaded", function(){

const headerImages = document.getElementById("headerImages");
const tanggal = document.getElementById("tanggal");
const bulan = document.getElementById("bulan");
const tahun = document.getElementById("tahun");
const form = document.getElementById("formGarisHidup");
const btnReset = document.getElementById("btnReset");

const outTgl = document.getElementById("outTgl");
const outBln = document.getElementById("outBln");
const outThn = document.getElementById("outThn");
const outH1 = document.getElementById("outH1");
const outH2 = document.getElementById("outH2");
const outFinal = document.getElementById("outFinal");
const hasilPanjang = document.getElementById("hasilPanjang");

/* HEADER IMAGE */
for(let i=0;i<6;i++){
    const img = document.createElement("img");
    img.src = "assets/gedung itenas.webp";
    headerImages.appendChild(img);
}

/* TANGGAL KOSONG DULU */
tanggal.innerHTML = '<option value=""></option>';
for(let i=1;i<=31;i++){
    tanggal.innerHTML += `<option value="${i}">${i}</option>`;
}

/* TAHUN KOSONG DULU */
tahun.innerHTML = '<option value=""></option>';
for(let i=2000;i<=2026;i++){
    tahun.innerHTML += `<option value="${i}">${i}</option>`;
}

const pesanKepribadian = {
1: `Bagi mereka yang memiliki garis hidup 1, jiwa kepemimpinan dan kemandirian menjadi kekuatan utama dalam perjalanan hidup. Anda dikenal sebagai pribadi yang percaya diri, tegas, dan memiliki keberanian dalam mengambil keputusan penting. Tantangan tidak membuat Anda mundur, justru memacu semangat untuk membuktikan kemampuan diri. Dalam lingkungan sosial maupun pekerjaan, Anda sering tampil sebagai sosok yang memimpin dan memberi arah. Namun, Anda juga perlu belajar untuk lebih terbuka terhadap saran agar keseimbangan hidup tetap terjaga.`,

2: `Garis hidup 2 menunjukkan pribadi yang lembut, penuh empati, dan memiliki kemampuan bekerja sama yang sangat baik. Anda cenderung menjadi penyeimbang dalam hubungan sosial serta mampu memahami perasaan orang lain dengan dalam. Kepekaan hati membuat Anda mudah tersentuh, tetapi juga menjadikan Anda sosok yang dihargai karena ketulusan dan kesabaran. Dalam kehidupan sehari-hari, Anda lebih nyaman menciptakan keharmonisan daripada konflik, dan selalu berusaha menjaga hubungan tetap baik dengan siapa pun.`,

3: `Pemilik garis hidup 3 identik dengan kreativitas, ekspresi diri, dan kemampuan komunikasi yang kuat. Anda mudah bergaul, memiliki energi positif, dan mampu mencairkan suasana dalam berbagai situasi. Bakat dalam berbicara, menulis, atau bidang seni sering menjadi keunggulan alami Anda. Kehidupan Anda dipenuhi ide-ide segar dan semangat untuk mencoba hal baru. Namun, konsistensi dan fokus menjadi hal penting yang perlu dijaga agar potensi besar yang dimiliki dapat berkembang secara maksimal.`,

4: `Garis hidup 4 mencerminkan pribadi yang disiplin, terstruktur, dan sangat menghargai kestabilan. Anda percaya bahwa keberhasilan diraih melalui kerja keras, perencanaan matang, dan ketekunan. Dalam menghadapi masalah, Anda lebih memilih pendekatan realistis dan logis daripada terburu-buru. Orang lain melihat Anda sebagai sosok yang dapat diandalkan dan bertanggung jawab. Walaupun terkadang terlihat kaku, komitmen dan dedikasi Anda adalah fondasi kuat dalam membangun masa depan.`,

5: `Mereka dengan garis hidup 5 dikenal sebagai pribadi yang mencintai kebebasan dan petualangan. Anda tidak suka terikat oleh rutinitas yang monoton dan selalu mencari pengalaman baru yang menantang. Fleksibilitas dan kemampuan beradaptasi menjadi kekuatan utama dalam menghadapi perubahan. Dalam kehidupan sosial, Anda terlihat dinamis dan penuh semangat. Namun, penting bagi Anda untuk tetap menjaga keseimbangan agar tidak mudah bosan atau kehilangan arah dalam menentukan tujuan jangka panjang.`,

6: `Garis hidup 6 menunjukkan pribadi yang penuh tanggung jawab dan memiliki rasa kepedulian tinggi terhadap keluarga maupun lingkungan sekitar. Anda sering menjadi tempat bergantung bagi orang-orang terdekat karena sifat penyayang dan kesetiaan yang kuat. Keharmonisan dan kenyamanan menjadi nilai penting dalam hidup Anda. Dalam mengambil keputusan, Anda mempertimbangkan dampaknya terhadap orang lain. Kelembutan hati dan dedikasi menjadikan Anda sosok yang dihormati serta dicintai dalam lingkup pertemanan maupun keluarga.`,

7: `Pemilik garis hidup 7 memiliki kecenderungan berpikir mendalam dan analitis. Anda gemar mencari makna di balik setiap peristiwa dan tidak mudah menerima sesuatu tanpa pemahaman yang jelas. Dunia intelektual, penelitian, atau spiritual sering menarik minat Anda. Sifat reflektif membuat Anda lebih nyaman merenung daripada berada di keramaian. Meski terkadang terlihat pendiam, kedalaman pemikiran Anda merupakan kekuatan besar dalam memahami kehidupan secara lebih luas dan bijaksana.`,

8: `Garis hidup 8 identik dengan ambisi, kekuatan, dan orientasi pada kesuksesan material maupun profesional. Anda memiliki kemampuan manajerial yang baik dan dorongan kuat untuk mencapai posisi yang lebih tinggi. Kepercayaan diri dan ketegasan membantu Anda mengambil peluang dengan cepat. Dalam dunia kerja atau bisnis, Anda cenderung fokus pada hasil dan efisiensi. Namun, menjaga keseimbangan antara pencapaian dan kehidupan pribadi sangat penting agar kesuksesan yang diraih tetap membawa kebahagiaan.`,

9: `Mereka yang memiliki garis hidup 9 dikenal sebagai pribadi yang bijaksana, dermawan, dan penuh empati. Anda memiliki kepedulian tinggi terhadap kemanusiaan serta mudah tersentuh oleh penderitaan orang lain. Jiwa sosial dan keinginan membantu menjadi nilai utama dalam hidup Anda. Dalam berbagai situasi, Anda mampu melihat gambaran besar dan berpikir secara matang. Kebijaksanaan serta ketulusan hati menjadikan Anda sosok yang dihormati dan memberikan dampak positif bagi lingkungan sekitar.`
};

form.addEventListener("submit", function(e){

    e.preventDefault();

    let tgl = tanggal.value;
    let bln = bulan.value;
    let thn = tahun.value;

    if(tgl==="" || bln==="" || thn===""){
        alert("Harap isi semua data!");
        return;
    }

    let gabungan = tgl + bln + thn;

    let total = gabungan.split('')
        .reduce((a,b)=>a+parseInt(b),0);

    let hasil1 = total;

    while(total > 9){
        total = total.toString()
        .split('')
        .reduce((a,b)=>a+parseInt(b),0);
    }

    outTgl.value = tgl;
    outBln.value = bln;
    outThn.value = thn;
    outH1.value = hasil1;
    outH2.value = "-";
    outFinal.value = total;

    hasilPanjang.innerHTML = `
        <h2>Tanggal Lahir Anda Berada Pada Garis Hidup ${total}</h2>
        <p>${pesanKepribadian[total]}</p>
    `;
});

btnReset.addEventListener("click", function(){
    outTgl.value="";
    outBln.value="";
    outThn.value="";
    outH1.value="";
    outH2.value="";
    outFinal.value="";
    hasilPanjang.innerHTML="";
});

});