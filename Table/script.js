$(function () {
    let updateTr;

    $("#add").on("click", () => {
        $(".modul").show()
        $("#create").show();
        $("#update").hide();
    })
    $("#cancel").on("click", () => {
        $(".modul").hide()
        resetForm()
    })
    $("#create").on("click", () => {
        let name = $("#name").val();
        let surname = $("#surname").val();
        let age = $("#age").val();
        let count = $("tbody tr").length
        $("tbody").append(`
               <tr>
                   <td>${++count}</td>
                   <td>${name}</td>
                   <td>${surname}</td>
                   <td>${age}</td>
                   <td>
                       <button class="edit"><i class="fas fa-pencil-alt"></i></button>
                   </td>
                   <td>
                       <button class="remove"><i class="fas fa-trash"></i></button>
                   </td>
               </tr>
           `)
        $(".modul").hide();
        resetForm();
    })


    $("tbody").on("click", ".remove", (e) => {
        $(e.target).parents("tr").remove();
        let tr = $("tbody tr")
        for (let i = 0; i < tr.length; i++) {
            tr.eq(i).children().eq(0).text(i + 1)

        }
    })
    $("tbody").on("click", ".edit", (e) => {
        $(".modul").show();
        $("#create").hide();
        $("#update").show();
        $("#name").val($(e.target).parents("tr").children().eq(1).text())
        $("#surname").val($(e.target).parents("tr").children().eq(2).text())
        $("#age").val($(e.target).parents("tr").children().eq(3).text())
        updateTr = $(e.target).parents("tr");
    })
    $("#update").on("click", () => {
        updateTr.children().eq(1).text($("#name").val())
        updateTr.children().eq(2).text($("#surname").val())
        updateTr.children().eq(3).text($("#age").val())
        $(".modul").hide();
        resetForm()
    })

    function resetForm() {
        $("#name").val("");
        $("#surname").val("");
        $("#age").val("");
    }




    $("#inp").on("input", function () {
        var searchValue = $(this).val().toLowerCase();
        $("tr").each(function () {
            var rowText = $(this).text().toLowerCase();
            if (rowText.includes(searchValue)) {
                $(this).show();
            } else {
                $(this).hide();
            }

        });
    });

    $("#name, #surname, #age").on("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();

            if ($("#create").is(":visible")) {
                $("#create").click();
            } else if ($("#update").is(":visible")) {
                $("#update").click();
            }
        }
    })
})