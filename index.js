var inputId=document.querySelector("#textEnglish");

var textMinionese=document.querySelector("#textMinionese");

var btnTranslate=document.querySelector("#btnTranslate");

function urlConstructor(inputText)
{
    return "https://api.funtranslations.com/translate/valyrian.json?text='"+inputText+"'";
}

function translateToMinionese()
{
    fetch(urlConstructor(inputId.value)).then(response=>response.json()).then(json => { textMinionese.innerText=json.contents.translated })
}

btnTranslate.addEventListener("click", function clickEventListener()
{
    fetch(urlConstructor(inputId.value)).then(response=>response.json()).then(json => { textMinionese.innerText=json.contents.translated })
});