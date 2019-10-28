(() => {
    const burger = document.querySelector('.burger'),
          nav = document.querySelector('.navigation'),
          jump = document.querySelector('.jump'),
          main = document.querySelector('#main-doc');

    burger.addEventListener('click', () => {
        nav.classList.toggle('navigation-active');
        burger.classList.toggle('burger-active');        
    });

    nav.addEventListener('click', () => {
        nav.classList.remove('navigation-active');
            if (nav.className === 'navigation') {
                burger.classList.toggle('burger-active');
            };
    });

    main.addEventListener('click', () => {
        nav.classList.remove('navigation-active');
        burger.classList.remove('burger-active');
    });

    document.addEventListener('scroll', () => {
        var scroll_position = this.scrollY;
            if(scroll_position >= 400){
                jump.classList.add('jump-active');
            }else if(scroll_position < 400){
                jump.classList.remove('jump-active');
            };        
    });

    jump.addEventListener('click', () => {
        window.scrollTo(0, 0);
        jump.classList.add('jump-click');
        setTimeout(()=>{
            jump.classList.remove('jump-click');
        }, 1000)
    });

        
})();
