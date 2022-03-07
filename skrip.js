function kosong1() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
}

function kosong2() {
    let frm = document.getElementById("formulir");
    frm.a2.value = "";
}

function kosongAll() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
    frm.a2.value = "";
    frm.hasil.value = "";
}

function hasilTambah() {
    let frm = document.getElementById("formulir");
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    if (isNaN(a1) || a1 == '') {
        alert("Harap isi data berupa angka")
    }
    else {
        let total = (parseInt(a1) + parseInt(a2));
        frm.hasil.value = total;
    }
}

function hasilKurang() {
    let frm = document.getElementById("formulir");
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    if (isNaN(a1) || a1 == '') {
        alert("Harap isi data berupa angka")
    }
    else {
        let total = a1-a2;
        frm.hasil.value = total;
    }
}

function hasilKali() {
    let frm = document.getElementById("formulir");
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    if (isNaN(a1) || a1 == '') {
        alert("Harap isi data berupa angka")
    }
    else {
        let total = a1*a2;
        frm.hasil.value = total;
    }
}

function hasilBagi() {
    let frm = document.getElementById("formulir");
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    if (isNaN(a1) || a1 == '') {
        alert("Harap isi data berupa angka")
    }
    else {
        let total = a1/a2;
        frm.hasil.value = total;
    }
}

function hasilPangkat() {
    let frm = document.getElementById("formulir");
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;
    if (isNaN(a1) || a1 == '') {
        alert("Harap isi data berupa angka")
    }
    else {
        let total = Math.pow(a1,a2);
        frm.hasil.value = total;
    }
}

