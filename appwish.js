// Split routes for kidId and kid name
let kidId = "";
let name = "";

function splitRoutes() {
    const route = window.location.search.replace("?", "").trim();
    const params = route.split("&");
    params.forEach(param => {
        const fieldAndValue = param.split("=");
        if (fieldAndValue[0] == "kidId") {
            kidId = fieldAndValue[1]
        }
        
        if (fieldAndValue[0] == "name") {
            name = fieldAndValue[1].replace(/%20/g, " ");
        }
    });
}

splitRoutes()
console.log(kidId);
console.log(name);

var data = [
    { id: 0, toys: ["car", "apples", "chips"] },
    { id: 1, toys: ["make-up", "doll"] },
    { id: 2, toys: ["wine", "ball"] },
    { id: 4, toys: ["phone", "cocos"] },
    { id: 3, toys: ["doll", "banana"] },
    { id: 5, toys: ["books", "caju"] }
]

var index = data.map(o => o.id).indexOf(Number(kidId));
if (index === -1) {
    data.push({ id: Number(kidId), toys: [] })
    index = data.map(o => o.id).indexOf(Number(kidId))
}
console.log(index, data[index]);


$(".title").append(`<h2><a href="index.html">${name}'s List</a></h2>`)

showToys();

// Show toys for selected kid
function showToys() {
    for (i = 0; i < data[index].toys.length; i++) {
        var toy = data[index].toys[i];
        $(".list-group").append(`<li class="list-group-item"><span class="delete"><i class="fa fa-trash"></i></span><span class="toyName">${toy}</span><input class="toyInputEdit invisible" type="text"><button type="button" class="btn btn1 btn-outline-success">Edit</button><button type="button" class="btn btn2 btn-outline-success invisible">Save</button></li>`)
    }

    // Toy edit button
    $(".btn1").on("click", function () {
        $($(this).parent().children()[4]).toggleClass("invisible");
        $($(this).parent().children()[2]).toggleClass("invisible");
        $($(this).parent().children()[1]).toggleClass("invisible");
        var toyName = $(this).parent().children()[1].textContent;
        $(this).parent().children()[2].value = toyName;
        $($(this).parent().children()[3]).toggleClass("invisible");
        $(".toyInputEdit").keypress(function (event) {
            if (event.which === 13) {
                data[index].toys.splice(data[index].toys.indexOf(toyName), 1, $(this).parent().children()[2].value);
                $(".list-group").children().remove();
                showToys();
            }
        })
        // Save toy edit button
        $(".btn2").on("click", function () {
            data[index].toys.splice(data[index].toys.indexOf(toyName), 1, $(this).parent().children()[2].value);
            $(".list-group").children().remove();
            showToys();
        })
    })

    // Delete toys from list
    $(".delete").on("click", function () {
        var deletedToy = $(this).parent().children()[1].textContent;
        var deletedToyIndex = data[index].toys.indexOf(deletedToy);
        console.log(deletedToyIndex);
        data[index].toys.splice(deletedToyIndex, 1);
        $(".list-group").children().remove();
        showToys();
    })
}

// Add new toys to the list
$(".newToy").keypress(function (event) {
    if (event.which === 13) {
        // add new toys
        var newToy = $(this).val();
        $(this).val("");
        data[index].toys.push(newToy);
        $(".list-group").children().remove();
        showToys();
    }
})
