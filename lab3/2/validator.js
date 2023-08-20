function validateForm() {
    let idperson = document.forms.maiForm.idperson.value;
    let prefix = document.forms.maiForm.prefix.value;
    let fname = document.forms.maiForm.fname.value;
    let lname = document.forms.maiForm.lname.value;
    let address = document.forms.maiForm.address.value;
    let district = document.forms.maiForm.district.value;
    let district2 = document.forms.maiForm.district2.value;
    let province = document.forms.maiForm.province.value;
    let postcode = document.forms.maiForm.postcode.value;

    if (idperson.length !== 13) {
        alert("ใส่เลขบัตรประชาชน 13 หลัก")
        return false;
    }
    if (prefix == 0) {
        alert("เลือกคำนำหน้า")
        return false;     
    }
    if (fname.length < 2 || fname.length > 20) {
        alert("ชื่อจริงความยาวระหว่าง 2-20 ตัวอักษร")
        return false;
    }
    if (lname.length < 2 || lname.length > 30) {
        alert("นามสกุลความยาวระหว่าง 2-20 ตัวอักษร")
        return false;
    }
    if (address.length < 5) {
        alert("ที่อยู่ความยาวไม่ต่ำกว่า 5 ตัวอักษร")
        return false;
    }
    if (district.length < 2) {
        alert("ตำบลความยาวไม่ต่ำกว่า 2 ตัวอักษร")
        return false;
    }
    if (district2.length < 2) {
        alert("อำเภอความยาวไม่ต่ำกว่า 2 ตัวอักษร")
        return false;
    }
    if (province == 0) {
        alert("เลือกจังหวัด")
        return false;     
    }
    if (postcode.length !== 5) {
        alert("อำเภอความยาวไม่ต่ำกว่า 2 ตัวอักษร")
        return false;
    }
}