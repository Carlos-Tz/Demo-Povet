var modal = document.getElementById('myModal');
var span = document.getElementById('close');
var canvas = document.getElementById('canvas');
var modal2 = document.getElementById('myModal2');
var span2 = document.getElementById('close2');
var canvas2 = document.getElementById('canvas2');
var modal3 = document.getElementById('myModal3');
var span3 = document.getElementById('close3');
var canvas3 = document.getElementById('canvas3');

var signaturePad = new SignaturePad(canvas, {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minWidth: 3,
    maxWidth: 4,
    penColor: "rgb(33, 33, 33)"
});

var signaturePad2 = new SignaturePad(canvas2, {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minWidth: 3,
    maxWidth: 4,
    penColor: "rgb(33, 33, 33)"
});
var signaturePad3 = new SignaturePad(canvas3, {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    minWidth: 3,
    maxWidth: 4,
    penColor: "rgb(33, 33, 33)"
});
//btn.onclick = function () {
function btn_click() {
    modal.style.display = "block";
    resizeCanvas();
}
function btn_click2() {
    modal2.style.display = "block";
    resizeCanvas2();
}
function btn_click3() {
    modal3.style.display = "block";
    resizeCanvas3();
}
function btn_clear() {
    document.getElementById('imgSign').src = '';
    document.getElementById('imgSign2').src = '';
    document.getElementById('imgSign3').src = '';
  }
span.onclick = function () {
    modal.style.display = "none";
    document.getElementById('imgSign').src = signaturePad.toDataURL();
}
span2.onclick = function () {
    modal2.style.display = "none";
    document.getElementById('imgSign2').src = signaturePad2.toDataURL();
}
span3.onclick = function () {
    modal3.style.display = "none";
    document.getElementById('imgSign3').src = signaturePad3.toDataURL();
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById('imgSign').src = signaturePad.toDataURL();
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
        document.getElementById('imgSign2').src = signaturePad2.toDataURL();
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
        document.getElementById('imgSign3').src = signaturePad3.toDataURL();
    }
}

function resizeCanvas() {
    var w = modal.clientWidth;
    var h = modal.clientHeight;
    canvas.width = Math.ceil(w * 0.75);
    canvas.height = Math.ceil(h * 0.7);
    signaturePad.clear();
}
function resizeCanvas2() {
    var w = modal2.clientWidth;
    var h = modal2.clientHeight;
    canvas2.width = Math.ceil(w * 0.75);
    canvas2.height = Math.ceil(h * 0.7);
    signaturePad2.clear();
}
function resizeCanvas3() {
    var w = modal3.clientWidth;
    var h = modal3.clientHeight;
    canvas3.width = Math.ceil(w * 0.75);
    canvas3.height = Math.ceil(h * 0.7);
    signaturePad3.clear();
}

window.addEventListener("resize", resizeCanvas);
window.addEventListener("resize", resizeCanvas2);
window.addEventListener("resize", resizeCanvas3);

//PDF Generator
var page = document.title;
var doc = new jsPDF();

function pdf(quality = 1) {
    var name = document.querySelector('#orden_');
    const filename = page + name.value + '.pdf';
    let pdf = new jsPDF({
        orientation: 'p',       //portrait
        unit: 'mm',             //millimeters
        format: 'letter'        //document size
    });

    html2canvas(document.querySelector('.page'), { scale: quality }).then(canvas => {
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 216, 279);
        pdf.addPage();
      //  hoja2(pdf, quality);
      //  pdf.addPage();
        hoja2(pdf, filename, quality);
        /* pdf.save(filename); */
    });
}
hoja2 = (pdf, filename, quality) => {
    html2canvas(document.querySelector('#pag_2'), { scale: quality }).then(canvas => {
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 216, 279);
        pdf.addPage();
        html2canvas(document.querySelector('#pag_3'), { scale: quality }).then(canvas => {
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 216, 279);
            pdf.save(filename);
        });
      //  pdf.save(filename);
    });
}
/* hoja3 = (pdf, filename, quality) => {
    html2canvas(document.querySelector('#pag_3'), { scale: quality }).then(canvas => {
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 216, 279);
        pdf.save(filename);
    });
} */
