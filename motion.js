// Autoplaying videos respect "reduce motion": pause them and show controls instead.
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) return;
  document.querySelectorAll('video[autoplay]').forEach(function (v) {
    v.removeAttribute('autoplay');
    v.pause();
    v.controls = true;
  });
})();
