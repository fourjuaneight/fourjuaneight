{
  "title": "The Great Divide",
  "creator": "Chris Coyier",
  "original": "https://css-tricks.com/the-great-divide/",
  "category": ["articles"],
  "draft": false,
  "showthedate": true
}

Two front-end developers are sitting at a bar. They have nothing to talk about.

Let’s say there is a divide happening in front-end development. I feel it, but it's not just in my bones. Based on an awful lot of written developer sentiment, interviews Dave Rupert and I have done on [ShopTalk](https://shoptalkshow.com/), and in-person discussion, it’s, as they say... a thing.

The divide is between people who self-identify as a (or have the job title of) front-end developer, yet have divergent skill sets.

On one side, an army of developers whose interests, responsibilities, and skill sets are heavily revolved around JavaScript.

On the other, an army of developers whose interests, responsibilities, and skill sets are focused on other areas of the front end, like HTML, CSS, design, interaction, patterns, accessibility, etc.

Let’s hear from people who are feeling this divide.

In response to our post, ["What makes a good front-end developer?"](https://css-tricks.com/what-makes-a-good-front-end-developer/), Steven Davis [wrote](https://css-tricks.com/what-makes-a-good-front-end-developer/#comment-1652648):

I think we need to move away from the term myself. We should split into UX Engineers and JavaScript Engineers. They are different mindsets. Most people are not amazing at both JavaScript and CSS. Let UX Engineers work closely with UX/Design to create great designs, interactions, prototypes, etc. and let JavaScript Engineers handle all the data parts.

So sick of being great at CSS but being forced into JavaScript. I'm not a programmer!

This schism isn't happening under our feet. We're asking for it.

I heard it called an identity crisis for the first time in Vernon Joyce's article, ["Is front-end development having an identity crisis?"](https://dev.to/assaultoustudios/is-front-end-development-having-an-identitycrisis-2224) He points to the major JavaScript frameworks:

Frameworks like Angular or libraries like React require developers to have a much deeper understanding of programming concepts; concepts that might have historically been associated only with the back end. MVC, functional programming, higher-order functions, hoisting... hard concepts to grasp if your background is in HTML, CSS, and basic interactive JavaScript.

This rings true for me. I enjoy working with and reading about modern frameworks, fancy build tools, and interesting data layer strategies. Right now, I'm enjoying working with React as a UI library, Apollo GraphQL for data, Cypress for integration testing, and webpack as a build tool. I am constantly eying up CSS-in-JS libraries. Yet, while I do consider those things a part of front-end development, they feel cosmically far away from the articles and conversations around accessibility, semantic markup, CSS possibilities, UX considerations, and UI polish, among others. It feels like two different worlds.

When companies post job openings for "Front-End Developer," what are they really asking for? Assuming they actually know (lolz), the title front-end developer alone isn't doing enough. It's likely more helpful to know which side of the divide they need the most.

Who gets the job? Who's right for the job? Is the pay grade the same for these skill sets?

My hope is that the solution is writing more descriptive job postings. If clearly defined and agreed upon job titles are too much of an ask for the industry at large (and I fear that it is), we can still use our words. Corey Ginnivan [put it well](https://twitter.com/CoreyGinnivan/status/1082455681037262849):

I'd love more job descriptions to be more vulnerable and open — let people know what you want to achieve, specify what they'll be working on, but open it as a growth opportunity for both parties. 

This seemed to work pretty well for us at CodePen. Our own Cassidy Williams said she really appreciated this writeup when Rachel Smith sent it to her to consider.

"Front-end developer" is still a useful term. Like Mina Markham [described to us](https://shoptalkshow.com/episodes/332-how-to-think-like-a-front-end-developer-with-mina-markham/) recently, it's who people that primarily work with browsers and people using those browsers are. But it's a generic shorthand, says Miriam Suzanne:

Front-end developer is shorthand for when the details don't matter. Like being in an indie-rock band — who knows what that is, but I say it all the time. Shorthand is great until you're posting a job description. When the details matter, we already have more detailed language — we just have to use it.

To put a point on this divide a bit more, consider this article by Trey Huffine, ["A Recap of Frontend Development in 2018."](https://levelup.gitconnected.com/a-recap-of-frontend-development-in-2018-715724c9441d) It's very well done! It points to big moments this year, shows interesting data, and makes predictions about what we might see next year. But it's entirely based around the JavaScript ecosystem. HTML is only mentioned in the context of JavaScript-powered static site generators and CSS is only mentioned in the context of CSS-in-JS. It's front-end development, but perhaps one half of it: the JavaScript half. If you read that summary and don't connect with much in there, then my advice would be:

That's OK. You can still be a front-end developer. 🙏

You might be exploring layout possibilities, architecting a CSS or design system, getting deep into UX, building interesting animations, digging into accessibility, or any other number of firmly front-end development jobs. There's more than enough to go around.

Remember just last last year how Frank Chimero, who builds incredibly great websites for himself and clients, was [totally bewildered](https://frankchimero.com/writing/everything-easy-is-hard-again/) with where front-end development had gone? To summarize:

... other people’s toolchains are absolutely inscrutable from the outside. Even getting started is touchy. Last month, I had to install a package manager to install a package manager. That’s when I closed my laptop and slowly backed away from it. We’re a long way from the CSS Zen Garden where I started.

A long way indeed. I might argue that you don't have to care. If you've been and continue to be successful building websites any way you know how for yourself and clients, hallelujah! Consider all this new toolchain stuff entirely as an opt-in deal that solves different problems than you have.

And yet, this toolchain opaqueness prods at even the people necessarily embedded in it. Dave Rupert documents a real bug with a solution buried so deep that it's a miracle it was rooted out. Then he [laments](https://daverupert.com/2019/01/angular-autoprefixer-ie11-and-css-grid-walk-into-a-bar/):

As toolchains grow and become more complex, unless you are expertly familiar with them, it’s very unclear what transformations are happening in our code. Tracking the differences between the input and output and the processes that code underwent can be overwhelming.

Who needs these big toolchains? Generally, it's the big sites. It's a bit tricky to pin down what big means, but I bet you have a good feel for it. Ironically, while heaps of tooling add complexity, the reason they are used is for battling complexity. Sometimes it feels like releasing cougars into the forest to handle your snake problem. Now you have a cougar problem.

The most visible discussions around all of this are dominated by people at the companies that are working on these big and complex sites. Bastian Allgeier [wrote](https://twitter.com/bastianallgeier/status/1073529690097356800):

Big team needs "x" that’s why "x" is the best solution for everyone. I think this is highly toxic for smaller teams with different requirements and definitions of what’s "maintainable" or "sustainable". I get in touch with a lot of smaller agencies and freelancers from all over the world and it's interesting how their work is often completely detached from the web’s VIP circus.

What is going on here? What happened? Where did this divide come from? The answer is pretty clear to me:

## JAVASCRIPT DUN GOT BIG
So big:

  * It's everywhere on the front end of websites. The major JavaScript front-end frameworks are seeing explosive growth and dominating job postings. These frameworks are used by loads of teams to power loads of websites. Native JavaScript is evolving quickly as well, which has lots of people excited.
  * It powers backends, too. Your site might be powered by or involve a Node.js server. Your build process is likely to be powered by JavaScript.
  * Third-party JavaScript powers so many front-end features, from a site's ad network and analytics to full-blown features like reviews, comments, and related content.
  * Concepts like Node-powered cloud functions, storage, and authentication, combined with low-cost and low-effort scalable hosting, have empowered the crap out of JavaScript-focused front-end developers. They can use their skills exclusively to ship entire functional products.

A front-end developer with a strong JavaScript skill set is wildly empowered these days. I've been calling it [the all-powerful front-end developer](http://www.youtube.com/watch?v=grSxHfGoaeg), and I did a whole talk on it.

Through all the possibilities that swirl around the idea of [serverless](https://thepowerofserverless.info/) combined with prepackaged UI frameworks, a front-end developer can build just about anything without needing much, if any, help from other disciplines. I find that exciting and enticing, but also worthy of pause. It's certainly possible that you become so framework-driven going down this path that your wider problem-solving skills suffer. I heard that sentiment from Estelle Weyl who goes so far as to say she thinks of developers more as "framework implementers," reserving the title of engineer for tool-agnostic problem solvers.

This front-end empowerment is very real. Particularly in the last few years, front-end developers have gotten especially powerful. So powerful that [Michael Scharnagl says](https://justmarkup.com/log/2018/11/just-markup/) he's seen companies shift their hiring in that direction:

What I am seeing is that many developers focus entirely on JavaScript nowadays and I see companies where they replace back-end developers with JavaScript developers.

What some don’t understand is that a JavaScript developer is not per se a front-end developer. A JavaScript developer may not like to write CSS or care about semantics. That’s the same way I prefer not to work directly with databases or configure a server. That’s okay. What is not okay is if you don’t want to use something and at the same time tell others what they do is easy or useless. Even worse is if you try to tell experts in their field that they are doing it all wrong and that they should do it your way.

And Jay Freestone [takes a stab at why](https://www.browserlondon.com/blog/2019/01/02/front-end-2019-predictions/):

Over the last few years, we’ve started to see a significant shift in the role of the front-end developer. As applications have become increasingly JavaScript-heavy there has been a necessity for front-end engineers to understand and practice architectural principles that were traditionally in the domain of back-end developers, such as API design and data modeling.

It's happened even with my own small scale work. We were looking for a back-end Go developer to help evolve our web services at CodePen. When we didn't have a lot of luck finding the perfect person, we decided to go another direction. We saw that our stack was evolving into something that's extremely welcoming to JavaScript-focused front-end developers to the point where we could easily put more of them to work right away. So that's what we did.

There may be a cyclical nature to some of this as well. We're seeing coding schools absolutely explode and produce fairly talented developers in less than a year. These code school graduates are filling labor gaps, but more importantly, as Brad Westfall tells me, starting to lead industry discussions rather than be passive followers of them. And make no mistake: these schools are producing developers on the JavaScript side of the divide. Every single code school web development curriculum I've ever seen treats HTML/CSS/UI/UX/A11Y topics as early fundamentals that students breeze through or they are sprinkled in as asides while JavaScript dominates the later curriculum. Can you come in and teach our students all the layout concepts in three hours?

When JavaScript dominates the conversations around the front end, it leads to some developers feeling inadequate. In a comment on Robin Rendle's ["Front-end development is not a problem to be solved,"](https://css-tricks.com/front-end-development-is-not-a-problem-to-be-solved/#comment-1653457) Nils [writes](https://css-tricks.com/front-end-development-is-not-a-problem-to-be-solved/#comment-1653457):

Maybe the term front-end developer needs some rethinking. When I started working, front-end was mostly HTML, CSS, and some JavaScript. A good front-end developer needed to be able to translate a Photoshop layout to a pixel perfect website. Front end today is much much more. If you want to learn front-end development, people seem to start learning git, npm, angular, react, vue and all of this is called front-end development.

I am a designer and I think I’m pretty good at HTML and CSS, but that's not enough anymore to be a front-end developer.

Robin himself gave himself the job title, Adult Boy That Cares Too Much About Accessibility and CSS and Component Design but Doesn’t Care One Bit About GraphQL or Rails or Redux but I Feel Really Bad About Not Caring About This Other Stuff Though.

It's also frustrating to people in other ways. Remember Lara Schenck's [story of going in for a job interview](https://css-tricks.com/tales-of-a-non-unicorn-a-story-about-the-trouble-with-job-titles-and-descriptions/)? She met 90% of the listed qualifications, only to have the interview involve JavaScript algorithms. She ultimately didn't get the job because of that. Not everybody needs to get every job they interview for, but the issue here is that front-end developer isn't communicating what it needs to as an effective job title.

It feels like an alternate universe some days.

Two "front-end web developers" can be standing right next to each other and have little, if any, skill sets in common. That's downright bizarre to me for a job title so specific and ubiquitous. I'm sure that's already the case with a job title like designer, but front-end web developer is a niche within a niche already.

[Jina Anne](https://www.sushiandrobots.com/) is a front-end developer and designer I admire. Yet, [in a panel discussion](https://alistapart.com/event/front-end-dev) I was on with her a few years ago, she admits she doesn't think of herself with that title:

When I was at Apple, my job title when I first started out there was front-end developer. Would I call myself that now? No, because it's become such a different thing. Like, I learned HTML/CSS, I never learned JavaScript but I knew enough to work around it. Now—we're talking about job titles—when I hear "front-end developer," I'm going to assume you know a lot more than me.

It seems like, at the time, that lack of a JavaScript focus made Jina feel like she's less skilled than someone who has the official title of front-end developer. I think people would be lucky to have the skills that Jina has in her left pinky finger, but hey that's me. Speaking to Jina recently, she says she still avoids the title specifically because it leads to incorrect assumptions about her skill set.

Mandy Michael put a point on this better than anyone in her article, "[Is there any value in people who cannot write JavaScript?"](https://medium.com/@mandy.michael/is-there-any-value-in-people-who-cannot-write-javascript-d0a66b16de06):

What I don’t understand is why it’s okay if you can “just write JS”, but somehow you’re not good enough if you “just write HTML and CSS”.

When every new website on the internet has perfect, semantic, accessible HTML and exceptionally executed, accessible CSS that works on every device and browser, then you can tell me that these languages are not valuable on their own. Until then we need to stop devaluing CSS and HTML.

Mandy uses her post for peacemaking. She's telling us, yes, there is a divide, but no, neither side is any more valuable than the other.

Another source of frustration is when the great divide leads to poor craftsmanship. This is what I see as the cause of most of the jeering and poking that occurs across aisles. Brad Frost [points to the term "full-stack developer"](http://bradfrost.com/blog/post/full-stack-developers/) as a little misleading:

In my experience, “full-stack developers” always translates to “programmers who can do front-end code because they have to and it’s ‘easy’.” It’s never the other way around. The term “full-stack developer” implies that a developer is equally adept at both frontend code and backend code, but I’ve never in my personal experience witnessed anyone who truly fits that description.

Heydon Pickering [says something similar](http://www.heydonworks.com/article/reluctant-gatekeeping-the-problem-with-full-stack). When you're hired at this mythical high level, something like [HTML is unlikely to be a strong suit](https://www.brucelawson.co.uk/2018/the-practical-value-of-semantic-html/).

... one of the most glaring issues with making Full Stack Developers the gatekeepers of all-things-code is the pitiful quality of the HTML output. Most come from a computer science background, and document structure is simply not taught alongside control structure. It’s not their competency, but we still make it their job.

Just like it may not be my job to configure our deployment pipeline and handle our database scaling (I'd do a terrible job if that task fell to me), perhaps it's best to leave the job of HTML and CSS to do those who do it well. Maybe it's easier to say: Even if there is a divide, that doesn't absolve any of us from doing a good job.

Just as architecture and developer ergonomics are all our jobs, we should view performance, accessibility, and user experience among our line of work. If we can't do a good job with any particular part of it, make sure there's someone else who can do that part. Nobody is allowed to do a bad job.

It's worth mentioning that there are plenty of developers with skill sets that cross the divide and do so gracefully. I think of our own Sarah Drasner who is known as an incredible animator, SVG expert, and a core team member of Vue who also works at Microsoft on Azure. Full stack, indeed.

I expand upon a lot of these topics in another recent conference talk I gave at [WordCamp US](http://www.youtube.com/watch?v=tI0MGJe_ojU).

Is there any solution to these problems of suffering craftsmanship and skill devaluation? Are the problems systemic and deeply rooted, or are they surface level and without severe consequence? Is the divide real, or a temporary rift? Is the friction settling down or heating up? Will the front-end developer skill set widen or narrow as the years pass? Let's keep talking about this!

Even as JavaScript continues heating up, Rachel Andrew tells me it used to be hard to fill a CSS workshop, but these days conference organizers are asking for them as they are in hot demand. One thing is certain, like ol' Heraclitus likes to say, the only constant is change.