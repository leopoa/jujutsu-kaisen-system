/**
 * Jujutsu Kaisen RPG System for Foundry VTT
 * Main module initialization file
 */

import { JujutsuCharacter } from "./data/actor/character.js";
import { JujutsuEquipment } from "./data/item/equipment.js";
import { JujutsuSpell } from "./data/item/spell.js";
import { JujutsuWeapon } from "./data/item/weapon.js";
import { JujutsuCharacterSheet } from "./sheets/character-sheet.js";
import { JujutsuItemSheet } from "./sheets/item-sheet.js";

/**
 * System initialization
 */
Hooks.once("init", () => {
  console.log("Jujutsu Kaisen System | Initializing system...");

  // Register data models
  CONFIG.Actor.dataModels = {
    character: JujutsuCharacter
  };

  CONFIG.Item.dataModels = {
    equipment: JujutsuEquipment,
    spell: JujutsuSpell,
    weapon: JujutsuWeapon
  };

  // Register actor sheets
  Actors.registerSheet("jujutsu-kaisen-system", JujutsuCharacterSheet, {
    types: ["character"],
    makeDefault: true,
    label: "Ficha de Personagem"
  });

  // Register item sheets
  Items.registerSheet("jujutsu-kaisen-system", JujutsuItemSheet, {
    types: ["equipment", "spell", "weapon"],
    makeDefault: true,
    label: "Folha de Item"
  });

  console.log("Jujutsu Kaisen System | Initialization complete");
});

/**
 * System ready hook
 */
Hooks.once("ready", () => {
  console.log("Jujutsu Kaisen System | System ready");
});

/**
 * Create Actor hook for default data
 */
Hooks.on("createActor", (actor) => {
  if (actor.type === "character") {
    // Set default values
    if (!actor.system.information.name || actor.system.information.name === "Novo Personagem") {
      actor.update({
        "system.information.name": actor.name
      });
    }
  }
});

/**
 * Create Item hook for default data
 */
Hooks.on("createItem", (item) => {
  // Set default values based on item type
  if (item.type === "equipment") {
    item.update({
      "system.quantity": 1
    });
  }
});

/**
 * Drag and drop handling
 */
Hooks.on("dropActorSheetData", (actor, sheet, data) => {
  // Handle item drops onto character sheet
  if (data.type === "Item") {
    const item = fromUuidSync(data.uuid);
    if (item && item.type === "equipment") {
      // Item will be automatically added to inventory
      return true;
    }
  }
  return false;
});

console.log("Jujutsu Kaisen System | Module loaded");
