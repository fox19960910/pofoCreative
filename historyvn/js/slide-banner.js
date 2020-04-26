var  news =  {
    init:function(){
        this.slideShow();
    },
    slideShow:function() {
        let circles = document.querySelectorAll('.slides-link')
        let slideItems = document.querySelectorAll('.slides-item') 
        let index = 0;
        
        function slide() {
            if(index > slideItems.length-1){
                index = 0;
            }
            slideItems.forEach((item)=>{
                item.classList.remove('active')
            })
            circles.forEach((item)=>{
                item.classList.remove('active')
            })
            slideItems[index].classList.add('active')
            circles[index].classList.add('active')
            index++;
            setTimeout(slide,10000)
        }

        window.onload = slide()

        circles.forEach((circle,index)=>{
            circle.addEventListener('click',(e)=>{
                e.preventDefault();
                circles.forEach((item)=>{
                    item.classList.remove('active')
                })
                slideItems.forEach((item)=>{
                    item.classList.remove('active')
                })
                circles[index].classList.add('active')
                slideItems[index].classList.add('active')
            })
        })
     },
}
news.init();