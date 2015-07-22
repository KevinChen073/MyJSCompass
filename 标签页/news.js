$(function () {
    //隐藏不需要的页面
    ShowNewsBox(0);

    $('#news-page .header-navbar .btn').on('tap', function (e) {
        //debugger;
        var index = $(this).attr('data-index');
        ShowNewsBox(index);
    });
});

function ShowNewsBox(index) {
    $('.news-box .news-content-item').each(function (idx) {
        if (idx == index)
            $(this).show();
        else
            $(this).hide();
    });
}