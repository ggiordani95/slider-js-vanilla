// Selecionando elementos pais

// Carousel track
const track = document.querySelector('.carousel__track');

// Botão Esquerda
const prevButton = document.querySelector('.carousel__button--left');

// Botão Direita 
const nextButton = document.querySelector('.carousel__button--right');

// Barra de navegação para filhos
const dotsNav = document.querySelector('.carousel__nav');

// Inserindo elementos filhos em array

// Slide track children 
const slides = Array.from(track.children);

// Nav track children
const dots = Array.from(dotsNav.children);

// Cálculo de largura slide
const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (( slide, index) => {
        slide.style.left = slideWidth * index + 'px';
});

slides.forEach(setSlidePosition);

// Movendo o slide

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
const updateDots = (currentDot, targetDot ) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide'); 
}
// Adicionando evento aos botões
prevButton.addEventListener('click' , e  => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
})

nextButton.addEventListener('click' , e  => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const slidesLength = slides.length;
    if(currentSlide === slidesLength ){
        console.log('hi');
    }else{
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    }
    console.log(slidesLength);
   
})

// Quando eu clico nos botoes de navegação

dotsNav.addEventListener('click', e =>{
    
    const targetDot = e.target.closest('button');

    if(!targetDot) return;
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide =  slides[targetIndex];
    
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);


})

