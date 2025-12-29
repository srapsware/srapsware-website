---
layout: post
title: Use Sucuri Security to secure your WordPress site
date: 2021-06-21T07:27:42.044Z
tags:
  - News
  - Update
  - How To
categories:
  - Tech
  - News
  - How To
author: shiv
image: /assets/uploads/sucuriwebsite.png
---
The Sucuri  is well known web apps, security provider. its have there paid security tools, but they provide a free plugin for WordPress with API.

**Here we are going to know how to Install Sucuri Security WordPress Plugin and How to use it?**

Let’s start with first feature which will let you harden the security of your WordPress blog. Go ahead, install and activate the Sucuri WordPress plugin. [Here is the link of plugin](https://web.archive.org/web/20200925105142/https://wordpress.org/plugins/sucuri-scanner/) at WordPress plugin repo. Once you have activated the plugin then have to make some changes on setting and activate API for scanning.

**1.1 To install the WordPress security plugin:**

1. From the WordPress Dashboard go to the repository **Plugins > Add New** on the left side of the dashboard.
2. Type **Sucuri** in the repository **search query box**.
3. At the upper side of all available plugins you will see the Sucuri logo and the title **Sucuri Security – Auditing, Malware Scanner and Security Hardening**
4. Click **Install**.
5. Click **Activate**. This will take you to the installed plugins page.
6. Once completed, you can access all features by clicking on the Sucuri Plugin option on the right-side menu of your WordPress dashboard.

**1.2 – Generate API**

Activating the API allows your WordPress account to connect to our server. If an attacker somehow compromises your site and removes the plugin’s audit logs from your server, they can be recovered from our server for investigation.

To generate the API key for the Sucuri plugin:

1. Log into your WordPress website as an administrator and open the Sucuri plugin.
2. Click **Generate API Key** to the upper right side of your screen.
3. Check the [Terms of Service](https://web.archive.org/web/20200925105142/https://sucuri.net/terms) and [Privacy Policy](https://web.archive.org/web/20200925105142/https://sucuri.net/privacy) boxes once you have read them.
4. Click Submit. An email confirmation will be sent to the primary email address with confirmation.

**1.3 – API Service Communication**

Once the API key is generated, the plugin will communicate with a remote API service that will act as a safe data storage for the audit logs generated when the website triggers certain events that the plugin monitors. If the website is hacked, the attacker will not have access to these logs. Now you can investigate any modifications (for malware infection) and/or how the malicious person gained access to the website.

**1.4 – Multisite and Subdomains**

This section is relevant if you use a WordPress Multisite installation. However, if you have a single site in your WordPress install, skip to the next section.

The plugin uses the administrator email and the domain name of the site in order to generate an API key (this also applies for subdomains). The information communicated through the API interface will be transferred using this key.

A high percentage of the data processed by the API interface is dependent on the WordPress core files, along with the information stored in the uploads folder. That is why a unique installation of the plugin (in the main site) will not work 100% for subdomains installed in different locations.

For the multisite installations, this is different. A WordPress MU installation will force each site to share the core files. Generally the content is inside the “wp-content” directory (where the plugin’s data is stored). All information processed by the plugin, except the settings, will be shared among every site inside the network.

###### Subdomains with Unique Installation

This is when multiple subdomains are created and there is a unique installation of WordPress per site. In cases like this, each subdomain has its own database so you will need to **install the plugin separately for each subdomain**. Each subdomain will not be affected by the API key, audit logs, hardening, or any settings applied to the other subdomains.

###### Subdomains with MultiSite

This is when you have a network-based installation associated with a unique installation of WordPress. This means there is only one database with multiple “options” tables. In this case, when you install the plugin, the audit logs, hardening, and login information will be shared among all the sites inside the network. The settings, however, will affect only the site where they were applied.

In short, you install the plugin one time for a network-based installation (aka. WordPress MultiSite), otherwise, install the plugin for each domain.

### WORDPRESS HARDENING

Security hardening options are preventative measures to increase security in areas of your website that could become avenues for attack. This is done by adding a set of rules in your **.htaccess** file and verifying secure configurations.

Sucuri helps you take steps to fortify your website from outside threats. You can enable each feature with the click of a button.

I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

To enable and disable security hardening in the WordPress security plugin:

1. Log into the WordPress dashboard.
2. From the right-side menu under the Sucuri Plugin, go to Settings.
3. Go to the top menu and select Hardening.
4. Click the Apply Hardening button to any of the security options described below.

Hardening options:

* **Website Firewall Protection** — If you are a Sucuri customer, you can link to your firewall account to view statistics in WordPress.
* **Verify WordPress Version** — Checks when your website, or any of its components are not up to date, this section will warn you with a prompt to the newest version.
* **Verify PHP version** — Checks whether your server is running the latest version of PHP.
* **Remove WordPress Version** — Allows you to remove the version of your CMS from being publicly displayed.
* **Block PHP Files in Upload Directory** — Disables the execution of PHP files inside your uploads directory. This can break certain plugins so test beforehand.
* **Block PHP Files in WP-CONTENT Directory** — Places a .htaccess file inside the wp-content to prevent external access.
* **Block PHP Files in WP-INCLUDES Directory** — The same as above but for wp-includes.
* **Information Leakage** — Checks for the presence of a readme.html file on your site, which contains your WordPress version and deletes it.
* **Default Admin Account** — Checks for the admin user. This used to be standard in former times and is a favorite target for hackers.
* **Plugin & Theme Editor** — Disables the plugin and theme editor to prevent access to sensitive files by other users (and possible hackers who have broken into your site).

**2.2 – Revert Hardening**

At some point, you may need to revert hardening settings to make changes to your site. Hardening should be disabled at this time, then re-enabled once you are done.

To revert the WordPress security plugin hardening features:

1. Log into your WordPress admin dashboard.
2. Under the Sucuri Plugin on the right side menu, click on **Settings**.
3. From the upper side menu, select Hardening.
4. Identify the option to revert and click the Revert Hardening button.

Revert hardening options:

1. Block PHP Files in uploads
2. Block PHP Files in wp-content
3. Block PHP Files in wp-includes
4. Plugin and Theme Editor

**2.3 – Whitelisting Files**

Hardening requires testing. There’s not one set of rules that will work for every site. If you find that certain plugins or themes are not working correctly after applying the hardening to **wp-includes**, **wp-content**, and/or **wp-content/uploads**, you can whitelist files to fix it.

To whitelist files in the Sucuri WordPress security plugin:

1. Log into your WordPress admin account.
2. Once on the WordPress dashboard, click on to the **Sucuri Plugin.**
3. Then, click on **Settings.**
4. On the upper side of the screen, click on **Hardening** from the menu bar.
5. Scroll down to see the **Whitelist Blocked PHP files** section.
6. Type the **File Path** and select the **Directory** to be whitelisted from the dropdown window, then click **Submit**.

Know More on official site: https://sucuri.net/guides/how-to-use-the-wordpress-security-plugin