document.addEventListener("DOMContentLoaded", function () {
    var addpopup = document.getElementById("add-popup");
    var popupoverlay = document.querySelector(".popup-overlay");
    var popupbox = document.querySelector(".popup-box");
    var cancelpopup = document.getElementById("cancel-popup");
    var container = document.querySelector(".container");
    var addbook = document.getElementById("add-book");
    var booktitle = document.getElementById("book-title-input");
    var bookauthor = document.getElementById("book-author-input");
    var bookdescription = document.getElementById("book-description-input");

    addpopup.addEventListener("click", function () {
        popupoverlay.style.display = "block";
        popupbox.style.display = "block";
    });

    cancelpopup.addEventListener("click", function (event) {
        event.preventDefault();
        popupoverlay.style.display = "none";
        popupbox.style.display = "none";
    });

    addbook.addEventListener("click", function (event) {
        event.preventDefault();
        if (booktitle.value.trim() && bookauthor.value.trim() && bookdescription.value.trim()) {
            var div = document.createElement("div");
            div.setAttribute("class", "book-container");
            div.innerHTML = `<h2 class="libre-baskerville-bold">${booktitle.value}</h2>
                            <h5 class="libre-baskerville-regular">${bookauthor.value}</h5>
                            <p class="libre-baskerville-regular">${bookdescription.value}</p>
                            <button onclick="del(event)">Delete</button>`;
            container.append(div);

            // Clear inputs and hide the popup
            booktitle.value = '';
            bookauthor.value = '';
            bookdescription.value = '';
            popupoverlay.style.display = "none";
            popupbox.style.display = "none";
        }
    });

    window.del = function (event) {
        event.target.parentElement.remove();
    };
});
