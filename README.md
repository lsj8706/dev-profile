# DEV-profile

### **A website for developers to get driven with motivation.**

KHU-Hub repo: [khuhub.khu.ac.kr/2018102216/dev-profile](https://khuhub.khu.ac.kr/2018102216/dev-profile)
<br>

## Main Features

- [x] your basic profile
- [x] random quotes **_for developers_** to motivate you :sparkles:
- [x] the amount of commits you've done on [GitHub](https://github.com/) at a glance
- [x] your most-contributed project on GitHub
- [x] today's trending repositories on GitHub
      <br>

### Additional Features

- [x] direct and easy login via GitHub
- [x] intuitive and easy-to-use structure

## <br>

### Home Page
    1. you can join or login with github.
    2. you can search.
![image](/uploads/f33744dd78985b881bfeff6162af0919/image.png)

### Myprofile Page
    1. You can see your profile information, github contributions, repositories, status at a glance.
![image](/uploads/63eae503a0eb49b22bbe545c3c0c859a/image.png)

### Editprofile Page
    1. You can input or change your informations.
![image](/uploads/55988a03a91f0dcd33656afe0ec04ff6/image.png)

### test installation

This is the usage just for the being.
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

<br>

### Installation MongoDB
    1. Access to the MongoDB homepage.
![homepage](https://oss-2020105657.s3.amazonaws.com/MongoDB+homepage.png)
    
    2. Select options and download MongoDB.
![image](/uploads/46038b5c881bb18074dd8e732804f5d7/image.png)
    
    3. If this screen appears when installing MongoDB, please select 'complete' and proceed.
![image](/uploads/510d184825d6eaf04dcb2d254f03b918/image.png)
    
    4. When you enter 'mongo' command in vsc terminal, it is installed well when the screen appears as below.
![image](/uploads/202bf8555f6842938d15c6e3b0e789c1/image.png)
    
### To setting environment variable.
    ps. When entering 'mongo' command in vsc terminal, skip this part if it runs well.
    
    1. Find folder where mongoDB is installed, and make a copy of the folder's route.
![image](/uploads/93b13c8df931ef11781d21ad574ee441/image.png)
    
    2. And you open the 'environment variable' page. If using window environment, you can use command (window + R) and input 'sysdm.cpl ,3'. And click 'environment variable'.
![image](/uploads/64278904603d6b3cdb78a0689695344a/image.png)
    
    3. You must find 'path' in 'system variable' categroy, not 'users variable'. If you find 'path' in 'system variable', then check 'path' and click 'Editing'.
![image](/uploads/9077ec8854585640dfb526e45cbcb3fb/image.png)
    
    4. Create a new environmental variable path using the Mongo db address you copied earlier.
![image](/uploads/0018e1de51ae1c10cc9a5d5bc01fcf9d/image.png)
    
    5. Please check if Mongo Db is working well in fourth method of "Installation MongoDB".

### How to contribution our project.
    1. Please fork our repository.
    2. Change your branch to 'developer'.
    3. Send pull request.
    
### How to fill .env file.
    1. If you clone our repository and downloads required modules, make new '.env' file.
    2. Fill in the required values as shown below.
![image](/uploads/cbdf2726a8b5c6326378cd5fa8295726/image.png)
    
### API reference

[Programming Quotes API](quotes.stormconsultancy.co.uk/random.json)

[Trending-GitHub API](https://docs.trending-github.com/)

[GitHub Contributuions API](https://api.github.com/graphql/)

<br>
\\<!--[GitHub Repositories API]

### Libraries

### License

[MIT](https://choosealicense.com/licenses/mit/)
