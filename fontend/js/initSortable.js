// When document is ready
$(function() {
    
    // Bind Jquery sortable
    $( ".column" ).sortable({
        cursor: "pointer",
        connectWith: ".column",
        beforeStop: function( event, ui ) {
            if (ui.item.parent().attr('class').split(' ')[1] != 'class-doing') {
                ui.item.find(".portlet-header").removeClass().addClass("portlet-header").addClass(ui.item.parent().attr('class').split(' ')[1]);
            }
            
            if (ui.item.parent().attr('class').split(' ')[1] == 'class-done') {
                ui.item.find(".portlet-content").hide();
            } else if (!ui.item.find(".portlet-content").is(':visible')) {
                ui.item.find(".portlet-content").show();
            }
        }
    });

    $( ".portlet" ).addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
      .find( ".portlet-header" )
        .addClass( "ui-widget-header ui-corner-all" );

    $( ".column" ).disableSelection();

});