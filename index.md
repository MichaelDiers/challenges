---
title: Challenges
---
# Challenges

<ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title | capitalize}}</a></h2>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
