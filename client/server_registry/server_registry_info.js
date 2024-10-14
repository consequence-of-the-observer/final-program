function registerServerInfo() {
    let data = {
        server_name: document.getElementById("server_name").value,
        server_address: document.getElementById("server_address").value,
        server_code: document.getElementById("server_code").value
    };

    let save_server_info = document.getElementById("save_server").value;

    console.log(save_server_info);

    // if(save_server_info === off) {
    //     sessionStorage.setItem("server_"+data.server_name, JSON.stringify(data));
    // }else {
    //     localStorage.setItem("server_"+data.server_name, JSON.stringify(data));
    // }
}