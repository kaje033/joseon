$(document).ready(function (){
    jQuery(".price-point").click(function() {
        $(".price-point.active").removeClass('active');
        $(this).addClass("active");
    });

    $(".pay").click(function(){
    
        if($(".price-point.active").attr('id')==5000)
            window.open('index-donate-toss1.html')
        else if($(".price-point.active").attr('id')==10000)
            window.open('index-donate-toss2.html')
        else if($(".price-point.active").attr('id')==20000)
            window.open('index-donate-toss3.html')
        else if($(".price-point.active").attr('id')==30000)
            window.open('index-donate-toss4.html')
        else if($(".price-point.active").attr('id')==50000)
            window.open('index-donate-toss5.html')
    })
})