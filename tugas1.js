function changeImage(imgId, imgA, imgB) {
    let imgObj = document.getElementById(imgId);


    let currentSrc = imgObj.src.substring(imgObj.src.lastIndexOf("/") + 1);

    let baseA = imgA.substring(imgA.lastIndexOf("/") + 1);

    if (currentSrc === baseA) {
        imgObj.src = imgB;
    } else {
        imgObj.src = imgA;
    }
}

document.addEventListener("DOMContentLoaded", ()=> {
    const form = document.getElementById("form1");

    form.addEventListener("submit", (e) =>{
        e.preventDefault();

        let nama = document.getElementById("nama").value;
        let email = document.getElementById("email").value;
        let pesan = document.getElementById("pesan").value;

        alert(`Terima kasih, ${nama}!\nPesanmu terkirim.\n\nEmail: ${email}\nPesan: ${pesan}`);
    })
})

