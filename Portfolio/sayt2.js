$(function () {
    $("button").on("click", function () {
        const id = this.id;
        $(".car, .nature, .people").hide();
        if (id !== "show_all") {
            $(`.${id}`).show();
        } else {
            $(".car, .nature, .people").show();
        }
        $(this).css("background-color", "rgb(53, 103, 240)").siblings().css("background-color", "");
    });
});