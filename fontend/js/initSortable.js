// When document is ready
$(function() {
    
    // Bind Jquery sortable
    $( ".column" ).sortable({
        cursor: "pointer",
        connectWith: ".column",
        beforeStop: function( event, ui ) {
            ui.item.find(".portlet-header").removeClass().addClass("portlet-header").addClass(ui.item.parent().attr('class').split(' ')[1]);
        }
    });

    $( ".portlet" ).addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
      .find( ".portlet-header" )
        .addClass( "ui-widget-header ui-corner-all" )
        .prepend( "<span class='ui-icon ui-icon-minusthick'><\/span>")
        .end()
      .find( ".portlet-content" );

    $( ".portlet-header .ui-icon" ).click(function() {
      $( this ).toggleClass( "ui-icon-minusthick" ).toggleClass( "ui-icon-plusthick" );
      $( this ).parents( ".portlet:first" ).find( ".portlet-content" ).toggle();
    });

    $( ".column" ).disableSelection();

});