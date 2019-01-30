{
  "title": "How to Feed the Birds",
  "creator": "Lacey Williams Henschel",
  "original": "https://superyesmore.com/how-to-feed-the-birds-b6dfe758ae0ae56cac2ee0cc261ef4d0",
  "category": ["articles"],
  "draft": false,
  "showthedate": true
}

This is a metaphor about birds and squirrels and code.

When confronted with a section of code that's messy and hard to understand in what is now your yard, so to speak, it's easy to want to cast blame and curse those that came before you and left you this mess without so much as a letter explaining how they got here.

I moved into a new house in December. The previous owners clearly cared about birds: they left us a bird bath, a hummingbird feeder, two tray feeders for bird seed (one covered and one uncovered) mounted atop a red fence, and a cage that I discovered was a suet feeder, which was empty and hung from the fence just underneath the covered tray feeder.

If you're not familiar with the many varieties of bird feeders, [this](https://www.flickr.com/photos/pavdw/15848215863/) is a suet feeder, while [this](https://www.flickr.com/photos/bobolink/5023769265/) is a tray feeder.

Bird watching in my backyard became my new hobby. I received books on identifying and attracting birds for Christmas and learned that Western scrub-jays, Steller's jays, black-capped chickadees, Oregon juncos, spotted towhees, and Anna's hummingbirds really like my yard, even in the cold of winter. From my new book, I learned that winter is the time to fill the cage-shaped feeders with little cakes of suet and seeds. A quick trip to the store and a dollar got me a suet cake to fill my feeder.

As I tried to put the cake into the feeder, I discovered a few things:

  1. The suet feeder was zip-tied shut. 
  2. The suet feeder was physically chained to the tray feeder, not just hung on a nail as I'd thought. 
  3. The chain was rusty and broke as soon as I pulled on it. 

I snipped the zip-tie, filled the feeder with the tasty cake, closed the feeder, and used the broken chain as best I could to hang the feeder back up. The cage itself snapped shut. Surely the zip-tie was a sign of overcaution on the part of the prior owner, I thought. I didn't bother replacing it. I also didn't chain the feeder to the fence.

The next morning, the suet feeder was gone. I don't mean the cake was gone; I mean the whole cage was no longer hanging on the fence. When I went outside to investigate, I found the opened and empty cage in the garden bed below the fence where the feeder had been mounted.

What the hell?

Back to the feed store I went for a new cake and a new chain, and soon I had refilled and remounted the feeder.

I will spare you the play-by-play of the next few frustrating weeks, but I learned several things.

First, the suet feeder was zip-tied shut because squirrels are assholes. Squirrels can use their little claws to open the cage feeders that simply snap shut, so one must guard against this with something like a zip tie. I tried a small carabiner and a length of wire, but nothing lasted more than a couple of days before the squirrels had forced open the cage.

Second, the reason that the cage was so firmly chained to the fence was also because squirrels are assholes. Squirrels can knock the cage down from the nail pretty easily if it's just hanging. Once the cage is on the ground, even if they can't open the cage, they will reach in and claw at the birds' cake piece by piece until it's all gone.

Finally, the existing chain was so rusted because it had been there a long time. The prior owners weren't overly cautious. They weren't weird, territorial birders afraid their neighbors would come steal their suet cakes. They were guarding against the scourge of the asshole squirrels that plagued their yard.

So why am I writing about this on a website about technology?

This experience reminded me of the times that I've encountered a new codebase and been confronted with what we (lovingly) call [spaghetti code](https://en.wikipedia.org/wiki/Spaghetti_code). Most of us are familiar: there's a bug somewhere, left by someone who is long gone, that we must now fix. We get into the code and realize that it's incredibly difficult to understand. Maybe there aren't tests, or at least not enough of them. Maybe there aren't comments, or the comments are dated, or don't make any sense. The conditional statements are nested so many layers deep that who even knows what line triggered this bug?

My first instinct is to figure out what this mess of code is supposed to do and refactor it until it's easier to read. I want to discard the rusted chains, throw away the weird zip-ties, and just refill the container as I know it should be. It seems easy enough.

And then things are broken worse than when I started. The squirrels take over the code and nothing works anymore.

How we deal with this spaghetti — the rusty chains and zip-ties with no explanations — depends on the situation. I'm afraid I don't have universal wisdom for solving these problems.

But I do have empathy. The developer — or, more likely, several developers over time — came in just as I did with a specific problem to solve. They had birds to feed. But the birds weren't getting fed, and in the process of trying to figure out why the birds were hungry despite the food being put out for them, they tried different solutions. The zip-tie worked… until it didn't. The chain worked… but only if the zip-tie was there. And now it's very hard to figure out how to feed the birds. Maybe the zip-ties the last developer used worked to keep out most of the squirrels, but then a new, stronger squirrel showed up. Maybe they had to add that extra chain because a larger bird showed up and started accidentally knocking the feeder down. Who knows what the situation was when the code was written?

When confronted with a section of code that's messy and hard to understand in what is now your yard, so to speak, it's easy to want to cast blame and curse those that came before you and left you this mess without so much as a letter explaining how they got here. I have to remember, though, that I too have written code that got the job done, but maybe not in the most elegant way. My code kept out the squirrels, but made it harder for the next person to feed the birds.

There is probably a good reason that the code currently frustrating you was written in the way it was, and that reason probably isn't that the developer was acting irrationally. They were more likely acting under stress: a quick deadline, a massive bug that needed to be squashed right now. There is a lesson here, though: even in the middle of writing code that is not our best, we can help the next person by leaving comments about our decisions and their consequences. A surprisingly-secured bird feeder probably doesn't warrant a full explanation, but code that was hard to write and is difficult to maintain deserves some breadcrumbs for the next person who will need to step in and make sure the birds are being fed.

For my part, I abandoned the suet feeder on the fence and hung a new one from the porch. It's harder for the squirrels to get to and the chickadees love it. In my case, the best solution was to scrap the old feeder and start over in a new location. "Burn it down and start over" isn't always the best policy, though. You might need better zip ties, or a new chain, or to break up your feeder into smaller, easier to fill feeders. Just remember to breathe, be adaptable, and have empathy for the ones who came before you.

And watch out for asshole squirrels.