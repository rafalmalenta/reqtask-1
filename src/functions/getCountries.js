import  $  from "jquery";
import {take} from "./take.js"

export function getCountries(country, pollution){    
    var url = "https://api.openaq.org/v1/measurements?order_by=value&sort=desc&limit=3110&parameter="+pollution;
    var pollutedCities = [], addToArray=true;    
    country = country.toUpperCase();
    var page = 1;
    switch(country) {
        case "POLAND":
            url = url+"&country=PL"
            break;
        case "SPAIN":
            url = url+"&country=ES"
            break;
        case "GERMANY":   
            url = url+"&country=GE"   
            break;
        case "FRANCE":  
            url = url+"&country=FR"     
            break;           
    }
    var time = new Date(); 
    var year = time.getUTCFullYear();
    var month = time.getMonth()+1;
    var day = time.getDate();
    url = url + "&date_from="+year+"-"+month+"-"+day;
    
    function takeData(page){         
        $.ajax({
            type: "GET",           
            url: url + "&page=" + page,
            success: function(data){               
                var alldata = data.meta.found;
                var curpage = data.meta.page;
                var limit = data.meta.limit; 
                $.each(data.results, function(i, item){
                    var addToArray = true;
                    $.each(pollutedCities,function(j, city){
                        if(city.toUpperCase() === item.city.toUpperCase()){
                            addToArray = false;                              
                        }
                    });                    
                    if(addToArray && pollutedCities.length<10){
                        pollutedCities.push(item.city);
                       
                    } 
                                       
                });
            
            if(pollutedCities.length < 10 && (alldata>curpage*limit)){
                page = page + 1;                
                takeData(page);
            }
            take(pollutedCities)
        },
        error: "",
        
        });
        
          
    }
    takeData(page);
    
}

