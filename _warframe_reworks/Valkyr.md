---
layout: post-with-contents
title: Valkyr Rework
date: 2025-05-11
toc_max: 3
---

## What are Valkyr's problems?
 - Ripline does nothing except memes
 - Warcry is strong, but a bit ridiculous at high strength. It also can't refresh to get missed allies
 - Paralysis with the augment is good but slow, and worthless without
 - Hysteria sacrifices usability for immunity
 
Valkyr's base stats also aren't particularly impressive anymore, so with Warcry and Hysteria being her only tanking sources her ability to tank is very all or nothing

## Concept

I aim to have Valkyr occupy a "Berserker" theme. Some overlap with Voruna & Garuda was inevitable, but I hope she should feel different enough. The numbers are almost certainly unbalanced, but it's hopefully an ok starting point.

## Base Stats

> For a supposedly tanky frame, Valkyr's stats are pretty mediocre. There are plenty of frames with more base HP and similar armour to Valkyr. This brings her up a bit.
 - Valkyr's Base Health is increased to 500/600

## Passive

### New Passive: Rage

> This passive allows Valkyr to fit the classic Barbarian/Berserker aesthetic: hit me and I'll hit you harder. To allow Valkyr to function alongside support/CC frames, I also added supplementary ways of charging it - and made it charge based off incoming damage, not damage taken.

- %-based meter that provides Valkyr with buffs
- Scales linearly from 0-100%, able to "overcharge" past 100% at a reduced rate
- Rage is charged primarily by incoming damage
    - Based on incoming damage before resistances, to avoid anti-synergy with ally DR and shield gating
- Melee kills also charge it
- Rage has a constant drain, increasing with current rage % and time since last taking damage

Valkyr keeps her old passive: "Valkyr is nimble, able to recover from Knockdowns 50% faster and is immune to Hard Landings, landing with no touchdown delay."

### New augment: Boundful Rage
- Gain Energy from increasing Rage
- Alternative to Rage mod


## Rip Line

> Rip Line is fun, and has some diehard fans so I don't want to remove it. Its current functionality is maintained, either for mobility or yeeting enemies - but yeeting enemies can be controlled and provide a more meaningful effect. Paralysis' strengths (grouping and knockdown) are folded into the augment and hold cast.

**STRENGTH:** HP%\
**RANGE:** Max Range, AoE Range\
**DURATION:** Combo Window, Stun Duration

 - Max Range increased to 100m
 - Combo window increased to 2s
	- Combo doesn't affect energy cost of hold-cast
    - Combo increases duration of stun, and rage generation of hold cast
    - Combo can stack up to 1/8 cost, rather than the current 1/4
 - Resets and pauses melee combo counter during use

### Tap cast
- Current ripline as used for mobility. Hitting an enemy will still pull you to them, while applying a short stun and root to the enemy.
- Acceleration is increased to make it feel smoother
- Max range also increased from 70m to 100m. With open worlds 70m can feel quite short.

### Hold cast 
- Pulls enemy hit to your feet
- On release / re-cast throws enemy at crosshair
- On impact deals damage and knockdown in an area
    - Damage scales with enemy max HP
    - Direct hits on another enemy deal double damage
- Impacts charge Rage, increasing with direct hits and number of enemies affected

### New Augment: Rip Snare

**STRENGTH:** HP%\
**RANGE:** Seek range\
**DURATION:** Stun Duration

 - tap-cast releases seeking riplines in an AoE when hitting an enemy (similar to ensnare).
 - enemies pulled are stunned, dealing a smaller % of damage to themselves and the main target
 - tap-cast no longer gets decreased energy cost from combo when hitting an enemy
	
	
## Warcry

    Warcry is currently Valkyr's bread and butter, but it only really does one thing.

    I moved some of Warcry's strength from attack speed to melee damage. High strength builds are quite common, and the amount of attack speed gained with them is more comical than anything else.

    I also added a team-defensive component. This damage redirection allows Valkyr to charge Rage faster, better protect her companions and provide some non-offensive support to teammates.

