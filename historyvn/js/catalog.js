var catalog = {
    init:function() {
        this.fixedCatalog();

    },
    fixedCatalog:function() {
        let catalog = document.querySelector('.catalog');
        let footer = document.querySelector('.footer');
        let wrapCatalog = document.querySelector('.wrap-catalog')
        let heightOfHeader = document.querySelector('.header').offsetHeight
        console.log(heightOfHeader)
        let sticky = catalog.offsetTop - heightOfHeader
        let heightOfFooter = footer.offsetTop - screen.height + screen.height/5
        
        window.addEventListener('scroll',function(){

            console.log('[chiều cao của footer đã trừ đi màn hình]',footer.offsetTop,'[chiều cao của windowpage]',window.pageYOffset)
            if (sticky <= window.pageYOffset){
                catalog.classList.add('active');
            }else{
                catalog.classList.remove('active');
            }
            if (heightOfFooter <= window.pageYOffset){
                catalog.classList.add('active-2');
                wrapCatalog.classList.add('active')
            }else{
                catalog.classList.remove('active-2');
                wrapCatalog.classList.remove('active')
            }
        })
        
        
    },
}
catalog.init();