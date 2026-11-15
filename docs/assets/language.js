const button=document.querySelector('.lang');
const translated=[...document.querySelectorAll('[data-zh]')];
for(const el of translated)el.dataset.en=el.innerHTML;
const translatedImages=[...document.querySelectorAll('[data-alt-zh]')];
for(const el of translatedImages)el.dataset.altEn=el.alt;
button?.addEventListener('click',()=>{const chinese=document.documentElement.lang!=='zh-CN';document.documentElement.lang=chinese?'zh-CN':'en';for(const el of translated)el.innerHTML=el.dataset[chinese?'zh':'en'];for(const el of translatedImages)el.alt=el.dataset[chinese?'altZh':'altEn'];button.textContent=chinese?'EN':'中文';button.setAttribute('aria-label',chinese?'Switch to English':'Switch to Chinese');});
