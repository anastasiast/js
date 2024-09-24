'use strict';

// 1. Написать собственный метод Promise.all().

Promise.all = (promisesList) => {
    let results = [];
    let notCompletedPromisesCount = promisesList.length;

    if (!notCompletedPromisesCount) {
        return Promise.resolve(results);
    }

    return new Promise((resolve, reject) => {
        promisesList.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((result) => {
                    results[index] = result;
                    notCompletedPromisesCount -= 1;

                    if (notCompletedPromisesCount === 0) {
                        resolve(results);
                    }
                }, reject)
        })
    })
}

const promise1 = fetch('https://api.github.com/users/astepanova').then((data)=> {
    return data.json()
});

const promise2 = fetch('https://swapi.dev/api/films/3').then((data)=> {
    return data.json()
});

const promise3 = fetch('https://swapi.dev/api/films/4').then((data)=> {
    return data.json()
});

Promise.all([promise1, promise2, promise3]).then((data)=>{
    console.log(data)
})


// ===============================================


// 2. Переписать код с использованием async/await.
async function getCharactedData(id) {
    try {
        if (!id) {
            console.log('Need to input film id!');
            return;
        }

        let response = await fetch(`https://swapi.dev/api/films/${id}`);
        let data = await response.json();
        response = await fetch(data.characters[0]);
        data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error)
    }

}

getCharactedData(1);
