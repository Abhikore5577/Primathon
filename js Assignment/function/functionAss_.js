function productOfArray(arr) {
    if (arr.length === 0) {
    return 1;
    }
    const newArray = arr.slice(1, arr.length); // [2,3,4,5]
    return arr[0] * productOfArray(newArray);
   }
   console.log("productOfArray([1,2]): ", productOfArray([1, 2]));
   