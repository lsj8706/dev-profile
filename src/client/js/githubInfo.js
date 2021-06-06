const userContributionsBox = document.querySelector(
  ".user-status__contributions"
);
const totalContributionIndicator = document.getElementById(
  "jsTotalContributions"
);
const userCharacterBox = document.querySelector(".user-status__character");
const userRepoBox = document.querySelector(".user-repo");
const URL =
  "https://api.github.com/users/lsj8706/repos?sort=updated&per_page=2";

const handleImage = () => {
  const total = totalContributionIndicator.innerText;
  const img = new Image();
  if (total >= 0 && total < 200) {
    img.src = "https://oss-2020105657.s3.amazonaws.com/first.png";
    img.alt = "1단계";
  } else if (total >= 200 && total < 600) {
    img.src = "https://oss-2020105657.s3.amazonaws.com/second.png";
    img.alt = "2단계";
  } else if (total >= 600 && total < 1200) {
    img.src = "https://oss-2020105657.s3.amazonaws.com/third.png";
    img.alt = "3단계";
  } else if (total >= 1200 && total < 2000) {
    img.src = "https://oss-2020105657.s3.amazonaws.com/four.png";
    img.alt = "4단계";
  } else {
    img.src = "https://oss-2020105657.s3.amazonaws.com/fifth.png";
    img.alt = "5단계";
  }
  userCharacterBox.appendChild(img);
};

const handleRepo = (list) => {
  list.forEach((element) => {
    const anchor = document.createElement("a");
    anchor.href = element.html_url;
    anchor.target = "_blank";
    anchor.innerHTML = `<div class =number><span class="repoName">${element.name}</span>:<span class="repoUrl">${element.html_url} </span></div>`;
    userRepoBox.appendChild(anchor);
  });
};

const getGithubRepo = () => {
  const response = fetch(URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const trendRepoList = data.slice(0, 2);
      handleRepo(trendRepoList);
    });
};

const init = () => {
  handleImage();
  getGithubRepo();
};

if (userContributionsBox) {
  init();
}
