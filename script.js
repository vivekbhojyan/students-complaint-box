/* ================= MENU ================= */


function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    if (!menu) return;
    menu.style.width = (menu.style.width === "300px") ? "0" : "300px";
}

/* ================= CONTACT FORM ================= */

function validateContactForm() {

    let valid = true;

    document.querySelectorAll(".error").forEach(e => e.innerText = "");

    if (!cname.value.trim()) {
        cnameErr.innerText = "Name required";
        valid = false;
    }

    if (!cemail.value.trim()) {
        cemailErr.innerText = "Email required";
        valid = false;
    }

    if (!cmessage.value.trim()) {
        cmessageErr.innerText = "Message required";
        valid = false;
    }

    return valid;
}

/* ================= LOGIN ================= */

function validateLoginForm() {

    const id   = loginAdmission.value.trim();
    const pass = loginPassword.value.trim();

    loginAdmissionErr.innerText = "";
    loginPasswordErr.innerText  = "";

    if (!id)   loginAdmissionErr.innerText = "ID required";
    if (!pass) loginPasswordErr.innerText  = "Password required";

    if (!id || !pass) return false;

    if (id === "1" && pass === "2") {
        window.location.href = "adm.html";
        return false;
    }

    if (id === "2400320101284" && pass === "vivek")
        window.location.href = "index1.html";

    else if (id === "2400320101304" && pass === "yashi")
        window.location.href = "index1.html";

    else if (id === "2400320101273" && pass === "vishal")
        window.location.href = "index1.html";

    else if (id === "2400320101285" && pass === "vivek")
        window.location.href = "index1.html";

    else if (
        id === "2400320101284" ||
        id === "2400320101304" ||
        id === "2400320101273" ||
        id === "2400320101285" ||
        id === "1"
    ) {
        loginPasswordErr.innerText = "Wrong Password";
    }
    else {
        loginAdmissionErr.innerText = "ID not found!";
    }

    return false;
}

/* ================= ADMIN LOAD ================= */

async function loadComplaints() {

    const table = document.getElementById("complaintTable");
    if (!table) return;

    const { data, error } = await supabase
        .from("complaints")
        .select("*");

    if (error) {
        console.log(error);
        return;
    }

    if (!data || data.length === 0) {
        table.innerHTML = "<tr><td colspan='8'>No complaints</td></tr>";
        return;
    }

    data.forEach((c, i) => {
        table.innerHTML += `
<tr>
<td>${i + 1}</td>
<td>${c.fname} ${c.lname}</td>
<td>${c.branch}</td>
<td>${c.roll}</td>
<td>${c.admission}</td>
<td>${c.category || "-"}</td>
<td>${c.complaint}</td>
<td>${c.date}</td>
<td>${c.progress}</td>

</tr>`;
    });
}