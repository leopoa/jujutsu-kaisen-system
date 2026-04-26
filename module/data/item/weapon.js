/**
 * Weapon Item Data Model
 * Represents weapons and combat equipment
 */

export class JujutsuWeapon extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const fields = foundry.data.fields;
    
    return {
      description: new fields.StringField({ initial: "" }),
      damage: new fields.NumberField({ initial: 5, min: 0 }),
      damageType: new fields.StringField({ initial: "corte" }),
      weight: new fields.NumberField({ initial: 0, min: 0 }),
      value: new fields.NumberField({ initial: 0, min: 0 }),
      rarity: new fields.StringField({ initial: "common" }),
      equipped: new fields.BooleanField({ initial: false }),
      properties: new fields.StringField({ initial: "" }),
      range: new fields.StringField({ initial: "Corpo a corpo" }),
      criticalRange: new fields.NumberField({ initial: 20, min: 1, max: 20 }),
      criticalMultiplier: new fields.NumberField({ initial: 2, min: 1 })
    };
  }

  /**
   * Get display name for damage type
   */
  getDamageTypeLabel() {
    const types = {
      corte: "Corte",
      perfuracao: "Perfuração",
      impacto: "Impacto",
      magico: "Mágico",
      fogo: "Fogo",
      gelo: "Gelo",
      eletricidade: "Eletricidade"
    };
    return types[this.damageType] || this.damageType;
  }

  /**
   * Calculate critical damage
   */
  calculateCriticalDamage() {
    return this.damage * this.criticalMultiplier;
  }
}
