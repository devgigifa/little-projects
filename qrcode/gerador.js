function clearQRCode() {
  let website = document.getElementById("website").value;
  if (!website) {
    alert("O campo de URL já está vazio!");
  } else {
    document.getElementById("website").value = "";
    document.getElementById("qrcode").innerHTML = "";
    document.getElementById("qrcode-container").style.display = "none";
  }
}

function generateQRCode() {
  let website = document.getElementById("website").value;
  if (website) {
    let qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    new QRCode(qrcodeContainer, website);
    document.getElementById("qrcode-container").style.display = "block";
    return website;
  } else {
    alert("Por favor, insira uma URL válida");
  }
}

const downloadBtn = document.getElementById('download-btn');
const qrcodeDiv = document.getElementById('qrcode');

downloadBtn.addEventListener('click', () => {
  const qrcodeImg = qrcodeDiv.querySelector('img');
  if (qrcodeImg) {
    const link = document.createElement('a');
    link.href = qrcodeImg.src;
    link.download = 'qrcode.png';
    link.click();
  } else {
    alert("Gere um QR code para fazer download!");
  }
});