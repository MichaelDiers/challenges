---
title: Bildquellen
navigation_rank_mobile: 50
---
# Bildquellen

<div class="images">
    {% for item in site.data.images %}
        <img src="{{site.baseurl}}/assets/images/{{ item.name }}" alt="{{ item.alt }}" class="{{ item.class }}">
        <div>{{ item.reference }}</div>
    {% endfor %}
</div>
