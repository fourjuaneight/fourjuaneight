+++
title = "Automating RSS Feeds With IFTTT"
date = "2017-07-31"
draft = false
tags = ["ifttt"]
showthedate = true
aliases = [
    "/post/Automating%20RSS%20Feeds%20With%20IFTTT/",
    "/2017/07/31/automating-rss-feeds-with-ifttt/"
]
+++

The surplus of news site today can quickly take over your time with flashy images and clickbait titles. Whether it’s a new gadget or the US president going on a Twitter rant, getting your news has become an overwhelming endeavor.

For as long as I can remember, RSS feeds have been my go to method for consuming online news. Some time ago I began using [Inoreader](http://www.inoreader.com) for its powerful filters. But there’s just too much stuff to scroll through every day — although lately, it seems like every hour —  that I simply miss things. I have dozens of filters setup per site. But I don’t read anything off of Inoreader as it’s simply a tool to group all my feeds in one place; at least that’s how I use it. As a result, I’ve created various folders on [Instapaper](https://www.instapaper.com/) that categorize articles in a clean format, with offline reading and text-to-speech available.

But now we have the laborious process of scrolling through feeds, saving them on Instapaper and moving them to respective folders. I know, first world problems. These are all web technologies, so why not have them talk to each other and work on their own? So that’s what I did.

## IFTTT Platform
I’ve been using [IFTTT](https://ifttt.com/) since day one and have amassed over a hundred applets for various IoT gadgets and social media. But then I came across the [Maker](https://platform.ifttt.com/) program. It allows you to create multi-step applets with filters and publish them for anyone to use. Obviously, filters were what caught my attention.

I’d already setup some applets that took every new post from a feed and saved it on Instapaper to a determined folder. But now, I could do what I’d done on Inoreader and filter out words in title, authors, and content.

With a little JavaScript and Regular Expressions you can go a long way. Take for example the code below:
``` js
var string = Feed.newFeedItem.
EntryTitle,
expr = /\s\W(Link)\W/;

if (string.match(expr)) {
  Instapaper.saveItem.skip()
}
```
[Filters](https://platform.ifttt.com/docs/applets#using-filter-code) come with predetermined trigger data and actions specific to the services you are using. What I did was put the title string in a variable and created another with a regular expression that matches the string _[Link]_. The conditional statement then matches the regular expression with the title string _[Link]_. If found, the function is run, which skips the article.

If you’s not familiar with much JavaScript or [Regular Expressions](https://regexone.com), that’s ok. The [subreddit](https://www.reddit.com/r/ifttt/) and [Discord](https://discordapp.com/invite/IFTTT) server for IFTTT are great places to get started and ask for help. You’ll often find pre-made filters that might serve your particular needs.

## Twitter As A Feed
There are, however, some website which posts way too often for me to through in IFTTT. I mostly follow tech and science blogs which post occasional high-quality articles and automating these works just fine. But if I want to read The Verge or CityLab, Twitter does a better job showing me the latest news.

Personally, I use [Twitterrific](https://itunes.apple.com/us/app/twitterrific-5-for-twitter/id580311103?mt=8) as my client for its powerful features. [Muffles](http://twitterrific.com/ios/), in particular, do wonders for me, especially during Game of Thrones.

I’ve created several muffles for words and hashtags that keep my timeline free of spoilers and unwanted tweets. From there, any link I click on opens up a Safari View Controller with Reader View automatically on. If it’s too long for me to read, then I just save it to Instapaper.

To many, this might seem like a convoluted problem of my own making without the need for a solution this complex. If that’s the case, then do what best works for you. This method works wonderfully for me because I’m easily distracted with clickbait titles. Having everything organized on its own just to go and read what I want at a set time, avoids unnecessary distractions.
