{
  "title": "The Ethics of Web Performance",
  "creator": "Tim Kadlec",
  "original": "https://timkadlec.com/remembers/2019-01-09-the-ethics-of-performance/",
  "category": ["articles"],
  "draft": false,
  "showthedate": true
}

One question I’ve seen posed a few times in the past several months is whether performance really is a moral or ethical concern, or if that’s all heavy-handed exaggeration.

It’s a fair question, I suppose. Advocates of any technique or technology can be a bit heavy-handed when it suits them if they’re not being careful–myself included. But I’m not sure if that’s the case here. When you stop to consider all the implications of poor performance, it’s hard not to come to the conclusion that poor performance is an ethical issue.

## Performance as exclusion
Poor performance can, and does, lead to exclusion. This point is extremely well documented by now, but warrants repeating. Sites that use an excess of resources, whether on the network or on the device, don’t just cause slow experiences, but can leave entire groups of people out.

There is a growing gap between what a high-end device can handle and what a middle to low-end device can handle. When we build sites and applications that include a lot of CPU-bound tasks (hi there JavaScript), at best, those sites and applications become painfully slow on people using those more affordable, more constrained devices. At worst, we ensure that our site will not work for them at all.

Forget about comparing this year’s device to a device a couple of years old. Exclusion can happen on devices that are brand-new as well. The web’s growth is being pushed forward primarily by low-cost, underpowered Android devices that frequently struggle with today’s web.

I recently profiled a page on a Pixel 2 (released in 2017), and an Alcatel 1x (released in 2018). The two devices represent very different ends of the spectrum. The Pixel 2 is a flagship Android device while the Alcatel 1x is a $100 entry-level phone.

On the Pixel 2, it took ~19 seconds for the site to become interactive.

On the Alcatel 1x, it took ~65 seconds.

Similarly, there is a growing gap between what a top of the line network connection can handle and what someone with a poor mobile connection or satellite connection can handle. We frequently position this issue as one around reaching a more global audience (and often, [it is](https://twitter.com/mattleibow/status/1063450298264551425)), but it can also hit much closer to home.

My home internet connection gives me somewhere around 3 Mbps down. It seems blazingly fast compared to the 0.42 Mbps download speed [Jake Archibald mentioned his relative getting](https://twitter.com/jaffathecake/status/1078632410420596736) or the 0.8 Mbps download speed my in-laws get at their house.

The cost of that data itself can be a barrier, making the web prohibitively expensive to use for many without the assistance of some sort of proxy technology to reduce the data size for them—an increasingly difficult task in a [web that has moved to HTTPS everywhere](https://meyerweb.com/eric/thoughts/2018/08/07/securing-sites-made-them-less-accessible/).

This isn’t just hyperbole. When I worked with Radio Free Europe a few years back, it was staggering to consider that many of the visitors of the site were breaking the law, jumping through hurdles and risking their livelihood to access the site. Poor performance was not an option.

The [YouTube feather story](http://blog.chriszacharias.com/page-weight-matters)—where they improved performance and saw an influx of new users from areas with poor connectivity who could, for the first time, actually use the site—is well documented by now. Other companies have had [similar stories that they’re unable to tell](https://twitter.com/dalmaer/status/1057466698272407552).

We can point the fingers at the networks and businesses behind them all we want for the high costs associated with connectivity, but the reality is that we play our own part in this with the bloated web we build.

## Performance as waste
Less often considered is the sheer waste that poor performance results in.

Let’s say that you’re one of those people with a device a year or two old. The web runs a little slower for you than it does for those with the latest phone off the shelf. It makes sense. Hardware gets better, sure. But just as critically sites are getting heavier and more computationally expensive. It’s not just that an older device will be less equipped to deal with the complexity of today’s sites, but also that it’s far less likely that the folks building those sites will have tested on your device.

This is a point Cennydd Bowles made in his excellent book, [Future Ethics](https://www.future-ethics.com/).

Software teams can reduce the environmental impact of device manufacturing, even if they don’t make devices themselves. Durable software not only saves the expense of frequent product overhauls; it also reduces the temptation of unnecessary device upgrades. Why buy a new handset when the old one works just fine?

Or, for our specific purposes, why would I need an expensive device with higher-powered CPU if the sites and applications run well on a lower-powered device?

Poor performance can also result in actually reducing the life-span of the devices we do have, even if we are able and willing to suffer through the slowness. Anything that is taxing on the processor (JavaScript, high-resolution images, heavy layout costs) is going to be taxing on the battery as well, causing wear and tear to the device.

It’s not just the short shelf-life of devices that is impacted by poor performance. Cennydd also makes the case that performance also has an impact on energy consumption:

In 2016, video, tracking scripts and sharing buttons caused the average website to swell to the same size as the original version of Doom. Ballooning bandwidth and storage have fostered complacency that we can do without. Performance is conservation. Habits like compressing images, reducing HTTP requests, preferring standards to third-party plugins, and avoiding video unless necessary have well-known benefits to usability, but are also acts of environmental protection.

Again, this isn’t hyperbole.

Just how much kWh are expended per one GB of data is up for some debate depending on your method of analysis. In a 2012 paper, [The American Council for an Energy-Efficient Economy estimated the internet uses 5 kWh on average to support every GB of data](https://aceee.org/files/proceedings/2012/data/papers/0193-000409.pdf). Let’s run with that for a second.

The [median desktop site](https://httparchive.org/reports/state-of-the-web#bytesTotal) (5 kWh was not looking at the energy consumption of mobile networks which is almost certainly significantly higher) is 1848 kb.

Let’s say just 2 billion people (somewhere around 4 billion are connected to the internet) view 5 pages at that weight in a day (surveys from 2010 showed the number to be around 10 sites on any given day, so I’m being overly safe here). That would be about 1,500,000 GB of data transferred on a single day. Based on the 5 kWh energy consumption estimate, we’re looking at spending 17.6 million kWh of energy to use the web every single day.

## Performance is an ethical consideration, now what?
When you look at the evidence, it’s hard to see one could argue performance doesn’t have ethical ramifications. So clearly, folks who have built a heavy site are bad, unethical people, right?

Here’s the thing. I have never in my career met a single person who set out to make a site perform poorly. Not once.

People want to do good work. But a lot of folks are in situations where that’s very difficult.

The business models that support much of the content on the web [don’t favor better performance](https://ethanmarcotte.com/wrote/bits/). Nor does the culture of many organizations who end up prioritizing the next feature over improving things like performance or accessibility or security.

There’s also a general lack of awareness. We’ve come along way on that front, but the reality is that a lot of folks are still not aware of how important performance is. That’s not a knock on them so much as it’s a knock on the way our industry prioritizes what we introduce to new folks who want to work on the web.

I don’t want it to sound like I’m making excuses for poor performance, but at the same time, I’m pragmatic about it because I’ve been there too. I’ve built sites that were heavier and less performant than I would have liked. It happens.

That it happens doesn’t make any of us bad people. But it does us no good to try to ignore the real repercussions of what we’re building either.

There are consequences to the way we build. Real consequences, felt by real people around the world.

Performance is an ethical issue, and it’s one each and every one of us can work towards improving.