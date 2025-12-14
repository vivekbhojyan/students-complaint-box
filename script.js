/* ================= MENU ================= */

function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    if (!menu) return;
    menu.style.width = (menu.style.width === "300px") ? "0" : "300px";
}

/* ================= STUDENT COMPLAINT ================= */
function validateForm() {
    let valid = true;

    const alpha = /^[A-Za-z ]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    document.querySelectorAll(".error").forEach(e => e.innerText = "");

    const err = (id, msg) => {
        document.getElementById(id).innerText = msg;
        valid = false;
    };

    if (!fname.value.trim() || !alpha.test(fname.value)) err("fnameErr", "Only alphabets allowed");
    if (!lname.value.trim() || !alpha.test(lname.value)) err("lnameErr", "Only alphabets allowed");
    if (!phoneRegex.test(phone.value)) err("phoneErr", "Enter valid 10-digit number");
    if (!roll.value.trim()) err("rollErr", "Roll number required");
    if (!admission.value.trim()) err("admissionErr", "Admission number required");
    if (!branch.value) err("branchErr", "Select your branch");
    if (!document.querySelector('input[name="cat"]:checked')) err("catErr", "Select category");
    if (!complaint.value.trim()) err("complaintErr", "Complaint cannot be empty");

    if (valid) {
    const complaints = JSON.parse(localStorage.getItem("complaints")) || [];

    complaints.push({
        fname: fname.value,
        lname: lname.value,
        phone: phone.value,
        roll: roll.value,
        admission: admission.value,
        branch: branch.value,
        complaint: complaint.value,
        date: new Date().toLocaleString()
    });

    localStorage.setItem("complaints", JSON.stringify(complaints));

    // 🎉 CONFETTI BLAST
    confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.5 }
    });

    // ⏳ wait then redirect
    setTimeout(() => {
        window.location.href = "success.html";
    }, 20);
}

    return false;
}

/* ================= CONTACT FORM ================= */
function validateContactForm() {
    let valid = true;
    document.querySelectorAll(".error").forEach(e => e.innerText = "");

    if (!cname.value.trim()) valid = false, cnameErr.innerText = "Name required";
    if (!cemail.value.trim()) valid = false, cemailErr.innerText = "Email required";
    if (!cmessage.value.trim()) valid = false, cmessageErr.innerText = "Message required";

    return valid;
}

/* ================= LOGIN ================= */
function validateLoginForm() {
    const id = loginAdmission.value.trim();
    const pass = loginPassword.value.trim();

    loginAdmissionErr.innerText = "";
    loginPasswordErr.innerText = "";

    if (!id) loginAdmissionErr.innerText = "ID required";
    if (!pass) loginPasswordErr.innerText = "Password required";

    if (!id || !pass) return false;

    // ADMIN LOGIN
    if (id === "1" && pass === "2") {
        window.location.href = "adm.html";

    } 
    if(id==="2400320101284"&&pass==="vivek"){
        window.location.href = "index1.html";
    }
    if(id==="2400320101304"&&pass==="yashi"){
        window.location.href = "index1.html";
    }
    if(id==="2400320101284"&&pass==="vishal"){
        window.location.href = "index1.html";
    }
    if(id==="2400320101285"&&pass==="vivek"){
        window.location.href = "index1.html";
    }else {
        loginAdmissionErr.innerText = "Wrong Id or password ";
        loginPasswordErr.innerText = "Wrong Id or password";
    }

    return false;
}

/* ================= ADMIN LOAD ================= */
function loadComplaints() {
    const table = document.getElementById("complaintTable");
    if (!table) return;

    const complaints = JSON.parse(localStorage.getItem("complaints")) || [];

    if (complaints.length === 0) {
        table.innerHTML = "<tr><td colspan='7'>No complaints submitted</td></tr>";
        return;
    }

    complaints.forEach((c, i) => {
        table.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${c.fname} ${c.lname}</td>
                <td>${c.branch}</td>
                <td>${c.roll}</td>
                <td>${c.admission}</td>
                <td>${c.complaint}</td>
                <td>${c.date}</td>
            </tr>
        `;
    });
}
