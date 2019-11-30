window.onload =()=>{                           
    document.getElementById("button").onclick=()=>{
    	let userInt = document.getElementById("rubles").value;
    	let currency = [1/63.66,1/70.31];
    	let res = document.getElementById("rubles").value*currency[document.getElementById("s").selectedIndex];

    	if ((userInt <= 0) || (isNaN(userInt)) || (userInt = "")){
    		document.getElementById("result").value = "Нет, так дело не пойдет!";
    		}
    		else {
    		document.getElementById("result").value = res.toFixed(2); 
    		}

    	   	
       }
}