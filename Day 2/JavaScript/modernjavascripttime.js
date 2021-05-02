// Its time to learn modern javascript

// let vs const vs var

function myFunc() {
    let num = 2;

    if (true) {
        let bum = 4;
        console.log(num);
        console.log(bum)
    }
    // console.log(bum);
}

myFunc()