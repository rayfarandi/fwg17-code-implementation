function reverseWords(text) {
    let katahasil = text.split(' ')
    let hasil = '';

    for (let x = katahasil.length - 1; x >= 0; x--) {
        hasil = hasil + katahasil[x] + ' '; 
    }
    return hasil 
}


function inputText(input){
    const hasil = reverseWords(input)
    console.log(hasil)
}

inputText('Saya Belajar Javascript')