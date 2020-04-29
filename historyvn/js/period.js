var period = {
    init:function() {   
        this.getdata();

    },
    getdata:function (){
        const periods = document.querySelectorAll('.period')
        var data = [];
    
        periods.forEach((item,index)=>{
            item.addEventListener('click',()=>{
                data.shift()
                data.push(periods[index].id)
                console.log(data)
                localStorage.setItem('id-period',JSON.stringify(data))
                location.replace('period.html')
            })
        })
        
    }

}
period.init();