const button=document.querySelector('.lang');
const translated=[...document.querySelectorAll('[data-zh]')];
for(const el of translated)el.dataset.en=el.innerHTML;
button?.addEventListener('click',()=>{const chinese=document.documentElement.lang!=='zh-CN';document.documentElement.lang=chinese?'zh-CN':'en';for(const el of translated)el.innerHTML=el.dataset[chinese?'zh':'en'];button.textContent=chinese?'EN':'中文';button.setAttribute('aria-label',chinese?'Switch to English':'Switch to Chinese');});
