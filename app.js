var data = {
    badKids: [
        { name: "Andrei", toys: "car" },
        { name: "Cami", toys: "make-up" },
        { name: "Vali", toys: "wine" }
    ],
    goodKids: [
        { name: "Laura", toys: "doll" },
        { name: "Ionut", toys: "phone" },
        { name: "Bogdan", toys: "books" }
    ]
}

showBadKids();
showGoodKids();

function showBadKids () {
    for (i = 0; i < data.badKids.length; i++) {
        var bad = data.badKids[i].name;
        $("#tablebadkids").append(
            `<tr id="${i}">
            <td><a href="indexwish.html?kidName=${bad}">${bad}</a></td>
            <td><button class="btn1" type="submit"><i class="material-icons right">chevron_right</i><td>
            </button>
            </tr>`)
    }
    $("td").on("click", ".btn1", function (e) {
        var id = $(this).closest('tr').attr('id');
        data.goodKids.splice(id, 0, data.badKids.splice(id, 1)[0]);
        $("tr").remove();
        showBadKids();
        showGoodKids();
    })
}
    
function showGoodKids () {
    for (j = 0; j < data.goodKids.length; j++) {
        var good = data.goodKids[j].name;
        $("#tablegoodkids").append(
            `<tr id="${j}">
            <td><button class="btn2" type="submit"><i class="material-icons right">chevron_left</i></button><td>
            <td><a href="indexwish.html?kidName=${good}">${good}</a></td>
            </tr>`)
    }
    $("td").on("click", ".btn2", function (e) {
        var id = $(this).closest('tr').attr('id');
        data.badKids.splice(id, 0, data.goodKids.splice(id, 1)[0]);
        $("tr").remove();
        showGoodKids();
        showBadKids();
    })
}












