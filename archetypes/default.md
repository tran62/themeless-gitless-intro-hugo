draft: true
title: {{ replace .Name "-" " " | title }}
date: {{ dateFormat "2006-01-02" .Date }}
## below are user-defined parameters (lower case keys recommended)
subtitle:
tags:
  - meta
  - math
  - literature
  - philo
markup: "md"  # or "pdc" or "md"
categories: ["md"] # "md" "pdc" "viet" "hanyu"
math: false  # no mathjax 
s9: true
---