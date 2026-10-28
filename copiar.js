(function(){
  var icoCopy = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/></svg>';
  var icoOk = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  function copiarTexto(t){
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(t);
    return new Promise(function(ok, fail){
      var ta = document.createElement('textarea');
      ta.value = t; ta.setAttribute('readonly',''); ta.style.position='fixed'; ta.style.opacity='0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy') ? ok() : fail(); } catch(e){ fail(e); }
      document.body.removeChild(ta);
    });
  }
  document.querySelectorAll('.copiar').forEach(function(b){
    b.innerHTML = icoCopy + 'Copiar';
    b.setAttribute('aria-label', 'Copiar ' + b.dataset.copy);
    b.addEventListener('click', function(){
      copiarTexto(b.dataset.copy).then(function(){
        b.classList.add('ok'); b.innerHTML = icoOk + 'Copiado';
        setTimeout(function(){ b.classList.remove('ok'); b.innerHTML = icoCopy + 'Copiar'; }, 1800);
      }).catch(function(){});
    });
  });
})();
