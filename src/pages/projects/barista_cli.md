---
layout: ../../layouts/ProjectPage.astro
title: Barista CLI
roles: ["Developer"]
role: Developer
date: 2025
tech: ["Python", "Docker"]
summary: A command-line coffee brewing text-adventure
shortText: CLIs have always had a place in my heart. There is just something tangible and hands-on about using them. In this project I wanted to create my own little command line based adventure game. While it is not really a CLI utilitiy, it is also not really a game. It is mosty a toy if anything. 
cover: "barista_main"
order: 10

applinks: 
  - name: "Itch.io"
    link: "https://artmole.itch.io/barista-cli"
  - name: "Dockerhub"
    link: "https://hub.docker.com/repository/docker/artmole/barista_cli/general"
  - name: "Github"
    link: "https://github.com/NikoLicht/BaristaCLI"

mainMediaName: Comman-line
mainMediaLink: "barista_main"
mainMediaType: "image"

media:
  - title: "Commands and objects"
    text: Making a foundation for this CLI based toy, I decided on utilizing a component-based architecture. This allowed me to easily expand on the different objects and reuse parts of their behavior. I've also put a lot of thoughts into what actions and utils a player would need. I've made use of the library Rich, to format the output in a nicer way. 
    paths: [ "barista_main"]
---