**STRENGTH:** All Buffs, DR\
**DURATION:** Buff Duration, Aura duration\
**RANGE:** Buff & DR Radius

### Buffs (scaling with rage, 0-100% values shown):
- 20%-40% Melee Attack Speed (Previously 50%)
- 30%-60% Melee Damage
- Armour buff removed
- Now recastable

### As an aura:
- Buff application lingers for 3s
    - Allows to catch an ally after cast if you just missed them

- If Hysteria is active:
    - Increases Valkyr's threat level
    - Provides all allies within 25m of Valkyr with 35% (max 75%) DR. The damage blocked by Warcry is dealt to Valkyr instead.

### Augment:
- Keep current effects
- Re-apply aura is refreshed on kill

### Helminth:
- Helminth can assume 50% rage. The AS lines up with the current nerfed helminth, and the melee damage is unlikely to be overpowering. With Roar and Wrathful Advance existing I don't think this is in any danger of overshadowing other buffs.


## Relent (Replaces Paralysis):

> I couldn't really see a way of salvaging Paralysis now that Rip Line provides all the benefits it ever could.
    
> Relent is primarily intended to provide survivability, but also secondarily to allow for bursts of gunplay. I felt this still fit thematically, as Valkyr has some Hunter theming too, demonstrated at the start of her [prime trailer](https://www.youtube.com/watch?v=9ubZLPNE4Lk).

> Mechanically, the weapon buffs are intended to allow "tactical retreating", as well as allow for situations where a gun may suddenly be needed but doesn't have its stacks charged. I would like some form of decay to them, but I'm not happy with the current values - I don't think she should provide top-tier gun buffs. Perhaps they should be put in an augment instead.

> In general this ability and its augments are overloaded, it probably doesn't need everything it has.

**STRENGTH:** All Buffs, Heal, DR\
**DURATION:** Buff Duration, inversely affects rate of decay to match\
**RANGE:** N/A\
**EFFICIENCY:** 25 Energy cost

Consumes 20% of current rage on cast.
 - Cleanses all current status effects and provides status immunity for 2s
 - Heals for .5%/s of Valkyr's max HP per % of rage consumed for 5s.
 - Provides 5% DR per % of rage consumed. Scales down to 0% over 5s. Capped at 95%, but going over will stay at cap longer
 - Provides 12.5% Weapon Damage per % of rage consumed. Scales down to 0% over 5s
 - Provides 2.5% Reload Speed per % of rage consumed. Scales down to 0% over 5s
 
### Augments

> An augment is required to replace Prolonged Paralysis

> This first augment is intended to allow Valkyr to work better with guns, for those who would prefer to not be locked to melee with her.

#### New Augment:
 - Healing at max health is converted back to rage. Cannot provide more than Relent consumed.
 - All effects have double the duration, and no longer decrease with time. However, they have half the base effectiveness (and DR is capped at 90%)
 - Recasting while Relent is active adds the remaining healing to the new cast. If the new buffs would have lower values than the previous ones, Relent instead scales from the old value to the new one over its duration.
 
#### New Augment:

> This augment leans into Warcry's team support, allowing Relent to also help Valkyr's team

**RANGE:** Ally Buff Radius

 - Each corpse within 5m of Valkyr reduces the rage cost by 1%.
 - All allies within 15m receive
	- The same amount of healing
	- Half the weapon buffs and DR
	- The cleanse and status immunity


## Hysteria

> Hysteria does plenty of damage, but lacks AoE compared to other exalteds, and even other normal melee weapons. Despite this, because of the invulnerability the drain can be very punishing. The invulnerability is also fairly uninteractive.

**STRENGTH:** Base Damage, extra rage generation\
**DURATION:** Inversely affects safety period, and reduces ratio of damage taken\
**RANGE:** Rage Range Increase, inversely affects safety radius

### Misc changes
 - Hysterical Assault is innate, and causes damage in a small AoE upon landing
 - Drain no longer scales with time, but instead has a base drain of 7.5/s.
 - Lifesteal removed

### Survivability changes

> These changes aim to make her survival more interactive, and effectively acts as both a damper and adaptive DR (similar to damage attenuation) to incoming damage, allowing Rage to be built without just falling over at higher levels. I tried to keep the backlash idea without having it be so unfairly punishing if cancelled accidentally, or by a silence.

 - No longer provides damage immunity
 - Provides immunity to status effects
 - Incoming damage is redirected to a pool - though Rage will still scale as if it was all taken
 - The pool is decreased by 10% every second, and Valkyr takes a reduced amount of this as damage.
	- The drain:damage ratio should be sub-linear, e.g. 100 might deal 10 while 200 might deal 15.
    - This damage dealt *is* affected by DR such as Armour, since the pool ignored these factors
    - This damage does *not* generate rage by default, as rage was already generated when it was added to the pool
 - Holding the ability key while Hysteria is active drains the pool faster, generating extra rage for the damage taken
 - Swapping to a gun also drains the pool faster over time, without providing extra rage
	- The gun must be fired first for this to trigger (so aim-gliding won't screw you over)
	- Swapping back to Hysteria resets this effect at twice the rate (so 10s firing gun = 5s to recover to baseline)
 - If Hysteria is cancelled while Valkyr is not "safe", the pool is rapidly drained.
    - Valkyr is considered safe if there are no active (i.e. non-CCd, in LoS) enemies within 15m, or if there has been no incoming damage in the last 5s
	- If this drain would take Valkyr below 10% health it instead, in order:
		- Consumes Rage (down to 25%)
		- Consumes Energy (down to 25% of max energy, or the energy spent over the duration of Hysteria, whichever would drain less)
		- Briefly prevents attacks and offensive ability use
        - Applies a knockdown
    - If Hysteria is cancelled by a silence, the drain has a 0.5s grace period.
        - The source of the silence is marked during the drain
        - Melee attacking the marked target pauses the drain
    - If Hysteria is recast during this drain period, the drain eases back to normal, and the pool is carried over.
	
### Weapon changes
> These changes aim to increase her effective range without simply becoming Exalted Blade 3.0.

 - Hysteria gains 0.02m of range per % of rage.
 - Base damage decreased to 150 from 250, but Hysteria gains damage with rage as a separate multiplier.
 - Hitting multiple enemies in one swing increases the damage of the next one
 - Enemies killed by hysteria are ragdolled, and deal any overkill damage to enemies hit in their path (similar to the Boltor)

### Stance changes

> These changes are intended to keep spin2win powerful, but make it feel less like you are losing out by not destroying your hands spamming it.

 - Increase multipliers on some of the normal hits to bring it more in-line with standard stances.
 - The damage per slide attack hit is also reduced to 125%, rather than 300%. This leaves it more effective than the normal combos, but only by a bit.
    - If possible, I'd have the slide attack scale its number of hits with attack speed, but not gain extra range from Rage. This would allow it to be a very effective attack for high-priority targets, or small/tight groups, while also reducing the Carpal Tunnel inducing nature with high attack speed.

 
### Augments

#### New Augment (replaces Hysterical Assault):
**STRENGTH:** Extra Rage generation

 - Blocking during Hysteria increases rage generation by 2x
 - Heavy Attacks apply all rage bonuses at double the effectiveness, but consume 5% of current rage.

#### Enraged:
**STRENGTH:** Melee Crit boost, Status Chance\
**DURATION:** Cooldown Reductions

 - Removes the backlash mechanic, the remaining pool is drained linearly over half the cooldown period
 - If cast before the pool is fully drained, the pool is added to the next cast
 - Can be cancelled prematurely by re-casting
    - not within the first second, to avoid accidental cast->uncast from spamming
 - Damage bonus removed, replaced with 300% status chance bonus
 - Weakpoint kills reduce the cooldown by 0.5s, melee kills by 0.25s