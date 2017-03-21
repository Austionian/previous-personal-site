export default class Template {
  constructor() {
    return this;
  }

  compile() {
      return this;
  }

  render(data, callback) {
    callback(
        this.compile(data)
    )
  }
}
