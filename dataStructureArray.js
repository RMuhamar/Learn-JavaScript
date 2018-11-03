var aaray = ["Banana","Apples","Oranges","Blueberries"];

aaray.shift();
console.log(aaray);

aaray.sort();
console.log(aaray);

aaray.push("Kiwi");
console.log(aaray);

aaray.shift("Apples");
console.log(aaray);

aaray.reverse(); //memebalikan
console.log(aaray);

var aaray2 = ["Banana",
				["Apples",
					["Oranges"],
				"Blueberries"
				]
			];
console.log(aaray2[1][1][0]);



//var list = ["tiger","cat","bear","bird"];

//list.shift(); //Menghapus index Awal
//list.pop(); // menghapus index terakhir
//list.push(); //menambah index akhir dengan argument
//list.concat([]); // menambah index array lebih dari 1 tapi harus di tampung dengan variable baru