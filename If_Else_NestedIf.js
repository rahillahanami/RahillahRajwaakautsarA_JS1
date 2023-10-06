let umur = 17;
let izinOrangTua = true; 

if(umur>=17){
    console.log("Anda memenuhi syarat pertama");
    if(izinOrangTua==true){
        console.log("Anda memenuhi syarat kedua. Silahkan isi data diri anda");
    } else{
        console.log("Kembali lagi ketika anda sudah mendapatkan izin");
    }
} else{
    console.log("Anda belum cukup umur untuk mendapatkan SIM");
}