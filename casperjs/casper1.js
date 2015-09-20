var casper = require('casper').create();
var utils=require('utils');
var links;
function getLinks() {
	console.log('Evaluating...');
     var nodes =document.querySelectorAll('div.course-list-item-alt div.content h2.title a'),
     obj= Array.prototype.map.call(nodes, function(node) { 
      var arr={};
      arr.name=node.textContent;
      arr.url=node.getAttribute('href'); 
      return arr;
    
    });
    return obj;
}
casper.start('https://frontendmasters.com/courses', function() {
	console.log("Opening...");
/*  title=casper.waitForSelector('#wistia_13_source', function() {
     this.captureSelector('twitter.png', 'html');
     return "yes";
},null,15000000);*/

	links=this.evaluate(getLinks);
});




casper.run(function(){
	utils.dump(links);
  this.exit();
});