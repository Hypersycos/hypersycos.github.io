---
layout: page
title: Portfolio
order: 2
---

<style>
  .content img {
    max-width: 50%;
  }
</style>

## Games {#games}

### Skyfire Uprising

Short Description: Skyfire Uprising was a 4-week group project involving every member of my MSc class. The player goes through 7 levels (each of which was developed by a group of 5), playing as a hero fighting to save Earth from an alien invasion. My group was responsible for level 2, which was given the brief of "an FPS where the player traverses through docks to get to a boat".

Technologies and Skills: Unreal Engine 5, C++, Collaboration Skills

What I Did Summary: I was responsible for the level design, building parts of the level, and enemy spawning. I also developed a waypoint system after playtesters struggled to figure out where to go; co-ordinated with different groups to ensure inter-level cohesion; acted as a group leader, facilitating communication and task division. 

Technical Details: I chose a dynamic enemy spawning system for the flexibility, robustness and replayability it provides. Flexibility and robustness felt particularly important for a project on such a tight deadline, with replayability being a nice bonus. I implemented a World Subsystem which encapsulated all of the enemy spawning logic: handling timers, running Environment Query System queries, asynchronous loading and spawning of assets. I also implemented Data Assets which allowed data-driven customisation of enemy spawning parameters. I implemented four different ways for enemies to spawn: timed spawns around the player; timed spawns in a region; scripted spawns; randomised population for a region. Each region had its own unique timer and parameters, which were set according to the data assets by trigger boxes. Scripted spawns have specific positions and enemy types, used for one-off encounters like the boss, and to ensure new enemy types are encountered quickly within region. Region population allowed each region to start dense, but be cleared out within a reasonable timer without overwhelming the player.

Waypoints were implemented with another World Subsystem and a blueprint. The blueprint updates the distance text (e.g. 100m), and makes the waypoint fade out when the player is close, while the subsystem spawns and moves the waypoint instance when called.

### [Frantic Pinball](https://hypersycos.itch.io/frantic-pinball)

