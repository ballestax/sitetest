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

var closeButton = document.querySelector(".close");

// Add a click event listener to the close button to hide the modal
closeButton.addEventListener("click", function() {
  closeModal();
});

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}