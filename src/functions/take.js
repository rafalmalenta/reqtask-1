import $ from "jquery";
var fullCities = [];

export function take(array){
    var header, descr, acordion;
    console.log(array)
    $.each(array,function(i, item){
        //console.log(array[i]);
        $.ajax({
            type: "GET",  
            data: {
                origin: "*"
              },      
            url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext&titles=" + item,
            success: function(data){
                var x = data.query.pages;
                var ob = Object.keys(x)[0];
                var describtion = x[ob]["extract"];
                //console.log(item);
                acordion = document.getElementById("acordion");                
                header = document.createElement("DIV");
                header.innerHTML = array[i];
                descr = document.createElement("DIV");
                descr.classList.add('hidden');
                descr.innerHTML = describtion;
                acordion.appendChild(header);
                acordion.appendChild(descr);
            },
            error: "",        
            });
    });
    



}
