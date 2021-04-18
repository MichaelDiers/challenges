---
title: Challenges
navigation_rank: 10
---
{% assign week = site.tags.week.first %}
{% assign weekImage = site.baseurl | append: "/assets/images/" | append: week.image %}
{% assign month = site.tags.month.first %}
{% assign monthImage = site.baseurl | append: "/assets/images/" | append: month.image %}

<div class="overview">
    {% include overview.html image=weekImage url=week.url excerpt=week.excerpt types=week.types header="Wochen-Challenge" %}
    {% include overview.html image=monthImage url=month.url excerpt=month.excerpt types=month.types header="Monats-Challenge" %}
</div>