/*var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open("http://www.mozilla.org/");
}
*/
// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Import the self API
var data = require("sdk/self").data;
 
var jsScripts = [
	data.url("js/jquery-1.7.min.js"),
	data.url("js/angular.min.js"),
	data.url("js/enableAutocomplete.js"),
	data.url("js/irbrokerModifier.js")];
// Create a page mod
pageMod.PageMod({
  include: ["*.irbroker2.com", "*.irbroker.com"]
  contentScriptFile : jsScripts,
  contentStyleFile : data.url("css/style.css"),
  onAttach: function onAttach(worker) {
	console.log("Attached");
  }
});
