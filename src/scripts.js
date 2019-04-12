import "./style.sass";
var country = null;

let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    clearInterval(stateCheck);
    console.log(document.getElementById("kraj"));
    console.log(document.readyState)

  }
}, 111);


(function(){


})()