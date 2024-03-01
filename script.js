$(function(){
    $('.pop').on('click', function(){
        $('.image-preview').attr('src',$(this).find('img').attr('src'));
        $('#image-modal').modal('show');
    });
});