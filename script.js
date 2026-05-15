const accessinfo=document.querySelector('.btn-red');
const accesscities=document.querySelector('.access');

console.log(accesscities);
accessinfo.addEventListener('click',()=>{
   window.scroll({
    top:accesscities.offsetTop,
    behavior: "smooth",
   })
});

// スクロール連動フェードインアニメーション
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.spot, .food').forEach(el => observer.observe(el));
