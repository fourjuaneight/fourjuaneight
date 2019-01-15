{
  "title": "Bookmarking the Web",
  "date": "2019-01-14",
  "draft": false,
  "category": ["shortcuts"],
  "showthedate": true 
}

There's content I like to bookmark to either consume later or refer to. The type of content varies but ultimately can be boiled down to  5 categories:

- Articles 
- Comics 
- Podcasts 
- Tweets 
- Videos 

## Media Diet 
Aggregating everything from its various sources has been a pain. My problem hasn't really been finding a service to do this for me, but rather finding the right solutions for that fits all my complicated needs. Here's a bit of context on my media diet to give you a better picture of what I'm trying to do. 

## Articles and Comics 
These are pretty straightforward; they're all RSS feeds viewed through  {{<link href ="https://feedbin.com" content ="Feedbin" >}}. Things there are categorized by folders. One specifically for Comics, another for Blogs and one for my web development specific sites. {{<link href ="https://itunes.apple.com/us/app/fiery-feeds-rss-reader/id1158763303?mt=8" content ="Feeds Fiery" >}} is my reader of choice. It has a clean and intuitive UI, a nice black theme, and some customizable quick- sharing actions.

## Podcasts 
My app of choice is  {{<link href ="https://itunes.apple.com/us/app/overcast/id888422857?mt=8" content ="Overcast" >}}. Sure, there are plenty of solid apps out there but Marco  (developer the) is very open about the app's development and growth. Plus, it has by far the best audio quality IMHO. Also, it's available through a simple web player if needed.

## Tweets and Videos 
Tweets are bookmarked on Twitter. And although they've practically butchered their API, I continue to use  {{<link href ="https://itunes.apple.com/us/app/tweetbot-5-for-twitter/id1018355599?mt=8" content ="Tweetbot" >}} faithfully. You can't beat the chronological timeline, powerful filters, and speed. As for video, 99% is consumed through YouTube. There are one or three Vimeo videos somewhere in there. 

## Setup 
There are a few boxes I need to check :

- Universally accessible
- Easy of saving
- Easy access
- Automation

There's also the matter of having a backup solution. Now, this is not me being paranoid. I mean, most bookmarking services I've used in the past have either died or gone through too many hands. Pocket was a solid choice for a while but the $5/m was not worth it for my particular use-case{{< fn 1 >}}. So I'd like to have an alternative. More on that later.

Ultimately I settled on Pinboard, and for two main reasons: API and accessibility. Since it's a simple web service I can easily use an HTTP request to post content to it. For the same reason, 3rd party developers just as easily can add support for it. Fiery Feed also works with Pinboard. This means that any  "Reading List" articles can be read through there as well in a nice interface{{< fn 2 >}}.

In case you didn't notice, the majority of my media consumption is through my iPhone. So the obvious choice for crafting a automatic saving solution was Shortcuts. It's built into iOS, has a native Pinboard action, and can be accessed through the share sheet. 

Bookmarks are to be saved with the following parameters :

- Title 
- Creator 
- Category 
- URL 

Title and URL go directly to their respective fields in Pinboard. Categories can be saved as tags. This will make for easy filtering on Pinboard. The Creator parameter can be saved in the Notes field. Items will then be saved as Read since bookmarks have already been read/heard/seen. Unread will be reserved for our Reading List. 

## Saving 
There are 2 different Shortcuts used for saving to Pinboard. One for Articles, Comics, Podcasts, and Videos. Another for Tweets. Tweets use the Twitter API to pull all the necessary parameters and requires some heavy filtering to get the content so it gets it's own Shortcut.

### Web Bookmarks 
1. Using magic variables, the webpage name is taken from the input  (Webpage Safarior URL), cleaned using regular expressions, then Prompted through user input for verification. 
2. A prompt then asks for the Creator name. 
3. A list with the 3 categories pulls up for selection. 
4. The input URL is then passed onto Pinboard, along with all the other parameters via magic variables. 

FYI: for videos, you'd be better served by running the Shortcut from safari instead of the YouTube or Vimeo app. 

You can get the Shortcut  {{<link href ="https://www.icloud.com/shortcuts/564933e1e8724ac6a75f02a3dcde4e5c" content ="here" >}}.

### Tweet Bookmarks 
1. The tweet URL is appended to a Twitter API URL. 
2. The content is pulled through an HTTP request. 
3. The raw HTML value is taken from the response and heavily cleaned through various regular expressions. This becomes the Title (content).
4. The Creator is pulled from the `author_url` value and then formatted with some simple text replacement. 
5. The original tweet URL is then passed to Pinboard. The tweet is passed as the Title along with the other parameters. 

You can get the Shortcut  {{<link href ="https://www.icloud.com/shortcuts/8e8ea1ce538d4653825b6be88df39bb7" content ="here" >}}.

### Bonus: Reading List 
{{<link href ="https://www.icloud.com/shortcuts/011881d4b2cc4665ad7b27690fcca915" content ="This" >}} is a simple version of the Web Bookmarks Shortcut. It grabs the webpage name and prompts you for verification. Then passes that, along with the input URL via magic variables, to Pinboard using the "Reading_List" tag.

### Getting Your Bookmarks 
Using tags/categories is a fantastic way to filter your bookmarks. {{<link href ="https://pinboard.in" content ="Pinboard.in" >}} makes it easy to find stuff on the site this way. But this works even better with Shortcuts.

1. Choose from a list of categories what you want to get. 
2. That category is passed to Pinboard which gets a list of the last 100 items. 
3. You're prompted with a list to choose from. 
4. Your chosen item is then opened on Safari. 

You can get the Shortcut  {{<link href ="https://www.icloud.com/shortcuts/7801231d015442a598b0b0ddba4c4b2c" content ="here" >}}.

This works the same with Reading Lists. 

## Backup/Alternative Solution
Earlier, I mentioned having a backup solution as the bookmarking service landscape has been volatile. For that, I've opted for using my own website to host my bookmarks as well. In the next post, I'll go over my setup and how it's incorporated into these Shortcuts.

{{% fnref %}}
{{< note 1 " I think Mozilla is doing a great job with a Pocket. But it's too much for what I need. I don't need a text-to-audio player and social features." >}}
{{< note 2 " Pinboards UI seems like it's never been updated. So the service will serve as a back-end mostly." >}}
{{% /fnref %}}