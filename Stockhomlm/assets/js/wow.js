window.onload = () => {
    //Start Copy 
    const wow = {
        init:function(){
            this.wowJS();
        },
        wowJS:function(){
            const items = document.querySelectorAll('.wow');

            options = {
                threshold: 0.7,                                             //qua 70% chiều cao của phần tử thực hiện active
                rootMargin: '0px 0px 0px 0px'                               //màn hình quét (100% 100%)
            }

            function wowEffect(entry){
                entry.style.visibility = 'visible';                         //hiển thị phần tử

                let animationName = entry.dataset.animate;                  //lấy tên animation
                let durations = entry.dataset.duration || 1;                //lấy thời gian thực hiện animation (mặc định là 1s)
                let timingFunction = entry.dataset.timing || 'ease-out';    //lấy kiểu thực hiện thời gian (mặc định là ease-out)
                let animationIterations = entry.dataset.type || 'forwards'; //lấy kiểu thực hiện animation (mặc định là forwards)
                let delays = entry.dataset.delay || 0;                      //lấy thời gian trễ (mặc định là 0)

                console.log(timingFunction);

                
                entry.style.animation = `${animationName} ${durations}s ${timingFunction} ${animationIterations} ${delays}s`;
            }
                                    
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    console.log(entry);
                    if (!entry.isIntersecting) {                            //khi phần tử không nằm trong viewport thì dừng function
                        return;
                    }
                    else {
                        wowEffect(entry.target);                            //chạy hàm wowEffect
                        observer.unobserve(entry.target);                   //sau khi chạy dừng quét màn hình phần tử đó
                    }
                })
            }, options)

            items.forEach(item => {
                item.style.visibility = 'hidden';                           //set ẩn mặc định cho phần tử
                observer.observe(item);                                     //thực hiện quét màn hình tất cả phần tử
            })
        }
    }
    wow.init();
    //End Copy
}