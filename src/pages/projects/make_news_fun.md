---
layout: ../../layouts/ProjectPage.astro
title: Make News Fun
roles: ["Fontend", "Backend", "Designer"]
role: Designer and Developer
date: 2019
tech: ["React", "Socket.io","Sqlite3", "Node", "Python"]
summary: A website where users could simultanously move words from the news around in order to create new sentences, and save for all user to see. 
shortText: This was my master thesis project. Basically I wanted to create an online cooperative version of 'magnetic poetry' based on recent news, as a tool for critiquing society. In the end I made it work, even the simultanous co-operation.
cover: "udvist"
order: 2
applinks: 
  - name: "Thesis"
    link: "https://drive.google.com/file/d/1-CUJbVmFj7jl-6lTqDbd_uJEywN4aoiO/view?usp=drive_link"
  - name: "Make News Fun"
    link: "https://www.makenews.fun"
  - name: "scrape.py"
    link: "https://github.com/NikoLicht/makeNews/blob/master/scrape.py"
  - name: "GitHub"
    link: "https://github.com/NikoLicht/makeNews/tree/master"


mainMediaName: Someone using makenewsfun online
mainMediaLink: "https://www.youtube.com/embed/oiJLBVlptjs"
mainMediaType: "youtube"

media:
  - title: "Intricate Interacation"
    text: "I would love to highlight the challenge i had to overcome, in order to make the interaction work. Given that it was a simultaneous-users website, it required each device to send out a signal that would 'lock' the selected word, while listening for all selected words."
    paths: [ "interaction_gif"]
  - title: "Scraping the web"
    text: "It was very fun to play around with web scraping in python. The bottom half of this image shows how the words were randomly placed after they had been scraped from various news sites"
    paths: [ "python_scraping_web_01"]

---