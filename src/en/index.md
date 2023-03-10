---
title: 'english version'
description: 'English version of the resume'
data: ../_data/en.yaml
layout: ../_includes/en.njk
---

{% for p in en.projects %}
    {% for i in p%}
    <li class="project">
      <h3>{{ i.projectName }}</h3>
      <p>{{ i.projectDescription }}</p>
      <ul class="project-links">
      {% for l in i.links %}
        <li><a href="{{ l.github }}">Github</a>
        <li><a href="{{ l.live }}">Live</a>
      {% endfor %}
    </ul>
    </li>
    {% endfor %}
{% endfor %}
