var addition = 2+2;
console.log(addition);

function add(num1, num2 )
{
    var addition = num1+ num2;
    return addition;

}

var result1= add(2, 4);

var result2 = add(3, 6);
var result3 = add(19, 76);
var result4 = add();

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)




var person = {
    name: "Bhumika"

}

console.log(Object.values(person))
console.log(Object.keys(person));
console.log("Bhumika".toUpperCase())
console.log("Bhumika".toLocaleLowerCase())
console.log("Bhumika".indexOf('m'))


