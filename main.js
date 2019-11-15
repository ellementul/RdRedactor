'use strict';

function mdToHtml(text){

	text = splitForStyle(text);
	text = insertTagBrAndH1(text);
	return text;
}

function splitForStyle(text){
	text = text.replace(/(\*\*.+?\*\*)/sg, insertTagB);
	return text.replace(/(\*.+?\*)/sg, insertTagI);

}

function insertTagB(str){
	return warpTag(str.substr(2, str.length - 4), "b");
}

function insertTagI(str){
	return warpTag(str.substr(1, str.length - 2), "i");
}

function insertTagBrAndH1(text){
	var strokes = text.split(/[\r\n]/);

	return strokes.reduce(function(acc, str){
		if(str)
			if(str[0] === "#")
				acc += warpTag(str.substr(1), "h1");
			else	
				acc += str + "<br>";
		else
			acc += str + "\n";

		return acc;
	}, "");
}

function warpTag(str, tag){
	return "<" + tag + ">" + str + "</" + tag + ">";
}

module.exports = mdToHtml;