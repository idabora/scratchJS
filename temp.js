console.log('starts here');
// const arr=[1,2,3,4];
// console.log(arr.splice(1));
// console.log(arr)

// const mark=95;
// const markHeight=1.88;
// const john=85;
// const johnHeight=1.76;

// const MarkHigherBMI= mark/(markHeight**2) ;
// console.log(MarkHigherBMI)
// const MarkHigherBMI= (mark/(markHeight**2)) > (john/(johnHeight**2));
// const MarkHigherBMI= (mark/(markHeight**2)) > (john/(johnHeight**2));
// console.log(MarkHigherBMI);

// const markBMI=(mark/(markHeight**2));
// const johnBMI=(mark/(johnHeight**2));

// if(markBMI > johnBMI)
// {
//     console.log(`Makrk's BMI is ${markBMI} ,which ishigher than john's BMI ${johnBMI}`)
// }
// else{
//     console.log(`john's BMI is ${johnBMI} ,which ishigher than mark's BMI ${markBMI}`)
// }


// const num=81;
// const str='21';
// console.log(num+Number(str));
// console.log(typeof(num+str));
// const x=num+Number(str);
// console.log(typeof(x));



// console.log('i'+'am'+ 22 +'years old');
// console.log('22' + 10 -'2');
// console.log('22' * 10 *'2');



// const bill=275;

// (bill>=50 && bill<=300)?console.log(`the Bill is ${bill} ,tip is ${bill*0.15} and the total amount is to be paid will be ${bill+(bill*0.15)}`)
// :console.log(`tip is ${bill*0.2} and the total amount is to be paid will be ${bill+(bill*0.2)}`);


// function juice (apple,orange)
// {
//     console.log(apple,orange);
//     return `apples are ${apple} and oranges are ${orange}`
// }
// juice(2,4);
// console.log(juice(2,4));



/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
// const avg=(a,b,c)=>{
//     return (a+b+c)/3;
// }

// function checkWinner(avgDolphins,avgKoalas){

//     if(avgDolphins>=(2*avgKoalas))
//     {
//         return `Dolphins wins with (${avgDolphins}-${avgKoalas})`
//     }
//     else if(avgKoalas>= (2*avgDolphins))
//     {
//         return `Koalas wins with (${avgKoalas}-${avgDolphins})`
//     }

//     return "NO one wins "
// }

// // const scoreDolphins=avg(44,23,71);
// // const scoreKoalas=avg(65,54,49);
// const scoreDolphins=avg(85,54,41);
// const scoreKoalas=avg(23,34,27);
// console.log(checkWinner(scoreDolphins,scoreKoalas));




// const arr= new Array(1,2,3,4);
// console.log(typeof(arr))




///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value
 is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based
