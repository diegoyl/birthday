

let diego = true;

$("document").ready(function(){ 
    $("img").click(function(){   
        var id = $(this).attr('id'); 
        var currClass = $(this).attr('class'); 
        if (currClass == 'one') {
            $(this).addClass('two').removeClass('one');
            $(this).attr('src',id+'2.png');      
        } else {
            $(this).addClass('one').removeClass('two');
            $(this).attr('src',id+'1.png');      
        }
    });    
});