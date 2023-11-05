function divideAndSortProses(number) {
    const keHuruf = number.toString();  
    const hasil = keHuruf.split('0');
    
    for (let i = 0; i < hasil.length; i++) {
      const huruf = hasil[i].split('');
      huruf.sort((a, b) => a - b);
     
      hasil[i] = huruf.join('');
    }
   
    const result = hasil.join('');
    return result; 
  }
  
  function divideAndSort(number) {
    const output = divideAndSortProses(number);
    console.log(output);
  }
  
  divideAndSort(5956560159466056);
  