on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you
like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const calcTip=function (bill){
// if(bill>=50 && bill<=200){
//     return bill*0.15;
// }
// return bill*0.2;
// }

// const bills=[125,555,44]
// console.log(bills.length)
// const tips=[calcTip(bills[0]) , calcTip(bills[1]) , calcTip(bills[2]) ];
// const total=[bills[0]+tips[0] , bills[1]+tips[1] , bills[2]+tips[2]];
// console.log(tips,total)




// const anurodh={
//     firstname:"anurodh",
//     lastname:"kumar",
//     friends:["dhruv","shubham","priyanshu"],
//     job:"dev",
//     birthyear:2001,
//     // age: function(by){
//     //     return 2023-by;
//     // },
//     // age: function(){
//     //     // console.log(this)
//     //     return 2023-this.birthyear;
//     age: function(){
//         // console.log(this)
//         this.age= 2023-this.birthyear;
//         return this.age
//     }
// }
// console.log(`${anurodh.firstname} has ${anurodh.friends.length} friends , and his bestfriend is ${anurodh.friends[0]}`)

// console.log(anurodh.age(2001))
// console.log(anurodh.age())



///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// const mark={
//     firstname:"mark",
//     lastname:"miller",
//     weight:78,
//     height:1.69,
//     calcBMI: function(){
//         this.BMI= this.weight/(this.height**2);
//         return this;
//     }
// }

// const john={
//     firstname:"john",
//     lastname:"smith",
//     weight:92,
//     height:1.95,
//     calcBMI: function (){
//         this.BMI=this.weight/(this.height**2);
//         return this;
//     }
// }

// console.log(mark.calcBMI());
// console.log(john.calcBMI());


///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/
// function calcTip(bill)
// {
//     return bill>=50 && bill<=300? bill*0.15 : bill*0.20;
// }
// const tips=[];
// const total=[];
// const bill=[22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52]
// for(let i=0;i<10;i++)
// {
//     tips.push(calcTip(bill[i]));
//     total.push(tips[i]+bill[i]);
// }
// console.log(tips)
// console.log(total)


// function calcAvg(arr)
// {
//     let sum=0;
//     for(let i=0;i<10;i++)
//     {
//         sum+=arr[i];
//     }
//     return sum/arr.length;

// }
// console.log(calcAvg(total));



// const temp=(t1,t2)=>{

// const t3=t1.concat(t2);
// console.log(t3);

// let min=t3[0];
// let max=t3[0];
// for(let i=0;i<10;i++){

//     if(max<t3[i]) max=t3[i];
//     if(min>t3[i]) min=t3[i];


// }
// console.log("min-",min,"max-",max);

// }
// temp([2,3,5],[3,7,3,5]);





//CHALLENGE....................

// function printforecast(t1) {
//   let str = "";
//   for (let i = 0; i < t1.length; i++) {
//     // let newstr;
//     // newstr=`...${t1[i]} degree on day ${i+1}`
//     // console.log(newstr)
//     str = str.concat(`...${t1[i]} degree on day ${i + 1}`)
//   }
//   console.log(str)
// }

// printforecast([3, 6, 2, -2, 7])



// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1,players2]=game.players;
// console.log(players1,players2)

// const [gk,...fieldPlayers]=players1;
// console.log(gk,fieldPlayers)

// const allplayers=[...players1,...players2];
// console.log(allplayers)

// const players1Final=[...players1,'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final)

// const {team1,x:draw,team2}=game.odds;
// console.log(team1,draw,team2)

// function printGoals(...players1){
//   console.log(players1)
// }
// printGoals(...players1)

// team1<team2 && console.log('team 1')
// team2<team1 && console.log('team 2')
//CHALLENGE.....................................
// *******************MODUlE 9 -****************
//CHALLENGE.....................................
// *******************MODUle 9 -*****************
///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/



///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// for(const [i,el] of game.scored.entries()){
//   console.log(`Goal ${i+1} is scored by ${el}`)
// }


// const key=Object.values(game.odds);
// console.log(key)
// let avg=0;
// for(const i of key)  avg+=i;
// console.log(avg/key.length)


// for(const [key,val] of Object.entries(game.odds)){
//   const gt=key==='x'?'draw':`${game[key]}`;
//   // console.log(game[key])

//   console.log(`Odd of ${gt} :${val}`);
// }

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
// 'use strict'
// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// 1- const events=[];
// for(const [i,ev] of gameEvents){
//   events.push(ev);
// }
// console.log([...new Set(events)]);

//2- console.log([...new Set(gameEvents.values())]);

// console.log(gameEvents.delete(64));
// console.log(gameEvents)


// console.log(`An event happened, on average, every ${92/gameEvents.size} minutes`)

// for(const [i,el] of gameEvents){
//   // console.log(i,el);
//   const ym=i<45?'[FIRST HALF]':'[SECOND HALF]';
//   // (i<45 && el==='⚽️ GOAL')?console.log(`[FIRST HALF] ${i}: ⚽️ GOAL`):console.log(`[SECOND HALF] ${i}: ⚽️ GOAL`)
//   console.log(`${ym} ${i} : ${el}`)
// }



// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable 
//   calculate_AGE
// delayed_departure

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅


// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// document.querySelector('button').innerText='HELLO';
// const tx=document.querySelector('textarea');
// const btn=document.querySelector('button');
// tx.style.setProperty("height",'90px')

// btn.addEventListener('click',()=>{
//   const str=document.querySelector('textarea').value;
//   console.log('hy')
//   const row=str.split('\n');
//   for(const [i,el] of row.entries()){
//     const [first, second] = el.toLowerCase().trim().split('_');
//     // console.log(first,second);
//     const x=`${first}${second.replace(second[0],second[0].toUpperCase())}`;
//     console.log(`${x.padEnd(20)}${'✅'.repeat(i+1)}`)
//   }
// })

// Function 
///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     const result = Number(prompt(`${this.question}\n${this.options.join(`\n`)}\n(Write option number)`));
//     // console.log(result);
//     result < this.options.length && this.answers[result]++;
//     // console.log(this.answers)
//     this.displayResults();
//     this.displayResults('string');

//   },

//   displayResults(type='array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(' ,')}`);
//     }
// }
// }

// document.querySelector('.btn1').addEventListener("click", poll.registerNewAnswer.bind(poll));
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });



