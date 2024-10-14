function registerServerInfo() {
    let data = {
        server_name: document.getElementById("server_name").value,
        server_address: document.getElementById("server_address").value,
        server_code: document.getElementById("server_code").value
    };

    //let save_server_info = document.getElementById("save_server").value;

    localStorage.setItem("server_"+data.server_name, JSON.stringify(data));
    addToServerList(data.server_name);
    createServerList();
}

function addToServerList(name) {
    let val = JSON.parse(localStorage.getItem("server_list"));

    if(val === null) {
        val = [name];
    }else {
        val.push(name);
    }

    localStorage.setItem("server_list", JSON.stringify(val));
}