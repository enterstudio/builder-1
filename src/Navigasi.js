'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var Navigasi = (function (_React$Component) {
    _inherits(Navigasi, _React$Component);

    function Navigasi(props) {
        _classCallCheck(this, Navigasi);

        _get(Object.getPrototypeOf(Navigasi.prototype), 'constructor', this).call(this, props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.toggleNavdropdown = this.toggleNavdropdown.bind(this);

        this.state = {
            collapsedNavbar: false
        };
        this.state = {
            dropdownOpen: false
        };
    }

    _createClass(Navigasi, [{
        key: 'toggleNavbar',
        value: function toggleNavbar() {
            this.setState({
                collapsedNavbar: !this.state.collapsedNavbar
            });
        }
    }, {
        key: 'toggleNavdropdown',
        value: function toggleNavdropdown() {
            this.setState({
                dropdownOpen: !this.state.dropdownOpen
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                _reactstrap.Navbar,
                { color: 'inverse', className: 'sticky-top', inverse: true, toggleable: true },
                _react2['default'].createElement(_reactstrap.NavbarToggler, { right: true, onClick: this.toggleNavbar }),
                _react2['default'].createElement(
                    _reactstrap.NavbarBrand,
                    { href: '/' },
                    'Webtutorial'
                ),
                _react2['default'].createElement(
                    _reactstrap.Collapse,
                    { className: 'navbar-toggleable-md', isOpen: this.state.collapsedNavbar, navbar: true },
                    _react2['default'].createElement(
                        _reactstrap.Nav,
                        { className: 'mr-auto', navbar: true },
                        _react2['default'].createElement(
                            _reactstrap.NavDropdown,
                            { isOpen: this.state.dropdownOpen, toggle: this.toggleNavdropdown },
                            _react2['default'].createElement(
                                _reactstrap.DropdownToggle,
                                { nav: true, caret: true },
                                'Tutorial'
                            ),
                            _react2['default'].createElement(
                                _reactstrap.DropdownMenu,
                                null,
                                _react2['default'].createElement(
                                    _reactstrap.DropdownItem,
                                    null,
                                    'HTML'
                                ),
                                _react2['default'].createElement(
                                    _reactstrap.DropdownItem,
                                    null,
                                    'CSS'
                                ),
                                _react2['default'].createElement(
                                    _reactstrap.DropdownItem,
                                    null,
                                    'JavaScript'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Navigasi;
})(_react2['default'].Component);

exports['default'] = Navigasi;
module.exports = exports['default'];