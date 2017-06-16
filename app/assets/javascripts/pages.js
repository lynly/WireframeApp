$(document).ready(function() {
  // Initialize collapse button
  $(".button-collapse").sideNav();
  $(".collapsible").collapsible();
});

// Show sideNav
$(".button-collapse").sideNav("show");
// Hide sideNav
$(".button-collapse").sideNav("hide");

var elementType = null;

$(function() {
  // resizable 12-col-grid //
  $("#resizable-s").resizable({
    handles: "s"
  });

  // draggable //
  $(".draggable").draggable({
    containment: "body",
    helper: function(event, ui) {
      if ($(event.currentTarget).data("id")) {
        return $(this);
      } else {
        var currentID = $(event.currentTarget).attr("id");
        elementType = currentID;
        var $clone = $(this).clone();
        return $clone;
      }
    },
    snap: ".column, .hori-row"
  });

  // droppable //
  $(".droppable").droppable({
    accept: ".draggable",
    drop: function(event, ui) {
      // currentElement information //
      var currentElement = ui.helper;
      // currentElement is a jQuery selected DOM node, and refers to the thing that was just dropped
      var width = currentElement.width();
      var height = currentElement.height();
      var top = currentElement.css("top");
      var left = currentElement.css("left");

      console.log(ui.helper.attr("data-id"));

      // CREATE Element in database
      // Only make the AJAX request, if the element that is being dragged does not have an ID field
      if (!ui.helper.attr("data-id")) {
        $.ajax({
          url: window.location.pathname + "/add_element",
          method: "POST",
          dataType: "JSON",
          data: {
            top: top,
            left: left,
            width: width,
            height: height,
            element_type: elementType
          },
          success: function(data) {
            var elementId = data.id;
            ui.helper.off();
            ui.helper.attr("data-id", data.id);
            console.log(
              "element_id: " +
                elementId +
                ", width: " +
                width +
                ", height: " +
                height +
                ", top: " +
                top +
                ", left: " +
                left
            );

            var $clone = ui.helper.clone();
            if (!$clone.is(".inside-droppable")) {
              $("#grid").append(
                $clone.addClass("inside-droppable").draggable({
                  containment: "body",
                  tolerance: "fit",
                  position: "relative",
                  snap: ".column, .hori-row"
                })
              );
              $clone.data("type", data.element_type);
              console.log($clone.data("type"));
            }

            $clone.attr("id", data);

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
            var widthGrid = $(".column-12").width() * 0.005;
            var heightGrid = $(".column-12").height() * 0.016;

            // Resize element //
            $clone.resizable({
              handles: "n, e, s, w",
              grid: [widthGrid, heightGrid],
              stop: function() {
                var id = $(this).attr("data-id");
                $.ajax({
                  url: "/elements/" + id + "/update",
                  method: "PUT",
                  dataType: "JSON",
                  data: {
                    top: $(this).css("top"),
                    left: $(this).css("left"),
                    width: $(this).css("width"),
                    height: $(this).css("height")
                  }
                });
              }
            });
          }
        });
      } else {
        // THIS IS THE TIME TO UPDATE AN EXISTING ELEMENT!
        var id = ui.helper.attr("data-id");
        // console.log(ui.helper);
        $.ajax({
          url: "/elements/" + id + "/update",
          method: "PUT",
          dataType: "JSON",
          data: {
            top: ui.helper.css("top"),
            left: ui.helper.css("left"),
            width: ui.helper.css("width"),
            height: ui.helper.css("height")
          }
        });
        // Send a request to here:   put '/elements/:id/update' => 'elements#update'
        // With all params
        // debugger;
        console.log("DRAGGING AN EXISTING ELEMENT!");
      }
    }
  });

  // function end //
});
