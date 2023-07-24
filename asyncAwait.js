//PROMISE

// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket');
//     }, 3000)
// });

// const getPopcorn = promiseWifeBringingTicks.then((t) => {
//     console.log('wife: I have the tickets');
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve, reject) => resolve(`${t} popcorn`))
// });

// const getButter = getPopcorn.then((t) => {
//     console.log('husband: I got some popcorn');
//     console.log('husband: we should go in');
//     console.log('wife: I need butter on my popcorn');
//     return new Promise((resolve, reject) => resolve(`${t} popcorn`))
// });

// getButter.then((t) => console.log(t));


// console.log('person4: shows ticket');
// console.log('person5: shows ticket');

//ASYNC

console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {

    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
            setTimeout(() => resolve('ticket'), 3000);
        });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
        
    const addButter = new Promise((resolve, reject) => resolve(`butter`));

    const addCandy = new Promise((resolve, reject) => resolve(`candy`));

    const getColdDrinks = new Promise((resolve, reject) => resolve(`colddrink`));

    let ticket = await promiseWifeBringingTicks;
    // console.log(`wife: I have the ${ticket}`);
    // console.log('husband: we should go in');
    // console.log('wife: no i am hungry');

    //let popcorn = await getPopcorn;

    // console.log(`husband: I got some ${popcorn}`);
    // console.log('husband: we should go in');
    // console.log('wife: I need butter on my popcorn');

    // let butter = await addButter;
    // console.log(`husband: I got some ${butter} on popcorn`);
    // console.log(`husband: anything else?`);
    // console.log(`wife: let's go we are getting late`);
    // console.log(`husband: thank you for the reminder *grins*`);

    let [popcorn, butter, candy, colddrink] = await Promise.all([getPopcorn, addButter, addCandy, getColdDrinks])
    console.log(`${popcorn}, ${butter}, ${candy}, ${colddrink}`);


        
    return ticket;
}

preMovie().then((m) => console.log(`person3: show ${m}`));




console.log('person4: shows ticket');
console.log('person5: shows ticket');


//IF REJECT

// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const preMovie = async () => {

//     const promiseWifeBringingTicks = new Promise((resolve, reject) => {
//             setTimeout(() => reject('ticket'), 3000);
//         });

    
//     let ticket
//     try {
//         ticket = await promiseWifeBringingTicks;
//     } catch(e) {
//         ticket = 'sad faces';
//     }

    


//     return ticket;
// }

// preMovie().then((m) => console.log(`person3: show ${m}`));


// console.log('person4: shows ticket');
// console.log('person5: shows ticket');