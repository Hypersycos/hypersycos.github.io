---
layout: project
title: Vampire Survivors-like
date: 2025-11-10
links: {GitHub: "https://github.com/Hypersycos/Vampire-Survivors-Assessment/"}
coursework: true
technologies: []
languages: [C++]
skills: []
description: "Survive a ramping onslaught for 2 minutes by collecting power-ups that heal you and empower your attacks. Get more points by killing enemies!"
---
## Overview

### Summary of Game

This game is a 2D survivors-like. The player must survive for 2 minutes, with the main game loop being based around picking up power ups which heal and empower your attacks. You gain points every second you survive as well as for killing enemies, with tougher enemies giving more points. More enemies spawn as time goes on, making the end a frantic race to survive.

### Technical Overview

### Assignment Brief

The project's brief was to implement a "2D survivor like game" using C++ without using the standard library or any external libraries (a wrapper class `GamesEngineeringBase.h` provided a pixel-based canvas and frame delta timing system). It was required to implement:

1. A virtual camera that follows the player-controlled (hero) character at its centre
2. A number of NPCs that attack the character
    - Generated randomly outside of camera view
    - Their frequency increases over time
    - At least 4 different character types that differ in appearance, health and speed
    - General NPC behaviour that directs them directly towards the player
    - One NPC behaviour makes it static but launches projectiles
3. Collision system
    - Hero vs NPCs
    - Hero vs impassable terrain
	- Hero projectiles vs NPCs
	- NPC projectiles vs Hero
	- Clearly demonstrate how NPCs are implemented and handled
4. The hero attacks the NPCs with at least two different types of attack
	- A linear attack that targets closest NPC (has cooldown) – the attack runs automatically all the time
	- A special area of effect (AOE) attack that targets the top N max health NPC triggerred by hero via separate button (can be instantanous but has significant cooldown). 
	- A powerup that increases either the speed of the linear attack and number N of NPCs targetted by the AOE
5. A tile-based method (composed of a number of 32x32 pixel tiles) for displaying the background
	- At least four different tile types (ie terrain types). One of which is impassable (eg water) for the hero. NPCs can traverse. 
	- Data driven level loading, i.e. load the game world’s tiles and map from a custom file format 
	- A version of the world which is infinite (with repeating tiles)
	- A version with a fixed boundary (larger than what the screen displays)
6. Game level runs for two minutes
	- Show at least two levels with different maps (one infinite, one fixed)
	- Score and FPS shown at the end (or during)
7. The ability to save the current state of the game (and save to a file) at any point and reload it at the same exact point

## Technical Details

### Code Structure

`World` is an abstract class containing a `Player`, as well as dynamic arrays of Enemies, Projectiles and
Powerups. `World` is responsible for updating all of its children, as well as serializing and deserializing them
in `Save` and `Load` respectively. It also contains the logic for collision detection between characters and tiles in
`TryMove`.
`FixedWorld` and `InfiniteWorld` implement World, and the respective serialization required for them.
InputHandler and Canvas are wrappers around `GamesEngineeringBase::Window`, providing helper
functions for input and drawing images. Player and the various enemies are responsible for
managing their state.
`Camera` is responsible for rendering a single world, and uses its `CameraTarget` to determine the camera
position.
`Tile` is responsible for loading and serializing the tile data, as well as applying said data to characters.
`TimedSurvivalManager` (and `StressTester`) is responsible for the main game loop, spawning enemies and
scoring etc. They use `EnemyFactory` to spawn enemies. There are commented out defines in `Player.h` and
`Canvas.h`, which allow for GodMode and rendering beyond the screen borders

### Camera and Rendering

#### UI

### NPCs

### Collisions

### Game World

### Serialization

## Reflections

### What I Learned

### What I'd Do Differently