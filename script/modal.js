root.addEventListener("click", function(event) {
    const clickedImage = event.target.closest(".container-card");
    if (clickedImage) {
      openModal(clickedImage.src);
    }
  });
  
  // Open the modal with the clicked image
function openModal(imageSrc) {
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
  
    modal.style.display = "block";
    modalImage.src = imageSrc;
}