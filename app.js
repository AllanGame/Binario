const text_to_translate = document.getElementById('texttotranslate')
function translateText() {  
    if(text_to_translate.value === "") {
        window.navigator.vibrate(600)
        alert('Hey you haven\'t added anything to translate')
    }
}