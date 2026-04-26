/**
 * Character Data Model for Jujutsu Kaisen System
 * Defines the structure of character attributes and abilities
 */

export class JujutsuCharacter extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const fields = foundry.data.fields;
    
    return {
      // Basic Information
      information: new fields.SchemaField({
        name: new fields.StringField({ initial: "Novo Personagem" }),
        level: new fields.NumberField({ initial: 1, min: 1, max: 100 }),
        age: new fields.StringField({ initial: "" }),
        gender: new fields.StringField({ initial: "" }),
        position: new fields.StringField({ initial: "" }),
        grade: new fields.StringField({ initial: "" }),
        clan: new fields.StringField({ initial: "" })
      }),

      // Attributes/Stats
      attributes: new fields.SchemaField({
        strength: new fields.NumberField({ initial: 10, min: 0 }),
        agility: new fields.NumberField({ initial: 10, min: 0 }),
        vigor: new fields.NumberField({ initial: 10, min: 0 }),
        dexterity: new fields.NumberField({ initial: 10, min: 0 }),
        perception: new fields.NumberField({ initial: 10, min: 0 }),
        intelligence: new fields.NumberField({ initial: 10, min: 0 }),
        jujutsu: new fields.NumberField({ initial: 10, min: 0 }),
        willpower: new fields.NumberField({ initial: 10, min: 0 })
      }),

      // Health and Resources
      health: new fields.SchemaField({
        current: new fields.NumberField({ initial: 100, min: 0 }),
        max: new fields.NumberField({ initial: 100, min: 1 })
      }),

      exhaustion: new fields.SchemaField({
        current: new fields.NumberField({ initial: 0, min: 0 }),
        max: new fields.NumberField({ initial: 100, min: 1 })
      }),

      // Biography
      biography: new fields.StringField({ initial: "" }),

      // Avatar image
      avatar: new fields.StringField({ initial: "" })
    };
  }

  /**
   * Prepare character data for display
   */
  prepareData() {
    // Calculate derived values if needed
    this.health.max = Math.max(50, this.attributes.vigor * 10);
  }

  /**
   * Get all equipped items
   */
  getEquippedItems() {
    return this.parent?.items?.filter(item => item.system.equipped === true) || [];
  }

  /**
   * Get all spells
   */
  getSpells() {
    return this.parent?.items?.filter(item => item.type === "spell") || [];
  }

  /**
   * Get all equipment
   */
  getEquipment() {
    return this.parent?.items?.filter(item => item.type === "equipment") || [];
  }

  /**
   * Get all weapons
   */
  getWeapons() {
    return this.parent?.items?.filter(item => item.type === "weapon") || [];
  }
}
