var search = prompt('ketik programmer !!');
var aaray = ["pro","gram","merit","program","it","programmer"];

function filter1(kata){
	return aaray.filter(function(a){
		return a.toLowerCase().indexOf(kata.toLowerCase())>-1;
	});
}
console.log(filter1(search));