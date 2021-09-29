const buttonIsu = document.getElementById("isu");
const buttonPermasalahan = document.getElementById("permasalahan");
const buttonUsaha = document.getElementById("usaha");
const buttonTujuan = document.getElementById("tujuan");
const isi = document.getElementById("isi");

buttonIsu.addEventListener("click",isu );
buttonPermasalahan.addEventListener("click",permasalahan );
buttonUsaha.addEventListener("click",usaha );
buttonTujuan.addEventListener("click",tujuan );

function isu(){
    isi.innerText = "Isu yang menjadi permasalahan utama adalah ancaman Krisis Iklim kepada Indonesia akibat dari pembukaan hutan dan pembakaran bahan bakar fossil. Ancaman ini berupa bencana alam, cuaca ekstrem dan kekeringan esktrem yang dapat terjadi lebih sering frekuensinya dan intensitasnya.";
    buttonIsu.classList.add("chose");   
    buttonPermasalahan.classList.remove("chose");
    buttonUsaha.classList.remove("chose");
    buttonTujuan.classList.remove("chose");
}
function permasalahan(){
    isi.innerText = "Permasalahan terhadap isu tersebut pertama adalah kebijakan yang belum mendukung untuk mengurangi dampak krisis iklim dan juga kesadaran publik yang masih rendah pada isu tersebut padahal dampaknya akan jauh lebih besar daripada dampak pandemi sekarang ini.";
    buttonIsu.classList.remove("chose");
    buttonPermasalahan.classList.add("chose");
    buttonUsaha.classList.remove("chose");
    buttonTujuan.classList.remove("chose");
}
function usaha(){
    isi.innerText = "Solusinya adalah membuat Indonesia beralih dari energi fosil seperti minyak dan batu bara ke energi terbarukan dalam memenuhi kebutuhan energinya, dan juga yang pasti adalah melindungi hutan alam Indonesia yang masih tersisa.";
    buttonIsu.classList.remove("chose");
    buttonPermasalahan.classList.remove("chose");
    buttonUsaha.classList.add("chose");
    buttonTujuan.classList.remove("chose");
}
function tujuan(){
    isi.innerText = "Bagaimana kita bisa membangun dan membuat kesadaran publik terhadap krisis iklim menjadi kuat, publik dapat memahami urgensi dan ancamannya dengan mudah untuk membangun kesiapan masyarakat menghadapi bencana yang diakibatkan oleh krisis iklim sebagai salah satu upaya mitigasi oleh masyarakat?";
    buttonIsu.classList.remove("chose");
    buttonPermasalahan.classList.remove("chose");
    buttonUsaha.classList.remove("chose");
    buttonTujuan.classList.add("chose");
}

