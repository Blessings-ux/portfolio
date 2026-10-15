// Fridah Njoka portfolio scripts
(function(){
  var root=document.documentElement;
  window.addEventListener('pointermove',function(e){root.style.setProperty('--mx',e.clientX+'px');root.style.setProperty('--my',e.clientY+'px')},{passive:true});
  var links=[].slice.call(document.querySelectorAll('nav a'));
  var secs=links.map(function(a){return document.querySelector(a.getAttribute('href'))});
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var i=secs.indexOf(e.target);links.forEach(function(l,j){l.classList.toggle('on',i===j)})}})},{rootMargin:'-40% 0px -55% 0px'});
    secs.forEach(function(s){s&&io.observe(s)});
  }
  document.getElementById('msg').addEventListener('submit',function(ev){
    ev.preventDefault();
    var f=ev.target,n=f.name.value,m=f.message.value;
    var body=m+'\n\nFrom: '+n+' ('+f.email.value+')';
    location.href='mailto:njokafridah303@gmail.com?subject='+encodeURIComponent('Portfolio message from '+n)+'&body='+encodeURIComponent(body);
  });
})();
