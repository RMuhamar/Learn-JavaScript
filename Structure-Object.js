var database = [{
		username: "rmuhamar",
		passworrd: "password",
}];

var newsFeed = [
	{
		username: "Dedek",
		timeline: "Curhat Dong",
	},
	{
		username: "Adult",
		timeline: "Geserlahh",	
	},
	{
		Username: "Bimo",
		timeline: "Hau",  
	}
];

var usernamePrompt = prompt("Masukan Usename Anda");
var passwordPrompt = prompt("Masukan Password Anda");

var signIn = function(user,password){
	if (user === database[0].username && password === database[0].passworrd ){
		console.log(newsFeed);
	}else{
		console.log("Username atau Password Anda Salah ");
	}
}

signIn(usernamePrompt, passwordPrompt);