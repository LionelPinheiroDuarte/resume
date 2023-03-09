---
title: 'english version'
description: 'English version of the resume'
data: ../_data/en.yaml
layout: en.njk
---

{% for project in collections.en %}
         {{ project.firstName }}
{% endfor %}
{% for i in [{ firstName: 'ram', class: 10 },{ firstName: 'raf', class: 10 }] -%}
  {{ i.class }}{{ i.firstName }}
{%- endfor %}
{{ en.firstName }}

