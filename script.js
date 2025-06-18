addEventListener("DOMContentLoaded", () => {

    const btn = document.createElement("button");
    btn.textContent="Add Item";

    document.body.appendChild(btn);

    let i=0;
    btn.addEventListener("click", () => {
        console.log("button clicked");

        let entry = document.createElement("li");
        entry.textContent = i;
        list.appendChild(entry);
        i++;
        entry.addEventListener("click", () => {
            console.log("item clicked", entry.textContent);
            entry.remove();
        });

    });

    const list = document.createElement("ul");
    document.body.appendChild(list);

});




