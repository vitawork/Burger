// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devoured").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: { devoured: true }
    }).then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $("#aaa").on("click", function(event) {
    event.preventDefault();
    if (
      $("#newb")
        .val()
        .trim() !== ""
    ) {
      var newB = {
        burger_name: $("#newb")
          .val()
          .trim()
      };
      $("#newb").val("");
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newB
      }).then(function() {
        // Reload the page to get the updated list
        location.reload();
      });
    } else {
      $("#newb").css("border", "solid 3px rgb(231, 93, 93)");
    }
  });
});
