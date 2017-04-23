'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var data = {
  summary: 'Lorem ipsum',
  details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia voluptatibus maxime laboriosam? Nisi labore dolores neque, minus dignissimos iure doloribus eveniet suscipit pariatur vero, harum consequuntur consectetur minima dolor, animi'
};

var Accordion = function (_React$Component) {
  _inherits(Accordion, _React$Component);

  function Accordion() {
    _classCallCheck(this, Accordion);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Accordion.prototype.render = function render() {
    var _props = this.props;
    var summary = _props.summary;
    var details = _props.details;

    return React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        summary
      ),
      React.createElement(
        'p',
        null,
        details
      )
    );
  };

  return Accordion;
}(React.Component);

ReactDOM.render(React.createElement(Accordion, { summary: data.summary, details: data.details }), document.getElementById('app-root'));