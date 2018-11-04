var kubusA = prompt("masukan sisi kubus A ");
var kubusB = prompt("masukan sisi kubus B ");

function kubusVolA(a){
	var volumeA = a*a*a;
	return volumeA;
}
function kubusVolB(b){
	var volumeB = b*b*b;
	return volumeB;
}
function sumVolume(a,b){
	var hasil = a+b;
	return hasil;
	console.log(hasil);
}

sumVolume(kubusVolA(kubusA),kubusVolB(kubusB));
