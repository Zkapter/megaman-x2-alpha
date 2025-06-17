
const translations = {
    de: {
        title: "Anonyme Texterstellung",
        input_label: "Gib deinen Text ein:",
        submit_button: "Absenden",
        output_title: "Anonymisierter Text",
        user_count: "Anzahl der Benutzer:"
    },
    en: {
        title: "Anonymous Text Creation",
        input_label: "Enter your text:",
        submit_button: "Submit",
        output_title: "Anonymized Text",
        user_count: "User count:"
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[lang][key];
    });
    localStorage.setItem("lang", lang);
}

document.getElementById("dataForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const input = document.getElementById("userInput").value;
    const output = input.replace(/\b(ich|mein|mich|mir)\b/gi, "[REDAKTIERT]");
    document.getElementById("outputText").textContent = output;
    updateUserCounter();
});

function updateUserCounter() {
    let count = localStorage.getItem("userCount") || 0;
    count++;
    localStorage.setItem("userCount", count);
    document.getElementById("userCounter").textContent = count;
}

window.onload = () => {
    const lang = localStorage.getItem("lang") || "de";
    setLanguage(lang);
    document.getElementById("userCounter").textContent = localStorage.getItem("userCount") || 0;
};
