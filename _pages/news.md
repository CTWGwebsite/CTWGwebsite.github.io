---
layout: default
title: news
permalink: /news/
nav: true
nav_order: 1
pagination:
  enabled: true
  collection: news
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

{% include news.liquid %}
