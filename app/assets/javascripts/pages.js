$(document).ready(function() {
  // Initialize collapse button
  $(".button-collapse").sideNav();
  $(".collapsible").collapsible();
});

// Show sideNav
$(".button-collapse").sideNav("show");
// Hide sideNav
$(".button-collapse").sideNav("hide");

$(function() {
  // resizable 12-col-grid //
  $("#resizable-s").resizable({
    handles: "s"
  });

  // draggable //
  $(".draggable").draggable({
    containment: "body",
    helper: "clone",
    snap: ".column, .hori-row"
  });

  // droppable //
  $(".droppable").droppable({
    accept: ".draggable",
    drop: function(event, ui) {
      // currentElement information //
      var currentElement = ui.helper;
      // currentElement is a jQuery selected DOM node, and refers to the thing that was just dropped

      // Find the currentElement's:
      // width
      // height
      // top
      // left

      var width = currentElement.width();
      var height = currentElement.height();
      var top = currentElement.css("top");
      var left = currentElement.css("left");
      console.log(
        "width:" +
          width +
          ", height: " +
          height +
          ", top: " +
          top +
          ", left: " +
          left
      );
      // currentElement information end //

      var $clone = ui.helper.clone();
      if (!$clone.is(".inside-droppable")) {
        $(this).append(
          $clone.addClass("inside-droppable").draggable({
            containment: "body",
            // tolerance: "fit",
            // position: "relative",
            snap: ".column, .hori-row"
          })
        );
      }

      // Border on selected element //
      $(".inside-droppable").on({
        click: function() {
          $(this).toggleClass("active");
        },
        mousedown: function() {
          $(this).addClass("selected-border");
        },
        mouseup: function() {
          $(this).removeClass("selected-border");
        }
      });

      // Delete element //
      $(".inside-droppable").on({
        dblclick: function() {
          // SWEET ALERT //
          var self = $(this);
          swal(
            {
              title: "Are you sure?",
              type: "warning",
              showCancelButton: true,
              confirmButtonColor: "#ff5722",
              confirmButtonText: "delete",
              closeOnConfirm: false
            },
            function(isConfirm) {
              if (isConfirm) {
                self.remove();
                swal("Deleted");
                return true;
              } else {
                return false;
              }
            }
          );
        }
      });

      // Grid for Resizable elements -- width & height //
      var width = $(".column-12").width() * 0.005;
      var height = $(".column-12").height() * 0.016;

      // Resize element //
      $clone.resizable({
        handles: "n, e, s, w",
        grid: [width, height]
      });
    }
  });

  // inside-droppable position //
});
