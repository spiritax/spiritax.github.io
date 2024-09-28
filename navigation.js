document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById("content");
    const links = document.querySelectorAll(".nav-link");

    function loadPage(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, "text/html");
                const newContent = doc.querySelector("main").innerHTML;
                content.innerHTML = newContent;
                history.pushState(null, "", url);
            })
            .catch(error => console.error('Error loading page:', error));
    }

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const url = this.getAttribute("href");
            loadPage(url);
        });
    });

    window.addEventListener("popstate", function() {
        loadPage(location.pathname);
    });
});