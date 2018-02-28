# Dayton Valley Aquaponics
by Peter Laxalt 2018 (laxaltandmciver.co) (peterlaxalt.dribbble.com)

## Run On Development
1. We built this site using Jekyll.  Reference the official Jekyll [documentation](https://jekyllrb.com/docs/installation/) for getting setup.
2. `git clone git@github.com:peterlaxalt/dayton-valley-aquaponics.git`
3. `cd dayton-valley-aquaponics`
4. `bundle install`
5. `bundle exec jekyll serve`
6. Navigate to [http://127.0.0.1:4000/](http://127.0.0.1:4000/) or [localhost:4000/](localhost:4000/)

## Fire up a .ngrok server (Testing)
- You can access your ```localhost:4000``` from any device because ```.ngrok``` is amazing.
- In the ```/_ngrok/``` folder you'll find a .zip file with .ngrok in it. Install that.
- In terminal, simply type ```$ ./_ngrok/ngrok http 4000``` to fire up a server and they will provide urls.
- Be sure that if you are on development and potentially behind a directory such as ```/dayton-valley-aquaponics/```, you'll have to append that to your .ngrok url.

## Deploy via Github Pages (Development)
- We're hosted up on Github pages, deploying off of the ```master``` branch for development purposes.
- To deploy, simply ```git add .``` your changes, leave a commit message as ```git commit -m "always improving"``` and then deploy by ```git push origin master```.

## Deploy via FTP using Glynn (Production)
- Go to config.yml and make sure the ```url:``` property is set to the correct domain. Comment/uncomment the line if needed.
- Simply type ```glynn``` into terminal and it will deploy to the dvaquaponics.com server.
- To update FTP info, check ```config.yml```

## Copyright

Copyright (c) 2018 Dayton Valley Aquaponics - All Rights Reserved.

Proprietary and confidential. See [LICENSE](/LICENSE).
