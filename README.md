# DEV-profile

## **A website for developers to get driven with motivation.**

dev-profile URL : https://dev-profile-2021.herokuapp.com/

KHU-Hub repo : [khuhub.khu.ac.kr/2018102216/dev-profile](https://khuhub.khu.ac.kr/2018102216/dev-profile)
<br>

## Main Features

- [x] your basic profile
- [x] random quotes **_for developers_** to motivate you :sparkles:
- [x] the amount of commits you've done on [GitHub](https://github.com/) at a glance
- [x] your most-contributed project on GitHub
- [x] today's trending repositories on GitHub

### ● Additional Features

- [x] direct and easy login via GitHub
- [x] intuitive and easy-to-use structure

<br>

### ● Home Page

    1. You can join or login with GitHub account.
    2. You can search via Google.

![homepage](https://oss-2020105657.s3.amazonaws.com/homepage.png)

### ● Myprofile Page

    1. You can see your profile information, github contributions, repositories, status at a glance.

![image](https://oss-2020105657.s3.amazonaws.com/myprofile.png)

### ● Edit Profile Page

    1. You can input or change your informations.

![image](https://oss-2020105657.s3.amazonaws.com/edit+profile.png)

## <br>

<br>

### ● Home Page

    1. you can join or login with github.
    2. you can search.

![homepage](https://oss-2020105657.s3.amazonaws.com/homepage.png)

<br>

### ● Test installation

<p>
<details>
<summary>Click to see full walkthrough!</summary>

After cloning repository, type into terminal to automatically install modules and libraries.

```bash
npm install
```

To run server,

```bash
npm run dev:server
```

```bash
npm run dev:assets
```

## <br>

<br>

### ● Installation MongoDB

    1. Access to the MongoDB homepage.

![homepage](https://oss-2020105657.s3.amazonaws.com/MongoDB+homepage.png)

    2. Select options and download MongoDB.

![options](https://oss-2020105657.s3.amazonaws.com/MongoDB+install.png)

    3. If this screen appears when installing MongoDB, please select 'complete' and proceed.

![precaution](https://oss-2020105657.s3.amazonaws.com/MongoDB+precaution.png)

    4. When you enter 'mongo' command in vsc terminal, it is installed well when the screen appears as below.

![image](https://oss-2020105657.s3.amazonaws.com/MongoDB+installation+well.png)

### ● To setting environment variable.

```bash
    -ps. When entering 'mongo' command in vsc terminal, skip this part if it runs well.
```

    1. Find folder where mongoDB is installed, and make a copy of the folder's route.

![image](https://oss-2020105657.s3.amazonaws.com/MongoDB+path.png)

    2. And you open the 'environment variable' page. If using window environment, you can use command (window + R) and input 'sysdm.cpl ,3'. And click 'environment variable'.

![image](https://oss-2020105657.s3.amazonaws.com/environment+window.png)

    3. You must find 'path' in 'system variable' categroy, not 'users variable'. If you find 'path' in 'system variable', then check 'path' and click 'Editing'.

![image](https://oss-2020105657.s3.amazonaws.com/Find+path+in+system+variable.png)

## <br>

<br>

### ● MongoDB Installation

    1. Access to the MongoDB homepage.

![homepage](https://oss-2020105657.s3.amazonaws.com/MongoDB+homepage.png)

    2. Select options and download MongoDB.

![options](https://oss-2020105657.s3.amazonaws.com/MongoDB+install.png)

    3. If this screen appears when installing MongoDB, please select 'complete' and proceed.

![precaution](https://oss-2020105657.s3.amazonaws.com/MongoDB+precaution.png)

    4. If you enter 'mongo' command in vsc terminal, it will be installed with the screen appearing as below.

![image](https://oss-2020105657.s3.amazonaws.com/MongoDB+installation+well.png)

### ● Setting environment variables

```bash
    -ps. When entering 'mongo' command in vsc terminal, skip this part if it runs well.
```

    1. Find the folder where mongoDB is installed, and copy the folder's route.

![image](https://oss-2020105657.s3.amazonaws.com/MongoDB+path.png)

    2. Open the 'environment variable' page. In Windows environment, you can use command (window + R) and input 'sysdm.cpl ,3'. Then, click 'environment variable'.

![image](https://oss-2020105657.s3.amazonaws.com/environment+window.png)

    3. You must find 'path' in 'system variable' categroy, not 'users variable'. If you find 'path' in 'system variable', then check 'path' and click 'Editing'.

![image](https://oss-2020105657.s3.amazonaws.com/Find+path+in+system+variable.png)

    4. Create a new environmental variable path using the Mongo db address you copied earlier.

![image](https://oss-2020105657.s3.amazonaws.com/make+new+environment+path.png)

    5. Please check if Mongo Db is working well refering to the fourth method of "MongoDB Installation".

### ● Nodejs Installation

    install node js.

</details>
</p>

## <br>

<br>

### ● Project Architecture

![image](https://cherriesbucket.s3.amazonaws.com/OSS_Project_Architecture.png)

## <br>

<br>

### ● Road Map

![roadmap](https://oss-2020105657.s3.amazonaws.com/roadmap.png)

## <br>

### ● How to fill .env file

    1. If you clone our repository and downloads required modules, make new '.env' file.
    2. Fill in the required values as shown below.

![image](https://oss-2020105657.s3.amazonaws.com/fill+env+file.png)

## <br>

<br>

### ● How to contribute our project

    1. Please fork our repository.
    2. Change your branch to 'develop'.
    3. Send pull request.

## <br>

<br>

### ● Contributor Contact

    Lee Se Jin : lsj8706@naver.com
    Kim Cherrie : cherriekim925@gmail.com
    Jung Seoung Hyun : jshbest00@khu.ac.kr

<br>

### ● API reference

[Programming Quotes API](quotes.stormconsultancy.co.uk/random.json)

[Trending-GitHub API](https://docs.trending-github.com/)

[GitHub Contributuions API](https://api.github.com/graphql/)

[Github Recent Repositories API](https://api.github.com/users/${githubNickname}/repos?sort=updated&per_page=2)

<br>
 
### ● License

    [MIT](https://choosealicense.com/licenses/mit/)
