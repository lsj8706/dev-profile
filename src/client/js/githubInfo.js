const userContributionsBox = document.querySelector(".user-status__contributions");
const totalContributionIndicator = document.getElementById("jsTotalContributions");



const handleImage = () =>{
    const total = totalContributionIndicator.innerText;
    console.log(total);
};


const getGithubRepo = () =>{
    console.log("Get Api here");
};

const init=()=>{
    handleImage();
    getGithubRepo();
};

if(userContributionsBox){
    init();
};