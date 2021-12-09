var siswa1 = 160;
var siswa2 = 170;
var siswa3 = 182;

if (siswa3 > siswa1) {
    if (siswa3 > siswa2) {
        console.log("siswa3 merupakan siswa dengan tinggi badan tertinggi");
    }else{
        console.log("siswa3 merupakan siswa dengan tinggi badan tertinggi kedua");
    }
}else{
    if (siswa3 < siswa1) {
        if (siswa3 < siswa2) {
            console.log("siswa3 merupakan siswa dengan tinggi badan terpendek");
        }else{
            console.log("siswa3 merupakan siswa dengan tinggi badan terpendek kedua");
        }
    }
}

if (siswa2 > siswa1) {
    if (siswa2 > siswa3) {
        console.log("siswa2 merupakan siswa dengan tinggi badan tertinggi");
    }else{
        console.log("siswa2 merupakan siswa dengan tinggi badan tertinggi kedua");
    }
}else{
    if (siswa2 < siswa1) {
        if (siswa2 < siswa3) {
            console.log("siswa2 merupakan siswa dengan tinggi badan terpendek");
        }else{
            console.log("siswa2 merupakan siswa dengan tinggi badan terpendek kedua");
        }
    }
}

if (siswa1 > siswa2) {
    if (siswa1 > siswa3) {
        console.log("siswa1 merupakan siswa dengan tinggi badan tertinggi");
    }else{
        console.log("siswa1 merupakan siswa dengan tinggi badan tertinggi kedua");
    }
}else{
    if (siswa1 < siswa2) {
        if (siswa1 < siswa3) {
            console.log("siswa1 merupakan siswa dengan tinggi badan terpendek");
        }else{
            console.log("siswa1 merupakan siswa dengan tinggi badan terpendek kedua");
        }
    }
}