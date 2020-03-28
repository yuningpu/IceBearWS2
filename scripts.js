function fillComponents(){
    $("component").each(function( index ) {
        var file = $(this).attr("type");
        $(this).load(file+".html");
    });
}