///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector("body").addEventListener("click",()=>{header.style.color=header.style.color==='red'?'blue':'red'});

// })();

// ********************************************
// ********************************************
// ARRAY's ( VOL - 9 )
// ********************************************
// ********************************************
///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// function checkDogs(dogsJulia, dogsKate) {

//   dogsJulia.forEach((val, i) => {
//     if (val < 3) {
//       console.log(`Dog number ${i} is still a ${val} 🐶`)
//     } else {
//       console.log(`Dog number ${i} is an adult, and is ${val} years old`)
//     }
//   });
//     dogsKate.forEach((val, i) => {
//       if (val < 3) {
//         console.log(`Dog number ${i} is still a ${val} 🐶`)
//       } else {
//         console.log(`Dog number ${i} is an adult, and is ${val} years old`)
//       }
//     });

// }

// const julia = [9, 16, 6, 8, 3], kate = [10, 5, 6, 1, 4];
// const newJulia = julia.slice(1, -2);
// console.log(newJulia)
// checkDogs(newJulia, kate);




///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/



// function calcAverageHumanAge(ages){

//  const humanAge= ages.map((age) => age <= 2 ? age*2 : 16+(age*4) )
// const adultArr=humanAge.filter((cur)=>{
//     if (cur>=18) return cur;
// })
// const avgAge= adultArr.reduce((acc,cur)=> acc+cur/adultArr.length,0);
// console.log(Number(avgAge.toPrecision(2)))
// }
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);



// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = (ages) => {
//   const newa =ages.map((age) => age <= 2 ? age * 2 : 16 + (age * 4))
//     .filter((cur) => {
//       if (cur >= 18) return cur;
//     })
//     .reduce((acc,cur,i,arr)=> acc+cur/arr.length,0)
//     console.log(newa)
// }

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);



/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

const recommendedFood = dogs.map((obj) => {
  obj.recommendedFood = Math.trunc(obj.weight ** 0.75 * 28);
  return obj;
});

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

// ****1st way****
// dogs.filter((obj,ind)=>{

//   if(obj.owners.includes('Sarah')){
//     if(obj.curFood > obj.recommendedFood) return console.log('Eating too Much')
//     else return console.log('Eating to Little')
//   }

// })

// ****2nd way****
// const sarObj=dogs.find(obj=> obj.owners.includes('Sarah'));
// console.log(`The dog is eating ${sarObj.curFood>sarObj.recommendedFood?'too much':'too little'}`)


// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// const ownersEatTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recommendedFood)
//   .flatMap(dog => dog.owners);
// // .flat();
// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = dogs
//   .filter(dog => dog.curFood < dog.recommendedFood)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooLittle);


// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
// console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too much!`);

// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)

// console.log(dogs.some(dog=> dog.curFood===dog.recommendedFood))

// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)

// 7.
// const checkOkay=dog=> dog.curFood> dog.recommendedFood * 0.90 && dog.curFood * 1.10

// // console.log(dogs.some(checkOkay))

// console.log(dogs.filter(checkOkay))

// 8.
// Here the slice method is used to make a shallow copy of the dogs array so that the orignal array remains unchanged
// const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
// console.log(dogsSorted);



// module.exports.suggestUserName = catchAsync(async (req, res, next) => {
//   let query = req.query.search.trim();
//   const regex1 = /^[a-z0-9._]+$/i;
//   if (!query) {
//     return res.status(400).json({
//       message: 'Please pass valid details.',
//     });
//   }
//   if (!regex1.test(query)) {
//     return res.status(400).json({
//       message: 'Invalid username. Please enter a new username.',
//     });
//   }
//   if (query && /^\d/.test(query)) {
//     return res.status(400).json({
//       message: 'Invalid username. Please enter a new username.',
//     });
//   }
//   console.log('\n:=>', query);
//   const regex = new RegExp(escapeRegex(query), 'gi');
//   console.log('REGEX', regex);
//   if (query.length < 5) {
//     return res.status(200).json({ message: 'Too short. Please enter a valide username.' });
//   }
//   const pipeline = [
//     {
//       $match: { username: regex },
//     },
//     {
//       $project: {
//         username: 1,
//         _id: 0,
//       },
//     },
//   ];
//   const existUserName = await db.User.aggregate(pipeline);
//   let isAvailable = true;
//   const existUserNameList = [];
//   existUserName.forEach((item) => {
//     if (item.username === query) {
//       isAvailable = false;
//     }
//     existUserNameList.push(item.username);
//   });
//   if (query.length > 24) {
//     query = query.substring(0, 20);
//   }
//   function generateRandomUsername() {
//     const ar = ['_', '.', '1', '', '', '3', '4', '_', '.', '', '1', '2'];
//     const num = Math.floor(Math.random() * 12);
//     let username = generateUsername('', 1, 2);
//     username = query + ar[num] + username;
//     if (existUserNameList.includes(username)) {
//       return generateRandomUsername();
//     }
//     return username;
//   }
//   function generateRandomUsername1() {
//     const ar = ['_', '.', '1', '0', '', '3', '4', '_0', '_', '', '12', '2'];
//     const num = Math.floor(Math.random() * 12);
//     let username = generateUsername('', 1, 3);
//     username = query + ar[num] + username;
//     if (existUserNameList.includes(username)) {
//       return generateRandomUsername();
//     }
//     return username;
//   }
//   const suggestedUsername = [];
//   const username1 = generateRandomUsername();
//   const username2 = generateRandomUsername1();
//   const username3 = generateRandomUsername();
//   const username4 = generateRandomUsername1();
//   suggestedUsername.push(username1);
//   suggestedUsername.push(username2);
//   suggestedUsername.push(username3);
//   suggestedUsername.push(username4);
//   console.log('existUserName:===>>>',  );
//   console.log('existUserNameList:===>>>', existUserNameList);
//   console.log('isAvailable:===>>>', isAvailable);
//   console.log('suggestedUsername:===>>>', suggestedUsername);
//   res.status(200).json({
//     isAvailable,
//     suggestedUsername,
//   });
// });
// console.log(__dirname)
// const {generateUsername} = require('unique-username-generator');
// const username=generateUsername('',2,3);
// // const username=generateUsername('',2).slice(-3);

// console.log(username)
// console.log(username('',2,5))
// {
// $addFilelds:{
//   follower: {
//     $cond: {
//       if: { $in: ["$_id", followerIds] },
//       then: true,
//       else: false
//     }
//   }
// follow:{
//   $cond:{
//     if:{$in:['$_id','$followerIds']},
//     then: true,
//     else: false
//   }
// }
// }
// }


