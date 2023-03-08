console.log(1)
console.log(2)
console.log(3)

var names = ["Bhumika",
             "karshma", 
             "kashish", 
             "Ukesh ", 
             "daksh"
];
for (var i = 0; i< names.length ; i++){
    console.log(names[i]);
}
console.log();

for (const name of names) {
    console.log(name);
    
}