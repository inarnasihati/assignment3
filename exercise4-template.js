/**
Diberikan satu buah input berupa array a.
Dari semua kemungkinan subarray yang berasal dari a, subarray manakah yang akan memberikan 
jumlah/sum terbesar apabila semua anggota subarray tersebut dijumlahkan?

Input:
a = [-2, -3, 4, -1, -2, 1, 5, -3]

Expected Output:
[[ 4, -1, -2, 1, 5] , 7]

Explanation:
Diantara semua kemungkinan subarray, [ 4, -1, -2, 1, 5]  merupakan subarray yang akan memberikan jumlah terbesar

Nilai 7  merupakan jumlah atau sum dari subarray  [ 4, -1, -2, 1, 5]
 */

function subArray(arr) {
   
        let maxJumlah = 0;
        let currentJumlah = 0;
        let start = 0;
        let end = 0;
        let temp = 0;
        
        for (let i = 0; i < arr.length; i++) {
            currentJumlah += arr[i];
            
            if (currentJumlah > maxJumlah) {
                maxJumlah = currentJumlah;
                start = temp;
                end = i;
            }
            
            if (currentJumlah < 0) {
                currentJumlah = 0;
                temp = i + 1;
            }
        }
        
        subarray = arr.slice(start, end + 1);
        maxJumlah = maxJumlah;
        return[subarray,maxJumlah];
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(subArray(input)) // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
