/**
 * Character Sheet for Jujutsu Kaisen System
 * Handles the display and interaction with character data
 */

export class JujutsuCharacterSheet extends ActorSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["jujutsu", "sheet", "actor", "character"],
      template: "systems/jujutsu-kaisen-system/templates/actor/character-sheet.html",
      width: 350,
      height: 800,
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "inventory"
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
    context.items = {
      equipment: actor.items.filter(i => i.type === "equipment"),
      spells: actor.items.filter(i => i.type === "spell"),
      weapons: actor.items.filter(i => i.type === "weapon"),
      equipped: actor.items.filter(i => i.system.equipped === true)
    };

    // Calculate HP percentage for the bar
    const hpCurrent = actor.system.health.current || 0;
    const hpMax = actor.system.health.max || 1;
    context.hpPercentage = Math.min(100, Math.max(0, (hpCurrent / hpMax) * 100));

    return context;
  }

  /**
   * Activate listeners for sheet interactions
   */
  activateListeners(html) {
    super.activateListeners(html);

    // Add item buttons
    html.find(".add-item-btn").on("click", this._onAddItem.bind(this));

    // Item actions
    html.find(".item-edit").on("click", this._onItemEdit.bind(this));
    html.find(".item-delete").on("click", this._onItemDelete.bind(this));
    html.find(".item-equip").on("click", this._onItemEquip.bind(this));

    // Editable fields
    html.find(".editable").on("change", this._onEditableChange.bind(this));

    // Biography editor
    html.find(".biography-editor").on("change", this._onBiographyChange.bind(this));

    // Avatar change
    html.find(".avatar-image").on("click", this._onAvatarClick.bind(this));

    // Drag and drop
    this._setupDragDrop(html);
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
      system: {}
    };

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
