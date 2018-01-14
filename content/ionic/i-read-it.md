---
title: "I Read It"
date: 2018-01-14T19:42:39+01:00
featured_image: "/img/i-read-it.jpg"
draft: false
---

It is a social network for readers and reviewers, a place where readers can write reviews about books they read and love, read others reviews, follow them, and receive real time notifications about reviews they write and the quotes they choose to share.
Also, people can save reviews so that they could read of share them later.

## Main benefit
A reviewer can invite a friend to complete his review about a given book so they give a better review and spot the best of the best quotes.
And then there is two ideas that will be implemented later, it is about a Medium like part, because often readers like to write some short articles, the other one is a epub reader.
Then `I Read It` will offer kind of “reading watcher” that will engage two or three readers, let’s say a girl and a boy will read a book in one or two weeks and during reading period they will discusses about the book with a public reading access for other users. 

## Techniclly speaking
It Is a hybrid mobile application that runs on android and IOS, an Ionic based application (a framework built on top of Angular and Cordova).
The application can be divided into 4 parts:

* Front part: based on ionic out of the box components, and then custom ones built with Angular and Sass

* Client’s Side Logic: a reactive like programming using RXJS, and some angular specifics (Service injections, Pipes …).

* Server Side: Firebase Real-time database, Firebase Functions (Event Driven Programing using Node).

* Authentication Module: right now, it uses Firebase authentication and OAuth, but for production there is auth0 solutions that can be implemented. 


## Comparing to Goodreads
If we compare `I Read It` with Goodreads: 
Goodreads main feature is ranking books by the number of readers who mark a book as read and the number of starts given by those readers.
But `I Read It` is based on the interaction with books not by ranking them but by ranking reviews and quotes, (ex: how much a book’s quotes were shared on social media). 
With `I Read It` people can see top quotes about themes they are searching so that they can share and write awesome posts on Facebook, twitter, … 
Otherwise Goodreads and `I Read It` provide different features.
