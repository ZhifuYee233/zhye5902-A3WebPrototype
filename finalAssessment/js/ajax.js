let Base = "http://119.29.89.107:8083/"

function get(url, data, success, error) {
    $.ajax({
        type: "get",
        url: Base + url,
        data: data,
        success: function (res) {
            success(res);
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function post(url, data, success, error) {
    $.ajax({
        type: "post",
        url: Base + url,
        data: data,
        success: function (res) {
            success(res);
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function save() {
    let taskName = $("#taskName").val();
    let expectedTime = $("#expectedTime").val();
    let dueDate = $("#dueDate").val();
    let mainTaskName = $("#mainTaskName").val();
    let remark = $("#remark").val();
    let isDone = $("#inlineRadio1").val();
    let readUrl=$("#readUrl").val();
    post("Task/save",{
        'taskName': taskName,
        'expectedTime': expectedTime,
        'dueDate': dueDate,
        'mainTaskName': mainTaskName,
        'remark': remark,
        'isDone': isDone,
        'readUrl':readUrl
    },function (res) {
        alert("save success!")
        location.reload();
    },function (err) {
        console.log(err);
    })
}

