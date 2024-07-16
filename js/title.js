var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
          $('[rel="icon"]').attr('href', "https://img-r2.anjiurine.top/q78kg/avatar.webp");
          document.title = '好瞌睡…';
          clearTimeout(titleTime);
     }
     else {
          $('[rel="icon"]').attr('href', "https://img-r2.anjiurine.top/q78kg/avatar.webp");
          document.title = '呃，啊！？ - ' + OriginTitle;
          titleTime = setTimeout(function () {
               document.title = OriginTitle;
          }, 2000);
     }
});
