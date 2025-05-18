const text = "HELLO I AM NISCHAL";
const typedText = document.getElementById('typed-text');
let index = 0;

function type() {
    if (index < text.length) {
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 80);
    }
}
type();