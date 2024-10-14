var new_server = false;

function serverRegistryButton() {
    new_server = true;

    console.log("new_server");
    generateServerCard();
}

function generateServerCard() {
    let section = document.getElementById("new_server_info");

    section.innerHTML = `
        <h2>Enter Server Info</h2>

        <div>
            <b>Server Name:</b><input id="server_name"/>
            <br>
            <b>Server Address:</b><input id="server_address"/>
            <br>
            <b>Server Code:</b><input id="server_code"/>
            <br>
            <b>Save Server?</b><input type="checkbox" id="save_server"/>
            <br>
            <button onClick="registerServerInfo()">Add Server</button>
        </div>
    `;
}