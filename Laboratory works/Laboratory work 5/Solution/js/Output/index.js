class Output {
  constructor(container = $(".output")) {
    this._container = container;
  }
  printHeader(text) {
    this._container.append(`<h3>${text}</h3>`);
  }
  printText(text) {
    this._container.append(`<p>${text}</p>`);
  }
  printHtml(data) {
    this._container.append(data);
  }
  empty() {
    this._container.empty();
  }
}
