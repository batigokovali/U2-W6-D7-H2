function toggleVisibility () {
    let button = document.querySelectorAll(".btn.btn-secondary")[0]
    let section = document.querySelectorAll(".row.favorite-albums")[0]
    console.log(button)
    button.addEventListener("click", function()
    {
        section.classList.toggle("invisible")
    }
    )
}

toggleVisibility ()

function albumCounter () {
    let albums = document.querySelectorAll("img")
    let counter = document.getElementById("album-counter")
    counter.innerText = albums.length
}

albumCounter ()