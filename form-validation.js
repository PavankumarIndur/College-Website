document.querySelector("form").addEventListener("submit", function (event) {
    var name = document.querySelector("input[name='name']").value;
    var email = document.querySelector("input[name='email']").value;
    var contactNumber = document.querySelector("input[name='contact_number']").value;

    if (!name || !email || !contactNumber) {
        alert("All fields are required!");
        event.preventDefault();
    }
});
