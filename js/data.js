
$(function(){

    //添加排班表内容
    var week=['星期一','星期二','星期三','星期四','星期五','星期六','星期日'];
    $('.sche-mid-box-wrap').empty();

    var pageCount=7,
        days=pageCount*7,
        date=new Date(),
        time=date.getTime();
    for(var i=0;i<days;i++){
        var _t=time+i*86400*1000;
        var _d=new Date(_t);
        var html=[];

        var w=week[_d.getDay()];
        var y=_d.getFullYear();
        var m=_d.getMonth()+1;
        m=m<10?'0'+m:m;
        var d=_d.getDate();
        d=d<10?'0'+d:d;
        html.push('<div class="schedule-box-item"> <div class="date">'+w+'<br>'+y+'-'+m+'-'+d+'</div>');
        html.push('<div class="status"></div>');
        html.push('<div class="status status_fall">约满</div>');
        html.push('<div class="status"></div></div>');
        $('#sche-mid-box-wrap').append(html.join(' '));
        //  console.log($('#sche-mid-box-wrap').append(html.join(' ')))
    }

    //添加上一页，下一页点击事件
    var currentPage=0;
    $('.sche-left .prev').on('click',function(){
        currentPage--;
        if(currentPage<0){
            currentPage=0;
        }
        $('.sche-mid-box-wrap').css('left',-658*currentPage);
        return false;
    })

    $('.sche-right .after').on('click',function(){
        currentPage++;
        if(currentPage>6){
            currentPage=6;
        }
        $('.sche-mid-box-wrap').css('left',-658*currentPage);
        return false;
    })
})