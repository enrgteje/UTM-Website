function togglePDF(divName) {
    div = document.getElementById(divName);
    if (div.classList.contains("hidden")) {
        div.classList.remove("hidden");
    } else {
        div.classList.add("hidden")
    }
}