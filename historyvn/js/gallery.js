var gallery ={
    init:function() {
        this.lightBox();

    },
    lightBox: function() {
        let images = document.querySelectorAll('.wrap-img img')
        let lightbox = document.createElement('div')
        
        //create lightbox
        lightbox.id= 'lightbox';
        document.body.appendChild(lightbox);
        
        images.forEach((image)=>{
           image.addEventListener('click',()=>{
                
                // remove first img for next click
                while(lightbox.firstChild){
                    lightbox.removeChild((lightbox.firstChild))
                }

                //create img for light box
                let img = document.createElement('img');
                img.src = image.src;
                lightbox.appendChild(img);

                //add class acitve for lightbox
                lightbox.classList.add('active')
           })
        })

        lightbox.addEventListener('click',(e)=>{
            if(e.target !== e.currentTarget) return
            lightbox.classList.remove('active')
            
        })
    }
}
gallery.init();