Short Description: Frantic pinball was an entry for [Warwick Game Design Society's 46-hour "Frantic Game Jam"](https://itch.io/jam/frantic-game-jam). The original concept was a mash-up of Pinball and Air Hockey, with various arcade-y features like power-ups and multiple balls.

Technologies and Skills: Unity, C#, Collaboration Skills, Time Management

What I Did Summary: I came up with the original concept, implemented the player controls and the balls' physics, and presented the final build at the end of the jam.

Technical Details: The balls used in-built collisions for simplicity, but had variable drag dependent on speed implemented in FixedUpdate. The player controls used unity's newest input system.

### "Artifaction" {#Artifaction}
![Image of Artifaction test map]({{ site.baseurl }}/public/images/Artifaction.webp)

Short Description: "Artifaction" is a WIP social deduction game that aims to avoid player elimination (and its associated pitfalls) by introducing scoring over multiple rounds. Currently under development with one other programmer.

Technologies and Skills: Unity, C#, Mirror (Networking), Vivox, Steam Audio

What I Did Summary: I've had a hand in every aspect of the game, but as the more experienced developer I've focused on creating flexible systems and tooling for the other developer to use, as well as integrating external tools. The main systems I made were a procedural map generator; networked lobby settings; robust network-synchronised interactable objects (including pickups) and inventory systems; detailed logging used to generate an end-of-game report.

Technical Details:

### [Vampire Survivors-like](https://github.com/Hypersycos/Vampire-Survivors-Assessment)

Short Description: This game was implemented using a provided pixel-level canvas renderer. It was required to be a survival game, similar to vampire survivors, and I was not allowed to use the stdlib. The main game loop was based around surviving for 2 minutes, with power-ups that heal you and empower your attacks periodically spawning. Points are gained for time survived, as well as killing enemies (with stronger enemies giving more points). The enemy spawning rate increases as time goes on, making the end a frantic race to survive.

Technologies and Skills: C++

What I Did Summary: 

Technical Details:

### ["RogueFrame"](https://github.com/Hypersycos/RogueFrame)
![Image of RogueFrame test range]({{ site.baseurl }}/public/images/RogueFrame.webp)

RogueFrame (better name pending..) is a prototype for a class-based horde shooter. It aims to have fast-paced, engaging gunplay and abilities, while also having rich class customisation. Implemented in Unity.

I tried to avoid tutorials where possible, since I wanted to gain an understanding rather than just follow a prescribed path. Obviously, that resulted in pitfalls and mistakes, but that experience has been particularly valuable for me. My assumptions about how netcode performs latency hiding and prediction were wrong; and I also learned how not to create a generic system with customisable assets.

### [SpellCast](https://hypersycos.itch.io/spellcast)
![Image of SpellCast gameplay](https://img.itch.zone/aW1hZ2UvOTYyNjYyLzU0NjI1NTEucG5n/original/JQYaRw.png)

Short Description: SpellCast is a prototype for a competitive arena game created with two other developers, entered into the [2021 NSE Games Innovation Challenge](https://itch.io/jam/games-innovation-challenge). Both teams race to destroy a central objective, unlocked by completing individual objectives unique to each class.

Technologies and Skills: Unity, C#, Mirror

What I Did Summary: I focused on creating the game's underlying systems, as well as base scripts for prefabs to use.

Technical Details:

### [MEGANAUGHTSANDCROSSES](https://github.com/Hypersycos/MEGANOUGHTSANDCROSSES)
![Image of MEGANAUGHTSANDCROSSES gameplay]({{ site.baseurl }}/public/images/MEGANAUGHTSANDCROSSES.webp)

Short Description: A fully networked game of naughts and crosses, played with sub-grids of naughts and crosses. Playing a position in a sub-grid forces your opponent to play in the corresponding sub-grid, though if that sub-grid has already been won they can play anywhere. Win by getting three won grids in a line.

Technologies and Skills: Python, Pygame, TCP Networking

What I Did Summary:

Technical Details:

### [3D Noughts and Crosses](https://github.com/Hypersycos/3D-Noughts-and-Crosses)
![Image of 3D Noughts and Crosses gameplay]({{ site.baseurl }}/public/images/3DNaughtsAndCrosses.webp)

Short Description: Multiple noughts and crosses grids stacked on top of each other, allowing for 2+ players to compete. Many aspects can be modified, and it can be played in true 3D or the more traditional side-by-side 2D view.

Technologies and Skills: Python, Pygame

What I Did Summary:

Technical Details:

## Game-related {#game-related}  

### [Slay the Spire 2 Mods](https://www.nexusmods.com/profile/Hypersycos/mods?gameId=8916)

Short Description: I made two Slay the Spire 2 mods: [one](https://www.nexusmods.com/slaythespire2/mods/406) fixed a race condition with steam cloud syncing, and [the other](https://www.nexusmods.com/slaythespire2/mods/225) enables users to have multiple simultaneous run save files.

Technologies and Skills: C#, Godot, Harmony, Reverse Engineering

What I Did Summary:

Technical Details:

### [Arkshot Mods](https://github.com/Hypersycos?tab=repositories&q=Arkshot)

Short Description: My mods include a framework for networking mod configurations across lobbies, a mod to change all stamina costs and boons, as well as one which uncaps the max player count. This allows players to play with the original competitive vision, or a more chaotic arcade-y style. They're implemented using BepinEx, with a mix of Harmony hooks and transpilers

Technologies and Skills: C#, Unity, Harmony, BepinEx, Reverse Engineering, .NET CIL

What I Did Summary:

Technical Details:

### [DX12 Renderer](https://github.com/Hypersycos/DirectX12Renderer)

Short Description: A toy rasteriser implementing various rendering techniques, as well as animations with an animation controller and Object-Oriented Bounding Box collisions.

Technologies and Skills: C++, DirectX12, WinAPI

What I Did Summary: implements alpha testing; vertex shader animation; mesh instancing; third-person controls; animations with a state-machine controller; OOBB collisions using SAT; velocities and inelastic collisions; normal mapping; deferred rendering; point and spot lights with shadow mapping, directional lights with a cascading shadow map; Cook-Torrance PBR with Lambert + Fresnel-Schlick + GGX.

Technical Details:

### [CPU Pathtracer](https://github.com/Hypersycos/RTBase)

Short Description: A toy path-tracer implementing various BSDFs, rendering and sampling techniques, multithreading and denoising

Technologies and Skills: C++, Monte-Carlo sampling, Multithreading

What I Did Summary: implements various BSDFs: Oren-Nayar; mirrors; glass with refraction; conductors and dielectrics with single-scattering GGX micro-facet; single-scattering layered BSDFs with homogenous participating media and Beer’s Law. Also implements tile-based multithreading; binned SAH BVH building; the Intel Open Image Denoise library; importance sampling weighted by P/d^2^; multiple importance sampling; light tracing; instant radiosity

Technical Details:

### [CPU Rasterizer](https://github.com/Hypersycos/GERasterizer)

Short Description: A toy Z-buffer rasteriser with back-face culling, linear attribute interpolation and Lambertian lighting, written using a custom maths library.

Technologies and Skills: C++, 3D and projection maths

Technical Details:

## Other {#other}  

### [Chatroom](https://github.com/Hypersycos/GEChatroom)
Short Description: Networked chatroom with a server-client architecture. Supports custom usernames, user colours and private channels. Does not support a previous message history or persistence on clients when they join or leave.

Technologies and Skills: C++, Dear ImGui, Winsock, FMOD, Multithreading

Technical Details:

### [JSON Parser](https://github.com/Hypersycos/GEJsonParser)
Short Description: A toy JSON parser, fully implementing the base JSON standard and has limited support for comments.

Technologies and Skills: C++, JSON, I/O

Technical Details:

### [Incremental Backup](https://github.com/Hypersycos/IncrementalBackup)
Short Description: Incremental Backup is an incremental backup engine. It significantly reduces the space taken up by naive backups, since it only stores changes rather than making a complete copy each time. It was created with the aim of allowing frequent backups of a minecraft server, and as such has an implementation of a .MCA file handler. It's completely modular, and capable of handling any file - though for better results more specific handlers should be used.

Technologies and Skills: Java, Reverse Engineering

What I Did Summary:

Technical Details:


### [Riffr](https://github.com/Riffr/riffr/tree/main)
<iframe width="560" height="315" src="https://www.youtube.com/embed/pq3UFd0-I8I?si=hUythxjf-CZZVhRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Short Description: Riffr was created for my 2nd year group project at Cambridge. It's a tool to assist musicians with "jamming" together online, by recording phrases and then playing all the recordings at once, effectively offset by one. This bypasses the effects of latency, which can make playing together online incredibly difficult.

Technologies and Skills: React, Typescript

What I Did Summary: I was responsible for the design and implementation of the front-end.

### Inventory System
Short Description: I developed a food inventory system tailored to the specific needs of a local food surplus distribution charity.

Technologies and Skills: Python, Django, SQL, MariaDB, Javascript, HTML

What I Did Summary:

Technical Details: