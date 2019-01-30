{
  "title": "What I’ve learned from nearly three years of enterprise Wi-Fi at home",
  "creator": "Lee Hutchinson",
  "original": "https://arstechnica.com/information-technology/2018/07/enterprise-wi-fi-at-home-part-two-reflecting-on-almost-three-years-with-pro-gear/",
  "category": ["articles"],
  "draft": false,
  "showthedate": true
}

There is a moment of perfect stillness after the cable slips through my fingers and vanishes back up the hole in the ceiling like an angry snake. Then the opening stanza of a rich poem of invective leaps from my lips and my wife stares up at me from below, eyes wide, frozen just as I am, ready to catch me if I rage too hard and lose my balance.

But perched precariously on the top step of an inadequate and shaky ladder in the corner of my living room, drenched in sweat and speckled head to toe in pink insulation and sheetrock dust, body aching with dull red heat, I just can’t maintain the torrent of swearing. I’m too tired. The words die on my lips and I drop my burning arms to my side. Sweat stings my cut hands--"man hands," my wife has always called them, hands that seem to always sport an ever-changing collection of cuts and dry spots and calluses and torn nails as house or computer projects come and go. Tiny drops of blood ooze from shredded cuticles.

*Maybe I’ll just stand here for a few hours and not move,* I think, mind going blank rather than face the thought of climbing back up into the baking attic and fishing out the cable from underneath mountains of insulation. *Maybe I don’t even need Wi-Fi anymore. Maybe I don’t even need* computers *anymore. Maybe I should throw away everything I own and live in the mountains and grow my own food and never think about technology ever again.*

But let’s back up a bit.

