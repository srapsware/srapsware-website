---
layout: post
title: enable mod_rewrite on IIS Web Server?
date: 2021-06-21T07:52:53.272Z
tags:
  - How To
categories:
  - How To
author: shiv
post_image: /assets/uploads/edit_inbound_rule.png
---
Microsoft URL Rewrite module offers you similar functionality like Apache mod_rewrite module. It is fully integrated into the web.config file (an excellent equivalent of .htaccess file of Apache). URL Rewrite Module in IIS 7 (7.5 and 8.0) provides import feature that makes conversion of Apache mod_rewrite rules to IIS URL rewrite rules too easy. This module comes pre-installed with all AccuWebHosting Windows VPS, guest visitors who want to enable mod_rewrite on IIS can download the [Rewrite Module here](https://web.archive.org/web/20200803150118/https://www.iis.net/downloads/microsoft/url-rewrite).

URL Rewrite Module tries to convert Apache mod_rewrite rules to equivalent IIS URL rewrite rules. However, due to architectural differences between Apache and IIS web servers, all mod_rewrite rules may not be converted. Hence, we recommend that you completely understand the rewrite rule functionality before you begin the conversion process. Once Apache mod_rewrite rules have been converted to IIS URL rewrite rules, verify that corresponding IIS rewrite rules function same as Apache rewrite rules.

1. Start IIS Manager (***Start*** >> ***Run***, type ***inetmgr*** and hit enter).![](https://web.archive.org/web/20200803150118im_/https://cdn.srapsware.com/wp-content/uploads/2019/02/inetmgr.png)

2. In IIS, select the Default Web Site.

3. Under Features View, click URL Rewrite.![](https://web.archive.org/web/20200803150118im_/https://cdn.srapsware.com/wp-content/uploads/2019/02/url-rewrite.png)

4. At right hand side, under ***Actions*** pane, click on ***Import Rules***.![](https://web.archive.org/web/20200803150118im_/https://cdn.srapsware.com/wp-content/uploads/2019/02/import-rules.png)

5. Copy your mod_rewrite rules from .htaccess file and paste them into the Rewrite rules text box.![](https://web.archive.org/web/20200803150118im_/https://cdn.srapsware.com/wp-content/uploads/2019/02/import-mod-rewrite-rules.png)

6. Tree View tab will instantly show the result of this conversion. XML View will show how these rules are stored in the web.config file.

7. After rule conversion, rules were assigned with default names. You can change the rule name by selecting rule from Tree View, right-click on rule name, and select Rename from context menu.![](https://web.archive.org/web/20200803150118im_/https://cdn.srapsware.com/wp-content/uploads/2019/02/rename-rules.png)

8. Click Apply to save the converted rules to the web.config file.