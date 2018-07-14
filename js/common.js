// 開始イベントでリンク先のイベントリスナーを設定
document.addEventListener('DOMContentLoaded', function(){
    jQuery('.div-a').click(function() {
        location.href = jQuery(this).attr('data-url');
    });
}, false);

