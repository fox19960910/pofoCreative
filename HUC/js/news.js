var  news =  {
    init:function(){
        this.slideShow();
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
}
news.init();