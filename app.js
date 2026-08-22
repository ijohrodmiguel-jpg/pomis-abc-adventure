(function(){
  const path=location.pathname.split('/').pop()||'index.html';
  const pages=['index.html','pomi-page-2.html','pomi-page-3.html','pomi-page-4.html','pomi-page-5.html','pomi-page-6.html','pomi-page-7.html','pomi-page-8.html','pomi-page-9.html'];
  const idx=Math.max(0,pages.indexOf(path));
  const done=JSON.parse(localStorage.getItem('pomiDone')||'[]');
  window.markPomiDone=function(n){ if(!done.includes(n)){done.push(n);localStorage.setItem('pomiDone',JSON.stringify(done));} };
  window.resetPomi=function(){localStorage.removeItem('pomiDone');location.href='index.html';};
  const nav=document.createElement('div');nav.className='site-nav';
  nav.innerHTML=`<a href="index.html">🏠 Home</a><span class="crumb">Pomi's ABC Adventure</span><span class="page-count">${idx+1} / ${pages.length}</span>`;
  document.body.prepend(nav);
  const progress=document.createElement('div');progress.className='progress-shell';progress.innerHTML=`<div class="progress-bar" style="width:${((idx+1)/pages.length)*100}%"></div>`;document.body.prepend(progress);
})();
