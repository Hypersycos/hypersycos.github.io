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

This is an overview of some of the projects I've worked on. Unless otherwise specified, they're solo projects that I chose to start for fun or to gain experience.

## Games {#games}

### "Artifaction" {#Artifaction}
![Image of Artifaction test map]({{ site.baseurl }}/public/images/Artifaction.webp)

"Artifaction" is a WIP social deduction game that aims to avoid player elimination (and its associated pitfalls) by introducing scoring over multiple rounds. Currently under development with one other developer in Unity. I've had a hand in every aspect of the game, but I've focused more on creating base systems for the game to use and integrating external libraries.
 
### ["RogueFrame"](https://github.com/Hypersycos/RogueFrame)
![Image of RogueFrame test range]({{ site.baseurl }}/public/images/RogueFrame.webp)

RogueFrame (better name pending..) is a prototype for a class-based horde shooter. It aims to have fast-paced, engaging gunplay and abilities, while also having rich class customisation. Implemented in Unity.

I tried to avoid tutorials where possible, since I wanted to gain an understanding rather than just follow a prescribed path. Obviously, that resulted in pitfalls and mistakes, but that experience has been particularly valuable for me. My assumptions about how netcode performs latency hiding and prediction were wrong; and I also learned how not to create a generic system with customisable assets.

### [SpellCast](https://hypersycos.itch.io/spellcast)
![Image of SpellCast gameplay](https://img.itch.zone/aW1hZ2UvOTYyNjYyLzU0NjI1NTEucG5n/original/JQYaRw.png)

SpellCast is a prototype for a competitive arena game, implemented in Unity with two other developers. Both teams race to destroy a central objective, unlocked by completing individual objectives unique to each class. I focused on creating the game's underlying systems, as well as base scripts for prefabs to use. It was entered into the [2021 NSE Games Innovation Challenge](https://itch.io/jam/games-innovation-challenge), though didn't make the shortlist.

### [MEGANAUGHTSANDCROSSES](https://github.com/Hypersycos/MEGANOUGHTSANDCROSSES)
![Image of MEGANAUGHTSANDCROSSES gameplay]({{ site.baseurl }}/public/images/MEGANAUGHTSANDCROSSES.webp)

A game of naughts and crosses, played with sub-grids of naughts and crosses. Playing a position in a sub-grid forces your opponent to play in the corresponding sub-grid. Fully networked, implemented in pygame.

Very questionably architected mostly as monolithic file, there's quite a lot of things I would do differently now I have more experience. The project would particularly benefit a lot from stronger OOP principles, especially a greater separation of individual UI components and views.

### [3D Noughts and Crosses](https://github.com/Hypersycos/3D-Noughts-and-Crosses)
![Image of 3D Noughts and Crosses gameplay]({{ site.baseurl }}/public/images/3DNaughtsAndCrosses.webp)

Multiple noughts and crosses grids stacked on top of each other, allowing for 2+ players to compete. Many aspects can be modified, and it can be played in true 3D or the more traditional side-by-side 2D view. Implemented in pygame.

A greater attempt at seperation was made for 3D Noughts and Crosses than MEGANAUGHTSANDCROSSES, but more could still certainly help. There's also a few horrific If-Elif chains which could be simplified.

## Game-related {#game-related}  

### [Arkshot Mods](https://github.com/Hypersycos?tab=repositories&q=Arkshot)

My mods include a framework for networking mod configurations across lobbies, a mod to change all stamina costs and boons, as well as one which uncaps the max player count. This allows players to play with the original competitive vision, or a more chaotic arcade-y style. They're implemented using BepinEx, with a mix of Harmony hooks and transpilers 

## Other {#other}  

### [Incremental Backup](https://github.com/Hypersycos/IncrementalBackup)
Incremental Backup is a java implementation of an incremental backup engine. It significantly reduces the space taken up by naive backups, since it only stores changes rather than making a complete copy each time. It was created with the aim of allowing frequent backups of a minecraft server, and as such has an implementation of a .MCA file handler. It's completely modular, and capable of handling any file - though for better results more specific handlers should be used.

### [Riffr](https://github.com/Riffr/riffr/tree/main)
<iframe width="560" height="315" src="https://www.youtube.com/embed/pq3UFd0-I8I?si=hUythxjf-CZZVhRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
Riffr was created for my 2nd year group project at Cambridge. It's a tool to assist musicians with "jamming" together online, by recording phrases and then playing all the recordings at once, effectively offset by one. This bypasses the effects of latency, which can make playing together online incredibly difficult. I was responsible for the design and implementation of the front-end.

## Upcoming

I'm working on both of these projects, but they're not currently in a state where the code makes sense to share.

### Unity Settings System
Originally developed for [Artifaction](#Artifaction), this system aims to be a powerful replacement for PlayerPrefs (and as a bonus, stores data in user-readable files rather than the Windows registry..). It can store values of any type by key similarly to PlayerPrefs, but also enables a pre-defined hierarchical structure. These can have validators to ensure values are always within bounds, generators to enable random initial values, and can be accessed with their ScriptableObjects as well as using their key in a static function.

### Warframe Weapon Calculator
Warframe Weapon Calculator aims to be the most flexible and comprehensive weapon DPS calculator for Warframe. Other tools exist which perform well with simple archetypes, but none of them can come close to properly represent all the complex and hidden interactions that exist in-game. As such, many experienced players are forced to reference disparate sources of info and homemade spreadsheets to get a better estimate.

Backend using Django Rest Framework (Python), frontend plans to use SvelteKit.