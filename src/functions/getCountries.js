import  $  from "jquery";


export function getCountries(country, pollution){
    var url;
    var baseurl = "https://api.openaq.org/v1/measurements?order_by=value&sort=desc&limit=30&parameter="+pollution;
    var pollutedCities = [], addToArray=true;
    country = country.toUpperCase();
    
    switch(country) {
        case "POLAND":
            url = baseurl+"&country=PL"
            break;
        case "SPAIN":
            url = baseurl+"&country=ES"
            break;
        case "GERMANY":   
            url = baseurl+"&country=GE"   
            break;
        case "FRANCE":  
            url = baseurl+"&country=FR"     
            break;           
    }
    var time = new Date(); 
    var year = time.getUTCFullYear();
    var month = time.getMonth()+1;
    var day = time.getDate();
    url = url + "&date_from="+year+"-"+month+"-"+day;
    console.log(url);
    var needMoreData = true;
    var page = 1;
    //while( page < 3){        
        $.ajax({
            type: "get",
            url: url+ "&page=" + page,
            success: function(data){
                console.log(" " + data.meta.found);
                var alldata = data.meta.found;
                page = data.meta.page;
                var limit = data.meta.limit;

                $.each(data.results, function(i, item){
                    var addToArray = true;
                    $.each(pollutedCities,function(j, city){                                                
                        console.log(city.toUpperCase() +" "+ item.city.toUpperCase());
                        if(city.toUpperCase() === item.city.toUpperCase()){
                            addToArray = false;                              
                        }
                    });                    
                    if(addToArray && pollutedCities.length<10){
                        pollutedCities.push(item.city);
                    }
                    page = page++;
                    //if(pollutedCities.length>9 || (alldata >= page*limit)){
                      //  needMoreData = false;
                   // };
                    
                
            });
            console.log(pollutedCities);
        },
        error: "",
        
        });
   // }
    
}

