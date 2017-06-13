// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require materialize
//= require_tree .

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
    containment: "window",
    helper: "clone",
    snap: ".column, .hori-row"
  });

  // droppable //
  $(".droppable").droppable({
    accept: ".draggable",
    drop: function(event, ui) {
      var $clone = ui.helper.clone();
      if (!$clone.is(".inside-droppable")) {
        $(this).append(
          $clone.addClass("inside-droppable").draggable({
            containment: "window",
            tolerance: "fit",
            position: "relaitve",
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
          $(this).addClass("selected");
        },
        mouseup: function() {
          $(this).removeClass("selected");
        }
      });

      // Delete element //
      $(".inside-droppable").on({
        dblclick: function() {
          if (confirm("Delete this element?") === true) {
            $(this).remove();
          }
        }
      });

      $clone.resizable({
        // animate: "true",
        // ghost: "true",
        handles: "n, e, s, w",
        snap: ".column, .hori-row"
      });
    }
  });
});
