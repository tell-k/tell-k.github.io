(function (w, d) {
    var s, e = d.getElementsByTagName("script")[0],
        a = function (u, i) {
            if (!d.getElementById(i)) {
                s = d.createElement("script");
                s.src = u;
                if (i) {s.id = i;}
                e.parentNode.insertBefore(s, e);
            }
        };
    a("https://apis.google.com/js/plusone.js");
    a("//b.st-hatena.com/js/bookmark_button_wo_al.js");
    a("//platform.twitter.com/widgets.js", "twitter-wjs");
    a("//connect.facebook.net/ja_JP/all.js#xfbml=1", "facebook-jssdk");
})(this, document);

// Sticky Social Box
var stickyTop = $('#Social-box').offset().top;
$(window).scroll(function(){
  var windowTop = $(window).scrollTop();
  if (stickyTop < windowTop) {
    if($('#Social-box').offset().top != 0) {
      $('#Social-box').css({ position: 'fixed', top: 0 });
    }
  } else {
    $('#Social-box').css({ position: 'fixed', top: stickyTop - windowTop });
  }
});
