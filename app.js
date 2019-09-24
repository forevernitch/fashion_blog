console.log('Hello');



const promiseName = new Promise((resolve,reject)=>{
    const someNum = 2;
    if(someNum >= 5) return resolve('passed')
    else return reject('failed');
})

promiseName.then(resolve=>{
    someOtherNum = 30;
    console.log(`Congratulations the first promise: ${resolve}`);
    if(someOtherNum< 20) return someOtherNum;
    else throw `failed`;
}).then(resolve=>{
    console.log(`Both conditions have passed and the result was: ${resolve}`);
}).catch(reject=>{
    console.log(`I'm sorry this ends here because it: ${reject}`);
})
