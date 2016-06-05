This is a small game I created for a live-code demo for Criteo's 2016 summit workshops.

The code in this repo is not what I live coded, it's what I wrote when preparing the workshop, which is very close. 
There are a few commits for the big steps of the workshop.

##About gamepads
I didn't code keyboard inputs, so the game is only playable if you have a gamepad plugged in.

Moreover, I didn't mention it during the workshop, but different browsers represent gamepads in different ways. 
For instance, on Firefox, the right stick is on axes 3 and 4, while on chrome it's on axes 2 and 3. 
You can use [this page](http://html5gamepad.com/) to check your gamepad.
And of course, buttons and axes will have different indexes depending on the type of gamepad you use. 
There is probably a library that can abstract all this for you, I'll let you search.

This game was coded for Firefox and Xbox 360 controlers.

##About assets
I got the assets from [opengameart.org](http://opengameart.org/).
Tanks are from [here](http://opengameart.org/content/topdown-tanks) with CC0 license, 
and the explosion is from [here](http://opengameart.org/content/pixel-explosion-12-frames), with [CC-BY](http://creativecommons.org/licenses/by/3.0/) license. 
I modified it to add an empty frame in position 13.

##About the lib
I'm using easelsj from [createjs](http://www.createjs.com/). Their sound library is nice as well, 
and their preload library can help manage the mess of preloading asset. They also have a well written and helpful doc.
