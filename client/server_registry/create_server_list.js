function createServerList() {
    let list = JSON.parse(localStorage.getItem("server_list"));

    let list_div = document.getElementById("server_list");

    for(let i = 0; i < list.length; i++) {
        let server_item = document.createElement('div');
        let server_name = document.createElement('h2');
        let content = document.createTextNode(list[i]);
        server_name.appendChild(content);
        server_item.appendChild(server_name);
        list_div.appendChild(server_item);
    }
}