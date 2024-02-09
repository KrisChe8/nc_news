# Norhcoders News App

Northcoders News App is a single-page C.R.U.D. application I built during a front-end project week of the Northcoders Bootcamp.
Northcoders News App connects to the backend API and database, which I built during a back-end project week of the Northcoders Bootcamp.

# Front-End
- **The application :** https://app-nc-news.netlify.app/
- **GitHub Repo Link:** https://github.com/KrisChe8/nc_news

# Back-End
- **Back-End - Live API:** https://nc-news-24h6.onrender.com/api
- **GitHub Repo Link:** https://github.com/KrisChe8/NC_News_API


## Technical Skills:
- React + Vite
- Axios
- HTML, CSS
- useEffect/useState
- React Router


# Description

NC News - a social news aggregation, web content rating and discussion website. 
NC News is a single-page application, but because of the using React Router a user will receive all the advantages of routing behavior (i.e. sharing links with friends of a certain article).

#### Navigation

On the top of the app - there is a navigation menu that allows users to
- return to the main page - Home tab; 
- choose and sort all articles by topic - Topics tab - all available topics are fetched from the database;
- write and post a new article - Add New Article tab - will redirect you to the form to be completed if you would like to post an article.
On the top right of the app - there is a username who has logged in.
For a demonstration purpose, the active user was hardcoded - grumpy19. The main aim is to show that only registered users are allowed to write and post a new article, leave comments and delete your own comments as well. 

#### Home page 

renders articles of all topics sorted by the date of publication: new comes first.
There is also an additional navigation bar allowing the user 
- to choose how to display articles: 
old first
new first
- to sort articles by: 
Votes from High to Low (an article that has the most number of likes comes first), 
Votes from Low to High - just reverse display;
Comment count from High to Low (article that has more comments on it comes first),
Comment count from Low to High - just reverse display.

Each article card on the Home page also includes some navigation:
- title of the article - click on it and you will be redirected to the page of this article;
- Created by: author - click on author to see all articles of this author;
- on the bottom left of the card there is a Topic name, which also is clickable and allows you to sort all articles by the Topic name.

#### Single Article

displays an article,
allows users to "like"/"dislike" articles,
add a new comment,
delete your own comment,
"like"/"dislike" comments

#### Add New Article

page with a form of adding a new article.
Title, topic and article body - are required fields and the form would not allow you to submit (send) it until you fill them in.
Img URL - is optional.

#### Errors

Bad route errors result in the Error page with a relevant  400/404 message.
If errors occur while voting or posting/deleting comments - a user will receive a message.

# How to copy and run this app locally

Please ensure you have [Node.js](https://nodejs.org/en/download/) installed.

To check that you have Node.js installed correctly on your computer, type in your terminal

```
node --version
```

and you should see the current Node.js version installed.

This project was built using Node.js v15.5.1 version.

### Clone the repository
To run the application locally, you will need to clone the repo. Navigate to the folder, where you would like to save repo and work from and using the terminal window run:

```
git clone https://github.com/KrisChe8/nc_news.git
```

### Dependencies 
Once cloned, you need to install the necessary dependencies. In the terminal run the command:

```
npm install
```

### Run the app:

- To run the app and be able to load the app in your Browser run the following command in the CLI:

```
$ npm run dev
```

## Author

* **Kristina Chernobai** - *Northcoders Student* - [northcoders.com](https://northcoders.com)


