---
title: Challenges
---
# Challenges

<ul>
  {% for post in site.posts %}
    <li start="{{ post.start }}" end="{{ post.end }}">
      <h2>
        <a href="{{ site.baseurl }}{{ post.url }}">
          {% assign start = post.start | date: "%d.%m.%Y" | append: " bis "%}
          {% assign end = post.end | date: "%d.%m.%Y" %}
          <span class='headline'>{{ post.title | capitalize | append: ": " | append: start | append: end }}</span>
          <span class='headlineExtended'></span>
        </a>
      </h2>
      {% include icons.html training=post.training %}    
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
