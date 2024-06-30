(function () {
  emailjs.init({
    publicKey: "5TnoC2sRW8fsvwOUi",
    // Do not allow headless browsers
    blockHeadless: true,
    limitRate: {
      // Set the limit rate for the application
      id: "app",
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });
})();

$(document).ready(function () {
  $("#contactForm").on("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    let isValid = true;

    // Validate each field
    $("#contactForm input, #contactForm textarea").each(function () {
      if ($(this).val() === "") {
        $(this).addClass("is-invalid");
        $(this).next(".invalid-feedback").show();
        isValid = false;
      } else {
        $(this).removeClass("is-invalid");
        $(this).next(".invalid-feedback").hide();
      }
    });

    // If form is valid, send email
    if (isValid) {
      const formData = {
        to_name: "Ali",
        from_name: $("#inputFirstName").val() + " " + $("#inputLastName").val(),
        firstName: $("#inputFirstName").val(),
        lastName: $("#inputLastName").val(),
        email: $("#inputEmail").val(),
        message: $("#inputMessage").val(),
      };
      console.log(formData);
      emailjs.send("service_pb94gei", "template_9mf6iu4", formData).then(
        function (response) {
          // Reset the form
          $("#contactForm")[0].reset();
          // Hide all validation messages
          $("#contactForm .is-invalid").removeClass("is-invalid");
          $("#contactForm .invalid-feedback").hide();

          // Show toast notification
          var thankYouToast = new bootstrap.Toast(
            document.getElementById("thankYouToast")
          );
          thankYouToast.show();
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    }
  });
});
