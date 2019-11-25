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
// var moveBtn = document.querySelector(".btn");
// var push = false;

for (i = 0; i < data.badKids.length; i++) {
    var bad = data.badKids[i].name;
    $("#tablebadkids").append(
        `<table>
            <tbody>
            <tr>
            <td><a href="indexwish.html?kidName=${bad}">${bad}</a></td>
            <td><button class="btn" type="submit"><i class="material-icons right">chevron_right</i><td>
          </button>
            </tr>
            </tbody>
            </table>`)
}


for (j = 0; j < data.goodKids.length; j++) {
    var good = data.goodKids[j].name;
    $("#tablegoodkids").append(
        `<table>
            <tbody>
            <td><button class="btn" type="submit"><i class="material-icons right">chevron_left</i><td>
            <td><a href="indexwish.html?kidName=${good}">${good}</a></td>
            </tr>
            </tbody>
            </table>`)
}

// moveBtn.addEventListener("click", () => {
//     push = true;
// })

// var pushOut = data.badKids.indexOf(data.badKids);
// $("table").on("click", ".btn", function(event){
//     $(this).parent().splice(pushOut, 1)
        // $(this).data.goodKids.push(data.badKids)
    
    // event.stopPropagation();
// })



// $("ul").on("click", "span", function(event){
//     $(this).parent().fadeOut(500, function(){
//         $(this).remove();    
//     });
//     event.stopPropagation();
// })
