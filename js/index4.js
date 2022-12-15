let i=1;
while(i<=100){
if (i%3==0 && i%5==0){
console.log(i,"FIZZBUZZ")
}
else if (i%3==0){
console.log(i,"FIZZ")
}
else if (i%5==0){
console.log(i,"BUZZ")
}

i=i+1
}