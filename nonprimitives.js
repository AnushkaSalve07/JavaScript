const username = {
    "first name" : "Anushka", 
    isLoggedin : true,
};

username.firstname = "Anushka";
username.lastname = "Salve";


console.log(username["firstname"]);
console.log(username.lastname);
console.log(username);
console.log(typeof username);

let today = new Date();
console.log(today.getDate());


//Array

let heores = ["superman", "batman", "wonderwoman",true];
console.log(heores);
console.log(heores[0]);
console.log(heores.length);

let isValue = "2abc";
console.log(Number(isValue) + 1);

console.log(Number(null ));