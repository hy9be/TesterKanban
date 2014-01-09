function getPortletHTML(column_id, portlet_name, portlet_detail) {
    return $('<div/>', {class: 'portlet'}).append(
        $('<div/>', {class: 'portlet-header ' + column_id, text: portlet_name}),
        $('<div/>', {class: 'portlet-content', text: portlet_detail}));
}

function getColumnHTML(column_id, column_name, portlets_data) {            
    portletsHTML = $('<div/>', {class: 'column ' + column_id});
    
    $.each(portlets_data, function(i, item) {
        portletsHTML.append(getPortletHTML(column_id, item.portlet_name, item.portlet_detail));
    });
    
    return $('<div/>', {class: 'column-container'}).append(
        // the column header
        $('<div/>', {class: 'column-header'}).append(
            $('<span/>', {class: 'header h2', text: column_name})), portletsHTML);
}

// When document is ready
$(function() {
    
    var column_data = [ 
        {"column_id": "class1", "column_name": "HTML5 VI"}, 
        {"column_id": "class2", "column_name": "MAD"}, 
        {"column_id": "class3", "column_name": "Research"},
        {"column_id": "class4", "column_name": "Others"}
    ];
    
    var portlets_demo_data = [
        {"portlet_name": "Task", "portlet_detail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"},
        {"portlet_name": "Task", "portlet_detail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"}
    ]
    
    // For to-do
    $.each(column_data, function (i, item) {
        // Add columns and kanbans for to do
        $('.columns-to-do').append(getColumnHTML(item.column_id, item.column_name, portlets_demo_data));                
    });
    
    $("div.column-header span.header").append($('<span/>', {class: 'ui-icon ui-icon-plus add-button'}));
    $("div.column-header span.header span.ui-icon-plus").click(function () {
        $("#editing-area").data("eventsender", $(this).parents("div.column-header").siblings("div.column").attr('class').split(' ')[1]).dialog( "open" );
        $("#editing-area #project-name").val($(this).parents("span.h2").text());
    });    
    
    // For doing
    $('.columns-doing').append(getColumnHTML('class-doing', 'Doing', portlets_demo_data));
    // For done
    $('.columns-done').append(getColumnHTML('class-done', 'Done', portlets_demo_data));
    $('.columns-done .portlet-content').hide();
    
});