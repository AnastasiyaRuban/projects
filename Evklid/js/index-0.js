document.addEventListener('DOMContentLoaded',function(){document.querySelectorAll('.tabs-btn').forEach(function(tabsBtn){tabsBtn.addEventListener('click',function(event){const path=event.currentTarget.dataset.path
  document.querySelectorAll('.tab-content').forEach(function(tabContent){tabContent.classList.remove('tab-content-active')})
  document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')})})});const burger=document.querySelector('.burger');if(burger){const menu=document.querySelector('.header__nav');burger.addEventListener('click',function(e){e.currentTarget.classList.toggle('burger-active');menu.classList.toggle('header__nav-active')})}
  const swiper=new Swiper('.swiper',{loop:!0,pagination:{el:'.swiper-pagination',clickable:!0,},});$(function(){$("#accordion").accordion({collapsible:!0,heightStyle:'content',active:!1,header:'.accordion-header'})});lazyload()