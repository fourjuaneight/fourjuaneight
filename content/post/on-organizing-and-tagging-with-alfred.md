+++
title = "On organizing and tagging with Alfred"
date = "2017-08-11"
draft = false
tags = ["alfred", "macos"]
showthedate = true
+++

With the Files app coming to iOS 11 this fall, I’ve begun a summer cleanup of sorts with my files. Over the years I’ve accumulated (hoarded) plenty of legal and financial documents, as well as other stuff I feel I might need to reference at some point in the future. The problem I have is that often I can’t find what I’m looking for and end up wasting up to several hours looking through folders on Dropbox and even actual physical folders at times.

So after hearing last weeks [Mac Power Users](https://www.relay.fm/mpu/390) episode on tagging with Brett Terpstra, I decided to borrow from his organizational structure and tailor this to my own needs. The goal is to keep files organized with a simple folder hierarchy and sufficient tags for optimal searching.

## Going Paperless
There were a few older files I still had on paper which had to go right away. So I downloaded [Scanbot](https://itunes.apple.com/us/app/scanbot-pro-scanner-app-fax/id1007355333?mt=8) on iOS for its great document detection and OCR features. To get the best results, I placed each file on a white surface and used a tripod on my iPhone. The app has automation features built in for quick naming and sends each document to its respective folder.

I trashed most documents, which significantly reduced the size of my filing cabinet. It's actually no longer a cabinet and just a folder in a drawer; this is wonderful.

## Shallow Folder Hierarchy
This idea was taken directly from one of Brett’s blog [posts](http://brettterpstra.com/2011/02/22/on-sorting-tagging-and-other-nerdery/). My previous setup had several nested folders based on categories, subcategories and so on. This works fine for keeping a clean and organized filesystem structure. But my brain doesn’t isolate information; it makes connections based on similarities.

Now I won’t dump everything into a single folder and call it a day. What kind of animal would do such a terrible thing? (I did once, don’t judge me).

To classify items, I came up with 4 broad categories:

* Archive
* Reference
* Work
* Family

The main folders are named after the four categories above. Files are then organized into subfolders based on common events. An extra level can be added if needed, but I generally avoid going any further when possible.

## Tags Galore
Ultimately my goal is to store and retrieve information based on similarities; tags allow me to do just that.

The folder structure I built is on the right track, but more granularity is needed. So I made tags based on metadata like locations and dates, but also made tags with names of family members, projects, side projects, book genres, and so on. All of these cover files across multiple folders. So if I search for `Juan 2014 receipts`, I will get results across 3 folders and 2 subfolders.

## Searching with Alfred
Although Spotlight has gotten significantly better over the years, I still use [Alfred](https://www.alfredapp.com) for its automation, scripting, and power workflow building features. But let’s focus on searching now that we’ve crafted a solid organization scheme.

By simply bringing up Alfred’s search bar and typing *[tags](https://www.alfredapp.com/blog/tips-and-tricks/3-ways-to-use-osx-tags-for-better-search/)* followed by any number of tags, you will get immediate results. If there’s a tag you find yourself using often, you can create a simple workflow that binds a hotkey to search a specified tag or tags. Additionally, you can apply filters to that hotkey to narrow down your search results.

Some of the other search features include using [keywords](https://www.alfredapp.com/help/features/file-search/#file-search) to specify the type of search you want. For example, we can use `in` followed by any string of words that you’re looking for *within* a document. This is when that OCR feature from Scanbot comes in hand.

I highly suggest you go over to Alfred’s website and explore all the features it has to offer. It’s by far my most used app on the Mac.

## Further Improvements
Creating this organization scheme isn’t too hard. Once I had in mind what I wanted to do, I wrote down how I wanted to categorize things so I could look at it and tweak it as needed. Once I had that, it was just a matter of moving things around. That did take a few hours so I’d consider making this a whole day project.

To automate some of the tagging processes, I’m looking into Hazel as it lets you create rules that can automatically tag files based on its content and finds the best place to file it; you can also tell it where to save certain things. I’ll share my setup once this happens.

[DEVONthink](https://itunes.apple.com/us/app/devonthink-to-go/id395722470?mt=8) is another app I’ve used on iOS extensively. By far the most powerful feature I used was its advance search which allowed for text matching specific conditions and boolean operators. My only issue with the app is that it silos files and uses an app specific format. Items are exportable in every way, but being forced to use an app to look up my files just adds another layer of complexity. Not a fan.

---

I feel very content with my current setup and can continue to build on top of it as time goes on. I believe maintaining a low number of tags will be my biggest concern as I don’t want to have hundreds of them. 