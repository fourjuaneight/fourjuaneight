{
  "title": "Project from Hell",
  "creator": "Liu Zhaoyang",
  "original": "https://projectfailures.wordpress.com/2008/06/24/project-from-hell/#comments",
  "category": ["articles"],
  "draft": false,
  "showthedate": true
}

A few years ago, I was hired to work as a consultant on a software project for a large French tech company. What I have witnessed there is beyond everything I could possibly have imagined in terms of software engineering. Far more serious than just a lack of professional competence was the utmost contempt for human dignity which at some point made me compare the whole experience to (what I imagine can be) jail. What I relate here is a selected list of topics that should illustrate my point, but check out by yourself.

## Scope
Develop a piece of software for a government agency.

Low complexity, with a few twists.

Government pays a few million Euros upfront, development is scheduled for two to three years. Company hires a couple of developers to start the job, and keeps doubling team size every 3 months or so as cash starts flowing in.

7 years later, the project is still not in any decent shape.  Penalties are running in several thousand Euros per day.  Management decides to reduce costs and fires all experimented people, hires people with little or no software experience.

10 years later, given the disastrous state of the project, middle-management decides to hire some people with software engineering experience to get back on tracks. Average turn-over for the newcomers: 3 months, the legal time to leave your job in France.

12 years later, the project is still active. The company recovers daily penalties by billing ever-increasing change requests to the government. The year is 2008.

## Figures
* 6 *million* lines of code
* C++ based
* 50,000+ classes
* C++ flavour in use is obsolete, locked into compiler version, which is only distributed with one (unmaintained) Operating System.
* CORBA-based
* Database software from a company gone bankrupt
* Several layers on top of each other to handle the Graphical User Interface, none of which actually maintained by the authors.
* Build takes 48 hours on 32 parallel machines.
* 40 to 50 simultaneous processes needed to run one User Interface
* No dynamic library linking: executable sizes in the range of several hundred megabytes
* Startup time is about 15 minutes
* Mean time between crashes: 30 seconds to 30 minutes

No software engineer will tell you that C++ is an easy language.  In fact, it is probably one of the worst computer languages in terms of complexity. It is actually so complex that even its creators admit that they still do not master all of it. See a famous spoof Stroustrup interview here:

