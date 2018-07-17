//PER NON AVERE IL TASTO QUIT IN APERTURA
window.open("#quit", "_self");

//$(document).ready(function(){
//    alert("ciao!");
//    $(".video").get(0).play();
//});


// AUTOPLAY VIDEO

//$( document ).onload(function() {
//    $(".video").get(0).play();
// });
//


//MOVIMENTO DELLE VOCI NEL MENU TRANNE LE ULTIME

function modifica(elem) {
    var a = document.getElementsByTagName('a')
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('allarga');
    }
    elem.classList.add('allarga');
};



// MUOVO LE VOCI IN RELAZIONE ALLO SCROLLTOP



function scrollfunc() {

    if ( ( $("#contenitore").scrollTop() ) > ($(document).height()* 0.01) ) {
        
        $( ".item" ).removeClass( "allarga" );
        $( "#l0" ).addClass( "allarga" );
    }

    else if ( ( $("#contenitore").scrollTop() ) > ($(document).height()* 0.01) ){
        $( ".item" ).removeClass( "allarga" );
        $( "#l1" ).addClass( "allarga" );
    }

    else if ( ( $("#contenitore").scrollTop() ) > ($(document).height()* 0.3) ){
        $( ".item" ).removeClass( "allarga" );
        $( "#l2" ).addClass( "allarga" );
    }

    else if ( ( $("#contenitore").scrollTop() ) > ($(document).height()* 0.5) ){
        $( ".item" ).removeClass( "allarga" );
        $( "#l3" ).addClass( "allarga" );
    }

    else if ( ( $("#contenitore").scrollTop() ) > ($(document).height()* 0.5) ){
        $( ".item" ).removeClass( "allarga" );
        $( "#l4" ).addClass( "allarga" );
    }

    else if ( ( $("#contenitore").scrollTop() ) > ($(document).height()* 0.6) ){
        $( ".item" ).removeClass( "allarga" );
        $( "#l5" ).addClass( "allarga" );
    }

    
    else{
        console.log("eh niente zio")
    }
};
        


//window.onload = function(){
//$( ".item" ).addClass( "" );
//}

//console.log($(".lavori").scrollTop + "px")