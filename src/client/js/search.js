const form = document.querySelector(".home-search__form");
const input = document.getElementById("jsInput");

const handleSearch = (event) => {
    event.preventDefault();
    const text = input.value;
    const link = document.createElement("a");
    link.href = `https://www.google.com/search?q=${text}`;
    link.target = "_blank";
    form.appendChild(link);
    link.click();
    input.value = "";
}


if(form){
    form.addEventListener("submit", handleSearch);
}