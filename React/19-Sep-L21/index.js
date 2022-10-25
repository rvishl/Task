const render = data => {
    console.log(data);
    const list = data;
    const parent = document.getElementById("list");
    parent.innerHTML = "";
    list.forEach(element => {
        const new_li = document.createElement("li");
        new_li.innerText = `${element.name} `;
        parent.appendChild(new_li);
    });
}

const btn = document.getElementById('btn_id');
btn.addEventListener("click", _ => {

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(r => r.json())
    .then(render);

})