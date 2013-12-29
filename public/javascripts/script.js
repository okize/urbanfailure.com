function colorize(){

	document.body.style.backgroundColor = "#" + ("000000" + Math.floor(Math.random()*16777215).toString(16)).substr(-6);

	setTimeout( function(){
		colorize();
	},1000);

}

colorize();