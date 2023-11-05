function FazzFood (harga,voucher,jarak,pajak){

let potongan = 0;
  if (voucher === 'FAZZFOOD50' && harga >= 50000) {
    potongan = (harga * 0.5)
    if(potongan >= 50000)
        {potongan =50000}
  } else if (voucher === 'DITRAKTIR60' && harga >= 25000) {
    potongan =(harga * 0.6)
    if(potongan >= 30000)
        {potongan =30000}
  }
    
function hitungnBiayaKirim(jarak){
    const biaya1 = 5000
    const biaya2 = 3000
     if (jarak <= 2){
        return biaya1
       }else {
         return biaya1+(jarak-2)*biaya2
       }
 } 
let biayakirim = hitungnBiayaKirim(jarak)

let totalPajak = 0
   if (pajak){
      totalPajak= harga*0.05
   }

    
let totalBiaya = harga-potongan+biayakirim+totalPajak

console.log('Harga: ' + harga);
console.log('Potongan: ' + potongan);
console.log('Biaya Kirim: ' + biayakirim);
console.log('Pajak: ' + totalPajak);
console.log('Total Harga: ' + totalBiaya);

return totalBiaya
}

FazzFood(70000, 'FAZZFOOD50', 5, false )
