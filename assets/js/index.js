let open_drop = () =>{
    let status = $('#info-loged div').attr('class');

    if(status.indexOf("closed") >= 0){
        $('.drop').show();
        $('#info-loged div').removeClass('closed');
        $('#info-loged div').addClass('opened');
    }else
    if(status.indexOf("opened") >= 0){
        $('.drop').hide();
        $('#info-loged div').removeClass('opened');
        $('#info-loged div').addClass('closed');
    }

    $('li').mouseover(function(){
        $(this).css('background-color','rgb(247, 247, 247)').css('color','#00c8a1');
    });
    
    $('li').mouseout(function(){
        $(this).css('background-color','white').css('color','#212529');
    });
}

let save = () =>{
    let status = $('#info-loged div').attr('class');

    if(confirm('Do you really want to save this information ?')){

            alert('Save successfully.');

    }
}