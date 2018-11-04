var lagi = true;
while(lagi == true ){
	var jawaban = prompt("Pilih: batu,gunting,kertas !!");

	function computer(){
		var comp = Math.random();
		if(comp<0.33){
			comp = "batu";
		}else if(comp>=0.34 && comp<=0.50){
			comp = "gunting";
		}else{
			comp = "kertas";
		}
		return comp;
	}
	
	rules(jawaban,computer());

	function rules(jawaban, newComp){
		var hasil="";
		if(jawaban === newComp ){
			hasil = "SERI";
		}else if (jawaban === "batu"){
			hasil = (newComp == "gunting") ? 'MENANG':'KALAH';
		}else if (jawaban === "gunting"){
			hasil = (newComp == "kertas") ? 'MENANG':'KALAH';
		}else if (jawaban === "kertas"){
			hasil = (newComp == "batu") ? 'MENANG':'KALAH';
		}else{
			alert("yang ada masukan tidak valid");
		}

		alert(`anda memilih ${jawaban} dan komputer memilih ${newComp} \n anda ${hasil} `);	
	}
	lagi = confirm("Coba lagi ?");
}