let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

for(let i = 0; i<arr1.length && i<arr2.length; i++){
    arr2[i] = arr1[i] + arr2[i];
}
console.log(arr2);