{
  "title": "Bookmarking the Web - Making Your Own Solution with Hugo",
  "date": "2019-01-20",
  "draft": true,
  "category": ["shortcuts", "meta", "Hugo"],
  "showthedate": true
}

In [Part 1](https://www.cleverlaziness.com/articles/bookmarking-the-web/) I talked a little bit about my media diet and how I've struggled to find an adequate bookmarking solution for some time. Mainly due to the volatility of the services out there. Ultimately I decided on Pinboard for its versatility and decent stability; Pinboard's creator has been quite %3C%20link%20href%3D%22https%3A//blog.pinboard.in/2017/07/eight_years_of_victory/%22%20content%3D%22open%22%20%3E about its growth.

But still, I thought I'd feel more comfortable having an alternative where I knew my bookmarks would never be lost unless I purposefully wanted it to.

## Homebrewed
I'd been thinking about making my own bookmarking solution for quite some time now. I was originally inspired by %3C%20link%20href%3D%22https%3A//leancrew.com/all-this/2017/10/feed-reading/%22%20content%3D%22Dr.%20Drang%27s%20own%20homemade%20RSS%20reader%22%20%3E, which he built because he didn't feel completely satisfied with the 3rd party offerings at the time. So I figured I'd give it shot with my situation.

Although I will be getting into some of the code I'm using to make this happen, I'll be the first to admit that it's not the best solution, but it works exactly as I need it to for my use-case. You're welcome to copy my code and make it your own. Feel free to share your "constructive criticism" about my coding skills in the comments below.

### Back-End
Bookmarks are meant to be hosted and accessible through this site. The site is built entirely using %3C%20link%20href%3D%22https%3A//gohugo.io%22%20content%3D%22Hugo%22%20%3E. One solution would be to build an SQL database. But I have no idea how to do that. So, I opted for using Hugo's %3C%20link%20href%3D%22https%3A//gohugo.io/templates/data-templates/%22%20content%3D%22data%20templates%22%20%3E.

The concept is simple: store data in a static file and have Hugo iterate over it. The format can be in either TOML, YAML, or JSON. I went with JSON. That means we can create simple objects with four values:
- Title
- Author
- Link
- Category

An object would look like this:
%3C%20highlight%20json%20%22linenos%3Dtable%22%20%3E
{
  "Title": "The Web began dying in 2014, here's how",
  "Creator": "André Staltz",
  "URL": "https://staltz.com/the-web-began-dying-in-2014-heres-how.html",
  "Category": "Articles"
}
%3C%20/%20highlight%20%3E

Each object is inside an array called `records`. Using a JSON file with easily recognizable and accessible objects means the data can be updated in various ways; for example, the Shortcut used to save to Pinboard on [Part 1](https://www.cleverlaziness.com/articles/bookmarking-the-web#web-bookmarks).

The code for this site is open sourced and you can view the whole data file %3C%20link%20href%3D%22https%3A//github.com/fourjuaneight/clever-laziness/blob/master/data/bookmarks.json%22%20content%3D%22here%22%20%3E.

### Front-End
Hugo has a nice %3C%20link%20href%3D%22https%3A//gohugo.io/functions/range/%22%20content%3D%22range%20function%22%20%3E that we can use to iterate over each object and place the value where we need them. Values can be called like so:
%3C%20highlight%20html%20%22linenos%3Dtable%22%20%3E
<ul id="records">
	%20range%20%24i%2C%20%24rec%20%3A%3D%20.Site.Data.bookmarks.records%20
	<li id="record-item" class="%20lower%20%24rec.Category%20" data-title="%20anchorize%20%24rec.Title%20" data-creator="%20anchorize%20%24rec.Creator%20">
	  <a class="title" href=".Site.Data.bookmarks.records" target="_blank" rel="noopener">%20%24rec.Title%20</a>
	  <p class="creator">%20%24rec.Creator%20</p>
	  <p class="category"><span aria-hidden="true">#</span>%20lower%20%24rec.Category%20</p>
	</li>
	%20end%20
</ul>
%3C%20/%20highlight%20%3E

Let's break this down.
1. Inside an HTML list, we range over the data array called `.Site.Data.bookmarks.records` and store that inside a variable called `$rec`.
2. Inside a list item, we have elements corresponding to each object value. Every value is called from the _records_ array variable: `%20%24rec.Title%20`.

Value calls can be used multiple times as HTML elements or attributes. I opted for making the title a link to the article. The title and category also serve as attributes for the list items. These are used for sorting purposes — I'll get into that later. And like that, you have a list of all your bookmarks auto-generated with Hugo data templates.

The next logical step is having easy ways of sorting and finding content. One way is to add a search bar (currently under construction). Another is by sorting items alphabetically and filtering by category. For both, we can write a couple of scripts that will use the HTML list items' attributes we added.

### Sorting
The HTML `ul` has a top row with headers that also serve as buttons to sort each respective column.
%3C%20highlight%20html%20%22linenos%3Dtable%22%20%3E
<nav class="sorting">
  <p class="sort-item" onclick="sort('records','data-title')">Title</p>
 ...
</nav>
%3C%20/%20highlight%20%3E

When one of them is clicked, the following function runs:
%3C%20highlight%20javascript%20%22linenos%3Dtable%22%20%3E
function sort(par, atr) {
  const ul = document.getElementById(par);
  const lis = ul.querySelectorAll("li");
  ul.classList.toggle('up');
  [].slice
    .call(lis)
    .sort(function(a, b) {
      const textA = a.getAttribute(atr).toLowerCase();
      const textB = b.getAttribute(atr).toLowerCase();
      if (ul.classList.contains('up')) {
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      } else {
        return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
      }
    })
    .forEach(function(el) {
      el.parentNode.appendChild(el);
    });
}
%3C%20/%20highlight%20%3E
1. The function takes two parameters: the list is sorted and the data attribute is used to do so.
2. Every list item is captured and then sliced, called, and sorted through a function.
3. The **sort** function then compares each item alphabetically from least to greatest and vice versa. Before this, a class of `up` is added to the `ul`. This is used to determine which way the column is currently pointed to; up or down (alphabetically).
4. Based on that class, the sorting function uses a simple if statement to determine which direction to sort the items.
5. Finally, each list item is iterated over and moved accordingly.

This script is a modified version of an answer provided by StackOverflow user this.

### Filtering
Continuing with the site's aesthetic, I added the categories above the bookmarks list. There are five categories based on bookmark type:
- Articles
- Comics
- Podcasts
- Tweets
- Videos
%3C%20highlight%20html%20%22linenos%3Dtable%22%20%3E
<nav class="all-tags categories">
  <div class="tag articles">
    <span aria-hidden="true">#</span>
    <input id="articles" type="checkbox" name="category" onclick="cat(this)">
    <label for="articles" class="category">articles</label>
  </div>
  ...
</nav>
%3C%20/%20highlight%20%3E

These are HTML checkboxes which run a JavaScript function on click (check).
%3C%20highlight%20js%20%22linenos%3Dtable%22%20%3E
function cat(id) {
  const category = document.getElementsByName('category');
  const liClass = 'li#record-item.' + id.id;
  const hidden = document.querySelectorAll('li#record-item');
  const active = document.querySelectorAll(liClass);
  Array.prototype.forEach.call(category,function(el){
    el.checked = false;
  });
  id.checked = true;
  hidden.forEach(hi => hi.classList.add('none'));
  active.forEach(ac => ac.classList.remove('none'));
}
%3C%20/%20highlight%20%3E

1. The function is passed a parameter which is the input's name. The name corresponds to one of the bookmarks' categories. These categories are also used as classes for the list items. So they match.
2. The inputs **id** is used to construct the corresponding list items which are then stored in a variable.
3. All items that have a **class matching** that of the clicked input's **id**, have a class of `active` added to them.`active` ensures through CSS that the items are visible.
4. All other items have a class of `none` added to them. This class hides the elements with CSS to only display those corresponding to the category that is selected.
5. Each time a category is clicked, it removes the `none` class from every item and then adds `active` to the selected one.

I've tried to use a healthy mix of HTML, CSS, and JS to make these sorting/filtering options. There's no need to have JavaScript do all of the work when we can use semantic HTML with some simple CSS. Also, using Hugo's data templates allows for everything to be rendered on build; much lighter on the browser%3C%20fn%201%20%3E.

## Shortcuts
I work from my PC all day, so I try to leave my phone for personal use only and have a clear separation. So the majority of my bookmarking—if not all—happens on my phone. We can use Shortcuts to automate this process and have it do the majority of the work. In [Part 1](https://www.cleverlaziness.com/articles/bookmarking-the-web#web-bookmarks) of this post, we build a Shortcut that grabs all the necessary parameters and hands them over to Pinboard. We can modify that existing Shortcut and add a few more stuff to send this over to the site.

The code is hosted on Github, which can be manage through %3C%20link%20href%3D%22https%3A//itunes.apple.com/us/app/working-copy/id896694807?mt%3D8%22%20content%3D%22Working%20Copy%22%20%3E on iOS. The app has extensive %3C%20link%20href%3D%22http%3A//x-callback-url.com%22%20content%3D%22URL%20schemes%22%20%3E support which can be used through Shortcuts. So all we need to do is add the following:

1. Create a new object for our JSON data file with every value.
2. Copy the contents of the data file. Match the end of the array and add the new record in.
3. Copy that to the clipboard and pass it onto Working Copy to update the data file.
4. We can then use the title and creator values to create a custom message and commit our changes to the repo.
5. Finally, we push our changes and update the site.

### BONUS
The data file array will not have our bookmarks in any sort of order; new items as simply added to the bottom. I couldn't come up with a way to sort them by category value with Shortcuts, but I do have a Python script that can easily do that. So with the help of %3C%20link%20href%3D%22https%3A//itunes.apple.com/us/app/pythonista-3/id1085978097?mt%3D8%22%20content%3D%22Pythonista%22%20%3E and some URL schemes, we can do this:
%3C%20highlight%20python%20%22linenos%3Dtable%22%20%3E
import clipboard
import json
import operator
import webbrowser

cont = clipboard.get()
data = json.loads(cont)
records = data['records']
records.sort(key=operator.itemgetter('Category'))
clipboard.set(json.dumps(data, indent=2, ensure_ascii=False))

webbrowser.open('shortcuts://')
%3C%20/%20highlight%20%3E
1. Pass the updated data file contents to the clipboard.
2. Have Shortcuts run the Python script through Pythonista%3C%20fn%202%20%3E.
2. Have Python pull the clipboard contents.
3. Sort the array alphabetically based on the `category` value.
4. Save the changes to the clipboard.
5. Head back to Shortcuts and finish saving the changes to the repo.

This process can happen right after we pull the data file contents from the repo (step 2) and add the new bookmark item (step 3).

You can get the Shortcut %3C%20link%20href%3D%22https%3A//www.icloud.com/shortcuts/e28b7c8d948c43a1b0c1929e8827620c%22%20content%3D%22here%22%20%3E.
As mentioned in [Part 1](https://www.cleverlaziness.com/articles/bookmarking-the-web#tweet-bookmarks), there is a separate Shortcut for saving tweets due to the nature of how tweets are retrieved via an HTTP request. You can get that Shortcut %3C%20link%20href%3D%22https%3A//www.icloud.com/shortcuts/afd1dbb2ce2f40f583c3e7a3905397e2%22%20content%3D%22here%22%20%3E.

## Enhancements
Currently, clicking/tapping on the bookmark title opens up a new window with the bookmark link. I'd like to add an option to either open or copy the link to the clipboard. Adding the functionally with JavaScript isn't that hard, but making the layout for without adding too much to it might take some tinkering. I was thinking of a slide-out menu with two icons. I dunno; we'll see.

## Final Thoughts
This is an over-engineered solution. It requires you to know a whole lot to make it happen. But this solution isn't intended for an everyday user, but rather for the programmer that prefers making their own solution than use someone else's. The JavaScript can be used with any front-end framework of your choosing; aside from Hugo, Jekyll and Gatsby can easily achieve the same outcome%3C%20fn%203%20%3E. The Shortcut can be modified to use any 3rd party service instead of Pinboard and run alongside the repo update. You can update the repo name in a text field, as well as the Working Copy Key ID.

Now, the shortcut isn't without its shortcomings. The main issue with using x-callback-url this way is that any external app will open when running an action. So you'll see multiple back and fourths between Shortcuts, Working Copy, and Pythonista. But at least they all happen quite fast and you're taken back to where you started when it's done.

**Sidenote:** This is the first time I've ever shared my code with anyone outside of work. So it's a little nerve-wracking for me and hope you're gentle. Fair warnings, my JavaScript can be better and I am by no means a Python developer%3C%20fn%204%20%3E.

If you have any thoughts on this or suggestions, hit me up on %3C%20link%20href%3D%22https%3A//www.twitter.com/fourjuaneight%22%20content%3D%22Twitter%22%20%3E. You can also see all of this in action over at [/bookmarks](https://www.fourjuaneight.com/bookmarks) on this site.

%25%20fnref%20%25
%3C%20note%201%20%22%20The%20JavaScript%20can%20be%20transpiled%20with%20Babel%20if%20you%27d%20like%20to%20support%20older%20browsers.%22%20%3E
%3C%20note%202%20%22%20The%20Python%20script%20is%20named%20%60sortJSON%60%20in%20this%20Shortcut.%22%20%3E
%3C%20note%203%20%22%20Doesn%27t%20even%20have%20to%20be%20a%20static-site%20generator.%22%20%3E
%3C%20note%204%20%22%20I%27ve%20actually%20never%20taken%20a%20single%20course%20or%20read%20any%20books%20on%20Python.%20All%20the%20script%20I%27ve%20built%20have%20been%20learning%20as%20I%20go%20and%20what%20I%20need%20at%20the%20time.%20So%20my%20Python%20can%20definitely%20be%20better.%22%20%3E
%25%20/fnref%20%25 