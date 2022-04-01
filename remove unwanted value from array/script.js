const library = [
    {
     author : 'Bill Gates' ,
     title : 'The Road Ahead',
     libraryID : 1234 
    },
    {
     author : 'Steve Jobs',
     title : 'Walter Isaacson',
     libraryID : 4264
    },
    {
     author : 'Suzanne ',
     title : 'Mockingjay : The Final Book Of The Hunger Games',
     libraryID : 3245
    }
];

function property_value(array,property_key){
    var arr = [];
    var index = -1;
    var array_items;

    while(++index < array.lenght){
        array_items = array[index];

        if(array_items.hasOwnProperty(property_key)){
            arr[arr.length] = array_items[property_key];
        }
    }
    return arr;
}

console.log(property_value(library,'title'));

console.log(property_value(library,'author'))