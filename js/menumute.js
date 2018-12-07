function hide(n) {
    document.getElementById(n).style.display = "none"
}
$(function() {
    $(".player").YTPlayer()
}), $(document).ready(function() {
    $(".volumebutton, .volume").click(function() {
        var n = $(this).parent().children(".volume").first(),
            e = n.data("alternative");
        n.data("alternative", n.attr("src")).attr("src", e)
    })
}), $("#bgndVideo").on("YTPReady", function(n) {
    setTimeout(function() {
        $(".player").YTPPlay()
    }, 1e3)
}), jQuery(function(n) {
    n(".menu-btn").click(function() {
        n(".responsive-menu").fadeToggle(1e3).toggleClass("expand"), n(".main-container").css("display", "none")
    })
}), jQuery(function(n) {
    n(".container-x").click(function() {
        n(".responsive-menu").fadeToggle(1e3).toggleClass("expand"), n(".main-container").css("display", "none"), n(".menu-btn").toggleClass("open")
    })
}), $(document).ready(function() {
    $(".menu-btn").click(function() {
        $(this).toggleClass("open")
    })
}), jQuery(function(n) {
    n(".responsive-menu").click(function() {
        n(".responsive-menu").fadeToggle(500).toggleClass("expand")
    })
}), $(".responsive-menu-pages a, .buy-to-store").on("click", function() {
    var n = $(this).attr("rel");
    $("#" + n).show().siblings("div").hide()
}), $(".responsive-menu-pages a, .social-menu a").on("click", function() {
    $(".menu-btn").toggleClass("open")
});