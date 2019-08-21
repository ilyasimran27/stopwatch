var time = 0;
var running = 0;

function startPause(){
	if(running == 0){
		running=1;
		increment();
		
		
	}
};

function reset(){
	running = 0;
	time = 0;
	document.getElementById("output").innerHTML = "00:00:00";
	document.getElementById("start").innerHTML = "Start";
	document.getElementById("pause").innerHTML = "pause";
};
function pause(){
	
	if(running==1){
		running=0;
		document.getElementById("pause").innerHTML = "Resume";
	
	}
	else if(running==0 && document.getElementById("pause").innerHTML == "Resume"){
		document.getElementById("pause").innerHTML = "pause";
		running=1;
		increment();
	}
}

function increment(){
	if(running == 1){
		setTimeout(function(){
			time++;
			var mins = Math.floor(time / 10 / 60);
			if(mins <= 9){
				mins = "0" + mins;
			}
			var secs = Math.floor(time / 10);
			if(secs <= 9){
				secs = "0" + secs;
			}
			var tenths = Math.floor(time % 10);
			if(tenths <= 9){
				tenths = "0" + tenths;
			}
			document.getElementById("output").innerHTML = mins + ":" + secs + ":" + tenths;
			increment();
		}, 100);
	}
};
