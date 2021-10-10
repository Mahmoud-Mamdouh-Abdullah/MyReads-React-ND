# MyReads-React ND
This is the first project in Advanced Front-End Web Development with Udacity and FWD. the goal of this project to demonstrate understanding of the basic structure and operation of a React-based app.
 
 ## App Demo
 https://user-images.githubusercontent.com/49378579/136682958-076202e1-3aca-4bf6-910d-5eac5b4897e9.mp4 
 
 
 #### And you can use the website via this link : <a href='https://mahmoud-mamdouh-abdullah.github.io/MyReads-React-ND/'>MyReads: A Book Tracking App</a>
 
 
 ## TL;DR

To get started and try the app:

* install all project dependencies with `npm install`
* start the development server with `npm start` or `yarn start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of your app.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── Book.js # the book component that hold the image, title and the authors.
    ├── Shelf.js # this component act as the shlef. there are 3 shelves and each one holds the books related to this shelf.
    ├── Home.js # this is the home page that show the 3 shelves and the books in each one.
    ├── Search.js # the search component has Main component and there is an input appear in the header in the search page to write the text in it.
    ├── Main.js # this compnent contains a header and banner, the header shows in the home and search and the banner shows in the home only.
    ├── BookDetails.js # we can press on the book image and will take us to this component which shows the book details.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    |   ├── arrow-drop-down.svg
    |   ├── icons8-facebook-240.png
    |   ├── icons8-ibooks-48.png
    |   ├── icons8-linkedin-240.png
    │   └── icons8-twitter-240.png
    ├── images # contains some helper images
    |   ├── alfons-morales-YLSwjSy7stw.jpg -> this is the banner image.
    |   ├── default.jpg -> and this is the default image when the book has no image.
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This project is built from scratch by me with some helping from the <a href='https://github.com/udacity/reactnd-project-myreads-starter' target='_blank'>starter project</a> App.css.

