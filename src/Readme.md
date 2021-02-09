# Shelf Application

As usual, we starting new projects based on our family needs. My mother loves to read and she has tons of books in her library (I mean, my old room now is a book room, at that level).
So, my idea is to develop first a Backend Node App to help her with the stock of her books but also, in the future, doing something like GoodReads.com, where she can search books and keep them in her library.

This is only a first draft. I've just started a couple of days ago.

## Techs
- Node.js
- Typescript (I believe that's important for ambitious project. Most of my experience is in Java, so working with Typescript helps me to remind it ha.)

### TODO
- Mongoose. NoSQL database are great to store and get data really fast, and working with MongoDB is a true fact of that.
- Firebase. Deploy an app is quite fast and easy with this tool, so I'll use it (at least for now)
- CI/CD. I believe that tests are a huge part of a Project. This is a must. I need to implement some test using Mocha and Jest and then doing a automatic deploy to Firebase thanks to GitHub Actions.


## To Run
- Create a folder **"environment"**
- Inside that folder create a **.env** file
- Paste this: 
 ```
NODE_ENV='dev'
APP_PORT=3000
 ```
- Execute ```npm install```
- ```npm run start```