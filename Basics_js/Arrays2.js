/* Important for node js and React  */

const myHero = ['Thor','IronMan','SpiderMan']
const YourHeros = ['Batman','Saktiman','Captian America']

// myHero.push(YourHeros);

// console.log(myHero)

// console.log(myHero[3])
// //Output ['Batman','Saktiman','Captian America']
// console.log(myHero[3][1]);
// //OutPut Saktiman

// const full_array=myHero.concat(YourHeros)
// console.log(full_array);

/*...firstarray,...second array  spread means lade glass drop into the floor after that it will spread into samll pieces in all direction same concept applies here */

// const spread = [...myHero,...YourHeros];
// console.log( spread);
/*=============================================*/
// const toughsitu = [1,2,3,[9,10,11],7,[89,'A',9,0,[9,5]]]
// // const solForThis = toughsitu.flat(infinte);
// const solForThis = toughsitu.flat(3);

// console.log(solForThis)
// console.log(Array.isArray("Anshuman"));
// console.log(Array.from("Anshuman"));

let score = 100;
let score1 = 200;
let score2 = 400;
//convert to array 
console.log(Array.of(score,score1,score2))
