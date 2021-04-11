---
title: Challenges
---
# Challenges

<div class="post-list">
  {% for post in site.posts %}
    <div class="post">      
      <a href="{{ site.baseurl }}{{ post.url }}">{{ post.excerpt }}</a>
      <div>
        {% include icons.html types=post.types %}          
      </div>
    </div>
  {% endfor %}
</div>
