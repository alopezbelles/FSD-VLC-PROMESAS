



//// ESTE ES EL EJEMPLO QUE YO HE SACADO /////

// const corredor1 = new Promise((resolve) => {
//     setTimeout(resolve, 1000, "uno");
//   });
   
// const corredor2 = new Promise((resolve) => {
//     setTimeout(resolve, 600, "dos");
//   });
   
//   Promise.race([corredor1, corredor2]).then((value) => {
//     alert("Gana el corredor " + value + ".");
//   });




//// ESTE ES EL EJEMPLO DE DAVID /////

//Para que sea una función asíncrona, tiene que devolver una promesa. Esta promesa tiene que hacer una función. 


// const horses = ['titan', 'analfabeto', 'perdigon', 'silver'];


// const rider = (caballo) => new Promise((res, rej) => {
//     const tiempo = 5000 + Math.random() * 5000;
//     setTimeout(() => res(caballo), tiempo);
// });


// const ridersPromise = horses.map((caballo) => rider(caballo));

// Promise.race(ridersPromise).then(winner => console.log('ha ganado', winner));
// Promise.all(ridersPromise).then(() => console.log('la carrera ha terminado'));


///// Este es el segundo ejemplo de David //////

// const horses = ['titan', 'analfabeto', 'perdigon', 'silver', 'albaricoque'];
// const results = [];

// const rider = horse => new Promise((res, rej) => {
//     const time = 5000 + Math.random() * 5000;
//     setTimeout(() => res({ horse, time}), time);
// });


// const ridersPromise = horses.map(rider);
// ridersPromise.forEach(riderPromise => 
//     riderPromise.then(({ horse, time}) => {
//         console.log(`${horse} ha terminado en ${time}`);
//         results.push({ horse, time});
//     }
// ));

// Promise.race(ridersPromise).then(({ horse, time})  => console.log('ha ganado', horse, 'en', time));
// Promise.all(ridersPromise).then(() => console.log('la carrera ha terminado con estos resultados', results));


///////////// TIP, CONSEJO DAVID //////////////////

//Esto:
const sumaUno = (numero) => new Promise((resolve) => resolve(numero +1));

//Es lo mismo que esto:
const sumaUno = async (numero) => {
    throw new Error("por que ha habido un error");
    numero + 1
};