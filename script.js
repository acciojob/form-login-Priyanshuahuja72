function getFormvalue(event) {
    event.preventDefault()
    let firstname = document.getElementById("form1").elements[0].value;
    let lastname = document.getElementById("form1").elements[1].value;
    alert(firstname + "" + lastname);
}