[http://www-users.cs.york.ac.uk/~susan/joke/cpp.htm](http://www-users.cs.york.ac.uk/~susan/joke/cpp.htm)

Faced with such an incredible maze of bottomless complexity, people tend to react in a different way. The geek wannabees have all heard about C++ and want to show that they can do it too.  They dive into it without fear and get maimed beyond recognition, spending countless hours trying to figure out how a pageful of gobbledygook crashes endlessly without apparent reason.  People with more sense quickly turn to other languages and other projects. Life is too short.

Maintaining a large body of software in any language is a hard task. Imagine a team having to maintain 6 MILLION LINES of code and you get an idea of how far insanity can reach in the realm of software engineering. 6 million is a big number: if you wanted to read all the lines quickly at one per second, you would spend about *seventy days* non-stop in front of your screen.

Just to give you a taste, here are two anecdotes:

One developer was given the task of checking why right-clicking on the interface completely froze the application. After several days of careful examination and incredible amounts of patience, he found out that right-clicking worked fine, only that it took about 45 minutes for the context menu to popup. Menus were all dynamically generated from huge (static!) content every time you right-clicked the main window.

At some point end-users reported that "Load data from CD-ROM" did not work at all. This one took several weeks to sort out, but in the end the bug report was flagged as ‘already solved’, because data were indeed being loaded. The only point was that it took 7 straight days for 700 MBytes to get in. Patience is a virtue.

## Version Control gone wild
It took several years until one bright guy in the team came up with the idea of using version control tools. First attempt was not convincing, so the team switched to another system, then another a couple of years later, losing all history with each change.

The tool that was finally chosen is a disaster with a graphical user interface, an abomination coming directly from Sweden. A team of four people is actually dedicated full-time to performing most maintenance issues on the version control software, which gives things like:

* Doing a first checkout requires taking an appointment with the version control team, usually granted a week later.
* Editing files is not permitted without authorization from middle management. You have to tell your manager in advance which files you want to edit, then send an official permission request which gets filed with the version control team who may take action within a couple of days.
* Every modification of the code triggers branching, which means you have to merge back all modifications you receive. With so many files in store you may think that two people working on the same file would be rare, but it turned out that most work happened within the same 100 files or so.
* Check-in needs to go through a painful procedure whereby your code is reviewed by automagic bug-detecting software and eventually by middle management. Needless to say, this does not prevent bugs from creeping in faster than developers can remove them. A closer look at the number of registered bugs showed that every defect correction brought in twice as many bugs as it corrected.
* Versioning is simple. Old software is version 1, today’s software is version 2, software in the future is version 3.  Nobody can actually tell which version has been delivered to the customer.

At some point, an official delivery was scheduled, totally independent from any kind of planning set within the team. When the day came, the customer was actually sent a blank CD with installation instructions because nobody had been able to build the software in weeks. The customer found out they had been delivered a blank CD, officially complained, and was given an old version to replace the previous delivery. They found out because the displayed date in the "About" box was the same as last year.

## Peopleware
*Pay peanuts, get monkeys.*

With a large number of people without any software engineering experience, is it really a surprise that bugs keep creeping in in vast numbers? A really bright manager must have realized that human costs were the main source of cost in a pure software project. Not at all deterred by this extraordinary discovery, he decided to fire all people with any kind of experience but keep all managers in. It was not uncommon to see "C++ for dummies" on many people’s desks.

*Meet the Team*
55 people in the team: 20 developers, 35 managers. That’s right: more managers than actual developpers. Managers keep organizing meetings where they show the same PowerPoint presentation over and over ad nauseam, while developers kill time by chatting in the vast open-space office.

Few managers have any experience with software engineering. At that time SCO was suing IBM about Linux. Even if the whole thing was a bluff, it really worked with such people who all understood that they had to pay soon for Free Software.  None of them ever mentions ‘Software Libre’, but they all know about ‘Software Gratuit’. Needless to say, the project is peppered with GNU libraries all over the place and these guys have absolutely no idea this turns the whole thing into a vast unshared GNU-compliant project. But hey, given the abysmal quality of this thing, nobody will ever insist that they release the sources.

Technical knowledge is low. Few people know about Internet, those who do think it is only made for porn. Mentioning you have seen something on the Internet brings you winks and smiles.

## Welcome to Hell
The whole experience could have been funny if the top management had not decided to behave like nazis in a concentration camp. Just to give some examples:

* It is forbidden to come to work after 9am. One day, the site manager stayed behind the main gates and fired on the spot every person who came in after 9.01am, including a number of managers and sales.
* Smokers take more pauses so produce less. Management tried to force everybody to stop smoking by coercion. Did not work.
* Coffee machines are regularly out of order for several days. Somebody who drinks coffee is less productive than somebody sitting at his desk, typing away precious lines of code.
* The same coffee machines are switched off whenever officials come to visit the site, to give the impression that everybody is at work.
* Toilets are the most disgusting I have ever seen. The idea is probably to increase productivity: spend less time in the loo, you work more (and better).

You are probably wondering now why people kept coming to work in such an environment. The first and main reason was the deep economy crisis France was going through at that time (and still is today, to a certain extent).  Having a job and a salary was considered a privilege, no matter what conditions were attached.

Another reason was that for many, this contract was the first they ever got with a real company. Without any reference it is impossible to gauge how much your job sucks. Most beginners thought it was perfectly normal to be forced to be there at 9am sharp or be fired, when absolutely nothing imposed such a constraint except the sick mind of a manager.

As to how a government can let such things happen: we all know how it works. The guys in charge of budget at the ministery are pals with the top-management in a number of companies. In a country like France, corruption is not uncommon at that level, goes mostly undiscovered and is rarely prosecuted. Apparently this is not reserved to France. I have heard the same stories a little bit everywhere in Europe and the US.

Next time you think your job sucks, think again.