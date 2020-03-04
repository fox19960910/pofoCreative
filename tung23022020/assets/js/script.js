window.onload = ()=>{var action = {
    init: function() {
       this.fixedHeader();
       this.clickBars();
       this.slide();
       this.slideBanner();
    },
    fixedHeader:function(){
        let header = document.querySelector('.header');
        let logo = document.querySelector('.header .logo a img')
        let heightOfHeader = header.offsetTop;
        window.addEventListener('scroll',function(){
            if (heightOfHeader < window.pageYOffset){
                header.classList.add('fixed__header')
                logo.src='assets/img/logo@2x.png'
            }else{
                header.classList.remove('fixed__header')
                logo.src='assets/img/logo-white@2x.png'
            }
        })
    },
    clickBars:function(){
        let nav__menu = document.querySelector('.nav__menu');
        let btnBars = document.querySelector('.nav__bars');
        let body = document.querySelector('#body');
        btnBars.addEventListener('click',()=>{
            nav__menu.classList.toggle('active')
            
        });
        
    },
    slide:function(){
        $('#slider-client').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        })
    },
    slideBanner:function(){
        $('#slider-banner').owlCarousel({
            loop:true,
            autoplay:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });
    }
   

}
action.init();
}