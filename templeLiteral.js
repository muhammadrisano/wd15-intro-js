const nilaiIPS = 80
const nilaiIPA = 70

/*
Nilai IPS saya 80
Nilai IPA saya 70
rata-rata dari kedua nilai = 75
*/

// menggunakan concat
const text = 'Nilai IPS saya '+ nilaiIPS + '\n' + 'Nilai IPA saya '+ nilaiIPA + '\n'+ 'Rata-rata dari kedua nilai = '+ ((nilaiIPA + nilaiIPS) / 2)
console.log(text);

// menggunakan template literal
const text2 = `Nilai IPS saya ${nilaiIPS}
nilai IPA saya ${nilaiIPA}
Rata-rata dari kedua nilai = ${(nilaiIPA + nilaiIPS) /2}`
console.log(text2);