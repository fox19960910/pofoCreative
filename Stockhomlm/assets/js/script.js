window.onload = ()=>{var action = {
    init: function() {
       this.fixedHeader();
       this.clickBars();
       this.slide();
  
    },
    fixedHeader:function(){
        let header = document.querySelector('.header');
        let logo = document.querySelector('.nav__logo a img');
        console.log(logo.location.src)
        let heightOfHeader = header.offsetTop;
        window.addEventListener('scroll',function(){
            if (heightOfHeader < window.pageYOffset){
                header.classList.add('fixed__header')
                if (logo.location.src=" logo.src='assets/img/aboutus/logo-light.png'"){
                    logo.src='assets/img/aboutus/logo-dark.png'
                }else{
                    logo.src='assets/img/aboutus/logo-light.png'
                }
            }else{
                header.classList.remove('fixed__header')
            }

            
        })
    },
    clickBars:function(){
        let nav__menu = document.querySelector('.nav__mobile');
        let btnBars = document.querySelector('.nav__bar');
        let body = document.querySelector('#body');
        btnBars.addEventListener('click',()=>{
            nav__menu.classList.toggle('active')
            
        });
        
    },
    slide:function(){
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:false,
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