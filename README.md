# WebTech-Assignment-6

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/LuFGi9/WebTech-Assignment-6)

## Try or Contribute
Cloned and adapted from: https://github.com/gitpod-io/apache-example

open [https://gitpod.io#https://github.com/gitpod-io/apache-example](https://gitpod.io#https://github.com/gitpod-io/apache-example)

## What this Example does

* use the Dockerfile to configure Apache
* optional: use a custom and minimal apache.conf. If you don't do this, the default from workspace-full will be used.
* follow the Apache logs in the Gitpod Terminal View via multitail
* run apache on port 8080

## Terminal Commands to try
* `apachectl start` - start Apache Web Server (it's started automatically on workspace launch)
* `apachectl stop` - stop Apache Web Server
* `gp open /var/log/apache2/access.log` - Open Apache access.log in Gitpod editor
* `gp open /var/log/apache2/error.log` - Open Apache error.log in Gitpod editor
* `multitail /var/log/apache2/access.log -I /var/log/apache2/error.log` - View and follow logs in Terminal