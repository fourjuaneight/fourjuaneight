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

For as long as I can remember, RSS feeds have been my go to method for consuming written media. Some time ago I began using [Inoreader](http://www.inoreader.com) for its powerful filters. But there’s just too much stuff to scroll through every day — lately, it seems like every hour. I have dozens of filters setup on Inoreader, but I don’t read anything off of it as it’s simply a tool to group all my feeds in one place. As a result, I’ve created various folders on [Instapaper](https://www.instapaper.com/) that categorize articles in a clean format, with offline reading and text-to-speech available.

But now I have the laborious process of scrolling through feeds, saving and organizing them into their respective folders. I know, first world problems. Luckily these are all web apps, so why not have them talk to each other and work on their own?

## IFTTT Platform
I’ve been using [IFTTT](https://ifttt.com/) since day one and have amassed over a hundred applets for various uses. But then I came across the [Maker](https://platform.ifttt.com/) program. It allows you to create multi-step applets with filters and publish them for anyone to use. Filters caught my immediate attention.

I’d already setup some applets that saved and categorized new blog posts on Instapaper. But now I could filter out words in title, content, or URL.

With a little JavaScript and Regular Expressions you can go a long way. Take for example the code below:
``` js
var string = Feed.newFeedItem.
EntryTitle,
expr = /\s\W(Link)\W/;

if (string.match(expr)) {
  Instapaper.saveItem.skip()
}
```
[Filters](https://platform.ifttt.com/docs/applets#using-filter-code) come with predetermined trigger data and JavaScript functions specific to the services you are using. What I did was put the title in a variable and created another with a regex that matches the string `Link`. If found, the function runs, which skips the post.

If you’re not familiar with JavaScript or Regular Expressions](https://regexone.com), the [subreddit](https://www.reddit.com/r/ifttt/) and [Discord](https://discordapp.com/invite/IFTTT) server for IFTTT are great places to get started and ask for help.

## Twitter As A Feed
There are, however, some website which post way too often for me to automate through IFTTT. I mostly follow tech and science blogs which post occasional high-quality articles and automating these works just fine. But if I want to read The Verge or CityLab, Twitter does a better job showing me the latest posts.

Personally, I use [Twitterrific](https://itunes.apple.com/us/app/twitterrific-5-for-twitter/id580311103?mt=8) as my client for its powerful features. [Muffles](http://twitterrific.com/ios/), in particular, do wonders for me, especially during Game of Thrones.

I’ve created several muffles for words and hashtags that keep my timeline free of spoilers and unwanted tweets. From there, any link I click on opens up a Safari View Controller with Reader View automatically on. If it’s too long for me to read, then I just save it to Instapaper.

To many, this might seem like a convoluted problem of my own making without the need for a solution this complex. If that’s the case, then do what best works for you. This method works wonderfully for me because I’m easily distracted with clickbait titles. Having everything organized on its own just to go and read what I want, avoids unnecessary distractions.
