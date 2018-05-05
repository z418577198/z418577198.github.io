
$(function () {
    $(window).scroll(function () {
        $('video').each(function () {
          var viewTop =  $(this).offset().top - $(window).scrollTop();
          if (viewTop < 100) {
              $(this).get(0).play()
          }
        })
    })
})