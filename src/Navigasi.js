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

var _pagesBerandaJsx = require('./pages/Beranda.jsx');

var _pagesBerandaJsx2 = _interopRequireDefault(_pagesBerandaJsx);

var _pagesAboutJsx = require('./pages/About.jsx');

var _pagesAboutJsx2 = _interopRequireDefault(_pagesAboutJsx);

var _pagesContactJsx = require('./pages/Contact.jsx');

var _pagesContactJsx2 = _interopRequireDefault(_pagesContactJsx);

var Navigasi = (function (_React$Component) {
    _inherits(Navigasi, _React$Component);

    function Navigasi(props) {
        _classCallCheck(this, Navigasi);

        _get(Object.getPrototypeOf(Navigasi.prototype), 'constructor', this).call(this, props);
        this.togglenav = this.togglenav.bind(this);
        //        this.dropdownToggle = this.dropdownToggle.bind(this);

        this.statenav = {
            navOpen: false
        };
        //        this.stateDropdown = {
        //            downOpen:false
        //        }
    }

    _createClass(Navigasi, [{
        key: 'togglenav',
        value: function togglenav() {
            this.setState({
                navOpen: !this.statenav.navOpen
            });
        }

        //    dropdownToggle()
        //    {
        //        this.setState({
        //            downOpen: !this.stateDropdown.downOpen
        //        });
        //    }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                _reactstrap.Navbar,
                { color: 'inverse', className: 'sticky-top', inverse: true, toggleable: true },
                _react2['default'].createElement(_reactstrap.NavbarToggler, { right: true, onClick: this.togglenav }),
                _react2['default'].createElement(
                    _reactstrap.NavbarBrand,
                    { href: '/' },
                    'Webtutorial'
                ),
                _react2['default'].createElement(_reactstrap.Collapse, { isOpen: this.statenav.navOpen, navbar: true })
            );
        }
    }]);

    return Navigasi;
})(_react2['default'].Component);

exports['default'] = Navigasi;
module.exports = exports['default'];
/*
                       <Nav className="mr-auto" navbar>
                           <NavDropdown isOpen={this.stateDropdown.downOpen} toggle={this.dropdownToggle}>
                               <DropdownToggle nav caret>
                                   Tutorial
                               </DropdownToggle>
                               <DropdownMenu>
                                   <DropdownItem>HTML</DropdownItem>
                                   <DropdownItem>CSS</DropdownItem>
                                   <DropdownItem>JavaScript</DropdownItem>
                               </DropdownMenu>
                           </NavDropdown>
                       </Nav>
                       */