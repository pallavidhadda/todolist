$(document).ready(function () {
  $(".txtbx").on("keyup", function (e) {
    if (e.keyCode == 13 && $(".txtbx").val() != "") {
      var task = $("<div class='task'></div>").text($(".txtbx").val());
    }
    var del = $('<i class="bx bx-trash"></i>').click(function () {
      var p = $(this).parent();
      p.fadeOut(function () {
        p.remove();
      });
    });
    var check = $('<i class="bx bx-check-circle"></i>').click(function () {
      var p = $(this).parent();
      p.fadeOut(function () {
        $(".comp").append(p);
        p.fadeIn();
      });
      $(this).remove();
    });
    task.append(del, check);
    $(".notcomp").append(task);
    $(".txtbx").val("");
  });
});
