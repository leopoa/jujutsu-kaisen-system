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
        strength: new fields.NumberField({ initial: 0, min: 0 }),
        strength_bonus: new fields.NumberField({ initial: 0, min: 0 }),
        agility: new fields.NumberField({ initial: 0, min: 0 }),
        agility_bonus: new fields.NumberField({ initial: 0, min: 0 }),
        vigor: new fields.NumberField({ initial: 0, min: 0 }),
        vigor_bonus: new fields.NumberField({ initial: 0, min: 0 }),
        dexterity: new fields.NumberField({ initial: 0, min: 0 }),
        perception: new fields.NumberField({ initial: 0, min: 0 }),
        intelligence: new fields.NumberField({ initial: 0, min: 0 }),
        jujutsu: new fields.NumberField({ initial: 0, min: 0 }),
        willpower: new fields.NumberField({ initial: 0, min: 0 }),
        willpower_bonus: new fields.NumberField({ initial: 0, min: 0 }),
        armor: new fields.NumberField({ initial: 0, min: 0 }),
        armor_bonus: new fields.NumberField({ initial: 0, min: 0 })
      }),


      taijutsu: new fields.NumberField({ initial: 0, min: 0 }),
      ninjutsu: new fields.NumberField({ initial: 0, min: 0 }),
      genjutsu: new fields.NumberField({ initial: 0, min: 0 }),
      chakra: new fields.NumberField({ initial: 0, min: 0 }),


      // Attributes/Stats
      skill: new fields.SchemaField({
        tratamento: new fields.NumberField({ initial: 0, min: 0 }),
        treinamento: new fields.NumberField({ initial: 0, min: 0 }),
        veterinaria: new fields.NumberField({ initial: 0, min: 0 }),

        atuacao: new fields.NumberField({ initial: 0, min: 0 }),
        musical: new fields.NumberField({ initial: 0, min: 0 }),
        prestidigitacao: new fields.NumberField({ initial: 0, min: 0 }),
        fotografia: new fields.NumberField({ initial: 0, min: 0 }),

        biologia: new fields.NumberField({ initial: 0, min: 0 }),
        proibidas: new fields.NumberField({ initial: 0, min: 0 }),
        geografia: new fields.NumberField({ initial: 0, min: 0 }),
        meterologia: new fields.NumberField({ initial: 0, min: 0 }),
        psicologia: new fields.NumberField({ initial: 0, min: 0 }),
        especializacao: new fields.NumberField({ initial: 0, min: 0 }),

        morse: new fields.NumberField({ initial: 0, min: 0 }),
        criptografia: new fields.NumberField({ initial: 0, min: 0 }),
        labial: new fields.NumberField({ initial: 0, min: 0 }),
        linguagem: new fields.NumberField({ initial: 0, min: 0 }),

        armadilha: new fields.NumberField({ initial: 0, min: 0 }),
        arrombamento: new fields.NumberField({ initial: 0, min: 0 }),
        furtividade: new fields.NumberField({ initial: 0, min: 0 }),
        falsificacao: new fields.NumberField({ initial: 0, min: 0 }),
        intimidacao: new fields.NumberField({ initial: 0, min: 0 }),
        punga: new fields.NumberField({ initial: 0, min: 0 }),
        rastreio: new fields.NumberField({ initial: 0, min: 0 }),
        
        acrobacia: new fields.NumberField({ initial: 0, min: 0 }),
        alpinismo: new fields.NumberField({ initial: 0, min: 0 }),
        arquearia: new fields.NumberField({ initial: 0, min: 0 }),
        corrida: new fields.NumberField({ initial: 0, min: 0 }),
        jogos: new fields.NumberField({ initial: 0, min: 0 }),
        mergulho: new fields.NumberField({ initial: 0, min: 0 }),
        natacao: new fields.NumberField({ initial: 0, min: 0 }),

        hipnose: new fields.NumberField({ initial: 0, min: 0 }),
        interrogatorio: new fields.NumberField({ initial: 0, min: 0 }),
        labia: new fields.NumberField({ initial: 0, min: 0 }),
        seducao: new fields.NumberField({ initial: 0, min: 0 }),
        
        computacao: new fields.NumberField({ initial: 0, min: 0 }),
        compreensao: new fields.NumberField({ initial: 0, min: 0 }),
        eletronica: new fields.NumberField({ initial: 0, min: 0 }),
        engenharia: new fields.NumberField({ initial: 0, min: 0 }),
        mecanica: new fields.NumberField({ initial: 0, min: 0 }),
        pilotagem: new fields.NumberField({ initial: 0, min: 0 }),
        
        cirurgia: new fields.NumberField({ initial: 0, min: 0 }),
        dignose: new fields.NumberField({ initial: 0, min: 0 }),
        socorro: new fields.NumberField({ initial: 0, min: 0 }),
        psiquiatria: new fields.NumberField({ initial: 0, min: 0 }),

        navegacao: new fields.NumberField({ initial: 0, min: 0 }),
        pesca: new fields.NumberField({ initial: 0, min: 0 }),
        prontidao: new fields.NumberField({ initial: 0, min: 0 }),
        


      }),

      
      pt_chakra: new fields.SchemaField({
        current: new fields.NumberField({ initial: 0, min: 0 }),
        max: new fields.NumberField({ initial: 1, min: 1 })
      }),


      // Health and Resources
      health: new fields.SchemaField({
        current: new fields.NumberField({ initial: 0, min: 0 }),
        max: new fields.NumberField({ initial: 1, min: 1 })
      }),

      experiencia: new fields.SchemaField({
        current: new fields.NumberField({ initial: 0, min: 0 }),
        max: new fields.NumberField({ initial: 1, min: 1 })
      }),

      exhaustion: new fields.SchemaField({
        current: new fields.NumberField({ initial: 0, min: 0 }),
        max: new fields.NumberField({ initial: 100, min: 1 })
      }),

      // Biography
      biography: new fields.StringField({ initial: "" }),

      vantagem: new fields.StringField({ initial: "" }),
      desvantagem: new fields.StringField({ initial: "" }),

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
