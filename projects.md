---
layout: page
title: Projects
order: 2
---

<style>
  .content img {
    max-width: 50%;
  }
</style>

## Games {#games}

### "Artifaction" {#Artifaction}
![Image of Artifaction test map]({{ site.baseurl }}/public/images/Artifaction.webp)
"Artifaction" is a WIP social deduction game that aims to avoid player elimination (and its associated pitfalls) by introducing scoring over multiple rounds.
 
### ["RogueFrame"](https://github.com/Hypersycos/RogueFrame)
![Image of RogueFrame test range]({{ site.baseurl }}/public/images/RogueFrame.webp)
RogueFrame (better name pending..) is a prototype for a class-based horde shooter. It aims to have fast-paced, engaging gunplay and abilities, while also having rich class customisation. Implemented in Unity.

### [SpellCast](https://hypersycos.itch.io/spellcast)
![Image of SpellCast gameplay](https://img.itch.zone/aW1hZ2UvOTYyNjYyLzU0NjI1NTEucG5n/original/JQYaRw.png)
SpellCast is a prototype for a competitive arena game, implemented in Unity. Both teams race to destroy a central objective, unlocked by completing individual objectives unique to each class.

### [MEGANAUGHTSANDCROSSES](https://github.com/Hypersycos/MEGANOUGHTSANDCROSSES)
![Image of MEGANAUGHTSANDCROSSES gameplay]({{ site.baseurl }}/public/images/MEGANAUGHTSANDCROSSES.webp)
A game of naughts and crosses, played with sub-grids of naughts and crosses. Playing a position in a sub-grid forces your opponent to play in the corresponding sub-grid. Fully networked, implemented in pygame.

### [3D Naughts and Crosses](https://github.com/Hypersycos/3D-Noughts-and-Crosses)
![Image of 3D Naughts and Crosses gameplay]({{ site.baseurl }}/public/images/3DNaughtsAndCrosses.webp)
Multiple naughts and crosses grids stacked on top of each other, allowing for 2+ players to compete. Many aspects can be modified, and it can be played in true 3D or the more traditional side-by-side 2D view. Implemented in pygame.

## Game-related {#game-related}  

### [Arkshot Mods](https://github.com/Hypersycos?tab=repositories&q=Arkshot)

My mods include a framework for networking mod configurations across lobbies, a mod to change all stamina costs and boons, as well as one which uncaps the max player count. This allows players to play with the original competitive vision, or a more chaotic arcade-y style.

## Other {#other}  

### [Incremental Backup](https://github.com/Hypersycos/IncrementalBackup)
Incremental Backup is a java implementation of an incremental backup engine. It was created with the aim of allowing frequent backups of a minecraft server, and as such has an implementation of a .MCA file handler. It's completely modular, and capable of handling any file - though for better results more specific handlers should be used.

## Upcoming

These two projects aren't currently in a state that makes sense to share, though the settings system should be soon.

### Unity Settings System
Originally developed for [Artifaction](#Artifaction), this system aims to be a powerful replacement for PlayerPrefs (and as a bonus, stores data in user-readable files rather than the Windows registry..). It can store values of any type by key similarly to PlayerPrefs, but also enables a pre-defined hierarchical structure. These can have validators to ensure values are always within bounds, generators to enable random initial values, and can be accessed with their ScriptableObjects as well as using their key in a static function.

### Warframe Weapon Calculator
Warframe Weapon Calculator aims to be the most flexible and comprehensive weapon DPS calculator for Warframe. Other tools exist which perform well with simple archetypes, but none of them can come close to properly represent all the complex and hidden interactions that exist in-game. As such, many experienced players are forced to reference disparate sources of info and homemade spreadsheets to get a better estimate.

Backend using Django Rest Framework (Python), frontend plans to use SvelteKit.