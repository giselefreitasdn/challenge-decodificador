function criptografar() {
    const input = document.getElementById('inputText').value;

    let resultado = input
        .toLowerCase()
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.getElementById('outputText').innerText = resultado;
}

function descriptografar() {
    const input = document.getElementById('inputText').value;

    let resultado = input
        .toLowerCase()
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('outputText').innerText = resultado;
}