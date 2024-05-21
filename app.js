// Task Arry Method

let integers = []
for (let i = 0; i < 10; i++) {
   integers.push([i])
}
document.write(`<br> <b> Integers: </b>  ${integers} <br> <br> <hr>`);

//Ek array mein integers ki series banao, aur phir usmein
// slice() ka istemal karke kisi specific range ke elements ko 
// nikaal kar ek naya array banao.

let sliceArry = [integers.slice(1,9)];
document.write(`<br> Slice Aarrya:  ${sliceArry} <br> <br> <hr>`);

//Ek array di gayi hai. Us array mein splice() ka istemal karke 
//kuch elements hatao aur unhein ek alag array mein store karo.

let spliceArry = [integers.splice(2,6)]
document.write(`<br> Splice Aarry:  ${spliceArry} <br> <br> <hr>`);

//Ek array di gayi hai. Us array ko shift() karke uska pehla
// element hatao aur usse ek variable mein store karo.

let firstElement = integers.shift();
let shiftArray = [integers.shift()];
document.write(`<br/>ShiftArray : ${shiftArray}<br/><br/><hr/>`);

//Ek array di gayi hai. Us array mein unshift() ka istemal 
//karke ek naya element add karo.

let unshiftArry = [integers.unshift()]
document.write(`<br> UnShift:  ${unshiftArry} <br> <br> <hr>`)

//Ek array di gayi hai. Us array mein push() ka istemal karke
//ek naya element add karo.

let pushArry = [integers.push(1)];
document.write(`<br> PushArry:  ${pushArry} <br> <br> <hr>`);

//Ek array di gayi hai. Us array mein pop() ka istemal karke 
//ek element remove karo aur usse ek variable mein store karo.

let popArry = [integers.pop(1)];
document.write(`<br> PopArry:  ${popArry} <br> <br> <hr>`);

//Ek array di gayi hai. Us array ko slice() ka istemal karke 
//uske kuch elements ko naye array mein move karo aur original 
//array ko intact rakho.

let sliceArry1 = [1,2,3,4,5,6,7,8,9,10];
let startSlice = 2;
let endSlice = 6;
let movedSlice = sliceArry1.slice(startSlice , endSlice);
document.write(`<br> Orignal Aarry: ${sliceArry1} <br>`);
document.write(`<br> Moved Aarry:  ${movedSlice}<br> <br> <hr>`);
//Ek array di gayi hai. Us array mein splice() ka istemal karke kuch 
//elements ko remove karo aur unhein ek naye array mein store karo.

let removeSlice = sliceArry1.slice(6);
document.write(`<br> Remove Aarry: ${removeSlice} <br> <br> <hr> `);

//Ek array di gayi hai. Us array mein shift() ka istemal karke elements ko 
//ek ek karke remove karo aur unhein alag-alag variables mein store karo.

let removeArry = ["Mango","Apple","Orange","Banana"];
document.write(`<br> Removed Aarry:   ${removeArry} <br>`)
let fistArry = removeArry.shift();
let secondArry = removeArry.shift();
let threeArry = removeArry.shift();
let fourArry = removeArry.shift();
document.write(`<br> Remove 1st element:  ${fistArry} <br>`)
document.write(`<br> Remove 2nd element:  ${secondArry} <br>`)
document.write(`<br> Remove 3rd element:  ${threeArry} <br>`)
document.write(`<br> Remove 4rt element:  ${fourArry} <br> <br> <hr>`)

//Ek array di gayi hai. Us array mein push() ka istemal karke multiple 
//elements ek saath add karo.

let arr = [1, 2, 3]; // Initialize an array with 3 elements

// Add multiple elements to the array using the push() method
arr.push(4, 5, 6);

// Print the array elements
document.write(`<br> add arry ${arr}`);