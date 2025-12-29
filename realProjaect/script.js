  AOS.init({
    duration:850,
    offset: 120,
  });
const box = document.querySelector('.user-box');
const score = document.getElementById('score');

score.style.display = 'none'; // مخفی اولیه

box.addEventListener('click', (e) => {
  e.stopPropagation(); // جلوی انتشار کلیک به body
  if(score.style.display === 'none'){
    score.style.display = 'block'; // باز شدن
  } else {
    score.style.display = 'none'; // بسته شدن
  }
});

document.body.addEventListener('click', () => {
  score.style.display = 'none'; // با کلیک بیرون باکس، بسته می‌شود
});

const search = document.querySelector('.search-box');
const Serar = document.querySelector('.boxSerar');

Serar.style.display = 'none';

search.addEventListener('click', () =>{
  if(Serar.style.display === 'none')
  {
    Serar.style.display = 'block'
  } else{
    Serar.style.display = 'none'
  }
});
