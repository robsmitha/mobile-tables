

$.fn.MobileTables = function(options) {

    // Default options
    var settings = $.extend({
        breakpointWidth: 769
    }, options );
 

    this.each(function() {
        if(!$(this).hasClass('mobile-table')){
            if ($(window).width() < settings.breakpointWidth) {
                var html = ''
                $(this).find('tbody tr').each(function () {
                    html += '<div style="padding: 1rem; background-color: #fff; border: 1px solid rgba(0, 0, 0, 0.125); border-radius: 0.25rem;">'
                    $(this).find('td').each(function () {
                        var index = $(this).index()
                        var label = $(this).closest('table').find('th').eq(index).html()
                        html += '<div>'
                        if(label && label.length > 0){
                            html += '<strong>' + label + ':</strong>&nbsp;'
                        }
                        html += $(this).html()
                        html += '</div>'
                    })
                    html += '</div>'
                })
                $(this).html(html)
                $(this).addClass('mobile-table')
            }
        }
    });
};
