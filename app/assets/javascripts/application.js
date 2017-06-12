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
    // grid: [25, 22.677165354],
    containment: "document",
    helper: "clone"
    // revert: "invalid"
  });

  // droppable //
  $(".droppable").droppable({
    accept: ".draggable",
    drop: function(event, ui) {
      var $clone = ui.helper.clone();
      if (!$clone.is(".inside-droppable")) {
        $(this).append(
          $clone.addClass("inside-droppable").draggable({
            containment: "document",
            tolerance: "fit",
            position: "relaitve"
          })
        );
      }
    }
  });
});
