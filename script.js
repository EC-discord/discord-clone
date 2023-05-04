function send(event) {
    var i = document.getElementById("input-field");
    if (i.value == "")
        return;
    if(event.keyCode==13) {
        var ml = document.getElementById("message-list");
        var d = new Date();
        ml.innerHTML = `            <li>
        <img src="./cat2.png">
        <div class="message-content">
            <div class="userndate">
                <p class="un">Username</p>
                <div class="date">${d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear()}</div>
            </div>
            <p>${i.value}</p>
        </div>
    </li>` + ml.innerHTML
        i.value = "";
        ml.scrollTop = ml.scrollHeight;
    }
}