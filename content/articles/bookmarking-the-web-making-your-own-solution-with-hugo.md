{
  "title": "Bookmarking the Web - Making Your Own Solution with Hugo",
  "date": "2019-01-20",
  "draft": false,
  "description": "I'd been thinking about making my own bookmarking solution for quite some time now. inspired by Dr. Drang's own homemade RSS reader, I've decided to build my own bookmarking site on this website. ",
  "category": ["shortcuts", "meta", "hugo"],
  "showthedate": true
}

In [Part 1](/articles/bookmarking-the-web/) I talked a little bit about my media diet and how I've struggled to find an adequate bookmarking solution for some time. Mainly due to the volatility of the services out there. Ultimately I decided on Pinboard for its versatility and decent stability; Pinboard's creator has been quite {{< link href="https://blog.pinboard.in/2017/07/eight_years_of_victory/" content="open" >}} about its growth.

But still, I thought I'd feel more comfortable having an alternative where I knew my bookmarks would never be lost unless I purposefully wanted it to.

## Homebrewed
I'd been thinking about making my own bookmarking solution for quite some time now. I was originally inspired by {{< link href="https://leancrew.com/all-this/2017/10/feed-reading/" content="Dr. Drang's own homemade RSS reader" >}}, which he built because he didn't feel completely satisfied with the 3rd party offerings at the time. So I figured I'd give it shot with my situation.

Although I will be getting into some of the code I'm using to make this happen, I'll be the first to admit that it's not the best solution, but it works exactly as I need it to for my use-case. You're welcome to copy my code and make it your own. Feel free to direct your "constructive criticism" about my coding skills to `/dev/null`.

### Back-End
Bookmarks are meant to be hosted and accessible through this site. The site is built entirely using {{< link href="https://gohugo.io" content="Hugo" >}}. One solution would be to build an SQL database. But I have no idea how to do that. So, I opted for using Hugo's {{< link href="https://gohugo.io/templates/data-templates/" content="data templates" >}}.

The concept is simple: store data in a static file and have Hugo iterate over it. The format can be in either TOML, YAML, or JSON. I went with JSON. That means we can create simple objects with four values:
- Title
- Author
- Link
- Category

An object would look like this:

```json
{
  "Title": "The Web began dying in 2014, here's how",
  "Creator": "André Staltz",
  "URL": "https://staltz.com/the-web-began-dying-in-2014-heres-how.html",
  "Category": "Articles"
}
```

