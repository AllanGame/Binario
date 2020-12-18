const text_to_translate = document.getElementById('texttotranslate')
function translateText() {  
    if(text_to_translate.value === "") {
        alert('Hey you haven\'t added anything to translate')
        window.navigator.vibrate(2000)
    }
}