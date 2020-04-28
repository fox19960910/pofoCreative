var action = {
    init:function() {
        // this.preload();
        this.btnBar();
        // this.signForm();
        this.fixedMenu();
        // this.language();
        // this.galleryShow();
    },
    preload:function() {
        let preload = document.querySelector('.preload');
        function load(){
            preload.classList.add('preload__finished');
        }
        setTimeout(load,2000);
    },
    fixedMenu:function() {
        let headMenu = document.querySelector('.header');
        let logo = document.querySelector('.logo a img')
        let sticky = headMenu.offsetTop;
        console.log(logo.src)
        window.addEventListener('scroll',()=>{
            if(window.pageYOffset > sticky){
                headMenu.classList.add('active')
                if(logo.src="../img/logo-white.png"){
                    logo.src="../img/logo-dark.png"
                }else{
                    logo.src="../img/logo-white.png"
                }
            }
            else{
                headMenu.classList.remove('active')
                if(logo.src="../img/logo-white.png"){
                    logo.src="../img/logo-dark.png"
                }else{
                    logo.src="../img/logo-white.png"
                }
            }
        })
    },
    btnBar:function() {
        let bar = document.querySelector('.nav-bar')
        let close = document.querySelector('.nav-responsive__close')
        let overlay = document.querySelector('.nav-overlay')
        let navResponsive = document.querySelector('.nav-responsive')
        bar.addEventListener('click',function(){
            navResponsive.classList.add('active')
            overlay.classList.add('active')
        })
        close.addEventListener('click',function(){
            navResponsive.classList.remove('active')
            overlay.classList.remove('active')
        })
        overlay.addEventListener('click',function(){
            navResponsive.classList.remove('active')
            overlay.classList.remove('active')
        })

    },
}
action.init();