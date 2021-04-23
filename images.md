---
title: Bildquellen
navigation_rank_mobile: 50
---
# Bildquellen

<div class="images">
    {% for item in site.data.images %}
        <div>
            <img src="{{site.baseurl}}/assets/images/{{ item.name }}" alt="{{ item.alt }}" class="{{ item.class }}">
            <span>{{ item.reference }}</span>
        </div>
    {% endfor %}
</div>
