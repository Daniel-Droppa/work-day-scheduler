$("#currentDay").html(Date(Date.now()));
$(".saveBtn").click(function () {
    const value = $(this).val()
    localStorage.setItem("hour" + value, $("#textArea" + value).val())
    $("#currentDay").html(Date(Date.now()));
})
for (let i = 9; i < 17; i++) {
    const toDo = localStorage.getItem("hour" + i)
    if (toDo) {
        $("#textArea" + i).text(toDo)
    }
}
var currentHour =  new Date().getHours();
$("#textArea" + currentHour).removeClass();
$("#textArea" + currentHour).addClass("col-8 present");
for (var t = 9; t < currentHour; t++) {
    $("#textArea" + t).removeClass();
    $("#textArea" + t).addClass("col-8 past");
}


console.log($("#textArea" + currentHour))

console.log(currentHour);