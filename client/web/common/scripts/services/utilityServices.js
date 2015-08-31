

var utilityController = function() {};

utilityController.showFullPageLoader = function() {
    $("#sbox_screenOverlay").show();
}
utilityController.hideFullPageLoader = function() {
    setTimeout(function() {
       	$("#sbox_screenOverlay").fadeOut();
        $("body").removeClass("fullwidthOverlay_open");
    }, 2000);
}