function titleCase(depan,belakang){
var firstName = depan;
var lastName = belakang;
var nama = firstName.concat(" ", lastName);
var newNama = nama.split(" ").map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ');
console.log(newNama);
}


//upperCase Smua Kata
/*var firstName = "rayza";
var lastName = "muhamar";
var nama = [firstName , lastName];
nama = nama.join(" ");
console.log(nama.toUpperCase());*/