// ********************************************
// ********************************************
// **************  PROTOTYPE  *****************
// ********************************************
// ********************************************

// function Person(firstName,lastName){
//   this.firstName=firstName;
//   this.lastName=lastName;
// }

// const obj1=new Person('Anurodh','Kumar');

// console.log(obj1)
// console.log(obj1 instanceof Person)
// Person.prototype.func=function (){
//   return (this.firstName+this.lastName)
// }
// console.log(Person.prototype)
// console.log(obj1.func())


// ********************************************
// ********************************************
// ++++++++++++++++ challenge 1 +++++++++++++++
// ********************************************
// ********************************************


/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// function Car(speed){
//   this.speed=speed;
// }

// Car.prototype.accelerate=function(){
//   this.speed=this.speed + 10;
//   console.log(this.speed);
// }
// Car.prototype.brake=function (){
//   this.speed=this.speed - 5;
//   console.log(this.speed)
// }

// const car1= new Car(120);
// const car2= new Car(95);

// car1.accelerate();
// car1.accelerate();
// car2.accelerate();
// car2.brake();
// car1.brake();

// ###################################
// ###################################
// %%%%%%%%%%% MODULE 15 %%%%%%%%%%%%%
// ###################################
// ###################################

// navigator.geolocation.getCurrentPosition((position) => {
//   console.log("+++", position.coords);
//   const { latitude, longitude } = position.coords;
//   console.log('lat', latitude, 'long', longitude)
//   console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);
//   var map = L.map('map').setView([latitude, longitude], 15);

//   console.log(map)

//   L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   }).addTo(map);


//   // map.on('click',(event)=>{
//     //   console.log(event);
//     //   const {lat ,lng}=event.latlng;

//   //   var customIcon = L.icon({
//   //     iconUrl: 'custom-icon.png',
//   //     iconSize: [32, 32],
//   //     iconAnchor: [16, 32],
//   //     popupAnchor: [0, -32]
//   //   });
//   var customIcon = L.icon({
//     iconUrl: 'custom-icon.png',
//     iconSize: [32, 32],
//     iconAnchor: [16, 32],
//     popupAnchor: [0, -32]
//       });

//     // L.marker([lat,lng],{icon:customIcon}).addTo(map)

//     let x,y;

//     L.marker([latitude,longitude],{icon:customIcon}).addTo(map)
//       .bindPopup( L.popup({
//         maxWidth:250,
//         maxHeight:100,
//         className:'popup',
//         autoClose:false,
//         closeOnClick:false
//       }) )
//       .setPopupContent('<span style="color: blue;">HERE IT IS</span>')
//       .openPopup();
//       map.setView([latitude,longitude],13) 

// }, () => {
//   alert('SOMETHING WENT WRONG')
// })




navigator.geolocation.getCurrentPosition((position) => {

  console.log(position);
  const { latitude, longitude } = position.coords;
  console.log(typeof latitude, typeof longitude)
  const map = L.map('map').setView([latitude, longitude], 16)
  console.log(map);
  L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);


  map.on('click', (event) => {

    console.log(event);
    const { lat, lng } = event.latlng;

    var customIcon = L.icon({
      iconUrl: 'custom-icon.png',
      iconSize: [40, 40],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });


    // L.marker([latitude,longitude],{icon:customIcon}).addTo(map)
    //   .bindPopup( L.popup({
    //     maxWidth:250,
    //     maxHeight:100,
    //     className:'popup',
    //     autoClose:false,
    //     closeOnClick:false
    //   }) )
    //   .setPopupContent('<span style="color: blue;">HERE IT IS</span>')
    //   .openPopup();


    L.marker([lat, lng],{icon:customIcon}).addTo(map)
      .bindPopup(L.popup({
        maxWidth:400,
        minHeight:300,
        autoClose:false,
        closeOnClick:false
      }))
      .setPopupContent('<p>Waving Hands..</p>')
      .openPopup();
  })

})


