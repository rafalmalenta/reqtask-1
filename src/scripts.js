import "./styles/style.sass";
import $ from "jquery";
import { autocomplete } from "./functions/autocomplete.js";
import  { verify }  from "./functions/verify.js"
import {getCountries} from "./functions/getCountries"
var $country ;

var countries = ["Poland","France","Germany","Spain"];
var storage = localStorage.getItem("inputValue");

$(function(){
  $country = $("#country");
  var $form = $("#rectask");
  var input = document.getElementById("country");
  var pollution;
  var radios = document.getElementsByTagName('input');

  $form.on("submit",function(event){
    event.preventDefault();        
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].type === 'radio' && radios[i].checked) {
        pollution = radios[i].value;       
        }
    }
    if(verify(countries,input.value,pollution)){        
        getCountries(input.value,pollution);
      }
    });   
  

  $country.on("keypress",function(){   
    autocomplete(document.getElementById("country"), countries);      
  });


});
