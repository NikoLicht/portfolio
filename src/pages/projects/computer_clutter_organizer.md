---
layout: ../../layouts/ProjectPage.astro
title: Computer Clutter organizer
roles: ["Programmer"]
date: 2021
tech: ["Python", "DOS/Windows Shell Script"]
summary: A script that cleans up the often cluttered folders, based on file types, and time-to-live per folder.
shortText: Do you get frustrated looking at a cluttered desktop and or other folders on your computer? I Do. That is why I created a script to deal with it. It runs on my pc every day, at an undisclosed time! (it's 11am).
cover: "clutter_cover_gif"
order: 100
applinks: 
  - name: "GitHub"
    link: "https://github.com/NikoLicht/computer-clutter-manager/tree/master"


mainMediaName: An image depicting part of the code for my script
mainMediaLink: "clutter_organizer_cover"
mainMediaType: "image"

media:
  - title: "Bad .Bat"
    text: "Initally, for some reason, I thought it would be \"fun\" to program the first version using Windows shell script. It worked, and still runs on my computer. But this was a terrible experience. Don't do DOS kids."
    paths: [ "clutter_bat_file"]
  - title: "Sensible Snake"
    text: "Eventually I got to my senses and made the switch to python. You can see here how I set up the folders in the python script. Today I am very comfortable with python"
    paths: [ "clutter_python_file"]
---