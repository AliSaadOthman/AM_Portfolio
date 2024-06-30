$(document).ready(function () {
  $("#previewModal").on("show.bs.modal", function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var websiteUrl = button.data("website-url"); // Extract URL from data attribute

    // Update the iframe src with the URL
    $("#previewIframe").attr("src", websiteUrl);
  });

  $("#previewModal").on("hidden.bs.modal", function () {
    // Clear the iframe src when the modal is hidden
    $("#previewIframe").attr("src", "");
  });
});
