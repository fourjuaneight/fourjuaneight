{
  "title": "Week Notes 7",
  "date": "2019-02-17",
  "draft": false,
  "category": ["weeknotes"],
  "showthedate": true
}

What the hell, I'll do the weeknotes thing as well. It's a good excuse to write some more on my blog. My problem isn't so much writing --I write every day on a journal just so I can get all the crap in my head out by the end of the day-- but rather writing here. So here's my first go at it.

## Meta
Before we start, I am aware that it says "Week Notes 7" when this is the first entry in the category. But instead of counting by entries, the number will correspond to the actual week number of the year. Why? I don't know; I like it better.

With regards to the format of this series, I'm not sure if I should go about it. I could do something like {{< link href="https://andy-bell.design/week-notes/" content="Andy Bell" >}} and {{< link href="https://paulrobertlloyd.com/articles/" content="Paul Robert Lloyd" >}} approach and have a breakdown of each day of the week. But I feel that will get boring soon. Most of my days a pretty similar; code, Podcasts, TV, cooking, and family time. The last will be excluded from the series for privacy reasons. However, I do like the {{< link href="https://daverupert.com/archive/" content="Dave Rupert" >}} approach of breaking down what he's read, watched, and listened to during the week that's of interest. I can add a Code section and highlight the "highlights" of the week. Yeah, let's do that.

## Code
I've been trying to make a backup app for my PC to run every night. I know there's a ton of consumer solutions out there but I had specific needs out of this, so I figured I'd just make my own app. Here's what I was looking for:
1. Create a folder in the backup drive whose name corresponds to the current date in ISO format.
2. Sync all the specified directories to that folder.
3. Sync that folder to a b2 instance.
4. Log the completion of each step (successful or not) to a log file.
5. Notify me via Slack whether it completed successfully or not.

That last step was the main thing I wanted because by the time the backup runs I'm offline and away from the computer. So I want to know if my stuff is backed up or not so I can make any fixes if need be. Also, I'm paranoid.

This was originally done with Python while practicing my Python, and that ran perfectly well. But I wanted to learn some Nodejs and thought I'd sin and rewrite the app in Node. And it works great! I've been working on this for some time but got the last touches done this week.

I'm using rclone and the Node Slack SDK. These run via child processes. SimpleNodeLogger handles the log.

{{< link href="https://github.com/fourjuaneight/backup-and-sync" content="You can view the code for the app here." >}}

## Digest
### Listen
20K Hertz never disappoints. And this weeks episode, {{< link href="https://www.20k.org/episodes/donotdisturb" content="Do Not Disturb" >}}, was a dive into the effects that the incessant barrage of notifications has to our brains. It's not good; that's the effect.

It's very hard to find silence these days with how omnipresent devices are. I, for one, have become accustomed to working with podcasts playing in the background. I don't seem to hamper my productivity, but I do find that going completely silent helps when I'm stuck on a problem; I can head my thoughts and works things out in my head. So I'm trying to stay in silence with no notifications more often. I already have most notifications on my phone and PC off by default, but during working hours I also opt for turning Do Not Disturb on. I've set my iPhone to bypass my wife's calls and texts so I don't have to worry about missing anything from her. And I've also managed to set a specific timeframe during the day where I answer to emails and Slack. I know this kinda defeats the purpose of the latter, but Slack is just messy email at this point.

I can't say how effective these things might be for everyone, but according to my RescueTime reports, I'm being a lot more productive. Try spending more time alone with your thoughts in silence and see how it goes.

### Watch
Kurzgesagt never disappoints with their videos. The quality of animation and content is one of the best and makes me wish I had this when I was a kid. Anyhow, this week's video talked about {{< link href="https://youtu.be/n3Xv_g3g-mA" content="Loneliness" >}} and it's effects. 

Working alone from home has some great benefits. Mainly working in pajamas every day. But it also means that you lose the benefits of physical interactions with your peers. A lot of the feelings behind a conversion are lost when they're done through screens. You quickly become accustomed to interacting with machines and not people. This can be detrimental to your social skills. Maybe I'm speaking for my self, but I have noticed I've become much colder in my emails and messages with clients over the years. I have the benefit of having my family at home at the end of each day, but I do spend many hours alone. And I do feel very much alone during that time, even if I'm occupied the majority of my time.

So, I'll be doing some things differently from now on. Walking does wonders for my problem solving so I think I'll start my days with a walk around the neighborhood. I live near a few schools and there a many dogs in the area so I'll bump into all sorts of people when I go out. Petting a few doggos every morning can't be anything but positive to my life. I'll also try to have more phone calls at work instead of communicating through messages. This will also save me some time since a 5-minute conversation can be stretched to an hour via email. And lastly, I'll start doing my groceries in person like a normal person instead of using Instacart and Amazon. Calling my wife during her breaks instead of texting will be also great.

### Read
Damn, things got deep. Let's lighten the mood and talk about how our corporate overlords suck at doing the thing they do the most: spying on us.

{{< link href="https://apenwarr.ca/log/20190201" content="Apenwarr" >}} wrote up a great article last month about how recommendation algorithms seem to do a poor job at recommending. He brings up an interesting point, which I don't hear often; sharing our usage and consumption information would be ok if the reason for gathering it (recommending more content) would be any good. Instead, we are blasted with what's likely to get there most clicks: controversial content. I value my privacy as much as anyone should nowadays, but I'm ok with sharing a bit of my info if I'm recommended things I'm likely to read/see/listen/buy. But it's never the case. I find more value out of using Twitter to see what other developers find interesting and want to share.

And many of these companies seem to gather anything they can on you just because it's the what everyone is doing and we all know that ML is the future right? But it's become more of a trend than a logical practice. Apenwarr does a much better job at expressing this point. It's a lengthy article but a great read.

## Closing Thoughts
I can't promise this series will be any less depressing than this. This is usually the type of stuff I listen/see/read. But I'll try my best to always have some interesting stuff to share. You can follow the series via the tag at the bottom of the article. It'll write every Sunday evening.