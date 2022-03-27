const array= [1,2,3,4,5,6,7];

function binary_search(arr,value){
    let fistIndex = 0;
    let lastIndex = arr.length-1;
    let middleIndex = (lastIndex + fistIndex)/2;

    while(arr[middleIndex] != value && fistIndex < lastIndex){
        if(value < arr[middleIndex]){
            lastIndex = middleIndex - 1;
        }else if(value > arr[middleIndex]){
            fistIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex+fistIndex)/2);
    }
    return (arr[middleIndex] != value ? -1 : middleIndex);
}
console.log(binary_search(array,2));