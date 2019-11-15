'use strict';
const fs = require("fs");

const mdToHtml = require("./main.js");

var templateFile = fs.readFileSync("template.md", "utf8");

var templateResult = fs.readFileSync("template.html", "utf8");

var is_error = mdToHtml(templateFile).split("").some(function(char, i){
	if(char !== templateResult.charAt(i)){
		console.log(i, char, templateResult.charAt(i));
		return true;
	}
	else
		return false;
})

if(is_error){
	console.log(mdToHtml(templateFile));
	throw new Error();
}



