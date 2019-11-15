'use strict';
const fs = require("fs");

const mdToHtml = require("./main.js");

var templateFile = fs.readFileSync("template.md", "utf8");

var templateResult = fs.readFileSync("template.html", "utf8");

if(templateFile !== templateResult){
	console.log(templateFile);
	console.log(mdToHtml(templateFile));
}

