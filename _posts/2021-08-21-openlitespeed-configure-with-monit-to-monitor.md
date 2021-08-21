---
layout: post
title: OpenLiteSpeed configure with monit to monitor
date: 2021-08-21T09:11:50.986Z
tags:
  - Linux
  - How To
categories:
  - Linux
  - How To
author: shiv
post_image: /assets/uploads/monit.png
---
To monitor OpenLiteSpeed with monit on Ubuntu Server, create file

```shell
vi /etc/monit/conf-enabled/openlitespeed
```

Add following content

```shell
check process OpenLiteSpeed with pidfile /tmp/lshttpd/lshttpd.pid
start program = "/usr/bin/systemctl start lshttpd"
stop program = "/usr/bin/systemctl stop lshttpd"
```

Reload monit with

```shell
monit reload
```

Now monit will monitor OpenLiteSpeed, restart if required. You can check status with

```shell
monit status
```

If you want to monitor if web server is responding to request, you can use

```shell
check process OpenLiteSpeed with pidfile /tmp/lshttpd/lshttpd.pid
start program = "/usr/bin/systemctl start lshttpd"
stop program = "/usr/bin/systemctl stop lshttpd"
if failed host localhost port 80 protocol http then restart
```