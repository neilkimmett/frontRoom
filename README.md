frontRoom
=========

Website for the frontRoom music collaboration.

Introduction
------------

frontRoom is an active community of music lovers who share a love of genuinely __good music__.

The format that frontRoom has been for years has been an invite only facebook group which has expanded.

Format
------

The format of the website:

Featured Section
- A place to highlight a post (or multiple) of particular interest.
- Ideas needed...!

Tunes Section
- A general every day place for posts from collaborators.
- Rateable by viewers
- Rateable by collaborators
- Could be short posts or in depth.
- Title, Body, Picture (optional), media

About Section
-Info on the ethos of frontRoom
-Perhaps at the beginning

Blog
-Used for general site updates
-Going to be an incremental site build so info on up and coming bits.


Setup
-----

To get a local copy of the website up and running do this:
- pull this repo to a sensible location
- Download and install node
- Add the /routes/secrets.js file which will contain stuff to connect to mongo/facebook app for authenticating
- Go to the route folder and run 'npm install'. This will get the dependency modules from node package manager and install (run as sudo)
- Run 'node app'. This should start the server.
- Go to 'localhost:3000' or whatever the port was set to be.
- Have fun.
