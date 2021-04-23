---
title: Aktuelle-Challenges
navigation_rank_desktop: 20
navigation_rank_mobile: 20
---
{% assign actives = "" | split: ',' %}
{% for tag in site.tags %}
    {% assign actives = actives | push: tag[1].first %}
{% endfor %}
{% include posts-list.html title=page.title posts=actives actives="all" %}
