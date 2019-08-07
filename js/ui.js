
//ui-search组件
$.fn.UiSearch=function(){
    var ui=$(this);
    $('.ui-search-selected',ui).on('click',function(){
        $('.ui-search-select-list').show();
        return false;
    });
    $('.ui-search-select-list a',ui).on('click',function(){
        $('.ui-search-selected').text($(this).text());
        $('.ui-search-select-list').hide();
        return false;
    });
    $('body').on('click',function(){
        $('.ui-search-select-list').hide();
    })
}
//选项卡切换
$.fn.UiTab=function(header,content,focus_prefix){
    var ui=$(this);
    var tabs=$(header,ui);
    var cons=$(content,ui);
    var focus_prefix=focus_prefix||'';

    tabs.on('click',function(){
        var index = $(this).index();
        tabs.removeClass(focus_prefix+'link_focus').eq(index).addClass(focus_prefix+'link_focus');
        cons.hide().eq(index).show();
        return false;
    })
}
$(function(){
    $('.ui-search').UiSearch();
    $('.content-department').UiTab('.nav-dpt > .link','.block > .item');
})