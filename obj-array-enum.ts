/*  
    Other Types
    Objects
    Arrays
    Tuple 
    Enums

*/  

enum Role {ADMIN='Admin', READ_ONLY=2, AUTHOR, REVIEWER} ;
let person: {
    name:string;
    hobbies: string[];
    role: [number, Role];
    mrole: [[number, Role]];
}={
    name:"Saad Ahmed",
    hobbies: ['Cycling','Reading'],
    role:[1,Role.AUTHOR],
    mrole:[[1,Role.ADMIN]],
}

console.log(person);
person.mrole.push([2,Role.AUTHOR]);

console.log(person);