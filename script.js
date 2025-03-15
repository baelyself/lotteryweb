// ฟังก์ชันตรวจสอบผลรางวัล
function checkLottery() {
    const wish = document.getElementById("wishInput").value;
    const userNumber = document.getElementById("userNumber").value;
    const resultText = document.getElementById("result");
    const retryButton = document.getElementById("retryButton");

    if (userNumber.length !== 6) {
        resultText.textContent = language === "th" ? "กรุณากรอกเลข 6 หลัก" : "Please enter a 6-digit number";
        return;
    }

    resultText.textContent = language === "th"
        ? `น่าเสียดาย... เลขที่คุณกรอกไม่ตรงกับรางวัล ลองใหม่อีกครั้งไหม โอกาสหน้าอาจจะเป็นของคุณ`
        : `Too bad... Your number didn't match. Try again next time!`;

    retryButton.style.display = "block"; // แสดงปุ่มลองใหม่
}

// ฟังก์ชันเปลี่ยนภาษา
let language = "th";
function changeLanguage() {
    language = document.getElementById("language").value;
    document.getElementById("title").textContent = language === "th"
        ? "ถ้าคุณถูกหวยรางวัลใหญ่ จะเอาเงินไปทำอะไร?"
        : "If you win the big lottery, what will you do with the money?";
    document.getElementById("wishInput").placeholder = language === "th"
        ? "สิ่งที่อยากได้"
        : "What do you want?";
    document.getElementById("userNumber").placeholder = language === "th"
        ? "กรอกเลข 6 หลัก"
        : "Enter 6-digit number";
    document.getElementById("checkButton").textContent = language === "th"
        ? "ตรวจสอบผลรางวัล"
        : "Check Result";
    document.getElementById("retryButton").textContent = language === "th"
        ? "ลองใหม่อีกครั้ง"
        : "Try Again";
}

// ฟังก์ชันรีเซ็ตฟอร์ม
function resetForm() {
    document.getElementById("wishInput").value = "";
    document.getElementById("userNumber").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("retryButton").style.display = "none"; // ซ่อนปุ่มลองใหม่
}
