var data = {
    badKids: [
        { id: 0, name: "Andrei" },
        { id: 1, name: "Cami" },
        { id: 2, name: "Vali" }
    ],
    goodKids: [
        { id: 3, name: "Laura" },
        { id: 4, name: "Ionut" },
        { id: 5, name: "Bogdan" }
    ]
}

var addBadKid = document.querySelector(".newbadKid");
var addGoodKid = document.querySelector(".newgoodKid");
const regex = /^[a-zA-Z]+/;

showBadKids();
showGoodKids();

function showBadKids() {
    for (i = 0; i < data.badKids.length; i++) {
        var bad = data.badKids[i].name;
        var kidId = data.badKids[i].id;
        $("#tablebadkids").append(
            `<tr id="${i}">
            <td><a href="indexwish.html?kidId=${kidId}&name=${bad}">${bad}</a><button class="btn1 btn btn-primary" type="submit"><i class="fa fa-angle-right"></i></button></td>
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

// Add new bad kids to the list
$(".newbadKid").keypress(function (event) {
    if (event.which === 13 && regex.test(addBadKid.value)) {
        // add new kid
        var newbadKid = $(this).val();
        $(this).val("");
        data.badKids.push({id: data.badKids.length + data.goodKids.length, name: newbadKid});
        $("tr").remove();
        showBadKids();
        showGoodKids();
    }
})


function showGoodKids() {
    for (j = 0; j < data.goodKids.length; j++) {
        var good = data.goodKids[j].name;
        var kidId = data.goodKids[j].id;
        $("#tablegoodkids").append(
            `<tr id="${j}">
            <td><button class="btn2 btn btn-primary" type="submit"><i class="fa fa-angle-left"></i></button><a href="indexwish.html?kidId=${kidId}&name=${good}">${good}</a></td>
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

// Add new good kids to the list
$(".newgoodKid").keypress(function (event) {
    if (event.which === 13 && regex.test(addGoodKid.value)) {
        // add new kid
        var newgoodKid = $(this).val();
        $(this).val("");
        data.goodKids.push({id: data.badKids.length + data.goodKids.length, name: newgoodKid});
        $("tr").remove();
        showBadKids();
        showGoodKids();
    }
})














