//
// Using jQuery, 
//
$(function () {
  $(".tablinks").click(function () {
    event.preventDefault();
    // Remove active class from any other active tabs
    $(".tablinks.active").removeClass("active");
    // Add active class to the selected tab
    $(this).addClass("active");

    // Programmatically navigate to the link's href
    const targetUrl = $(this).attr("href");
    window.location.href = targetUrl;
    $(this).addClass("active");
  });
});
