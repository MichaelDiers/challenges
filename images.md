---
title: Bildquellen
---
# Bildquellen

<div class="images">
    {% for item in site.data.images %}
        <div>
            <img src="{{site.baseurl}}assets/images/{{ item.name }}" alt="{{ item.alt }}" class="{{ item.class }}">
            <span>{{ item.reference }}</span>
        </div>
    {% endfor %}
</div>
