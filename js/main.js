document.querySelector('.burgir').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__navbar').classList.toggle('active');
    document.querySelector('body').classList.toggle('hidden')
});