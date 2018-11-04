var database = [{
		username: "rmuhamar",
		passworrd: "password",
	},
	{
		username: "dedek",
		passworrd: "123",
	},
	{
		username: "adul",
		passworrd: "321",
	}
];

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
		username: "Bimo",
		timeline: "Hau",  
	}
];

var usernamePrompt = prompt("Masukan Usename Anda");
var passwordPrompt = prompt("Masukan Password Anda");

var signIn = function(user,password){
	for (var i = 0; i < database.length; i++) {
		if (user === database[i].username && password === database[i].passworrd ){
			return newsFeed.forEach(function(nama, i){
				console.log(`Username : ${nama.username}, Timeline : ${nama.timeline}`);
				// console.log();
			});
		}
	}
	return alert("password atau username anda salah");
}

signIn(usernamePrompt, passwordPrompt);
