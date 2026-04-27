/**
 * Character Sheet for Jujutsu Kaisen System
 * Handles the display and interaction with character data
 */

export class JujutsuCharacterSheet extends ActorSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["jujutsu", "sheet", "actor", "character"],
      template: "systems/jujutsu-kaisen-system/templates/actor/character-sheet.html",
      width: 620,
      height: 710,
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "attributes"
        }
      ],
      dragDrop: [
        { dragSelector: ".item-list .item-row", dropSelector: ".sheet-body" }
      ]
    });
  }

  /**
   * Get data for template rendering
   */
  getData() {
    const context = super.getData();
    const actor = this.actor;

    // Add computed properties
    context.system = actor.system;

    console.log('-------------------')    
    console.log(context.system);
    console.log(actor.system);
    console.log(actor.items);


    context.items = {
      equipment: actor.items.filter(i => i.type === "equipment"),
      taijutsu: actor.items.filter(i => i.type === "spell" && i.system.tecnica === "taijutsu"),
      ninjutsu: actor.items.filter(i => i.type === "spell" && i.system.tecnica === "ninjutsu"),
      genjutsu: actor.items.filter(i => i.type === "spell" && i.system.tecnica === "genjutsu"),
      outro: actor.items.filter(i => i.type === "spell" && i.system.tecnica === "outro"),
      spells: actor.items.filter(i => i.type === "spell" ),
      weapons: actor.items.filter(i => i.type === "weapon"),
      equipped: actor.items.filter(i => i.system.equipped === true)
    };

    const fa = actor.system.attributes.strength_bonus + actor.system.attributes.agility_bonus;
    const fd = actor.system.attributes.armor_bonus + actor.system.attributes.agility_bonus;
    const fad = actor.system.attributes.willpower_bonus + actor.system.attributes.agility_bonus;

    // Calculate HP percentage for the bar
    const hpCurrent = actor.system.health.current || 0;
    const hpMax = actor.system.health.max || 1;
    
    context.hpPercentage = Math.min(100, Math.max(0, (hpCurrent / hpMax) * 100));
    context.system.fa = fa;
    context.system.fd = fd;
    context.system.fad = fad;

    return context;
  }

  /**
   * Activate listeners for sheet interactions
   */
  activateListeners(html) {
    super.activateListeners(html);

    // Add item buttons
    html.find(".add-item-btn").on("click", this._onAddItem.bind(this));

    html.find(".add-spell-tai-btn").on("click", this._onAddSpellTaijutsu.bind(this));
    html.find(".add-spell-nin-btn").on("click", this._onAddSpellNinjutsu.bind(this));
    html.find(".add-spell-gen-btn").on("click", this._onAddSpellGenjutsu.bind(this));
    html.find(".add-spell-outro-btn").on("click", this._onAddSpellOutro.bind(this));

    // Item actions
    html.find(".item-edit").on("click", this._onItemEdit.bind(this));
    html.find(".item-delete").on("click", this._onItemDelete.bind(this));
    html.find(".item-equip").on("click", this._onItemEquip.bind(this));

    // Editable fields
    html.find(".editable").on("change", this._onEditableChange.bind(this));

    // Biography editor
    html.find(".biography-editor").on("change", this._onBiographyChange.bind(this));
    html.find(".vantagem-editor").on("change", this._onVantagemChange.bind(this));
    html.find(".desvantagem-editor").on("change", this._onDesvantagemChange.bind(this));

    

    // Avatar change
    html.find(".avatar-image").on("click", this._onAvatarClick.bind(this));

    // Drag and drop
    this._setupDragDrop(html);


    // Captura a edição do nome no h1 contenteditable
    html.find('.item-name[contenteditable="true"]').blur(ev => {
      const header = ev.currentTarget;
      const newName = header.innerText;
      if (newName !== this.item.name) {
        this.item.update({ name: newName });
      }
    });



  }

  /**
   * Setup drag and drop handlers
   */
  _setupDragDrop(html) {
    const dragDrop = new DragDrop({
      dragSelector: ".item-row",
      dropSelector: ".sheet-body",
      permissions: { dragstart: this._canDragStart.bind(this), drop: this._canDragDrop.bind(this) },
      callbacks: { dragstart: this._onDragStart.bind(this), drop: this._onDrop.bind(this) }
    });
    dragDrop.bind(html[0]);
  }

  /**
   * Check if can drag start
   */
  _canDragStart(selector) {
    return true;
  }

  /**
   * Check if can drag drop
   */
  _canDragDrop(selector) {
    return true;
  }

  /**
   * Handle drag start
   */
  _onDragStart(event) {
    const itemId = event.currentTarget.dataset.itemId;
    const item = this.actor.items.get(itemId);
    
    if (item) {
      event.dataTransfer.setData("text/plain", JSON.stringify({
        type: "Item",
        uuid: item.uuid
      }));
    }
  }

  /**
   * Handle drop
   */
  async _onDrop(event) {
    event.preventDefault();
    
    try {
      const data = JSON.parse(event.dataTransfer.getData("text/plain"));
      
      if (data.type === "Item") {
        const item = await fromUuid(data.uuid);
        if (item && item.actor?.id !== this.actor.id) {
          // Clone item to this actor
          const itemData = item.toObject();
          delete itemData._id;
          await this.actor.createEmbeddedDocuments("Item", [itemData]);
        }
      }
    } catch (error) {
      console.error("Error handling drop:", error);
    }
  }

  /**
   * Handle add item button
   */
  async _onAddItem(event) {
    event.preventDefault();
    const itemType = event.currentTarget.dataset.itemType;
    
    const itemData = {
      name: `Novo ${itemType === "equipment" ? "Item" : itemType === "spell" ? "Magia" : "Arma"}`,      
      type: itemType,
      system: { }
    };    

    await this.actor.createEmbeddedDocuments("Item", [itemData]);
  }


  async _onAddSpellTaijutsu(event) {
    event.preventDefault();
    const itemType = event.currentTarget.dataset.itemType;
    
    const itemData = {
      name: `Novo Magia`,      
      type: itemType,
      system: { "tecnica": "taijutsu" }
    };    

    console.log(itemData);

    await this.actor.createEmbeddedDocuments("Item", [itemData]);
  }

    async _onAddSpellNinjutsu(event) {
    event.preventDefault();
    const itemType = event.currentTarget.dataset.itemType;
    
    const itemData = {
      name: `Novo Magia`,      
      type: itemType,
      system: { "tecnica": "ninjutsu" }
    };    

    console.log(itemData);

    await this.actor.createEmbeddedDocuments("Item", [itemData]);
  }

    async _onAddSpellGenjutsu(event) {
    event.preventDefault();
    const itemType = event.currentTarget.dataset.itemType;
    
    const itemData = {
      name: `Novo Magia`,      
      type: itemType,
      system: { "tecnica": "genjutsu" }
    };    

    console.log(itemData);

    await this.actor.createEmbeddedDocuments("Item", [itemData]);
  }

    async _onAddSpellOutro(event) {
    event.preventDefault();
    const itemType = event.currentTarget.dataset.itemType;
    
    const itemData = {
      name: `Novo Magia`,      
      type: itemType,
      system: { "tecnica": "outro" }
    };    

    console.log(itemData);

    await this.actor.createEmbeddedDocuments("Item", [itemData]);
  }

  /**
   * Handle item edit
   */
  _onItemEdit(event) {
    event.preventDefault();
    const itemRow = event.currentTarget.closest(".item-row");
    const itemId = itemRow.dataset.itemId;
    const item = this.actor.items.get(itemId);
    
    if (item) {
      item.sheet.render(true);
    }
  }

  /**
   * Handle item delete
   */
  _onItemDelete(event) {
    event.preventDefault();
    const itemRow = event.currentTarget.closest(".item-row");
    const itemId = itemRow.dataset.itemId;
    
    this.actor.deleteEmbeddedDocuments("Item", [itemId]);
  }

  /**
   * Handle item equip toggle
   */
  _onItemEquip(event) {
    event.preventDefault();
    const itemRow = event.currentTarget.closest(".item-row");
    const itemId = itemRow.dataset.itemId;
    const item = this.actor.items.get(itemId);
    
    if (item) {
      item.update({
        "system.equipped": !item.system.equipped
      });
    }
  }

  /**
   * Handle editable field changes
   */
  _onEditableChange(event) {
    event.preventDefault();
    const field = event.currentTarget.dataset.field;
    const value = event.currentTarget.value;
    
    if (field) {
      const updateData = {};
      updateData[field] = isNaN(value) ? value : Number(value);
      this.actor.update(updateData);
    }
  }

  /**
   * Handle biography changes
   */
  _onBiographyChange(event) {
    event.preventDefault();
    const value = event.currentTarget.value;
    this.actor.update({
      "system.biography": value
    });
  }

  _onVantagemChange(event) {
    event.preventDefault();
    const value = event.currentTarget.value;
    this.actor.update({
      "system.vantagem": value
    });
  }

  _onDesvantagemChange(event) {
    event.preventDefault();
    const value = event.currentTarget.value;
    this.actor.update({
      "system.desvantagem": value
    });
  }

  /**
   * Handle avatar click to change image
   */
  async _onAvatarClick(event) {
    event.preventDefault();
    
    const fp = new FilePicker({
      type: "image",
      callback: async (path) => {
        await this.actor.update({ img: path });
      }
    });
    fp.browse();
  }
}
