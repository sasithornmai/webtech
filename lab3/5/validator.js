function sumitForm() {
    console.log('hi')
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let company = document.getElementById('company').value;

    if (name == "") {
        alert("กรุณากรอกชื่อ")
        return false;
    }
    if (phone == "") {
        alert("กรุณากรอกเบอร์")
        return false;
    }
    if (email == "") {
        alert("กรุณากรอกอีเมลล์")
        return false;
    }
    if (company == "") {
        alert("กรุณากรอกบริษัท")
        return false;
    }
    document.getElementById('name2').innerHTML = name;
    document.getElementById('phone2').innerHTML = phone;
    document.getElementById('email2').innerHTML = email;
    document.getElementById('company2').innerHTML = company;
}