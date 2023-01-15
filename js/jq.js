$(".slick").slick({
  autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
  fade: true,
  speed: 1000,
});

///////ふわっと　jquery ///////

// $(function () {
//   $(window).scroll(function () {
//     $(".fade-in").each(function () {
//       const elemPos = $(this).offset().top;
//       // 位置を取得
//       const scroll = $(window).scrollTop();
//       // スクロールの位置(量)を取得
//       const windowHeight = $(window).height();
//       // 画面の高さを取得
//       if (scroll > elemPos - windowHeight) {
//         $(this).addClass("scroll-in");
//       }
//     });
//   });
//   jQuery(window).scroll();
// });

////// 一番上に戻ってもふわっとがサイドできるように////
// $(function () {
//   $(window).scroll(function () {
//     // フェードアニメーションを呼び出す
//     fadeAnime();
//   });
// });

// function fadeAnime() {
//   $(".fadeUpTrigger").each(function () {
//     let target = $(this).offset().top;
//     let scroll = $(window).scrollTop();
//     let windowHeight = $(window).height();

//     if (scroll > target - windowHeight + windowHeight / 5) {
//       $(this).addClass("fadeUp");
//     } else {
//       $(this).removeClass("fadeUp");
//     }
//   });
// }

//////// fadeinout////////
$(function () {
  $(window).scroll(function () {
    $(".fade-out").each(function () {
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 3) {
        $(this).addClass("fade-in");
      } else {
        $(this).removeClass("fade-in");
      }
    });
  });
});
