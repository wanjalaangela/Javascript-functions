// question 1
function myStrings(array){
    return array.map(item =>item.length);
}
console.log(myStrings(["subaru","mercedes","prado","audi"]));

// question 2
function allNumbers(number){
let number1=number.filter(num=>num%2 ==0);
return number1
}
console.log(allNumbers([7,9,10,2,20,1,3]));

// question 3
function performance(allStudents){
    return allStudents.filter((student,index)=>student.score>75);
}
console.log(performance([{name:"Angela",score:90},{name:"Ethan",score:78},{name:"Aviel",score:50}]));

// question 4
function squares(sqrNumbers){
    let sqr=sqrNumbers.map(item=>item*item);
    return sqr
}
console.log(squares([10,20,30,40,50]));

// question 5
function allTypes(types){
let type1=types.filter(item=> typeof (item) === "string");
return type1.map(str=>str.toUpperCase());
}
console.log(allTypes(["abigael",10,"ephy",true,"cynthia","ace"]));