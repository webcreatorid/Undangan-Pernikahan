document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("openInvitation");

    if (openButton) {
        openButton.addEventListener("click", function () {
            alert("Undangan berhasil dibuka!");
        });
    }
});
