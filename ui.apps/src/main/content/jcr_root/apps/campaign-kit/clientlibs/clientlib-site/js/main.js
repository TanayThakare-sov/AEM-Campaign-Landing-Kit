(function(){
  document.querySelectorAll('.countdown').forEach(function(el){
    var end=new Date(el.dataset.end).getTime(),out=el.querySelector('[data-role=time]');
    function tick(){var s=Math.max(0,Math.floor((end-Date.now())/1000));
      out.textContent=Math.floor(s/86400)+'d '+Math.floor(s%86400/3600)+'h '+Math.floor(s%3600/60)+'m '+s%60+'s';}
    tick();setInterval(tick,1000);
  });
  document.addEventListener('click',function(e){var t=e.target.closest('[data-track]');
    if(t)console.log('track',t.dataset.track);});
})();
