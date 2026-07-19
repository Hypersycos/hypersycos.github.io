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
---
## Summary
I was responsible for the level design, building parts of the level, and enemy spawning. I also developed a waypoint system after playtesters struggled to figure out where to go; co-ordinated with different groups to ensure inter-level cohesion; acted as a group leader, facilitating communication and task division.

## Implementation Details
I chose a dynamic enemy spawning system for the flexibility, robustness and replayability it provides. Flexibility and robustness felt particularly important for a project on such a tight deadline, with replayability being a nice bonus. I implemented a World Subsystem which encapsulated all of the enemy spawning logic: handling timers, running Environment Query System queries, asynchronous loading and spawning of assets. I also implemented Data Assets which allowed data-driven customisation of enemy spawning parameters. I implemented four different ways for enemies to spawn: timed spawns around the player; timed spawns in a region; scripted spawns; randomised population for a region. Each region had its own unique timer and parameters, which were set according to the data assets by trigger boxes. Scripted spawns have specific positions and enemy types, used for one-off encounters like the boss, and to ensure new enemy types are encountered quickly within region. Region population allowed each region to start dense, but be cleared out within a reasonable timer without overwhelming the player.

Waypoints were implemented with another World Subsystem and a blueprint. The blueprint updates the distance text (e.g. 100m), and makes the waypoint fade out when the player is close, while the subsystem spawns and moves the waypoint instance when called.