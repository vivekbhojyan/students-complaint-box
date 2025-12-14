function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    menu.style.width = menu.style.width === "300px" ? "0" : "300px";
}

function validateForm() {
    let valid = true;

    const alpha = /^[A-Za-z ]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    document.querySelectorAll(".error").forEach(e => e.innerText = "");

    function err(id, msg) {
        document.getElementById(id).innerText = msg;
        valid = false;
    }

    if (!fname.value.trim() || !alpha.test(fname.value))
        err("fnameErr", "Only alphabets allowed");

    if (!lname.value.trim() || !alpha.test(lname.value))
        err("lnameErr", "Only alphabets allowed");

    if (!phoneRegex.test(phone.value))
        err("phoneErr", "Enter valid 10-digit number");

    if (!roll.value.trim())
        err("rollErr", "Roll number required");

    if (!admission.value.trim())
        err("admissionErr", "Admission number required");

    if (!branch.value)
        err("branchErr", "Select your branch");

    if (!document.querySelector('input[name="cat"]:checked'))
        err("catErr", "Select at least one category");

    if (!complaint.value.trim())
        err("complaintErr", "Complaint cannot be empty");

    // ✅ Redirect if everything is valid
    if (valid) {
        window.location.href = "success.html";
    }

    return false; // prevent default form submit
}

function validateContactForm() {
    let valid = true;

    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Clear previous errors
    document.getElementById("cnameErr").innerText = "";
    document.getElementById("cemailErr").innerText = "";
    document.getElementById("cmessageErr").innerText = "";

    const name = document.getElementById("cname").value.trim();
    const email = document.getElementById("cemail").value.trim();
    const message = document.getElementById("cmessage").value.trim();

    if (name === "" || !nameRegex.test(name)) {
        document.getElementById("cnameErr").innerText =
            "Name must contain only alphabets and cannot be empty";
        valid = false;
    }

    if (email === "" || !emailRegex.test(email)) {
        document.getElementById("cemailErr").innerText =
            "Enter a valid email address";
        valid = false;
    }

    if (message === "") {
        document.getElementById("cmessageErr").innerText =
            "Message cannot be empty";
        valid = false;
    }

    return valid;
}

function validateLoginForm() {
    let valid = true;

    // clear previous errors
    document.getElementById("loginAdmissionErr").innerText = "";
    document.getElementById("loginPasswordErr").innerText = "";

    const admission = document.getElementById("loginAdmission").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (admission === "") {
        document.getElementById("loginAdmissionErr").innerText =
            "Admission number is required";
        valid = false;
    }

    if (password === "") {
        document.getElementById("loginPasswordErr").innerText =
            "Password is required";
        valid = false;
    }

    // ✅ if validation passes, redirect
    if (valid) {
        window.location.href = "index.html";
    }

    return false; // always prevent default form submit
}
