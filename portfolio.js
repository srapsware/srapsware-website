---
layout: blank
title: Portfolio api
permalink: /portfolio.js
sitemap: false
---
	
var PortfolioJson = [
	{% assign sorted = site.portfolio | reverse %}
	{% assign total = sorted.size %}
	{% for portfolio in sorted %}
	{
		"projectid": "{{forloop.index}}",
		"total": "{{total}}",
		"title":{{ portfolio.title | jsonify}},
		"project_url":{{ portfolio.project_url | jsonify}},
		"date":"{{ portfolio.date | date: "%e %b, 20%y"}}",
		"completed_on":"{{ portfolio.completed_on | date: "%e %b, 20%y"}}",
		"image":"{{ portfolio.image | relative_url }}",
		"categories":{{ portfolio.categories | jsonify }},
		"technologies":{{ portfolio.technologies | jsonify }},
		"galleryImages":{{ portfolio.galleryImages | jsonify }},
		"content":{{portfolio.excerpt | strip_html | truncatewords: "25" | jsonify}},
		"url":{{ portfolio.url | jsonify}},
		"slug":{{ portfolio.slug | jsonify}}
	}{% unless forloop.last %},{% endunless %}
	{% endfor %}
]
	