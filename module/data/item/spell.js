/**
 * Spell Item Data Model
 * Represents Jujutsu techniques and spells
 */

export class JujutsuSpell extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const fields = foundry.data.fields;
    
    return {
      description: new fields.StringField({ initial: "" }),
      level: new fields.NumberField({ initial: 1, min: 1, max: 10 }),
      cost: new fields.NumberField({ initial: 0, min: 0 }),
      castingTime: new fields.StringField({ initial: "1 ação" }),
      range: new fields.StringField({ initial: "Pessoal" }),
      duration: new fields.StringField({ initial: "Instantâneo" }),
      components: new fields.StringField({ initial: "" }),
      damage: new fields.NumberField({ initial: 0, min: 0 }),
      damageType: new fields.StringField({ initial: "" }),
      savingThrow: new fields.StringField({ initial: "" }),
      equipped: new fields.BooleanField({ initial: false }),
      school: new fields.StringField({ initial: "" })
    };
  }

  /**
   * Get display name for spell level
   */
  getLevelLabel() {
    const levels = {
      1: "Grau 1",
      2: "Grau 2",
      3: "Grau 3",
      4: "Grau 4",
      5: "Grau 5"
    };
    return levels[this.level] || `Grau ${this.level}`;
  }
}
