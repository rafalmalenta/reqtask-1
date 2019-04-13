import "./styles/style.sass";
import $ from "jquery";
import { autocomplete } from "./functions/autocomplete.js";
var $country ;
//$ = jquery;
var countries = ["Poland","France","Germany","Spain"];
var storage = localStorage.getItem("inputValue");
$(function(){
  $country = $("#country");
  $country.on("keypress",function(){
    console.log($country.val());
    autocomplete(document.getElementById("country"), countries);

  });
  //console.log($country);
  //$country.val("dsada");

});
