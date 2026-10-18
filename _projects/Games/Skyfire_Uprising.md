---
layout: project
title: Skyfire Uprising
date: 2026-05-20
coursework: true
group: true
links: {GitHub: "https://github.com/Games-Engineering-Team-2/WM9M5_Level2"}
technologies: [Unreal Engine 5]
languages: [C++]
skills: [Group Management, Collaboration Skills]
description: "Save Earth from an alien invasion!"
images: [{preview: true, description: "Screenshot of gameplay"}]
---

## Overview

### Summary of Game

Skyfire Uprising is an action game consisting of 7 levels played one after the other, progressing the player's goal to save Earth from an alien invasion. Each has a different theme and mechanics:
1. A get-away drive
2. Clearing the docks to get to a boat
3. Crossing the sea in a gunboat
4. Flying to a desert air base
5. Getting to the spaceport by tank
6. Securing and launching the prototype spaceship
7. Destroying the alien mothership

This was a group project consisting of 43 programmers, split into groups of 6 per level plus 1 working on the main menu. It was developed over 16 days. 

### Our Level

I was a member of team 2. Our assigned design brief was
> FPS fight through docks<br>
> – Start from crashed vehicle from Level 1<br>
> – Finish at gunboat from Level 3

Our final design had 5 distinct combat areas, with two non-combat zones for pacing, and 4 enemy types. Enemy types are introduced gradually, and enemy intensity ramps up with the zones.
- The player starts outside a small warehouse with a hole in its side caused by the crash
- They are ambushed by 4 small melee-type enemies when they leave
- They then enter a large warehouse, with a guaranteed spawn of a medium-size ranged enemy at the start
- The next zone is a maze of containers, introducing a large and tanky melee enemy.
- The penultimate combat zone is a large car park with little cover and high enemy density, encouraging a rush to the terminal (which is safe)
- The final combat zone is also full of containers for cover, and contains the final boss.

### My Contributions

I acted as a group leader, facilitating communication and task division. Technically I was responsible for:
- The level design
- Building roughly 50% of the level, including most of the playable area.
- Enemy spawning
- Co-ordinating with different groups to ensure inter-level cohesion
- The waypoint system

### Technical Overview

## Technical Details

### Enemy Spawning

I chose a dynamic enemy spawning system for the flexibility, robustness and replayability it provides. Flexibility and robustness felt particularly important for a project on such a tight deadline, with replayability being a nice bonus. I implemented a World Subsystem which encapsulated all of the enemy spawning logic: handling timers, running Environment Query System queries, asynchronous loading and spawning of assets. I also implemented Data Assets which allowed data-driven customisation of enemy spawning parameters. I implemented four different ways for enemies to spawn: timed spawns around the player; timed spawns in a region; scripted spawns; randomised population for a region. Each region had its own unique timer and parameters, which were set according to the data assets by trigger boxes. Scripted spawns have specific positions and enemy types, used for one-off encounters like the boss, and to ensure new enemy types are encountered quickly within region. Region population allowed each region to start dense, but be cleared out within a reasonable timer without overwhelming the player.

### Waypoints

Waypoints were implemented with another World Subsystem and a blueprint. The blueprint updates the distance text (e.g. 100m), and makes the waypoint fade out when the player is close, while the subsystem spawns and moves the waypoint instance when called.

## Reflections

### What I Learned

### What I'd Do Differently