## In our previous episode...
In mid-2015, I retired my Apple Airport Extreme and upgraded my home’s Wi-Fi with a set of wireless access points from New York-based networking OEM [Ubiquiti](https://www.ubnt.com/). I was trying to accomplish two things: first, to eliminate some persistent Wi-Fi dead spots that I just couldn’t reach, even by extending my network with a couple of Airport Expresses (Airports Express?). Secondly, and perhaps more importantly, I wanted some new homelab gear to tinker with so that I could get some hands-on time with an enterprise grade (or at least "enterprise-lite" grade) Wi-Fi system, because playing with the big toys is fun.

As I explained in our [October 2015 review](https://arstechnica.com/gadgets/2015/10/review-ubiquiti-unifi-made-me-realize-how-terrible-consumer-wi-fi-gear-is/), the Ubiquiti access points delivered on both points. The individual devices weren’t even particularly expensive--strategically placing a few of the APs (the smallest of which can be had for [about $80](https://amzn.to/2u8nuIn) ) can be cheaper than buying [a single monster consumer-grade AP/router](https://amzn.to/2IWYaKN). The monster consumer router can (usually) deliver higher single-client performance in synthetic benchmarks, but the distributed Ubiquiti APs are far better at delivering consistent multi-client performance (and they’re not all bottlenecked behind a single backhaul, either).

More importantly, having multiple access points means that instead of having to take a "make my one base station scream as loud as possible" approach to whole-house coverage, you have the opportunity to fine-tune each individual AP’s 2.4GHz and 5GHz radio strengths and channel selections to create a series of interlocking cells that together offer vastly more consistent coverage--especially in the 5GHz range, which is almost certainly where you want your wireless clients connecting whenever possible.

As it turns out, this kind of network tuning is a lot like sailing: it’s relatively easy to learn the fundamentals in an afternoon, but mastering it probably takes more time than you’re willing to commit unless you just really freaking love sailing. Or screwing around with your Wi-Fi. (Or, alternately, you can get paid to do it at your job.)

## A brief word of warning
This feature is *not* going to be a comprehensive Ubiquiti buyer’s guide. Neither is it going to be a formal review, or an in-depth Wi-Fi tuning guide, or a recommendation on what *you* should buy--unlike with an all-in-one router/AP, there would be just too many potential configurations to cover.

What you’re about to read is a write-up of *my* experience with Ubiquiti’s Unifi gear over the past couple of years--what I bought, why I bought it, and what I did with it. I’ll dig into the configuration and implementation choices I made and discuss how well they’ve worked (or didn’t work, in many cases) for me, and then I’ll touch on what I’ve settled on (at least for now).

I will admit that configuration mistakes were made--heaps of them, in fact, though I believe that most have at this point been rectified. At one point I had damn near twice as many APs as I needed, and I overcomplicated things to the point of insanity more than once--the Unifi system is the embodiment of "enough rope to hang yourself with" for a curious home system administrator.

> I will admit that configuration mistakes were made.  

The upside, though, is that I learned a lot by screwing up so much, and the only person I hurt was myself. Well, and my wife, whenever my weekend tinkering sessions resulted in no Wi-Fi for a few hours. This piece is intended to let you laugh at my mistakes as much as anything else.

## Unifi my Wi-Fi
Ubiquiti makes all manner of stuff, ranging from wired gear to full-on heavy-duty [WISP equipment](https://store.ubnt.com/collections/wireless/airfiber). I became interested in the company’s [Unifi](https://unifi-sdn.ubnt.com/#home) line of Wi-Fi networking primarily because of the price--the gear seemed exceedingly cheap for the capabilities it offered, especially considering how the access points stacked up against consumer offerings.

There’s more to the Unifi product line than just wireless access points, though--it’s at this point a vertical that includes switching and routing, too, using hardware adapted from Ubiquiti’s more mature [EdgeMAX line](https://www.ubnt.com/products/#edgemax). Unlike Unifi, EdgeMAX kit isn’t centrally managed (well, sort of--there’s an all-in-one beta product called the [Ubiquiti Network Management System](https://unms.com/)  designed to let you manage *all* your Ubiquiti stuff from all the product lines, but ironically, Unifi gear doesn’t yet work with it). EdgeMAX gear is intended to be standalone, used for enterprise-grade switching and routing without the software-defined networking special sauce exclusive to the Unifi line.

Much of the Unifi line slots nicely into the prosumer and/or  [SMB](https://en.wikipedia.org/wiki/Small_and_medium-sized_enterprises) space--it offers features appealing both to homelab enthusiasts and also to businesses needing to do medium-to-large Wi-Fi deployments (features like single-pane-of-glass management and [SDN](https://en.wikipedia.org/wiki/Software-defined_networking), which we’ll get to shortly).

At the same time, the Unifi line doesn’t necessarily have the feature breadth or the enterprise-grade support structure to compete at the higher end with the likes of Cisco/Meraki or Aruba or Juniper. You might save a ton of money going with Unifi gear over Cisco gear, but when it’s midnight on a Saturday and your production system is down, Cisco will be there with a replacement part within four hours (assuming you pay for that level of support--it is available). With Unifi gear, you’ll be waiting for FedEx to drop off replacement parts maybe on Monday after you arrange an RMA, unless you happen to have bought from a VAR that also sells aftermarket support.

The overall Unifi brand’s positioning remains roughly the same as it was when we last took a look. However, from a product perspective the Unifi line has evolved considerably since 2015, adding several newer high-end SKUs and refining its lineup to reduce or eliminate some odd quirks.

There are plenty of Unifi alternatives--most notably Latvian-based [MikroTik](https://mikrotik.com/products), which gets props for its low up-front cost and deep configurability. Unifi and MikroTik also both appeal to SMB customers by not saddling their products with feature licensing fees--fees which are annoyingly common at the top end where it’s presumed customers have fat enterprise IT budgets to spend (I’m looking at you, Cisco). The prosumer/mid-tier market picture today is roughly the same as it was two years ago: it’s crowded, which is good for us as consumers.

This is not a comprehensive list of all the Unifi SKUs, because there are [just too many](https://store.ubnt.com/) at this point, and honestly I’m not sure the table I’ve got below will display properly as it is.

Oh, hey, it worked! Nice. (Preemptive apologies if you're on mobile and can't see all of it.) Broadly, the list breaks down into [regular APs](https://www.ubnt.com/unifi/unifi-ac/), ["HD" APs](https://unifi-hd.ubnt.com/) with very high user capacities and MU-MIMO, [in-wall APs](https://inwall.ubnt.com/) intended to be mounted near electrical outlets to service a single room, and [mesh APs](https://unifi-mesh.ubnt.com/) with the ability to support simultaneous wireless uplinks and downlinks.

I ended up dabbling in most of these, though in the small and limited environment of my home they all essentially performed the same. The model differences matter much more in larger environments where you’re expecting to service dozens or hundreds of clients per AP. (Maybe you host a bunch of parties at your house!)

## Flying too close to the sun, repeatedly
After being lured in by the price, I quickly decided I wanted Unifi APs in my house because of the huge amount of *cool stuff* they’d let me do. I was a sysadmin in a former life, and although at the time I wasn’t in charge of administering the guts of the network, I picked up the ins and outs of enterprise network administration through countless collaborations and hallway conversations over a decade of working that job.

From that sprung grand designs for my home WLAN: I didn’t just want to set up Wi-Fi with a guest network--that’s so *pedestrian*. No, I wanted to emulate the things I used to have at work. I wanted multiple segments and VLANs. I wanted to sequester my IoT crap on its own little isolated chunk of space. I wanted complex packet filter rules. I wanted WPA2 Enterprise Wi-Fi, with cryptographic certificate-based client authentication via RADIUS that I could control and revoke, rather than a lame-ass WPA passphrase. I wanted metrics, deep packet inspection, intrusion detection, charts and graphs and data everywhere. I wanted something to *play* with.

I eventually got all of these things, and more. But the biggest takeaway from my still-ongoing Unifi experience is this: enterprise networking gear in the home is a drug, and you can overdose.

It’s *easy* to add Unifi access points--addictively so. They’re not terribly expensive, and if you’re like me, you can over-plan your deployment because no one who knows any better is there to stop you. Much like with heroin, it’s pretty easy to go too far--sure, you *can* buy five APs to cover a 2600-square-foot house, but you *probably shouldn’t.* Which is how I found myself on a ladder in my living room, caked in sweat and attic filth, questioning my life choices and sanity. (Past Lee, if you’re somehow reading this article via some kind of space-time vortex or causality loop, please pay particular attention to this section.)

"I want to set up a bunch of VLANs" is a great weekend project to dream about. It’s nowhere near as great when it’s 3am and you’ve broken everything and you can’t go to bed until you at least get the Internet working again ( [relevant xkcd](https://xkcd.com/349/) ).

> I eventually got all of these things, and more.  

"I’m going to set up [freeRADIUS](https://en.wikipedia.org/wiki/FreeRADIUS) " sounds like a worthy way to spend some quality time with your servers. It’s a little different when Chrome crashes because you have too many tabs open because you have to keep looking up new arcane error messages because setting up freeRADIUS is actually more complex than building a 1:1 scale reconstruction of St. Peter's Basilica out of matches and tin foil. (It’s still easier than setting up OpenLDAP, but that’s another article.)

"I can mount a fourth AP right there and push 5GHz into the bedroom" sounds simple enough, until it’s six hours later and you’ve almost fallen through your ceiling four times and you can’t stop bleeding from your forehead from where you scraped yourself on roof nails and you’ve got sheetrock dust in both eyes and you realize after digging through insulation that the hole you’ve just drilled isn’t actually reachable from any part of the attic you can squeeze yourself into. (Shortly after this, you find yourself googling "how to patch drywall holes in ceiling for dummies.")

## The freedom to choose
That sounds like a heap of bitching about the gear, but it’s not, not really--it’s bitching about my dumb choices. More to the point, it’s bitching that demonstrates *why* enterprise Wi-Fi deployments at real companies are (or at least should be) the product of careful consideration of requirements, with a planful deployment and appropriate back-out procedures to follow in case things don’t go how they should. When I’m at work, I do those things. But when I’m at home, *I do what I want* --and then I have to face the consequences for being crazy.

So, now that I’ve done with the bitching, let me state this unequivocally: I am *thrilled* with how well my Unifi setup works, and I love having it. I love the look on visitors’ faces when they see my guest Wi-Fi login page. I love finally having solid Wi-Fi coverage in every nook and corner of the house and backyard. I love the security of being able to really and truly shove all the IoT crap into its own isolated and firewalled segment. I love, ultimately, having the freedom to tinker--to do *what* I want, *how* I want, *when* I want, without being shackled to my ISP’s (or anyone else’s) Wi-Fi configuration whims.

I want to reiterate this point from earlier in the piece: I am *not* telling you what you should buy or how you should set up your network. I’ve made plenty of mistakes. What I’ve settled on works for me--at least, I think it works, based on how my devices behave and what I see in log files and heat maps--but nobody *needs* this kind of setup at home. An all-in-one router/AP is almost certainly good enough for just about everyone who doesn’t have specialty requirements.

But this is Ars. Good enough? Meh. "Good enough" is boring.

So: the Unifi setup I’ve settled on has expanded far beyond Wi-Fi and into switching, routing, and even security cameras. Here’s a diagram I cooked up in Omnigraffle that shows pretty much everything (omitting wireless clients, because ain’t nobody got time for that):

* Lee's current network (most of it, anyway).

* Originally, I used two M-PRO access points to bridge my WLAN out to my garage.

* These were eventually replaced with two NanoStation AC Locos, which worked much better. After a while, though, I ripped these out and just paid a contractor to run fiber to the garage. You just can't beat wired performance.

The diagram is a little dense, so let me explain what the hell I’ve done. As noted, a primary goal with having this arrangement of APs was to push a usable 5GHz Wi-Fi signal to every room in the house, because the 2.4GHz spectrum is increasingly crowded and frustrating to deal with.

Although a single access point is often enough to blast 2.4GHz everywhere, that property makes it ill-suited for use in dense areas with lots of people and lots of Wi-Fi. 5GHz doesn’t propagate nearly as well through common house-construction materials; this makes it better suited to use in dense areas since signals are much less likely to pass through walls, but you typically *do* want your own Wi-Fi to work throughout your whole home. Properly rolling out whole-house 5GHz Wi-Fi therefore requires planning in the pre-deployment stage and a fair bit of tweaking after.

To that end, my house is served by three Unifi APs, which are situated such that, together, they blanket every room in the house with a solid 5GHz signal of appropriate strength, with low interference and noise. The "main" AP--or at least the one that ends up serving the main residential spaces of the house--is a UAP-AC-HD. This is one of Unifi’s [high-end APs](https://unifi-hd.ubnt.com/), with 4x4 radios and MU-MIMO (and with a max of 500 clients, it’s hideous overkill for me). Then there are two [UAC-AP-PROs](https://amzn.to/2IWOZd9) to extend the comfy 5GHz cloud to places where it would otherwise not reach.

At one point, I was using a pair of [UAP-AC-M-PROs](https://amzn.to/2u8mt2W) to extend my network out to my detached garage, because after getting a few estimates on the cost of running cable to the garage, it was simply cheaper to buy a pair of APs and use Ubiquiti’s wireless uplink function. (See the second diagram in the gallery above.)

This turned out to be one of my more costly mistakes. I didn’t need the two M-PRO access points to act like access points, and rather than buying access points and forcing them to act like a point-to-point link, I should have just spent my money on an actual point-to-point link.

Which is what I eventually did, after dealing for months with the wireless uplink’s habit of randomly dying for no apparent reason. And a lot of that’s on me, too, since rather than sticking with stable versions of the Unifi controller and firmware, I insisted on running beta firmware with continually shifting functionality. I have no doubt that the Unifi wireless uplink works better on stable firmware, but I found it to be a frustrating mess.

I eventually retired the two M-PROs and purchased a pair of [NanoStation AC Loco](https://www.ubnt.com/airmax/nanostation-ac/) point-to-point devices (see the third slide in the gallery above). The NanoStations are Ubiquiti devices, but they’re from the more mature AirMAX line; unlike the frustrating Unifi Wi-Fi uplink, the AirMAX devices were absolutely bulletproof once I got the antennas aligned. They were also [astonishingly cheap](https://amzn.to/2KLY6SV) given their functionality and power. (After a time, though, I retired the NanoStations and had a contractor pull fiber to my garage. It’s just a better solution all around, and I no longer get speed fluctuations during heavy rain.)

* Though it's not super-relevant to this review, here's what the AirOS control panel looks like when you're messing with AirMAX gear. This is the point-to-point connection that I used in my garage for a while.

* If I were smarter, I'd probably be able to use this constellation display to, like... make... radio more... better? I'm dumb.

* The AirView function includes a couple of waterfall displays showing 5GHz spectrum utilization and a live graph of sources of noise. It's beautiful, cool looking, and it updates at like 30fps. Really neat to stare at.

* AirOS also includes a wizard to help you pick the best channel width and location. This was just a neat tool all around.

I originally started out with a few UAP-AC-PROs that I purchased after completing the original Unifi review (Ars does not keep review hardware, and the Unifi kit I originally tested with was given away as part of the [2015 Ars Child’s Play charity drive](https://arstechnica.com/gaming/2015/12/win-laptops-game-consoles-and-collectibles-in-the-2015-ars-charity-drive/) ). But as noted, Unifi APs are a gateway drug to not just more Unifi APs but to other classes of Unifi gear. It wasn’t long before I was feeling the itch to *Unifi all the things,* as the kids say.

Fast forward a year and I’m buying a soundproof enclosure for my closet because I’m adding my third bit of rackmount kit, and even with Noctua fan replacements, the noise is driving me nuts. Learn from me, dear readers-- *this is what insanity looks like:*

As of today, everything branches off of a Unifi [US-48-500W](https://amzn.to/2u9cHhb), a 48-port [PoE](https://en.wikipedia.org/wiki/Power_over_Ethernet) -capable [Ethernet switch](https://www.ubnt.com/unifi-switching/unifi-switch-poe/) that functions as both core and edge (sort of) in my little LAN. The US-48-500W provides power to my Unifi APs and IP security cameras. In keeping with the "This is overkill, Lee" theme, the 48-port switch is far beyond what I need from a capacity standpoint, but annoyingly enough it’s also the smallest model switch that Ubiquiti equips with 10Gb SFP+ ports. (A 24-port Unifi switch with PoE and two 10Gb SFP+ uplinks would be most welcome, if any of you Ubiquiti folks are reading!)

After upgrading my NAS and virtualization server, I fell in love with the idea of using 10-gigabit Ethernet--not because I had any 10Gb-capable desktops or laptops, but because my NAS functions as a backup repository for every computer in the house and oftentimes many computers will be backing up at the same time. Going to 10-gigabit Ethernet means I’ve got headroom beyond each client’s 1Gbps connection; even if one or two clients are going nuts, the NAS still has the network overhead to ingest more stuff. (And with IO divided up between 12 spindles in RAID10, the NAS has plenty of disk bandwidth.)

As for the virtualization server, well, I figured if I was already going 10GbE on the NAS, I might as well go 10GbE on the server, too--if for nothing else than that such a setup would make it extremely convenient to spin up iSCSI mounts off of the NAS for various virtualized servers to take advantage of rather than burning local storage.

But eagle-eyed readers will notice that the network diagram from earlier contains an [actual 10GbE switch](https://store.ubnt.com/collections/routing-switching/products/unifi-switch-16-xg) --a Unifi [US-16-XG](https://amzn.to/2lWFbXP). Because... well, I mean, I figured that if I was going to commit to 10Gb per second, I might as well *commit to it,* and build [aggregate links](https://www.auvik.com/media/blog/network-basics-link-aggregation/) for everything because that’s what the cool kids do. And so that’s how I found myself dropping a two-port [converged network adapter](https://amzn.to/2KwlzbH) into my gaming PC, giggling a giggle edged with just a hint of madness.

I also finally ditched my faithful, years-old [Smoothwall Linux firewall](http://www.smoothwall.org/) and made the jump to using a Unifi firewall in order to take advantage of that whole "single pane of glass" management thing. I first went with the SOHO-appropriate [Unifi Security Gateway](https://www.ubnt.com/unifi-routing/usg/) but transitioned to a larger [USG Pro](https://www.ubnt.com/unifi-routing/unifi-security-gateway-pro-4/) when I upgraded to gigabit Internet service. This router upgrade was probably not necessary--though as I’ll note near the end of this piece, the Unifi Security Gateways have some annoying quirks, and if you want to use *all* their bells and whistles, you might need to spend more money than you anticipate.

There are a few other things of note--I’m more than satisfied with the Unifi PoE switch sitting out in my garage driving the additional cameras and the mFi gear, and oh man, [that mFi kit](https://www.ubnt.com/mfi/mport/) is a whole other sad article--but this covers the hardware essentials.

The neat part comes with how it all fits together.

The key selling point of the whole Unifi system is its central management, and the large-scale configuration and topology changes that can be rolled out from that. Rather than logging into each individual switch and AP to make configuration changes, the preferred way to manage the whole setup is via the [Unifi Controller application](https://www.ubnt.com/software/) (there’s [an online demo](https://unifi.ubnt.com/) you can play with if you’re interested in exploring past my screenshots, which I definitely recommend).

The controller can be run on bare metal, in a virtual machine or container, or on a [specialized PoE-powered dongle](https://amzn.to/2lX0590). While you can do some setup and management tasks without using the controller (primarily with the company’s [iOS and Android app](https://help.ubnt.com/hc/en-us/articles/226395988-UniFi-Managing-Access-Points-via-UniFi-Mobile-App) ), you must use the controller software if you want to exploit the full capabilities of the system. If you have both wired and wireless Unifi gear, the controller is effectively mandatory. (I mean, OK, it’s not strictly required, but without it you’ve wasted your money buying Unifi gear instead of just getting plain APs and managed switches.)

* The new Unifi dashboard, which comes with the 5.9 branch of the controller. The "dropped packets" graph isn't accurate (the 5.9 branch of the controller software is still in testing), but it's otherwise really neat.

* All my devices. There's a pending firmware update I didn't want to download before taking screenshots.

* Clicking on a device brings up its properties sheet, where you can do stuff to it.

* Peeking at clients. You can display wired, wireless, guest, or any combination. You can also force wireless clients to disconnect and reconnect, or you can block clients from connecting at all.

* Pulling up details on a client. You can also look at its past connection history and a number of other things.

* The "Insights" configuration tab has a large amount of stuff to dig into, including a look at how the Wi-Fi landscape around you changes over time.

* There's also a great deal of switch data--you can watch traffic counters and reboot PoE devices from here (and from several other places, too).

* Top-level overview of the default deep packet inspection counters, showing available data.

* Detail view of historical client bandwidth usage.

* The auto-generated topology view is actually pretty good--it's improved greatly over the last few controller revisions.

* Toggling on the client view shows you what's connected to where.

* Zooming in a bit. Hovering over a client transforms its connection into a "marching ants" animation, making it easier to pick out from the rest of the spaghetti.

* If you can supply a floor plan, the Unifi controller will attempt to figure out Wi-Fi propagation for you. You have to draw your walls and windows manually, as well as set the material type. But it does a valiant job of trying to estimate how your signals will work.

* Digging into the configuration menu. SSH keys entered at bottom are pushed out to all connected Unifi devices, making it reasonably easy to log into them without a password if desired.

* List of SSIDs. I'm using four--one for stuff I care about, two for stuff I don't, and one for guests.

* Configuration detail on my IoT SSID.

* A look at the network definition of my IoT subnet and VLAN (clients joining my IoT SSID are attached to this VLAN).

* Firewall rules. You can set rules at multiple points on your LAN, with separate rulesets for IPv4 and IPv6. These are (most of) the rules governing how my IPv4 segments talk to each other.

* Not much port forwarding going on with me these days, but rules go here.

* Here's where you configure your guest control and hotspot stuff.

* I've built a number of switch port profiles that I can apply to various ports connected to different kinds of clients on various switches. If I want to throw down a new security camera, for example, I have a port profile already defined with the correct PoE setting and VLAN.

* Detail on my G3 camera profile, which enforces MAC-based 802.1X port security.

* Here's what the "Access Point" profile looks like applied to port 1 of my garage switch...

* ... and here's that G3 cam profile applied to port 7.

(Quick caveat: I’m running the 5.9.4 unstable branch of the controller software because I wanted to try out the new dashboard. Other than the dash, most of the functionality is at parity with the previous 5.8 branch, though there are some small differences.)

I’ve elected to set up the Unifi controller in an LXC container running on Ubuntu 16.04 LTS server along with all my other LXC containers. It’s proved quite happy to run in that environment--its requirements are relatively low.

"Software-defined networking" is a marketing term only slightly less offensive than "the cloud" and "big data." But it applies here: pretty much everything about a Unifi deployment except its physical cabling can be centrally managed, changed, and updated through the controller application.

This means firewall rules for both your WAN and LAN segments are managed through the controller. VLANs are managed through the controller rather than on individual switches. Even switch port configurations are centrally managed--you can define a port configuration profile on the controller for, say, ports that you want to use MAC-based 802.1X authentication and a specific native VLAN and PoE, then apply that profile to specific ports on multiple switches.

You can segregate traffic on your LAN into routed VLANs and centrally redefine which ports on which switches are on which VLANs. The Unifi switches themselves aren’t L3 native, so inter-VLAN routing is done with the assistance of the actual Unifi router hardware, but you define all the network boundaries through the controller.

This extends to wireless clients, too--the Unifi controller enables you to not only advertise multiple SSIDs, but to assign VLANs to those SSIDs. This is a huge help when you’re trying to segregate traffic between trusted and untrusted devices.

The system also handles DNS and DHCP, if that’s your preference--and it handles the sticky bits of doing DNS and DHCP across multiple LAN segments, too. (You can easily deploy your own DNS and DHCP services if you like--I use the Unifi DHCP for most of my VLANs, but I use my own bind9 and dhcpd setup for the network segment where my trusted hosts live.)

The last major feature I’m going to touch on is the guest portal functionality, which is an enterprise-grade feature you’ve probably used if you’ve ever paid for Wi-Fi in a hotel or airport. The Unifi controller allows you to stand up your own custom guest portal with several different methods of guest access--it can be wide open, or it can ask guests for a password, or you can generate voucher codes for guests to use, or you can go full capitalist and set up a Paypal or Stripe payment portal and charge guests for access. I admit I went a little nuts with my guest portal design, but I do love watching houseguests’ reactions to the login page.

Still using this for my guest captive portal login page w/simple password authentication. (21 USC §643 actually concerns meat-packing business registration rules.)
There’s a huge amount of additional functionality, and a full review of the Unifi controller would take up five or six thousand words on its own. There’s a robust IDS/IPS service based on [Suricata](https://suricata-ids.org/) that you can enable to help detect and harden your network against intrusion (though this functionality comes with the cost of disabling hardware offload on the Unifi gateway, which severely limits your throughput). There’s QoS ("Smart Queues" in Ubiquiti terminology). There’s a pretty comprehensive deep packet inspection tool that enables you to drill down to the host level and see which network client is sending what traffic where. And there are a few other interesting bits and bobs, too, including a fully functional RADIUS server and built-in dynamic DNS update functionality, if that’s your thing.

If none of this sounds interesting or valuable, then that’s OK--a lot of this functionality is secondary to the "I just want awesome Wi-Fi" goal that many people have when they start buying Unifi APs. In fact, that’s kind of the point--I wasn’t really interested in doing all of this a few years ago, either. I just wanted awesome Wi-Fi. But as noted earlier, this stuff is kind of like a virus. You buy a couple of APs to play with, and a few months later you’re hungrily dropping icon after icon into Visio as you plan out your homelab network deployment.

## What I’m doing for VLANs and why
On the subject of VLANs: I’ve taken advantage of the fact that the Unifi kit supports VLAN tagging and set up a total of five of the things. A VLAN, or " [virtual LAN](https://en.wikipedia.org/wiki/Virtual_LAN)," is a way of creating isolated broadcast domains--effectively isolated networks--within your larger network. That’s a simplified explanation that doesn't touch on [how VLANs fit into the OSI model](https://documentation.meraki.com/MS/Layer_3_Switching/Layer_3_versus_Layer_2_Switch_for_VLANs) or what their limitations are--I’m sure several someones will be along in the comments to give a deeper one. My Unifi VLAN layout looks like this:

VLAN 1 is the native VLAN, and it’s where my trusted hosts go, both wired and wireless. My wife’s and my computers and smartphones live here. Devices on VLAN 1 are allowed to communicate to most other VLANs, though I do have some restrictions on traffic from VLAN 1 to the IoT VLAN because I wanted to do some fiddling to see what it takes to break Homekit. (Results: not very much.) I’ll likely remove those restrictions at some point.

(Quick aside: I'm aware that it's [definitely not optimal](https://networkengineering.stackexchange.com/questions/32737/why-should-the-native-vlan-never-be-used) to actually use the native VLAN in this manner, though I'm primarily relying on VLANs for an organizational strategy for my layer 3 segments. There are firewall rules between segments to actually enforce isolation. But, yes, I know I should create a new VLAN for trusted hosts and keep them off of native.)

VLAN 69 is for Internet of Things devices. All my IoT crap goes here, and I have a specific SSID for wireless IoT devices. Devices in VLAN 69 are allowed to send DNS lookups to my LAN DNS server on VLAN 1 but nothing else. I wanted DNS queries going back to my local LAN resolver/forwarded rather than directly out to the Internet because I want to be able to audit the DNS queries all the IoT crap is making--and also because I want to be able to filter those DNS lookups if a device keeps doing something I don’t want it to do. (So far nothing’s behaved badly, but I like having the logs to check.)

VLAN 79 is where my IP security cameras live (I’m using [Unifi G3 cameras](https://amzn.to/2MRs5WW), but there’s just not room in this piece to squeeze in a review of them; the ultra-short version is that they’re perfectly adequate, but the lack of standardized PoE on the earlier models--which I own--is *maddening* ). It’s generally accepted as a good idea to segregate security camera traffic on its own VLAN so that you can apply QoS rules to keep it from eating the rest of your LAN bandwidth; the relatively small number of cams I’m running makes that mostly superfluous, but I did the work and set it up anyway--it was yet another in a long string of learning experiences.

VLAN 99 is an isolated VLAN for my [bastion host](https://en.wikipedia.org/wiki/Bastion_host). I forward my external SSH port to a Celeron NUC on VLAN 99 (named, somewhat appropriately, " [Oubliette](http://www.medievalchronicles.com/medieval-castles/medieval-castle-parts/oubliette-castle-dungeon/) "). The bastion host is hardened and includes [2FA authentication](https://duo.com/docs/duounix), and the only interaction it’s allowed with any other LAN segment is to pass SSH traffic to VLAN 1. When I need to access my network remotely, I first SSH into the bastion host, then SSH on to where I need to be.

The last segment is the built-in Unifi guest network, which is only accessible to wireless clients that join the guest SSID. The guest network provides Internet access but has no access to any other LAN segments.

I’ve elected not to include detailed iPerf-based client bandwidth testing in this review--if you want that, you can hit [the previous review](https://arstechnica.com/gadgets/2015/10/review-ubiquiti-unifi-made-me-realize-how-terrible-consumer-wi-fi-gear-is/) because the numbers won’t have changed all that much.

Single-client bandwidth isn’t where these devices excel--as noted in the previous review, a years-old Apple Airport Extreme beats a Unifi AC-Pro in a multi-stream iPerf test without breaking a sweat. If you’re looking to buy Unifi APs so you can dominate benchmarks, you’re buying the wrong gear--go buy [one of these crazy-ass things](https://amzn.to/2tXsH6E) and call it a day.

Anecdotally--and, in my opinion, far more usefully--I’ve had absolutely no problem with wireless coverage or speeds, even with a dozen house guests all simultaneously streaming video and playing games. Unifi APs err on the side of providing consistent and reliable connections for lots of devices rather than allowing single clients to dominate, which is typically what you want even in a family home. Devices roam from AP to AP as needed without dropping off the WLAN; everything *just works,* which is exactly how you want Wi-Fi to be.

* Signal-to-noise ratio inside and outside the house with my current Wi-Fi configuration.

* Absolute signal level. The master bedroom is particularly sticky because there's no ceiling access and the exterior of the house is brick, so getting a signal in there involves radio waves bouncing around a lot.

* Compare the previous slide's measured signal levels with the Unifi Controller's guess at how things should propagate.

* Signal-to-interference ratio. Looks good to me.

* Noise level. Red is good.

* Whole-house uninterrupted 5GHz coverage: success.

* Whole-house uninterrupted 802.11ac coverage: success.

* I went ahead and included NetSpotApp's "troubleshooting" advice screens, too. This is it telling me that my signal-to-noise ratio is fine indoors, but getting a little iffy out on my front porch and driveway.

* Signal level indoors is mostly solid. The yellow in the dining room is because the AP serving that part of the house is a bit occluded thanks to interior walls.

* Things get a little nuts outside, but indoors the Unifi controller has done a solid job of not having any channel overlap.

The most interesting thing about the above coverage heat-maps--which were generated using a copy of [NetSpot Pro](https://www.netspotapp.com/), courtesy of the NetSpot folks--is how dramatically they differ from the Unifi controller’s predictive map (included in the gallery for comparison). This is a blatant reminder that while automated predictive tools can help with your planning, there’s just no substitute for a good ol’ site survey.

Again, the biggest thing I was trying to achieve was having a uniform, strong 5GHz signal everywhere--something that requires multiple APs to do well (unless you live in a studio apartment and have only one room).

I’m happy with how things have shaken out, but getting to that state can take a bit of effort, and the specific things that worked for me might not work for you. There’s no magic bullet--but there are some helpful knobs to twiddle.

## Configuration tweaks for whole-house 5GHz satisfaction
From a perspective of strategy, you start by making gross adjustments to your WLAN by tweaking your access points’ channel selections, channel widths, and transmit power. The idea is to ensure that your APs are each using separate channels with low noise and low interference; the traditional 2.4GHz advice of "always use channel 1, 6, or 11" fits in with this strategy. But that’s only the beginning.

Before we begin, though, let’s talk about "auto." Unifi APs do indeed have an "auto" setting for both power and channel selection, *and you should never use either of them.* The transmit-power "auto" selection is misleading--it simply locks the AP’s radio at its highest power setting, which is almost certainly not what you want. Having a too-strong AP can lead to a situation where a distant client locks onto that AP because it’s receiving a strong signal, but it doesn’t have the power to transmit *back* to the AP. You want your transmit power set as low as it’s possible to get and still cover the area you want, and no higher than that. As much as you might want to piss off your neighbors, you’re only screwing yourself.

Setting the channel to "auto" should similarly be avoided, in spite of how tempting it is. The issue is that the Unifi APs don’t work with each other when they auto-select channels, and this frequently leads to a situation in which your access points (and your neighbors’ APs, too) constantly stampede across the spectrum, chasing an ever-moving chunk of unused air and constantly interfering with each other. Manual channel selection stakes a claim on some spectrum for each AP, and it should result in more consistent connectivity and a more evenly distributed use of the available spectrum (especially if your neighbors keep their stuff set on auto).

If having to go hands-on like this sounds intimidating, there’s a reason--it kind of is. However, starting with the company’s newer controller revisions (I believe 5.8, but it might be in 5.7), there’s a "please do this for me" button that will lock all of your Unifi APs onto what the controller believes is the best channel and transmit power for them. It’s the "Auto channels" button on the Unifi map screen, and it looks like this:

* Initiating an auto-channel assignment scan from the Unifi controller.

* Here's how the Unifi controller displays the recommended settings for each AP. You can accept them and it will apply for you, or you can discard. These results are what it recommends to me for my 2.4GHz channel settings at a 20MHz channel width.

* Here's where it wants me for 5GHz at a 40MHz channel width...

* ... and here are the recommendations for 80MHz.

You specify a band and channel width, and the controller polls each AP about its RF environment and makes suggestions. You can then apply them all at the same time, if you like what it’s telling you.

I’ve found the suggestions are typically solid and work reliably, though whatever algorithm Ubiquiti is using doesn’t always deliver the same results--multiple clicks of the "Auto channels" button results in different suggestions each time (or sometimes a repeat of the same three or four layouts). I assume this is because the spectrum in my area isn’t super saturated, since I’m in the suburbs and not in a dense urban environment, and the algorithm can arrive at a few different layouts that are all roughly the same level of "optimal." Regardless, all of the suggestions appear to work well.

Major caveats to the tool are that it’s not dynamic and it doesn’t update itself in the background--you trigger it and you do the assignments manually. On one hand, this is probably desirable behavior--if you’ve found a channel configuration that works very well, you don’t want it changing without a very good reason. On the other hand, if you get a neighbor who plunks down a new Linksys router set to its screaming maximum and it eats spectrum you were happily using, your Unifi controller won’t reassess and fix itself. You have to go trigger a reallocation yourself.

If you don’t want to trust the health of your network to automatic tools, you can take things into your own hands. Briefly, the workbook for figuring out what’s right for you starts by doing a detailed RF scan. Unifi APs can peek at their surrounding environment and give you a fair amount of information on which to base your channel number and width. You end up with something that looks like this:

* Breakdown of the 2.4GHz landscape as seen by one of my APs.

* Mousing over each channel gives more detail on the utilization. This is intended to allow you to make an informed choice as to which channel to pick.

* And here's the 5GHz landscape.

* There are more channels, but you have to deal with the potential complication of [DFS](http://wifi-insider.com/wlan/dfs.htm). So choose wisely.

This’ll tell you at a glance which channels are utilized and which aren’t, and you can hover over each channel for more information. From this, you can suss out how busy things are and what channel width is right for you, because there are several options. If you’re in a very noisy RF environment, you likely want to pick narrower Wi-Fi channels, since the narrower a channel is, the less spectrum it crosses and the lower the likelihood is of encountering interference. The trade-off is that narrower channels mean less bandwidth per client.

After you’ve picked a channel and a channel width for both 2.4GHz and 5GHz, you can set a transmit power. General guidance here would be to set your 2.4GHz radio to "medium" and your 5GHz radio to "high" if you’re in a house or "low" and "medium" respectively if you’re in an apartment; however, this should be validated by at least walking around with a site-survey application on your phone or laptop so you can actually observe the effect of the different power levels before committing to a choice. (If you really know what you’re doing, you can manually lock the transmission power to a specific setting.)

After messing with how your APs talk to clients, the next step is messing with how your clients talk to your APs--or, more correctly, messing with how your APs *listen* to clients. This starts with adjusting each AP’s [minimum RSSI setting](https://help.ubnt.com/hc/en-us/articles/221321728-UniFi-Understanding-and-Implementing-Minimum-RSSI), which tells each AP to reject wireless clients below a certain signal strength. The idea with this setting is to force wireless clients to each connect to the best possible AP rather than having them dumbly latch onto the first AP they pick up (which can cause that AP to waste airtime on that client, which can result in lowered throughput for other connected devices on that AP). If a client below the minimum RSSI tries to register itself with an AP, it’s gently told to go try again somewhere else.

As the linked Ubiquiti help document notes, minimum RSSI is a "soft" tool--it doesn’t prevent persistent clients from trying to connect, but it’s almost certainly going to be sufficient for a home installation with two or three (or five or six) APs. However, in large environments where a little more force is needed, you can utilize minimum RSSI with the "Strict Mode" toggle, or go directly to the "Cell Size Tuning" setting. Both of these will make your AP effectively deaf to signals below the threshold you set.

Again, though, the trick is to find the *lowest possible transmit power* for your access points. This will ensure that clients connect to the closest AP as you roam, which spreads the client load among your APs and keeps your overall airtime usage low. This takes time and is best done with multiple site surveys--you can estimate things all day long, but there’s no replacement for walking around and actually measuring. If this sounds like a pain in the butt, well--this is why plug-n-go mesh setups like [Plume](https://arstechnica.com/features/2018/06/exclusive-plumes-new-superpod-hardware-is-here-and-its-fast/), [Eero](https://arstechnica.com/gadgets/2015/02/eero-takes-a-crack-at-pushing-mesh-wi-fi-through-your-whole-house/), or even Ubiquiti’s own [Amplifi](https://arstechnica.com/gadgets/2016/07/spending-some-time-with-ubiquiti-labs-amplifi-home-wi-fi-mesh-system/) are so popular.

There are some additional tools you can employ, as well. Unifi APs support " [band steering](https://www.networkcomputing.com/wireless-infrastructure/4-wifi-band-steering-myths/1861851560)," which attempts to encourage clients to connect to the 5GHz SSIDs instead of 2.4GHz. You can also turn on [airtime fairness](https://routerguide.net/airtime-fairness-on-or-off/), which tries to enforce limits on the number of clients per AP to ensure that each client has a certain minimum amount of transmit/receive time allocated to it.

Finally, you can go so far as to disable the 2.4GHz or 5GHz radios on each AP--if you have a client that just won’t connect to 5GHz no matter what, this is the nuclear option. It’s also handy if you have zero 2.4GHz or 5GHz clients and don’t want to clutter up the spectrum unnecessarily. If you have multiple SSIDs, you can use the same settings page to control which SSIDs are available on which APs--very useful if you have a Unifi installation across multiple buildings and you want to have different SSIDs for each.

What has proven to work for me is a minimum RSSI of 70dBm, with strict mode enabled, and otherwise accepting the values from the controller-driven auto-channels selection tool. In denser environments, more hands-on tweaking might be necessary.

## A brief bit of 10-gig Ethernet testing
I don’t want to spend a tremendous amount of time on the wired performance side--the switches all work as switches should work. But 10-gigabit Ethernet isn’t really that common in home deployments yet, and unless you’ve got a 10GbE kit at work or you’re a crazy homelabber like me, you likely haven’t spent an abundance of time at speeds above 1Gbps.

As noted earlier, I stuck an [Intel X710-DA2](https://amzn.to/2NpMRhw) converged [network adapter](https://ark.intel.com/products/83964/Intel-Ethernet-Converged-Network-Adapter-X710-DA2) into my gaming PC because I wanted to play around with 10GbE and because I have no impulse control. The X710-DA2 is an x8 PCIe 3.0 card with space for [two SFP+ transceivers](https://en.wikipedia.org/wiki/Small_form-factor_pluggable_transceiver#10_Gbit/s_SFP+), which means it can easily support two 10Gbps connections (though "support" and "fully utilize" are obviously two very different metrics).

* Chucking a 100GB file across the LAN, from PC to NAS. It doesn't quite peg 10Gbps consistently, but it does a pretty good job.

* Chucking the file back the other way. My SSD suddenly becomes very sad and busy.

* All that IO is enough to keep a single core reasonably busy, too.

* Forming the Network Team Voltron. Or creating an 802.3ad aggregate link.

* Performing two PC-to-NAS transfers simultaneously to give the network driver plenty of chances to split the load, but we're running into a bottleneck.

* Rather than copying with SMB, here's a block-level copy operation with iSCSI from PC to NAS. It's on average a little slower than the SMB copy operation.

* This time, since we're going block level, we can see the Synology NAS hit its limit.

* A quick peek at the copy operation from the NAS's perspective, showing all 12 disks very busy. There are few IO problems that can't be solved by throwing more spindles into the mix!

The above transfers were done first via SMB/CIFS and then repeated via iSCSI between my gaming PC ( [full parts list](https://pcpartpicker.com/user/lee_ars/saved/#view=3RdxrH) ) and a [Synology DS3617xs](https://amzn.to/2tXGzgY) NAS with 12 [WD Gold 6TB drives](https://amzn.to/2KRifEb) and a Synology-branded [dual-port converged network adapter](https://amzn.to/2tY4X27).

There are a bunch of screenshots in the above gallery to go through, but the quickie summary is that *sending* 10 gigabits per second from the gaming PC was relatively easy--all you need is something that can ingest 10Gbps as quickly as you can throw it. *Receiving* 10Gbps was a touch beyond the limits of [my SSD](https://amzn.to/2NnoTUl) (and yes, I’m using the [Samsung Magician](http://www.samsung.com/semiconductor/minisite/ssd/product/consumer/magician/) software). I suspect the issue is that the SSD is throttling itself under load and that I could probably push the throughput higher if I looked into buffing its cooling.

With the 20Gbps aggregate link in place, actually hitting 20Gbps proved impossible--but it’s not the fault of the Unifi switches, which as you might expect have the switching capacity to handle all ports operating at line speed. Rather, the problem is that I just don’t have the hardware to consistently read or write at those speeds. By and large this won’t matter to home users--it’s rare for anyone to have 10GbE at home right now, though 10GbE over copper is becoming more and more common. But two 10GbE ports aggregated together isn’t just overkill--it’s downright ludicrous.

(Obviously things are different if you’re using 10GbE networking kit at work, where it’s ostensibly supposed to be used, either as a high-bandwidth point-to-point link or for [top-of-rack aggregation](http://bradhedlund.com/2009/04/05/top-of-rack-vs-end-of-row-data-center-designs/). In fact, for those use cases, 10GbE is at the opposite end of the spectrum than it is for the home user: it’s getting to be downright pokey. Forty-gigabit Ethernet-- [and beyond](https://en.wikipedia.org/wiki/100_Gigabit_Ethernet) --is where it’s at in the enterprise.)

The performance of the Unifi setup at 10Gbps is exactly like it is at 1Gbps--the switches switch data at line speed. They don’t exhibit extra noise or heat, and they don’t show spikes in their load averages or RAM usage. They just work, which is exactly what you want out of networking gear.

No technology is perfect, and the Unifi line is far from it. As happy as I am with the APs and switches, I’ve got a number of issues--there are problems and oversights all over the place, both from the perspective of a home user and a business one, and some are truly baffling.

For example: for all the neat DPI reporting, the reporting-period length doesn't appear to be customizable. This means that, while it’s easy to see how much bandwidth a particular client has used, it's impossible (without manual resets) to see how much bandwidth a particular client has used *in a specific time frame*, which removes a lot of the feature’s usefulness. Worse, the controller doesn’t offer a live display of per-client bandwidth usage--only historical. I’d consider this basic functionality, but if you’re using a Unifi gateway for your router, it’s annoyingly absent. There is a [community feature request](https://community.ubnt.com/t5/UniFi-Routing-Switching-Feature/USG-Realtime-traffic-graph/idi-p/2152230) open for it, but no indication of any movement toward implementation.

Other basic functionality exists but isn’t exposed in the GUI. The most annoying example is setting DNAT and SNAT rules on traffic headed to anything other than the Internet--something that you'd need to do if, for example, you want to manually force all DNS traffic through your own DNS server first in order to audit DNS lookup attempts from IoT devices that are sneakily trying to send queries to hard-coded DNS servers. The functionality exists, but to configure it you must connect to your Unifi gateway with SSH and [directly editing config files](https://scotthelme.co.uk/catching-naughty-devices-on-my-home-network/). If you stick to the GUI, you're limited to basic port forwarding and packet filter rules.

The Unifi system’s wireless uplink capability--functionality which lets you wirelessly extend your network to Unifi APs without needing separate SSIDs and without a wired backhaul--is awesome when it works, which in my experience is about 75 percent of the time. The only consistently reliable way I found to fix it when it broke was to retrieve the remote AP and plug it into the LAN for it to re-provision itself from the controller, then start the wireless uplink process over again from the beginning. For me, this meant some time on a ladder in my garage. For a remote deployment, this could mean protracted downtime.

I absolutely understand that wireless uplink isn’t the easiest thing to implement, and in Ubiquiti’s defense the wireless uplink process is *vastly* improved from how it was even a year ago. And, as noted earlier, the fact that I’m using bleeding-edge firmware is *not* helping. I’d likely have much better results by sticking with stable firmware. Caveat emptor.

The USG--the router portion of the system, which I haven’t really talked much about--is just an odd duck from a home user’s perspective (not necessarily surprising, because like the rest of the Unifi line, it’s not *really* meant for home users). The [entry-level version](https://amzn.to/2Nqo4dk) is ludicrously underpowered if you want to use DPI and IPS (which requires disabling [hardware offload](https://help.ubnt.com/hc/en-us/articles/115006567467-EdgeRouter-Hardware-Offloading-Explained) and forces the CPU to do work far beyond what the USG designers spec’d it to do). The ["Pro" version](https://amzn.to/2KJb1oJ) has a bit more grunt but still can only manage to route at 250Mbps with IPS turned on and hardware offload disabled. The [top-end router](https://unifi-xg.ubnt.com/usg-xg-8) has enough CPU power to route at 1Gbps regardless of hardware offload, but it’s [priced like the enterprise router it is](https://www.streakwave.com/itemdesc.asp?ic=USG-XG-8).

If you’re sitting on a 50Mbps Internet connection, then all of that is academic--you can get by with the entry-level USG without any issues. But if you have home Internet service with more than a couple hundred megabits of bandwidth, using a USG is a matter of picking and choosing which advanced features you can live without, and that’s just not great. There are other non-Unifi router choices that don’t require that kind of feature compromise.

There have been persistent rumors on the Ubiquiti forums of a new mid-tier USG device coming. Referred to as the USG-HD-4, it will in all likelihood be based around hardware similar to the company’s existing [EdgeRouter 4](https://amzn.to/2MTmLmi). However, when Ars reached out to Ubiquiti to ask about the device, an employee with knowledge of the situation informed us that development of the USG-HD-4 was put on hold in December 2017 and remains on hold at this time. So at least for now, the Unifi Security Gateway line will remain as-is.

## Noise, heat, and power usage
The APs don’t make noise, obviously, and while they get pretty warm, their power usage is relatively minimal. The AP-Pros pull about four watts, and the one AP-HD I have pulls about six watts.

The switches aren’t awful when it comes to power usage, either. The Unifi security gateway I’m using (the pro model) consumes about 15 watts. The 10GbE switch uses about 20 watts. The largest draw is the 48-port PoE switch at about 60 watts, although that includes the 20-ish watts of power it delivers to downstream devices. All told, the Unifi setup I have is roughly the energy equivalent of running a single 100-watt light bulb 24/7.

Translating that into real-world cost is difficult because electricity pricing is complicated. But if we take the US national average of $0.12 per kilowatt-hour, a constant 100W load translates into about $105/year in electricity costs, or a little under $9 per month. (Rates in Texas where I live are pretty variable, but I pay a rough average of $0.09 per kilowatt-hour, which means my network costs about $79 per year in power, or about $6.70 per month.)

Noise, on the other hand, is *awful*. Everyone has their own thresholds for what constitutes acceptable noise, and plenty of threads on the Ubiquiti forums are full of folks going back and forth over whether or not various Unifi switches are too loud. My personal opinion is that while they’re nowhere near " [Dell PowerEdge R410 at boot](https://www.youtube.com/watch?v=fbRYVXxVzkE) " levels of loud, they’re *way* the hell too loud to comfortably sit in the same room as me while I work. I replaced the fans in the gateway and 48-port switch with aftermarket 40mm Noctuas, which helped a great deal, but the 10GbE switch uses 30mm fans, and I’ve had a very difficult time finding quiet fans that fit. (Reader suggestions are welcome, if anyone has any!)

As it is, I’ve got the Unifi switches installed in a 4U XRackPro2 noise-reducing enclosure, which is the only way I’ve found to retain my sanity. Be aware that rackable Unifi switches are like most rackmount gear: quietness is an afterthought in the design.

## Where we go from here
I like to think that I’ve finally, after more time and cost than I care to admit, achieved homelab nerd nirvana. But who’s kidding whom? Scratching the urge to tinker is not unlike scratching a mosquito bite--you get some temporary relief, but man, the itch comes back *quick.*

For now, though, I think I’m done buying networking gear. The configuration I’ve landed in checks a whole hell of a lot of boxes--available optical or copper 10-gigabit Ethernet, fast 5GHz Wi-Fi in every room, and a reasonably secure network with appropriate client segregation. The cost wasn’t inconsiderable, but it wasn’t *that* over the top--creating a similar setup with another OEM’s components would likely incur similar or higher cost if I were going for near-absolute feature parity (especially the number of 10GbE ports).

If it’s not clear by now, I really, *really* like my Unifi gear. It’s always possible that in a couple of years I’ll rip it out and try something else--gotta scratch that itch, after all--but at least for now, I’m pretty damn happy.

### The Good
* This is the Wi-Fi setup I’ve always wanted.
* AP pricing is, for the most part, excellent and makes the gear extremely accessible.
* Extremely in-depth Wi-Fi options for exact cell size and performance tuning.
* Single pane of glass is elegant and easy to use.
* AP integration with switches and router via SDN makes complex config tasks incorporating both wired and wireless gear extremely easy.
* Guest portal functionality means you can finally force your guests to pay money to use your Wi-Fi just like a hotel and maybe that will get Matt to stop always downloading so much crap when he comes over for poker night, I’m talking to you Matt, stop torrenting when you come over here because starting this week it’s going to cost you $20 to get on the guest Wi-Fi and *I am not joking*.
* Products are in active development and new features regularly appear.
* Wide range of wired and wireless networking SKUs to build highly customized configurations with.

### The Bad
* You need to know what you’re doing because it’s easy to overcomplicate your setup. (Note: I might not know what I’m doing.)
* Current USG product lineup is problematic if you're not at the high-end.
* Controller software required for that SDN goodness.
* You *will* need to spend time planning and configuring to get the most out of this gear--plug-n-go is possible, but full functionality requires work.
* Wireless uplink is still, in my experience, not reliable enough for production use (but your mileage may vary).
* The Wi-Fi side is great, but there’s an annoying lack of GUI-exposed features on the routing and switching side.
* If all you care about is single-host raw Wi-Fi speed in benchmarks, you can do better elsewhere.
* If you want the latest features you must use unstable or beta releases, and that brings its own problems.
* Homelabbers or folks obsessed with the perfect setup might spend more money than they’re comfortable with once the Unifi gear gets a foot in the door.

### The Ugly
* The reality is that you probably don’t need this at home. I know I don’t. But "need" and "want" are very different animals.

### The verdict
Do you *just* want better Wi-Fi in every room? Consider buying a Plume or Amplifi or other similar plug-n-go mesh system. On the other hand, are you a technically proficient network kind of person who wants to build an enterprise-lite configuration at home? Do you dream of VLANs and port profiles and lovingly tweaked firewall rules? Does the idea of crawling around in your attic to ceiling-mount some access points sound like a fun way to kill a weekend? Is your office just too *quiet* for your liking? Buy some Ubiquiti Unifi gear and enter network nerd nirvana.