import $ from "jquery";
var fullCities = [];

export function take(array){
    var header, descr, iterator = 0;
    var acordion = document.getElementById("wrapper");
    acordion.innerHTML = "";
    var element = array[0];

    function takeElement(element){        
        $.ajax({
            type: "GET",  
            data: {
                origin: "*"
              },      
            url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext&titles=" + element,
            success: {
            },
            error: "",        
            }).done(function(data){
                    var x = data.query.pages;
                    var ob = Object.keys(x)[0];
                    var describtion = x[ob]["extract"];                   
                    header = document.createElement("DIV");
                    header.innerHTML = element;
                    header.classList.add('accordion')
                    descr = document.createElement("p");
                    descr.classList.add('panel');
                    descr.innerHTML = describtion;
                    acordion.appendChild(header);
                    acordion.appendChild(descr);                    
                    
                    iterator = iterator + 1;
                    if(iterator < 10){
                        takeElement(array[iterator]);
                    }
                    var acc = document.getElementsByClassName("accordion");
                    var x;

                    
                    acc[iterator-1].addEventListener("click", function() {                       
                    var panel = this.nextElementSibling;                                           
                    if (panel.style.display === "block") {
                        panel.style.display = "none";
                    }        
                    else {
                        panel.style.display = "block";
                    }
                });
      

            });
           
                    
    }
    takeElement(element);
    
}
