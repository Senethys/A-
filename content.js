setTimeout(function() {
var s = document.createElement('script');
//Incase you want to add a separate barchart.
//var barchartScript = document.createElement('script');

//Incase you want to add a separate barchart.
//barchartScript.src = chrome.extension.getURL('barchart.js');
s.src = chrome.extension.getURL('script.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
//(document.head || document.documentElement).appendChild(barchartScript);
console.log("Injected scripts");
}, 5000);

