import $ from "jquery";
var fullCities = [];

export function take(array){
    var header, descr, iterator = 0;
    var acordion = document.getElementById("wrapper");
    acordion.innerHTML = "";
    var element = array[0];

    console.log(array)
    function takeElement(element){
        //console.log(element);
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
                    //console.log(url)
                    //console.log(element)
                    var ob = Object.keys(x)[0];
                    var describtion = x[ob]["extract"];
                    var title = x[ob]["title"];
                    //console.log(title);
                                          
                    header = document.createElement("DIV");
                    header.innerHTML = element;
                    header.classList.add('accordion')
                    descr = document.createElement("DIV");
                    descr.classList.add('panel');
                    descr.innerHTML = describtion;
                    acordion.appendChild(header);
                    acordion.appendChild(descr); 
                    
                    var acc = document.getElementsByClassName("accordion");
                    var x;

                    for (x = 0; x < acc.length; x++) {
                        acc[x].addEventListener("click", function() {
                        //this.classList.toggle("active");
                        var panel = this.nextElementSibling;
                        console.log(panel)
                        if (panel.style.display === "block") {
                            panel.style.display = "none";
                            } 
                        else {
                             panel.style.display = "block";
                            }
                    });
} 
                    
                    iterator = iterator + 1;
                    if(iterator < 10){
                        takeElement(array[iterator]);
                    }
            });
    }
    takeElement(element);
}
