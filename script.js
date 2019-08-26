let time = 0;
let running = 0;
let mins=0;
let secs=0;
let tenths=0;
let fun=0;
function start(){
	if(running == 0){
		running=1;
		increment();
		
		
	}
};

function reset(){
	clearInterval(fun);
	running = 0;
	time = 0;
	mins=0;
	secs=0;
	tenths=0;
	document.getElementById("output").innerHTML ="00:00:00";
	
	document.getElementById("pause").innerHTML = "pause";
};
function pause(){
	clearInterval(fun);
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
fun=setInterval(function(){
			time++;
			 mins = Math.floor(time / 10 / 60);
			if(mins <= 9){
				mins = "0" + mins;
			}
			 secs = Math.floor(time / 10);
			if(secs <= 9){
				secs = "0" + secs;
			}
			 tenths = Math.floor(time % 10);
			if(tenths <= 9){
				tenths = "0" + tenths;
			}
			document.getElementById("output").innerHTML = mins + ":" + secs + ":" + tenths;
			
		}, 100);
		
	}
};