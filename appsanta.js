// var parsedUrl = new URL(window.location.href);
// var kidId = parsedUrl.searchParams.get("kidId");
// console.log(kidId);

var data = [
    { id: 0, name: "Andrei", toys: ["car", "apples", "chips"] },
    { id: 1, name: "Cami", toys: ["make-up", "doll"] },
    { id: 2, name: "Vali", toys: ["wine", "ball"] },
    { id: 4, name: "Ionut", toys: ["phone", "cocos"] },
    { id: 3, name: "Laura", toys: ["doll", "banana"] },
    { id: 5, name: "Bogdan", toys: ["books", "caju"] }
]

// var index = data.map(o => o.toys).indexOf(Number(kidId));
// console.log(index);


for (i = 0; i < data.length; i++) {
    for (j = 0; j < data[i].toys.length; j++) {
        var toy = data[i].toys[j];
        $(".list-group").append(`<li class="list-group-item">${toy} <button type="button" class="btn btn-outline-success">Show kids</button></li>`)
    }
}