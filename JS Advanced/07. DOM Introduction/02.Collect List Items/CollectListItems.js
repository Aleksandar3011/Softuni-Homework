function extractText() {
    const ref = document.getElementById(`items`);
    let area = document.getElementById(`result`);
    area.value = ref.textContent
}