function linearSearch(arr, item) {
    // Go through all the elements of arr to look for item.
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            // Found it!
            console.log(i);
        }
    }
    // Item not found in the array.
    console.log(null);
}

linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8)