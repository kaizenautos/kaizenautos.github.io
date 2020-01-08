	$('#myModal').show();
	//Opens a new tab with the value from the div id rental
	var openDoc = function(){
		var divText = document.getElementById("rental").outerHTML;
		//var btn = document.getElementById("sBtn").outerHTML;
		var myWindow = window.open();
		var doc = myWindow.document;
		doc.open();
		doc.write("<img src='media/kaizen.png' style='width: 19%;height:21%;'><span style='float:right; color:silver;font-size: 25px;font-weight: bold;font-family:times new roman;' id='title'>Kaizen Auto Brokers LTD<br/>Rental Agreement</span><hr>")
		doc.write(divText);
		doc.write("<button style='width:100px' onclick='window.print()'>Print</button>");
		doc.close();
	}