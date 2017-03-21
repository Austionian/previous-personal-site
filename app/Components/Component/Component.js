import $ from 'jquery';

export default class Component {
  constructor(el, options) {
    this.renderTemplate = this.renderTemplate.bind(this);
    Object.assign(this, options);
    this.$el = $(el);
  }

  render() {
    this.template.render(
      this.serializeData(),
      this.renderTemplate
    )
  }

  renderTemplate(html, error) {
    this.$el.html(
      html
    )
  }

  destroy() {
    this.$el.empty();
  }

  serializeData() {
    return this;
  }
}
