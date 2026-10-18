---
layout: project
title: Slay the Spire 2 Mods
date: 2026-04-21
external_preview: "https://staticdelivery.nexusmods.com/mods/8916/images/thumbnails/225/225-1774403071-1442201066.png"
links: {GitHub: "https://github.com/Hypersycos?tab=repositories&q=slay-the-spire-2",
        "Nexus Mods": "https://www.nexusmods.com/profile/Hypersycos/mods?gameId=8916"}
technologies: [Godot, Harmony, BepinEx]
languages: [C#]
skills: [Reverse Engineering]
description: "Two [Slay the Spire 2](https://store.steampowered.com/app/2868840/Slay_the_Spire_2/) mods: [one](https://www.nexusmods.com/slaythespire2/mods/406) fixed a race condition with steam cloud syncing, and [the other](https://www.nexusmods.com/slaythespire2/mods/225) enables users to have multiple simultaneous run save files."
---

## Overview

This page describes two mods: [one](https://www.nexusmods.com/slaythespire2/mods/406) and [the other](https://www.nexusmods.com/slaythespire2/mods/225).

### One

Upon receiving feedback from a player that their saves were not transferring between devices, despite verifying that [the other](#MoreSaves) was interacting correctly with the steam cloud, I discovered that there was a race condition between Slay the Spire 2 loading mods and syncing its cloud saves. This mod fixed that issue, and I also reported it to the developers who fixed it in the next patch.

### MoreSaves

I found it frustrating that Slay the Spire 2 did not allow for multiple concurrent multiplayer save files, as it's extremely inconvenient when trying to play with different friend groups, so I implemented this mod to solve that issue!

## Technical Details

### One

### MoreSaves