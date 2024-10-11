---
layout: ../../layouts/ProjectPage.astro
title: Yargh
roles: ["3D Artist", "Programmer"]
role: Game Developer
date: 2020 - now
tech: ["Unity", "C#","Blender"]
summary: A local multi-player pirate sailing game. Made with my friend Mikkel.
shortText: A multiplayer game, where you steer your own ship. The interesting challenge is to attach you opponent with your side.
cover: "pirate_game_1"
order: 10
applinks: 
  - name: Mikkel's portolio
    link: https://mikkelbalslev.dk/
  - name: "Someday it might be on itch"
    link: "https://artmole.itch.io/"

mainMediaName: "Pirate game bonk"
mainMediaLink: "pirate_game_1"
mainMediaType: "image"

media:
  - title: Hexagons all the way down
    text: I had some idea that it would be cool, if we could generate the levels with hexagons. Therefore i speend a looooot of time making a thing that could take an image and translate that into hexagons. But not only that, it placed the sides of the hexagons individually, to better match stuff. But in the end, it was hindering the progress, so we cut it. Maybe.
    paths: ["hexagon_neighbour", "hexagon_inspector", "hexagons_pretty", "hexagon_height"]
  - title: Lots of UI
    text: As with any project. If you are trying to make anything somewhat playable, you need to make a butload of UI. We also both find a lot of joy in random generation, so we made sure that you could "roll for" a pirate name. its stupid but we love it.
    paths: ["pirate_ui_0", "pirate_ui_1", "pirate_ui_2"]
  - title: Bonkers gameplay
    text: We had a lot of fun inventing a super complex weapon system with nested scriptable objects. Heh. We wanted different kinds of cannons, mines, bows, and some kind of melee. I also spend a lot of time on a height based gradient shader.
    paths: ["pirate_game_1", "pirate_game_2"]
---
