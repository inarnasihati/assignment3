/**
  Diberikan function yang menerima 2 parameter, yaitu :
    parameter 1: array of integer (unsorted) 
    parameter 2: integer. 
  Function tersebut akan mengembalikan array 2 dimensi.
  Masing-masing dimensi array terdiri 2 angka yang jika dijumlahkan mempunyai nilai yang sama dengan parameter 2.
 */

function sumArray(arr, int) {
    // your code here
    let jumlah = 0;
    let check = [];
   
    arrHasil =[];
    for (let a = 0; a < arr.length; a++) {
      for (let b = 0; b < arr.length; b++) {
        if ((a != b) && !check.includes(a)) {
          jumlah = arr[a]+arr[b];
          if (jumlah == int) {
            //console.log("ini jumlah "+ jumlah);
            check.push(b);
            //console.log("ini check "+check);
            arrHasil.push([arr[a],arr[b]])
          }
          
        } 
        //console.log("============");
      }
    }
    return arrHasil;
}

// Test Cases
console.log(sumArray([2, 1, 4, 3], 5)); // [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)); // [[1, 10], [8, 3]]
console.log(sumArray([1, -1, 2, -2, 3, -3], 0)); // [[1, -1], [2, -2], [3, -3]]
console.log(sumArray([1, 1, 1, 1], 2)); // [[1, 1], [1, 1], [1, 1]]
console.log(sumArray([1, 2, 3, 4, 5], 10)); // []


