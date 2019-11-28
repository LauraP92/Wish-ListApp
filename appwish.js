var parsedUrl = new URL(window.location.href);
console.log(parsedUrl.searchParams.get("kidName"));
// var kidName;

var data = {
    badKids: [
        { name: "Andrei", toys: ["car", "apples", "chips"] },
        { name: "Cami", toys: "make-up" },
        { name: "Vali", toys: "wine" }
    ],
    goodKids: [
        { name: "Laura", toys: "doll" },
        { name: "Ionut", toys: "phone" },
        { name: "Bogdan", toys: "books" }
    ]
}

// var index = data.badKids.map(o => o.name).indexOf(name);
// console.log(index);



// var list = data.badKids.name[kidname];
// for (i = 0; i < data.badKids.length; i++) {
//     for (j = 0; j < data.badKids.length; j++) {
//     var toys = data.badKids[0].toys[j];
//     $(".list-group").append(
//         `<li class="list-group-item">${toys}</li>`)
// }
// }
