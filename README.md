#Titan Beats 

## Contributors

1. Clone the Repo

```sh
git clone https://github.com/Serjeel-Ranjan-911/Titan-Beats.git
```

2. Install Packages

```sh
npm i
```

3. Starting Node Server

```sh
npm run node-server
```

4. Open broswer at 127.0.0.1:3000

### For working on front end

run these two commands simultaneously on two consoles

```sh
npm run compile:sass
npm run node-server
```

### Be careful while compiling sass

    "compile:sass": "node-sass menu.scss public/css/menu.css -w"

    "compile:sass": "node-sass desert.scss public/css/desert.css -w"

In package.json make sure to set the entry point and exit point for sass correctly before running compile:sass command.

### Before making a pull request

1. Properly naming your branch

    "issue-"+"issue number"+"purpose"

eg. issue-30-fix-theme-btn

commit the changes to your created branch

2. Dont't forget to [link pull request to the issue](https://docs.github.com/en/enterprise-server@2.21/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue).

eg. fixes #30


<hr>

**Note:**

The App currently serves music from server.  
Special thanks to [Pixabay](www.pixabay.com).

Waiting for their music API.

<hr>

<p align="center">
  <img src="https://i.gifer.com/VR0F.gif" width="350" height="350"/>
</p>

Happy Coding!