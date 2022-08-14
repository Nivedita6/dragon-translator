var txtInput = document.querySelector("#txt-input");

var btnTranslate = document.querySelector("#btn-translate");

var outputText = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/thuum.json"

function getTranslationURL(text){
	return serverURL + "?" + "text=" + text
}

console.log(txtInput);

function clickEventHandler(){
	var input = txtInput.value;

	fetch(getTranslationURL(input))
	.then(response => response.json())
	.then(json => {
		var translatedText = json.contents.translated;
		outputText.innerText = translatedText;
	})
}

btnTranslate.addEventListener("click", clickEventHandler);