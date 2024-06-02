let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < num.length; i++){
            console.log(num[i]);
}

let numbers = [-3, 16, 8, -34, 65, 120, 42, 15, 7, -4, -7, 3, 46, 26, 83];

for(let a = 0; a < numbers.length; a++){
    if(numbers[a]>=15){
        console.log(numbers[a]);
    }
}

for(let b = 0; b < numbers.length; b++){
    if(numbers[b]%2 !=0){
    console.log(numbers[b]);
    }
}

for(let c = 3; c < numbers.length; c+=3){
    console.log(numbers[c]);
}

let sum = 0;
for(let d = 0; d < numbers.length; d++){
    if(numbers[d]%2 !=0)
    sum=sum+numbers[d];
}
console.log(sum);


let sumEven = 0;
let sumOdd = 0;

    for(let e = 0; e < numbers.length; e++){
    if(numbers[e]%2 !=0){
        sumOdd=sumOdd+numbers[e];
    }else if(numbers[e]%2 ==0)
        sumEven=sumEven+numbers[e];
    }
console.log(sumEven - sumOdd);