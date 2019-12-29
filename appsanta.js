var data = [
    { id: 0, name: "Andrei", toys: ["car", "apples", "chips"] },
    { id: 1, name: "Cami", toys: ["make-up", "doll"] },
    { id: 2, name: "Vali", toys: ["cocos", "ball"] },
    { id: 4, name: "Ionut", toys: ["phone", "cocos"] },
    { id: 3, name: "Laura", toys: ["doll", "banana"] },
    { id: 5, name: "Bogdan", toys: ["books", "caju"] }
]


var myObject = {}
for (i = 0; i < data.length; i++) {
    for (j = 0; j < data[i].toys.length; j++) {
        var toy = data[i].toys[j];
        if (typeof myObject[toy] == "undefined") {
            myObject[toy] = 1;
        } else {
            myObject[toy]++;
        }
    }
}

for (var propt in myObject) {
    $(".list-group").append(`<li class="list-group-item">${propt + ' x ' + myObject[propt]} <button type="button" class="btn btn-outline-success">Show kids</button></li>`)
}

// for (let i=0; i < Object.keys(myObject).length; i++){
//     $(".list-group").append(`<li class="list-group-item"><span>${Object.keys(myObject)[i]}</span> <span> x ${myObject[Object.keys(myObject)[i]}</span> <button type="button" class="btn btn-outline-success">Show kids</button></li>`)
// }

$(".titlekids").append(`<h2>Kid's List</h2>`)

// "Show kids" button
$(".btn").on("click", function () {
    var toyContent = this.parentNode.textContent.split(" x")[0]
    for (i = 0; i < data.length; i++) {
        for (j = 0; j < data[i].toys.length; j++) {
            var toy = data[i].toys[j];
            if (toy == toyContent) {
                var name = data[i].name;
                $(".list-group-kids").append(`<li class="list-group-item">${name}</li>`)
            }
        }
    }
})

