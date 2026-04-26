/**
 * Equipment Item Data Model
 * Represents armor, accessories, and other wearable items
 */

export class JujutsuEquipment extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const fields = foundry.data.fields;
    
    return {
      description: new fields.StringField({ initial: "" }),
      quantity: new fields.NumberField({ initial: 1, min: 1 }),
      weight: new fields.NumberField({ initial: 0, min: 0 }),
      value: new fields.NumberField({ initial: 0, min: 0 }),
      rarity: new fields.StringField({ initial: "common" }),
      equipped: new fields.BooleanField({ initial: false }),
      armor: new fields.NumberField({ initial: 0, min: 0 }),
      effects: new fields.StringField({ initial: "" })
    };
  }

  /**
   * Get display name for rarity
   */
  getRarityLabel() {
    const rarities = {
      common: "Comum",
      uncommon: "Incomum",
      rare: "Raro",
      legendary: "Lendário",
      mythic: "Mítico"
    };
    return rarities[this.rarity] || this.rarity;
  }
}
