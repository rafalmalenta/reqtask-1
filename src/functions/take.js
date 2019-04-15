import $ from "jquery";
var fullCities = [];

export function take(array){
    var header, descr;
    var acordion = document.getElementById("acordion");
    acordion.innerHTML = "";
    //console.log(array)
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
                //console.log(x)
                var ob = Object.keys(x)[0];
                var describtion = x[ob]["extract"];
                var title = x[ob]["title"];
                //console.log(title);
                $.each(array,function(j, jtem){                    
                    if(array[i] == title){
                        var controlna = array[i];                       
                        fullCities.push({ controlna , describtion});  
                        console.log(controlna);

                    }
                });
                header = document.createElement("DIV");
                header.innerHTML = array[i];
                descr = document.createElement("DIV");
                descr.classList.add('hidden');
                descr.innerHTML = describtion;
                acordion.appendChild(header);
                header.appendChild(descr);
            },
            error: "",        
            });
    });
    



}
