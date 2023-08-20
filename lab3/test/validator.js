function validateForm() {
    let fname = document.forms.myForm.FirstName.value;
    //let fname = document.forms["myForm"]["FirstName"].value;
    if (fname.length < 3 ) {
        alert("Firstname must be filled out");
        return false;
    }
    let country = document.forms.myForm.Country.value;
    //let country = document.forms["myForm"]["Country"].value;
    if (country =="000" ) {
        alert("Country must be selected");
        return false;
    }
}
