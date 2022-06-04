
let Base="localhost:8080/"
function get(url,data,success,error) {
    $.ajax({
        type:"get",
        url:Base+url,
        data:data,
        success:function (res){
            success(res);
        },
        error:function (err){
            console.log(err)
        }
    })
}