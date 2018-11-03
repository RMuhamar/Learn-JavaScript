//function declaration
/*function checkDriverAge(){
var age = prompt("how old are you ?");
if (age < 18 ) { 
	alert("Jangan Bawa Mobil dlu ntr cilaka");
	age = Number(age); 
} else if (age > 18 ) { 
	alert("Tua LOOOOOHHHH");
	age = Number(age);
} else {
	alert("cieeee udh perdana naek mobil");
	age = Number(age);
}
}

checkDriverAge();
*/

//function expression
var chek = function(){
var age = prompt("how old are you ?");
console.log(age);
if (age < 18 ) { 
	alert("Jangan Bawa Mobil dlu ntr cilaka");
	age = Number(age); 
} else if (age > 18 ) { 
	alert("Tua LOOOOOHHHH");
	age = Number(age);
} else {
	alert("cieeee udh perdana naek mobil");
	age = Number(age);
}	
}

 chek();