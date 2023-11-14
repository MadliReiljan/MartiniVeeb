// Function to open the modal
function openModal(imageSrc, imageCaption) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modalImage');
    var captionText = document.getElementById('caption');

    modal.style.display = 'block';
    modalImg.src = imageSrc;
    captionText.innerHTML = imageCaption;
}

// Function to close the modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
