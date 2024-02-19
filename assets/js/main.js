/*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  var $window = $(window),
    $body = $("body"),
    $sidebar = $("#sidebar");

  // Breakpoints.
  breakpoints({
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: [null, "480px"],
  });

  // Hack: Enable IE flexbox workarounds.
  if (browser.name == "ie") $body.addClass("is-ie");

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Forms.

  // Hack: Activate non-input submits.
  $("form").on("click", ".submit", function (event) {
    // Stop propagation, default.
    event.stopPropagation();
    event.preventDefault();

    // Submit form.
    $(this).parents("form").submit();
  });

  // Sidebar.
  if ($sidebar.length > 0) {
    var $sidebar_a = $sidebar.find("a");

    $sidebar_a
      .addClass("scrolly")
      .on("click", function () {
        var $this = $(this);

        // External link? Bail.
        if ($this.attr("href").charAt(0) != "#") return;

        // Deactivate all links.
        $sidebar_a.removeClass("active");

        // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
        $this.addClass("active").addClass("active-locked");
      })
      .each(function () {
        var $this = $(this),
          id = $this.attr("href"),
          $section = $(id);

        // No section for this link? Bail.
        if ($section.length < 1) return;

        // Scrollex.
        $section.scrollex({
          mode: "middle",
          top: "-20vh",
          bottom: "-20vh",
          initialize: function () {
            // Deactivate section.
            $section.addClass("inactive");
          },
          enter: function () {
            // Activate section.
            $section.removeClass("inactive");

            // No locked links? Deactivate all links and activate this section's one.
            if ($sidebar_a.filter(".active-locked").length == 0) {
              $sidebar_a.removeClass("active");
              $this.addClass("active");
            }

            // Otherwise, if this section's link is the one that's locked, unlock it.
            else if ($this.hasClass("active-locked"))
              $this.removeClass("active-locked");
          },
        });
      });
  }

  // Scrolly.
  $(".scrolly").scrolly({
    speed: 1000,
    offset: function () {
      // If <=large, >small, and sidebar is present, use its height as the offset.
      if (
        breakpoints.active("<=large") &&
        !breakpoints.active("<=small") &&
        $sidebar.length > 0
      )
        return $sidebar.height();

      return 0;
    },
  });

  // Spotlights.
  $(".spotlights > section")
    .scrollex({
      mode: "middle",
      top: "-10vh",
      bottom: "-10vh",
      initialize: function () {
        // Deactivate section.
        $(this).addClass("inactive");
      },
      enter: function () {
        // Activate section.
        $(this).removeClass("inactive");
      },
    })
    .each(function () {
      var $this = $(this),
        $image = $this.find(".image"),
        $img = $image.find("img"),
        x;

      // Assign image.
      $image.css("background-image", "url(" + $img.attr("src") + ")");

      // Set background position.
      if ((x = $img.data("position"))) $image.css("background-position", x);

      // Hide <img>.
      $img.hide();
    });

  // Features.
  $(".features").scrollex({
    mode: "middle",
    top: "-20vh",
    bottom: "-20vh",
    initialize: function () {
      // Deactivate section.
      $(this).addClass("inactive");
    },
    enter: function () {
      // Activate section.
      $(this).removeClass("inactive");
      setTimeout(() => {
        $(this).addClass("active");
      }, 3000);
    },
  });

  $(document).ready(function () {
    $("#intro-dropdowns-1").click(function () {
      $("#intro-dropdowns-1-content").toggleClass("nonexpanded");
      $("#intro-dropdowns-2-content").addClass("nonexpanded");
      $("#intro-dropdowns-3-content").addClass("nonexpanded");
      $("#intro-dropdowns-4-content").addClass("nonexpanded");
      $("#intro-dropdowns-5-content").addClass("nonexpanded");
      $("#intro-dropdowns-6-content").addClass("nonexpanded");
      $("#pointersForDrop1").toggleClass("expanded");
      $("#pointersForDrop2").removeClass("expanded");
      $("#pointersForDrop3").removeClass("expanded");
      $("#pointersForDrop4").removeClass("expanded");
      $("#pointersForDrop5").removeClass("expanded");
      $("#pointersForDrop6").removeClass("expanded");
    });

    $("#intro-dropdowns-2").click(function () {
      $("#intro-dropdowns-2-content").toggleClass("nonexpanded");
      $("#intro-dropdowns-1-content").addClass("nonexpanded");
      $("#intro-dropdowns-3-content").addClass("nonexpanded");
      $("#intro-dropdowns-4-content").addClass("nonexpanded");
      $("#intro-dropdowns-5-content").addClass("nonexpanded");
      $("#intro-dropdowns-6-content").addClass("nonexpanded");
      $("#pointersForDrop2").toggleClass("expanded");
      $("#pointersForDrop1").removeClass("expanded");
      $("#pointersForDrop3").removeClass("expanded");
      $("#pointersForDrop4").removeClass("expanded");
      $("#pointersForDrop5").removeClass("expanded");
      $("#pointersForDrop6").removeClass("expanded");
    });

    $("#intro-dropdowns-3").click(function () {
      $("#intro-dropdowns-3-content").toggleClass("nonexpanded");
      $("#intro-dropdowns-2-content").addClass("nonexpanded");
      $("#intro-dropdowns-1-content").addClass("nonexpanded");
      $("#intro-dropdowns-4-content").addClass("nonexpanded");
      $("#intro-dropdowns-5-content").addClass("nonexpanded");
      $("#intro-dropdowns-6-content").addClass("nonexpanded");
      $("#pointersForDrop3").toggleClass("expanded");
      $("#pointersForDrop2").removeClass("expanded");
      $("#pointersForDrop1").removeClass("expanded");
      $("#pointersForDrop4").removeClass("expanded");
      $("#pointersForDrop5").removeClass("expanded");
      $("#pointersForDrop6").removeClass("expanded");
    });

    $("#intro-dropdowns-4").click(function () {
      $("#intro-dropdowns-4-content").toggleClass("nonexpanded");
      $("#intro-dropdowns-2-content").addClass("nonexpanded");
      $("#intro-dropdowns-3-content").addClass("nonexpanded");
      $("#intro-dropdowns-1-content").addClass("nonexpanded");
      $("#intro-dropdowns-5-content").addClass("nonexpanded");
      $("#intro-dropdowns-6-content").addClass("nonexpanded");
      $("#pointersForDrop4").toggleClass("expanded");
      $("#pointersForDrop2").removeClass("expanded");
      $("#pointersForDrop3").removeClass("expanded");
      $("#pointersForDrop1").removeClass("expanded");
      $("#pointersForDrop5").removeClass("expanded");
      $("#pointersForDrop6").removeClass("expanded");
    });

    $("#intro-dropdowns-5").click(function () {
      $("#intro-dropdowns-5-content").toggleClass("nonexpanded");
      $("#intro-dropdowns-2-content").addClass("nonexpanded");
      $("#intro-dropdowns-3-content").addClass("nonexpanded");
      $("#intro-dropdowns-4-content").addClass("nonexpanded");
      $("#intro-dropdowns-1-content").addClass("nonexpanded");
      $("#intro-dropdowns-6-content").addClass("nonexpanded");

      $("#pointersForDrop5").toggleClass("expanded");
      $("#pointersForDrop2").removeClass("expanded");
      $("#pointersForDrop3").removeClass("expanded");
      $("#pointersForDrop4").removeClass("expanded");
      $("#pointersForDrop1").removeClass("expanded");
      $("#pointersForDrop6").removeClass("expanded");
    });

    $("#intro-dropdowns-6").click(function () {
      $("#intro-dropdowns-6-content").toggleClass("nonexpanded");
      $("#intro-dropdowns-2-content").addClass("nonexpanded");
      $("#intro-dropdowns-3-content").addClass("nonexpanded");
      $("#intro-dropdowns-4-content").addClass("nonexpanded");
      $("#intro-dropdowns-5-content").addClass("nonexpanded");
      $("#intro-dropdowns-1-content").addClass("nonexpanded");

      $("#pointersForDrop6").toggleClass("expanded");
      $("#pointersForDrop2").removeClass("expanded");
      $("#pointersForDrop3").removeClass("expanded");
      $("#pointersForDrop4").removeClass("expanded");
      $("#pointersForDrop5").removeClass("expanded");
      $("#pointersForDrop1").removeClass("expanded");
    });
  });
})(jQuery);
