function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function closeModalBox() {
    document.querySelector('.section-modal-box').style.display = 'none';
}

function showModalBox() {
    document.querySelector('.section-modal-box').style.display = 'block';
}