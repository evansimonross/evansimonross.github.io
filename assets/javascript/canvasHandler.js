var size = () => {
    var colWidth = $('#canvas-desc').width()
    var colHeight = $('#canvas-desc').height()

    var size = Math.floor(colWidth < colHeight ? colWidth : colHeight);
    size-=size%64;
    $('#canvas').width(size);
    $('#canvas').height(size);
}
$(size);
$(window).resize(size);