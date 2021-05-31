const trendBox = document.getElementById("jsGotoTrend");
const trendRepoBox = document.getElementById("jsGotoTrendRepos");
const indicator = document.getElementById("jsIndicator");
const URL = "https://api.trending-github.com/github/repositories?period=daily";


const handleRepo = (list) =>{
    indicator.style.display = "none";
    list.forEach(element => {
        const anchor = document.createElement("a");
        anchor.href = element.url;
        anchor.target = "_blank"
        anchor.innerHTML = `<span class="repoName">${element.name}</span> : ${element.description} - <span class="repoStar">${element.stars} stars</span>`
        trendRepoBox.appendChild(anchor);
    });
}


const getTrend=()=>{
    const response = fetch(URL).then(function(response){
        return response.json();
    }).then(function(data){
        const trendRepoList = data.slice(0,3);
        handleRepo(trendRepoList);
    });

};

const init=()=>{
    getTrend();
};

if(trendBox){
    init();
};