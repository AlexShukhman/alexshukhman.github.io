# Welcome To My Website!

_As you are looking at the README, I imagine you must be interested in a tour..._

## To Download

I recommend using [Git](https://www.atlassian.com/git/tutorials/what-is-git) to download this repository, but if you'd like, you can also click [here](https://github.com/AlexShukhman/alexshukhman.github.io/archive/master.zip) to get a zip file of the code.

## Required to Run (Locally)

* [NodeJS](https://nodejs.org/en/download/) -- I use this only because of the self-referential nature of the app. Take a look at the [guide](README.md#how-it-works) to see why this is neccesary.
* An up-to-date browser -- if you're using Internet Explorer, I can't help you. [Go here for salvation.](https://www.google.com/chrome/)

## Required to Build (Locally)

* [Python3 -- Anaconda](https://www.anaconda.com/distribution/) -- I use this Python because it comes built in with the latest pip and because [smarter people than I](https://docs.python-guide.org/dev/env/#pyenv) like it as well.

## To Run (Locally)

```sh
cd path/to/directory
npm install
node index.js # starts local server at port: 3000
```

## To Build (Locally)

```sh
python build.py
```

or if that doesn't work

```sh
python3 build.py
```

## How It Works

1. The main information on the page is all in the [src directory](src/json/)
2. The main build scripts are in the the [src directory](src/python/) too
3. [build.py](build.py) will use [multiprocessing](build.py#L33) to call all the build scripts at the same time using some import magic.
4. The build scripts will make the [HTML files](public/html/) that are each of the views.
5. These HTML files are then inserted [via JavaScript](public/scripts/include.js) into their predetermined positions.
   1. NOTE: This is the reason I used NodeJS: in order to make an app that can "include" files locally (as there is nothing serving these files), one must serve them so that the browser isn't asking a filesystem for the resources but rather requesting a server. This is known as [CORS Policy](https://developer.chrome.com/extensions/xhr).