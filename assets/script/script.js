$("#currentDay").html(Date(Date.now()));
$(".saveBtn").click(function(){
    const value =$(this).val()
    localStorage.setItem("hour"+value, $("#textArea"+value).val())
    $("#currentDay").html(Date(Date.now()));
})
for (let i = 9; i < 17; i++) {
    const toDo =localStorage.getItem("hour"+i)
    if(toDo){
        $("#textArea"+i).text(toDo)
    }
}


var currentHour = new Date().getHours();
console.log(currentHour);