---
layout: ../../layouts/ProjectPage.astro
title: Python Image sorter
roles: ["Programmer"]
role: Programmer
date: 2019
tech: ["Python"]
summary: A program that would recursively sort throgh my grandparents photo folders and neatly sort the photos.
shortText: This little script recursively runs through all photos in the current folder, and then sorts them into year / date folders based on the images exif data.
cover: "image_sorter_cover"
order: 15
applinks: 
  - name: github
    link: https://github.com/NikoLicht/ImageSorter

mainMediaName: "Cute snake sorting through photos"
mainMediaLink: "image_sorter_cover"
mainMediaType: "image"

media:
  - title: Almost a textbook example
    text: My grandfather provided me with the perfect opportunity to create an image-sorting python script. He almost always saved his images in new folders nested inside the previous ones. For instance a new photo of a grand-daughter would go straigt into Documents > Canon folders > peters birthsday > simons birthday > grandchild.png. It was the perfect way to practice recirsive file system actions.
    paths: ["sorting_script"]
---
