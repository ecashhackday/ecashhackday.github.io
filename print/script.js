function createQRCode() {
    const userInput = document.getElementById('userInput').value;
    document.getElementById('inputArea').classList.add('hidden');
    
    const qrCodeElement = document.getElementById('qrCode');
    const outputText = document.getElementById('outputText');

    new QRCode(qrCodeElement, {
        text: userInput,
        width: window.innerWidth,
        height: window.innerWidth
    });
	outputText0.innerText = "ECASH HACKDAY 2K23";
    outputText1.innerText = "Redeem with";
	outputText2.innerText = "cashu.me";
	outputText3.innerText = "nutstash.app ";
	outputText4.innerText = "enuts.cash ";
	outputText5.innerText = "minibits.cash";
	outputText6.innerText = "> cashu.space <";
    document.getElementById('qrArea').classList.remove('hidden');
}

