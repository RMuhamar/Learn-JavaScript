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

//Game Proxytia
var nama = prompt("Nama Harus di Isi = ");
var peran = prompt("Silakan Pilih Peran Anda(Ksatria,Tabib,Penyihir)  = ");
if (nama === ""){
	alert("Nama Harus diisi");
}else if(nama !== "" && peran === ""){
	alert("Halo "+nama+", Pilih peranmu untuk memulai game");
}else if(nama !== "" && peran === "Ksatria"){
	alert("Selamat Datang di Dunia Proxytia "+nama+", Halo Ksatria "+nama+", kamu dapat menyerang dengan senjatamu ");
}else if(nama !== "" && peran === "Tabib"){
	alert("Selamat Datang di Dunia Proxytia "+nama+", Halo Tabib "+nama+", kamu akan membantu temanmu yang terluka ");
}else if(nama !== "" && peran === "Penyihir"){
	alert("Selamat Datang di Dunia Proxytia "+nama+", Halo Penyihir "+nama+", ciptakan keajaiban yang membantu kemenanganmu! ");
}else{
	alert("Selamat Datang di Dunia Proxytia "+nama+", Peranmu tidak terdaftar silakan Ulangi! ");
}