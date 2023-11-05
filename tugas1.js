function palindrome(text) {
    var hasil = ''
    for (x = text.length - 1; x >= 0; x--) {
        hasil = hasil + text[x]
    }
    if (text === hasil) {
        console.log(text +` ini palindrom`)
    } else {
        console.log(text + `ini bukan palindrom`)
    }
}

palindrome('makam')
