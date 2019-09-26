// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devoured").on("click", function(event) {
    event.preventDefault();
    $("#newb").css("background-color", "#FFFFFF");
    $("#newb").attr("placeholder", "Add a new burger");
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

  $("#newBB").on("click", function(event) {
    event.preventDefault();
    if (
      $("#newb")
        .val()
        .trim() !== ""
    ) {
      $.get(
        "/api/burger/" +
          $("#newb")
            .val()
            .trim(),
        function(data) {
          if (data.length === 0) {
            $("#newb").css("background-color", "#FFFFFF");
            $("#newb").attr("placeholder", "Add a new burger");
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
            $("#newb").val("");
            $("#newb").css("background-color", " rgba(194, 125, 125, 0.842)");
            $("#newb").attr("placeholder", "Allready Exist");
          }
        }
      );
    } else {
      $("#newb").css("background-color", " rgba(194, 125, 125, 0.842)");
      $("#newb").attr("placeholder", "Please type a new burger");
    }
  });
});
