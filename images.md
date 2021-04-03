---
title: Bildquellen
---
# Bildquellen

<div class="container images">
    {% for item in site.data.images %}
        <img src="{{site.baseurl}}assets/images/{{ item.name }}" alt="{{ item.alt }}" class="icon">
        <span>{{ item.reference }}</span>
    {% endfor %}
</div>
