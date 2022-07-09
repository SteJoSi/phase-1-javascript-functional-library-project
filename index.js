//use forIn to go through an object or array 
function myEach(collection, callback) {
    for(let accessor in collection) {
        // console.log(collection[callback])
        callback(collection[accessor])
    }
    return collection
}

//created a modifiedArray to hold new objects, used push to nondestructively add new object to new array
function myMap(collection, callback) {
    let modifiedArray = []

    for(let accessor in collection) {
        modifiedArray.push(callback(collection[accessor]))
    }
    return modifiedArray
}

function myReduce(collection, callback, acc) {
   //convert collection into array if collection is object
   if (Array.isArray(collection) === false) {
    collection = Object.values(collection);
        //console.log('collection', collection);
   }
   if (acc === undefined) {
    acc = collection[0];
    collection = collection.slice(1);
   }
   for (let i = 0; i < collection.length; i++) {
    acc = callback(acc, collection[i], collection);
   }
   return acc;
}

function myFind(collection, predicate) {
    // console.log('collection', collection)
    // console.log('predicate', predicate)
    
    for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
            //console.log('collection', collection[i])
            return collection[i];
        }
    }
}

function myFilter(collection, predicate) {
    if (Array.isArray(collection) === false) {
        collection = Object.values(collection)
    }

    // console.log('values', Object.values(collection))
    const empArray = []
    for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
            empArray.push(collection[i])
        } 
    }
    return empArray;
}

function mySize(collection) {
    if (Array.isArray(collection) === false) {
        collection = Object.values(collection)
    }
    //return collection.length
    let size = 0 
    for (let i of collection) {
        size++
    }
    return size
}

function myFirst(array, n) {
    // console.log('array', array)
    if(n === undefined) {
        return array[0];
    } else {
        return array.slice(0, n)
    }
}

function myLast(array, n) {
    if(n === undefined) {
        return array[array.length - 1];
    } else {
        return array.slice(-n)
    }
}

function myKeys(object) {
    const keys = Object.keys(object)
    return keys
    // let newArray = []
    // for (let key in object) {
    //     newArray.push(key)
    // }
    // return newArray;
}

function myValues(object) {
    const values = Object.values(object)
    return values
    
}