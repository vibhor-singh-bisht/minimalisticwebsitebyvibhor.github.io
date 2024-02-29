const person={
    name:'mosh',age:30
};


for(let key in person){
    console.log(key,person[key]);
}


const colors=['red','green','purple','blue','white'];

for(let color of colors){
    console.log(color);
}


let i=0;
while(i<10){
    if(i%2===0){
        i++;
        continue;
    }
    console.log(i);
    i++;
}






//writing a funtion that takes two numbers and returns the maximum
let a=89;
let b=86;
let m=maxoftwo(a,b);
console.log(m);
function maxoftwo(a,b){
    return a>b ?  a: b;
    // if(a>b){
    //     return a;
    // }
    // else 
    // return b;
}







// funtion to check if an image is landscape or potrait
function checkpic(pic){
    return (pic.width>pic.height)?'landscape':'potrait';
}

const pic={height:60,width:45};
let orien=checkpic(pic);
console.log(orien);








//fizzbuzz funtion
let j='njsdfs';
function fizzbuzz(n){
    let a=typeof n;
    if(a!=='number')
    return 'not a number';
if(n%3===0&&n%5===0){
    return 'fizzbuzz';
}
else if(n%3===0){
    return 'fizz';
}
else if(n%5===0){
    return 'buzz'
}
else 
return n
}

let x=fizzbuzz(j);
console.log(x);







//Exercise to check speed limit


function checkSpeed(speed){
    let speedLimit=75
    if(speed<speedLimit)
    console.log('OK');
    
else {
    const points=Math.floor( ((speed-70)/5));
    if(points>12){
        console.log('License Suspended');
    }
    else{
        console.log('Points Scored : '+points);
    }
}
}
let s1=210;
checkSpeed(s1);






//funtion to print numbers as odd or even

function showNumbers(limit){
    for(let i=1;i<limit;i++){
        console.log( i + ' '+ (i%2===0?'even':'odd'));
    }
}
showNumbers(10);




//funtion of the falsies and the truthies

const array=[1,'',0,9,undefined,3,NaN,null,6,11,0];


function countTruthy(ar){
    let count=0;
    for(let x of array ){

        if(x)
        count++;
    }
    console.log('The number of truthsy elements in the array are : '+count);

}
countTruthy(array);


///
const movie={title :'Tees Maar Khan',imdb:4.5,actor:'Shree Joshi',basedon:'Vibhor ',releaseyear:2026};


function showProperties(movie){
    for(let x in movie){
        if(typeof movie[x]==='string'){
            console.log(x+' : '+movie[x])
        }
    }
}

showProperties(movie);


//sum of multiples of 3 and 5

function sum35(input){
    let sum=0;
    for(let i=1;i<=input;i++)
    if(i%3===0||i%5===0){
        sum+=i;
    }
    
    console.log('The sum of the multiples of 3 and 5 upto '+input+' is '+sum);
}

sum35(10);


//function to calclulate grade
const ar=[56,80,91,65,96,80,47,83,75];

function calculateGrade(arr){
    let totalmarks=0;
    for(let x of arr){
        totalmarks+=x;
    }
    console.log(totalmarks);
    let averagemarks=totalmarks/arr.length;
    console.log(averagemarks);
    if(averagemarks<=59)
    console.log("F")
    else if(averagemarks<=69 && averagemarks>59)
    console.log("D")
    else if(averagemarks<=79 && averagemarks>69)
    console.log("C")
    else if(averagemarks<=89 && averagemarks>79)
    console.log("B")
    else (averagemarks<=100 && averagemarks>89)
    console.log("A")

}
calculateGrade(ar);

//stars
// function stars(o){
//     for(let i=1;i<o;i++){
//         for(let k=0;k<i;k++){
//             console.log('*'+" ");
//         }
//         console.log('\n');
//     }
// }

// stars(7);


function stars(o){
    for(let i=1;i<=o;i++){
        let pattern = '';
        for(let k=0;k<i;k++){
            pattern+='*';
        }
        console.log(pattern);
    }
}
stars(5);

//prime numbers
function checkPrime(g){
    let isprime=true;

        for(let j=2;j<g;j++){
            if(g%j===0){
                isprime=false;
                break;
            }
        }
        return isprime;
}
function uptoPrime(h){
    for( let i=2;i<=h;i++){
        if(checkPrime(i)){
            console.log(i);
        }

    }
}
uptoPrime(10);