{
  "title": "Week Notes 10",
  "date": "2019-03-13",
  "draft": false,
  "category": ["weeknotes"],
  "showthedate": true
}

## Code
- {{< link content="Dotfiles" href="https://github.com/fourjuaneight/dotfiles" >}}
I've been looking to improve my dotfiles setup. For those unfamiliar, these are the configuration files used by various apps. They host your preferences and setup. I've seen them more commonly use for development software like text editors, linters, and terminal apps.

I don't change machines often, but the few times I've had to have been tedious; spending several hours getting everything downloaded and configured. Of course, this sounds like a terrible first world problem, but it's also an opportunity to automate things. So that's what I've been trying to do with this repo. At its core, the repo does the following:

1. Keep an up to date version of all config file.
2. Host a script which downloads all the necessary files for my local development setup.

There are a few shell scripts that do the automatic download and setup part, while there's another repo with {{< link content="backup and sync" href="https://github.com/fourjuaneight/backup-and-sync" >}} scripts that handle the sync between the repo and local files on my machine.

I spent an inordinate amount of time this week getting this done and I'm still not 100% sure on the outcome. But hey, what's automation without spending more time on the configuration than what could've been a fraction of the time actually doing the task manually?

## Digest
One of the greatest joys of being a programmer is that you can usually make a tool yourself if you don't like what the consumer options are out there. Now, this should be taken which a grain of salt as the level of complexity for what that tool is can quickly increase dramatically. And I know plenty of coders who would rather spend $1k on a mediocre product that simply works out of the box than build one themselves for half the price. So this isn't a general opinion but rather mine and of that of several coders, but not all. Ok.

So, yeah, making your our shit. I like it. And sometimes it's the only solution for your needs.

### Read
- {{< link content="How a group of neighbors created their own Internet service" href="https://arstechnica.com/information-technology/2015/11/how-a-group-of-neighbors-created-their-own-internet-service/" >}}
The internet is an amazing thing that has brought me numerous opportunities. It allows many people worldwide to make a living by creating their own business with little to no infrastructure. But at times a solid and accessible connection is not available to many. And that doesn't necessarily mean a place with little resources; it can also be a small island in Washington state.

That's the case in this article. It chronicles groups of neighbors build a network of their own with consumer products for providing accessible and relatively inexpensive internet to everyone in the town. The alternative would be a slow and expensive consumer service which simply wasn't worth it.

I find this attitude fascinating. It goes back to what I said earlier, "you can usually make a tool yourself if you don't like what the consumer options are out there".

### Listen
- {{< link content="Homebrew" href="https://overcast.fm/+HZUedxjPo" >}}
The guys over at the Changelog had {{< link content="Homebrew" href="https://brew.sh/" >}} project lead {{< link content="Mike McQuaid" href="https://twitter.com/MikeMcQuaid" >}} to talk about how the package manager now supports Linux and Windows (via WSL). This on its own is a great reason to listen to the episode. They also had a great discussion towards the end about how then automate their new machine setup with a modified version of {{< link content="Thoughtbot's Laptop script" href="https://github.com/thoughtbot/laptop" >}}. I was completely unaware of this repo and it has some awesome stuff that could be useful if you're looking to create a similar setup yourself.

### Watch
- {{< link content="Goodbye Social Media" href="https://youtu.be/6DfP10OeDP0" >}}
Oh god, not another "leaving social media" video. At this point, it's become a trend to badmouth social media explain to others why you're leaving and why everyone else should. Are these the new vegans? Don't at me.

Anyways, I don't have a problem with social media. My Instagram feed is filled with webcomics and illustrators. That's the sort of thing I want to see and it's the least app I spend time on. 

My Twitter app of choice is Tweetbot. I have hundreds (which is by no means an exaggeration) of filters which remove anything and anyone I don't care to know about. This list seems to grow weekly. Which tells you a lot about the platform if I have to work this hard to make it a place I want to spend time in.

Reddit is definitely a time waster for me, though. I get lost in it for hours. But I don't go there as often.

So why bring this video up then? Beverages Casey mentioned several things I hadn't really thought about. He characterized his use of social media as "a destructive habit". Addiction is too strong a word in this context. He goes on to say "there's nothing behind it; no benefit; no upside". It's just  "mindless scrolling". So, if there's no benefit to it and all it does is make you waste time, what's the point. It's like I'm actually entertained by going into these apps. Comics are fun but that gets lost when I follow 70 of them. Twitter can be informative, but that is quickly lost in the noise of the rest and then there's nothing but the "mindless scrolling". Reddit does make me laugh. But I tend to spend hours there before bed and then it's late and I'm exhausted the next day.

I don't know. Maybe I'm beating on a dead horse and throwing words to the wind. Maybe I'm exaggerating a bit here. But I know one thing, I hate wasting my time. And that's exactly what I'm doing here.

Going back to the build-it-yourself theme (and leaving this gloomier one), I've been thinking of going back to just using RSS. But this time, carefully curating the content. Something like Feedbin allows for custom filters that hide the content you don't want. Even using something like IFTTT to capture feeds and automatically sending them to a read-it-later service like Pocket. This is something I've done for feeds I know I'll always read what they put out.