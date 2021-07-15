document.querySelector('.burgir').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__navbar').classList.toggle('active');
    document.querySelector('body').classList.toggle('hidden')
});

const headerLink = document.querySelectorAll('.header__navbar li a');
for(let i = 0; i < headerLink.length; i++) {
    headerLink[i].addEventListener('click', function() {
        document.querySelector('.burgir').classList.remove('active');
        document.querySelector('.header__navbar').classList.remove('active');
        document.querySelector('body').classList.remove('hidden')
    });
};

$(function(){
    $('.header__navbar li a').click(function(){
         var target = $(this).attr('href');
         $('html, body').animate({scrollTop: $(target).offset().top}, 800);
         return false; 
         
    }); 
 });