const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCapsAsync = (array) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = array.map(item => {
                if (typeof item === "string") {
                    return item.toUpperCase();
                } else {
                    return item;
                }
                // return item.toUpperCase();
            });

            resolve(result);
        } , 1000);
    } );
}

//  fungsi sortWords
const sortWords = (array) => {
    return array.sort();
}

// cetak
makeAllCapsAsync(arrayOfWords)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error));


makeAllCapsAsync(complicatedArray)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error));

