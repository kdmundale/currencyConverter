function currencyConversion(){
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var amt =document.getElementById("frmAmt").value;
  var xmlhttp = new XMLHttpRequest();
  var url = "https://api.exchangeratesapi.io/latest?symbols="+ from+","+to;
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
      var result = xmlhttp.responseText;
      var jsResult = JSON.parse(result);
      var oneU =jsResult.rates[to]/jsResult.rates[from];
      document.getElementById("result").innerHTML = amt + " "+ from + " "+" = "+
      ((oneU * amt*100)/100).toFixed(2)+" "+to;
    };
  };
};
