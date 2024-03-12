const removeFromArray = function (array, ...args) {
    const newArray = [];
    array.forEach((item) => {
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    return newArray;
  };






// const removeFromArray = function(array, ...valuesToRemove) {
//     for (let i = 0; i < valuesToRemove.length; i++) {
//         const index = array.indexOf(valuesToRemove[i]);
        
//         if (index !== -1) {
//             array.splice(index, 1);
//         }
//     }
//     return array;
// }   
    
    
    
//     let indexForRemoval = array.indexOf(valuesToRemove);
//     if (indexForRemoval === -1) {
//         return;
//     } else {
//     array.splice(indexForRemoval, 1);
//     return array;
//     }
// };

// Do not edit below this line
module.exports = removeFromArray;

// console.log(removeFromArray(["hello",2,3,4], "hello"));
console.log(removeFromArray([1,2,2,3],2));