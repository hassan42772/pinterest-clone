let searchbox = document.querySelector(".search-box");
let searchform = document.querySelector("form");
let searchbtn = document.querySelector(".search-btn");
let gallery = document.querySelector(".search-img");
let showbtn = document.querySelector(".show-more-btn");

let page = 1;
let Accesskey = "5sl50p7QQ7GgqXdbarz16qBK1ZHtJ25r9th7dbAK_XM";
let keyword = "";
let NumberOfImages = 10;

async function getImages() {
    keyword = searchbox.value.trim(); // Trim spaces to prevent empty queries
    if (keyword === "") {
        alert("Please enter a search keyword.");
        return;
    }

    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${Accesskey}&per_page=${NumberOfImages}`;

    try {
        let response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

        let data = await response.json();
        let results = data.results;
        console.log(results);

        if (results.length === 0) {
            alert("No images found. Try a different keyword.");
            return;
        }
        
        results.forEach((image) => {
            let img = document.createElement("img");
            img.src = image.urls.small;
            console.log(img.src);
            img.alt = image.alt_description || "Unsplash Image";

            let imglink = document.createElement("a");
            imglink.href = "#"; // Prevent default navigation
            imglink.appendChild(img);

            imglink.addEventListener("click", (event) => {
                event.preventDefault();
                localStorage.setItem("selectedImage", JSON.stringify(image));
                window.location.href = "imageGen.html";
            });
            let container = document.createElement("div");
            container.classList.add("image-container");
            container.appendChild(imglink);
            gallery.appendChild(container);
        });

        showbtn.style.display = "block"; // Show "Show More" button after loading images
    } catch (error) {
        console.error("Error fetching images:", error);

    }
}

// Search form event
searchform.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    gallery.innerHTML = "";
    getImages();
});

// "Show More" button event
showbtn.addEventListener("click", () => {
    page++;
    getImages();
});

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY + window.innerHeight; // Current scroll position + viewport height
    const totalHeight = document.documentElement.scrollHeight; // Total document height

    if (scrollPosition >= totalHeight - 1) { // If scrolled to the bottom
        page++;
        getImages();
    }
});