Each object is inside an array called `records`. Using a JSON file with easily recognizable and accessible objects means the data can be updated in various ways; for example, the Shortcut used to save to Pinboard on [Part 1](/articles/bookmarking-the-web#web-bookmarks).

The code for this site is open sourced and you can view the whole data file {{< link href="https://github.com/fourjuaneight/clever-laziness/blob/master/data/bookmarks.json" content="here" >}}.

### Front-End
Hugo has a nice {{< link href="https://gohugo.io/functions/range/" content="range function" >}} that we can use to iterate over each object and place the value where we need them. Values can be called like so:
```html
<ul id="records">
  {{ range $i, $rec := .Site.Data.bookmarks.records }}
  <li id="record-item" class=" lower $rec.Category "data-title=" anchorize $rec.Title "data-creator=" anchorize $rec.Creator ">
    <a class="title" href=".Site.Data.bookmarks.records" target="_blank" rel="noopener"> $rec.Title </a>
    <p class="creator"> $rec.Creator </p>
    <p class="category"><span aria-hidden="true">#</span> lower $rec.Category </p>
  </li>
  {{ end }}
</ul>
```

Let's break this down.
1. Inside an HTML list, we range over the data array called `.Site.Data.bookmarks.records` and store that inside a variable called `$rec`.
2. Inside a list item, we have elements corresponding to each object value. Every value is called from the _records_ array variable: ` $rec.Title `.

Value calls can be used multiple times as HTML elements or attributes. I opted for making the title a link to the article. The title and category also serve as attributes for the list items. These are used for sorting purposes — I'll get into that later. And like that, you have a list of all your bookmarks auto-generated with Hugo data templates.

The next logical step is having easy ways of sorting and finding content. One way is to add a search bar (currently under construction). Another is by sorting items alphabetically and filtering by category. For both, we can write a couple of scripts that will use the HTML list items' attributes we added.

### Sorting
The HTML `ul` has a top row with headers that also serve as buttons to sort each respective column.
```html
<nav class="sorting">
  <p class="sort-item" onclick="sort('records','data-title')">Title</p>
 ...
</nav>
```

When one of them is clicked, the following function runs:
```javascript
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
```
1. The function takes two parameters: the list is sorted and the data attribute is used to do so.
2. Every list item is captured and then sliced, called, and sorted through a function.
3. The **sort** function then compares each item alphabetically from least to greatest and vice versa. Before this, a class of `up` is added to the `ul`. This is used to determine which way the column is currently pointed to; up or down (alphabetically).
4. Based on that class, the sorting function uses a simple if statement to determine which direction to sort the items.
5. Finally, each list item is iterated over and moved accordingly.

This script is a modified version of an answer provided by StackOverflow user {{< link href="https://stackoverflow.com/a/8900824/6253592" content="Omer Bokhari" >}}.

### Filtering
Continuing with the site's aesthetic, I added the categories above the bookmarks list. There are five categories based on bookmark type:

- Articles
- Comics
- Podcasts
- Tweets
- Videos

```html
<nav class="all-tags categories">
  <div class="tag articles">
    <span aria-hidden="true">#</span>
    <input id="articles" type="checkbox" name="category" onclick="cat(this)">
    <label for="articles" class="category">articles</label>
  </div>
  ...
</nav>
```

These are HTML checkboxes which run a JavaScript function on click (check).
```javascript
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
```

1. The function is passed a parameter which is the input's name. The name corresponds to one of the bookmarks' categories. These categories are also used as classes for the list items. So they match.
2. The inputs **id** is used to construct the corresponding list items which are then stored in a variable.
3. All items that have a **class matching** that of the clicked input's **id**, have a class of `active` added to them.`active` ensures through CSS that the items are visible.
4. All other items have a class of `none` added to them. This class hides the elements with CSS to only display those corresponding to the category that is selected.
5. Each time a category is clicked, it removes the `none` class from every item and then adds `active` to the selected one.

I've tried to use a healthy mix of HTML, CSS, and JS to make these sorting/filtering options. There's no need to have JavaScript do all of the work when we can use semantic HTML with some simple CSS. Also, using Hugo's data templates allows for everything to be rendered on build; much lighter on the browser{{< fn 1 >}}.

## Shortcuts
I work from my PC all day, so I try to leave my phone for personal use only and have a clear separation. So the majority of my bookmarking—if not all—happens on my phone. We can use Shortcuts to automate this process and have it do the majority of the work. In Part 1 of this post, we build a Shortcut that grabs all the necessary parameters and hands them over to Pinboard. We can modify that existing Shortcut and add a few more stuff to send this over to the site.

The code is hosted on Github, which can be manage through {{< link href="https://itunes.apple.com/us/app/working-copy/id896694807?mt=8" content="Working Copy" >}} on iOS. The app has extensive {{< link href="http://x-callback-url.com" content="URL schemes" >}} support which can be used through Shortcuts. So all we need to do is add the following:

1. Create a new object for our JSON data file with every value.
2. Copy the contents of the data file. Match the end of the array and add the new record in.
3. Copy that to the clipboard and pass it onto Working Copy to update the data file.
4. We can then use the title and creator values to create a custom message and commit our changes to the repo.
5. Finally, we push our changes and update the site.

### BONUS
The data file array will not have our bookmarks in any sort of order; new items as simply added to the bottom. I couldn't come up with a way to sort them by category value with Shortcuts, but I do have a Python script that can easily do that. So with the help of {{< link href="https://itunes.apple.com/us/app/pythonista-3/id1085978097?mt=8" content="Pythonista" >}} and some URL schemes, we can do this:
```python
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
```

1. Pass the updated data file contents to the clipboard.
2. Have Shortcuts run the Python script through Pythonista{{< fn 2 >}}.
2. Have Python pull the clipboard contents.
3. Sort the array alphabetically based on the `category` value.
4. Save the changes to the clipboard.
5. Head back to Shortcuts and finish saving the changes to the repo.

This process can happen right after we pull the data file contents from the repo (step 2) and add the new bookmark item (step 3).

You can get the Shortcut {{< link href="https://www.icloud.com/shortcuts/e28b7c8d948c43a1b0c1929e8827620c" content="here" >}}.

As mentioned in [Part 1](/articles/bookmarking-the-web#tweet-bookmarks), there is a separate Shortcut for saving tweets due to the nature of how they are retrieved via an HTTP request. You can get that Shortcut {{< link href="https://www.icloud.com/shortcuts/afd1dbb2ce2f40f583c3e7a3905397e2" content="here" >}}.

## Enhancements
Currently, clicking/tapping on the bookmark title opens up a new window with the bookmark link. I'd like to add an option to either open or copy the link to the clipboard. Adding the functionally with JavaScript isn't that hard, but making the layout for without adding too much to it might take some tinkering. I was thinking of a slide-out menu with two icons. I dunno; we'll see.

## Final Thoughts
This is an over-engineered solution. It requires you to know a whole lot to make it happen. But this solution isn't intended for an everyday user, but rather for the programmer that prefers making their own solution than use someone else's. The JavaScript can be used with any front-end framework of your choosing; aside from Hugo, Jekyll and Gatsby can easily achieve the same outcome{{< fn 3 >}}. The Shortcut can be modified to use any 3rd party service instead of Pinboard and run alongside the repo update. You can update the repo name in a text field, as well as the Working Copy Key ID.

Now, the shortcut isn't without its shortcomings. The main issue with using x-callback-url this way is that any external app will open when running an action. So you'll see multiple back and fourths between Shortcuts, Working Copy, and Pythonista. But at least they all happen quite fast and you're taken back to where you started when it's done.

**Sidenote:** This is the first time I've ever shared my code with anyone outside of work. So it's a little nerve-wracking for me and hope you're gentle. Fair warnings, my JavaScript can be better and I am by no means a Python developer{{< fn 4 >}}.

If you have any thoughts on this or suggestions, hit me up on {{< link href="https://www.twitter.com/fourjuaneight" content="Twitter" >}}. You can also see all of this in action over at [/bookmarks](/bookmarks) on this site.

{{% fnref %}}
{{< note 1 "The JavaScript can be transpiled with Babel if you'd like to support older browsers." >}}
{{< note 2 "The Python script is named `sortJSON` in this Shortcut." >}}
{{< note 3 "Doesn't even have to be a static-site generator. You can setup your own front and back-end and use the JS for sorting and slightly modify the Shortcuts to post the content to via HTTPS or even SSH." >}}
{{< note 4 "I've actually never taken a single course or read any books on Python. All the script I've built have been learning as I go and what I need at the time. So my Python can definitely be better." >}}
{{% /fnref %}}