/**
 * Item Sheet for Jujutsu Kaisen System
 * Handles the display and interaction with item data
 */

export class JujutsuItemSheet extends ItemSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["jujutsu", "sheet", "item"],
      template: "systems/jujutsu-kaisen-system/templates/item/item-sheet.html",
      width: 600,
      height: 600,
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "details"
        }
      ]
    });
  }

  /**
   * Get data for template rendering
   */
  getData() {
    const context = super.getData();
    context.system = this.item.system;
    context.type = this.item.type;
    
    return context;
  }

  /**
   * Activate listeners for sheet interactions
   */
  activateListeners(html) {
    super.activateListeners(html);

    // Editable fields
    html.find(".editable").on("change", this._onEditableChange.bind(this));

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
   * Handle editable field changes
   */
  _onEditableChange(event) {
    event.preventDefault();
    const field = event.currentTarget.dataset.field;
    const value = event.currentTarget.value;
    
    if (field) {
      this.item.update({
        [field]: isNaN(value) ? value : Number(value)
      });
    }
  }
}
