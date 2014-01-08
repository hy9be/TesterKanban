function getPortletHTML(column_id, portlet_name, portlet_detail) {
    return $('<div/>', {class: 'portlet'}).append(
        $('<div/>', {class: 'portlet-header class' + column_id, text: portlet_name}),
        $('<div/>', {class: 'portlet-content', text: portlet_detail}));
}

function getColumnHTML(column_id, column_name, portlets_data) {            
    portletsHTML = $('<div/>', {class: 'column class' + column_id});
    
    $.each(portlets_data, function(i, item) {
        portletsHTML.append(getPortletHTML(column_id, item.portlet_name, item.portlet_detail));
    });
    
    return $('<div/>', {class: 'column-container'}).append(
        // the column header
        $('<div/>', {class: 'column-header'}).append(
            $('<h2/>', {class: 'header', text: column_name})), portletsHTML);
}

// When document is ready
$(function() {
    
    var column_data = [ 
        {"column_id": 1, "column_name": "HTML5 VI"}, 
        {"column_id": 2, "column_name": "MAD"}, 
        {"column_id": 3, "column_name": "Research"},
        {"column_id": 4, "column_name": "Others"}
    ];
    
    var portlets_demo_data = [
        {"portlet_name": "Task", "portlet_detail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"},
        {"portlet_name": "Task", "portlet_detail": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"}
    ]
    
    $.each(column_data, function (i, item) {
        // Add columns and kanbans for to do
        $('.columns-to-do').append(getColumnHTML(item.column_id, item.column_name, portlets_demo_data));                
    });
    
    // For doing
    $('.columns-doing').append(getColumnHTML(5, 'Doing', portlets_demo_data));
    // For done
    $('.columns-done').append(getColumnHTML(6, 'Done', portlets_demo_data));
    
});