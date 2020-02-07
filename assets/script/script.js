// var saveBtn = $("#saveBtn");
// var textHour = $("#texthour9");
// var i = 9
// $(saveBtn[i]).on("click",function(){
// console.log(textHour[i].textcontent)
// })
$(".saveBtn").click(function(){
    const value =$(this).val()
    localStorage.setItem("hour"+value, $("#textArea"+value).val())
})


for (let i = 9; i < 17; i++) {
    const toDo =localStorage.getItem("hour"+i)
    if(toDo){
        $("#textArea"+i).text(toDo)
    }
}