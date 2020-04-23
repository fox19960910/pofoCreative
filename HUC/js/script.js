var action = {
    init:function() {
        this.preload();
        this.btnBar();
        this.signForm();
        // this.slideShow();
        // this.sectionGallery();
        this.galleryShow();
    },
    preload:function() {
        let preload = document.querySelector('.preload');
        function load(){
            preload.classList.add('preload__finished');
        }
        setTimeout(load,2000);
    },
    btnBar:function() {
        let bar = document.querySelector('.nav-bar')
        console.log(bar)
        let navResponsive = document.querySelector('.nav-responsive')
        bar.addEventListener('click',function(){
            navResponsive.classList.toggle('active')
        })

    },
    signForm:function() {
        let overlay = document.querySelector('.overlay')
        let signForm = document.querySelector('.sign-in')
        let topSignIn = document.querySelector('.top-sign-in')
        let close = document.querySelector('.sign-in__close')
        console.log(overlay)
        topSignIn.addEventListener('click',(e)=>{
            e.preventDefault();
            console.log(signForm)
            signForm.classList.add('active');
            overlay.classList.add('active');
        })
        overlay.addEventListener('click',()=>{
            signForm.classList.remove('active');
            overlay.classList.remove('active');
        })
        close.addEventListener('click',()=>{
            signForm.classList.remove('active');
            overlay.classList.remove('active');
        })
    },
    slideShow:function() {
       let prev = document.querySelector('.prev-btn')
       let next = document.querySelector('.next-btn')
       let slideItems = document.querySelectorAll('.slide-item') 
       let index = 1;
       let size = slideItems[0].offsetWidth
       console.log(slideItems)
    //    function slide() {
    //         if(index == slideItems.length){
    //             index = 0;
    //         }
    //         for (let i = 0; i < slideItems.length; i++){
    //             slideItems[i].classList.remove('active')
    //         }
    //         slideItems[index].classList.add('active')
    //         index++;
    //         setTimeout(slide,5000);
    //    }
    //    window.onload = slide()
        prev.addEventListener('click', function() {
            index--;
            if(index < 0){
                index = slideItems.length -1;
            }
            for (let i=0; i < slideItems.length; i++ ){
                slideItems[i].style.transform = 'translateX(-'+ size*index + 'px)';
            }
            console.log('index --',index)
        })
        next.addEventListener('click', function() {
            index++
            if(index > slideItems.length - 1){
                index = 0
            }
            for (let i=0; i < slideItems.length; i++ ){
                slideItems[i].style.transform = 'translateX(-'+ size*index + 'px)';
            }
            console.log('index ++',index)
        })
        slideItems.addEventListener('transitionend',function() {
            if(slideItems[index].id==='last-clone'){
                slideItems.style.transition ="none";
                index = slideItems.length - 2;
                slideItems[i].style.transform = 'translateX(-'+ size*index + 'px)';
            }
        })
    },
    sectionGallery:function() {
        let gallery = document.querySelector('.section-gallery');
        let srcImg = document.querySelector('.gallery-img').src;
        console.log(srcImg)
        gallery.style.transition = 'all 0.3s';
        gallery.style.backgroundImage = 'url("'+srcImg+'")';
    },
    galleryShow:function(){
        let gallery = document.querySelector('.section-gallery');
        let bgGallery= document.querySelector('.background-gallery');
        let galleries = document.querySelectorAll('.gallery-img');
        let btnPrev = document.querySelector('.btn-gallery__left');
        let btnNext = document.querySelector('.btn-gallery__right');
        let index = 0;
        console.log(bgGallery)
        // btn slide
        btnNext.addEventListener('click', function() {
            galleryshowNext();
            console.log('next ', index)
        })
        btnPrev.addEventListener('click', function() {
            galleryshowPrev()
            console.log('prev ', index)
        })
        // auto slide
        function galleryshowNext() {
            if(index == galleries.length){
                index = 0;
            }
            galleryshow();
            index++;
            // setTimeout(galleryshow,5000);       
        }
        function galleryshowPrev() {
            if(index < 0){
                index = galleries.length -1;
            }
            galleryshow()
            index--;  
        }
        function galleryshow(){
            for(let i = 0; i < galleries.length; i++) {
                galleries[i].classList.remove('active');
            }
            let srcImg = galleries[index].src
            galleries[index].classList.add('active')
           setTimeout(function(){
            bgGallery.src = srcImg;
           }, 500)
        }
        galleryshowNext();
    }
}
action.init();