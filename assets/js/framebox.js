// Generated by CoffeeScript 1.6.2
(function() {
  $(document).ready(function() {
    $('#myCarousel').carousel();
    $('a.galerie').on('click', function(e) {
      $('#login-to-gallery').modal('show');
      return false;
    });
    $('#galery-go-to').on('click', function(e) {
      var identifiant, password, url;

      url = "framebox.net/";
      identifiant = $('#galery-identifiant').val();
      password = $('#galery-password').val();
      if (identifiant !== "" && password !== "") {
        return window.location.href = "http://" + identifiant + "." + url + "?pass=" + password;
      }
    });
    $('a.youtube').on('click', function(e) {
      $("#youtube-video").modal('show');
      return false;
    });
    $('a.youtube2').on('click', function(e) {
      $("#youtube-video2").modal('show');
      return false;
    });
    $('a.youtube3').on('click', function(e) {
      $("#youtube-video3").modal('show');
      return false;
    });
    $('a.youtube4').on('click', function(e) {
      $("#youtube-video4").modal('show');
      return false;
    });
    return $('#myTab a').on('click', function(e) {
      if ($(this).hasClass("no-js"))
        return;
      e.preventDefault();
      return $(this).tab('show');
    });
  });

}).call(this);
