
jQuery(document).ready(function() {
    var $ = jQuery.noConflict();
    $(document).on('click', '.ga, .gaGlobal', function() {
        var label,
            category,
            data_ga,
            path = window.location.pathname.slice( 1, -1 ), //remove the first / and last /
            elem_text = $( this ).text()
        ;
        data_ga = ( $( this ).attr('data-ga') ) ? $( this ).attr('data-ga') : false;
        if ( $(this).hasClass('ga') ) {
            label = ( data_ga ) ? data_ga : elem_text;
            category = path;
        } else {
            label = path;
            category = ( data_ga ) ? data_ga : elem_text;
        }
        ga( 'send', 'event', category, 'click', label );
    });    
});
