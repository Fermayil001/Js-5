/* 1
1
1
1
1
1
1 */



// $("#inp").val()





$(function () {

    $("button").on("click", () => {
        let inp = $("#inp").val()
        $("#list").append(`  <ul id="ul" style="list-style-type:none;">
                <li>${inp} <div class="icons"><i class="fa-solid fa-xmark"></i> <input type="checkbox"></div>
                </li>
            </ul>`)
    })

    $("#list").on("click", ".fa-solid.fa-xmark", (e) => {
        $(e.target).parent().parent().remove()
    })

    $("#list").on("change", "input[type='checkbox']", (e) => {
        $(e.target).parent().toggleClass("completed")
    })

})