var array=[1,1,2,3,1,4,2,5,3,4,5,3,4,5,5,3,67,7,8,5];

var arr=[];

array.forEach((e)=>{
    if(!arr.includes(e)){
        arr.push(e);
    }
    
});
document.write(array+"<br/>");
    document.write(arr);