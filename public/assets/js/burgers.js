// Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {
//   $(".change-sleep").on("click", function(event) {
//     var id = $(this).data("id");
//     var newSleep = $(this).data("newsleep");

//     var newSleepState = {
//       sleepy: newSleep
//     };

//     // Send the PUT request.
//     $.ajax("/api/burgers/" + id, {
//       type: "PUT",
//       data: newSleepState
//     }).then(
//       function() {
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

  $("#button-addon2").on("click", function(event) {
    event.preventDefault();
console.log("test");
    var newB = {
      burger_name: $("#newb").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newB
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
