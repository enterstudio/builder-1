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

require('./css/Beranda.css');

var Beranda = (function (_React$Component) {
    _inherits(Beranda, _React$Component);

    function Beranda() {
        _classCallCheck(this, Beranda);

        _get(Object.getPrototypeOf(Beranda.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Beranda, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(
                    _reactstrap.Card,
                    { id: 'pengenalan' },
                    _react2['default'].createElement(
                        _reactstrap.CardHeader,
                        null,
                        'Pengenalan'
                    ),
                    _react2['default'].createElement(
                        _reactstrap.CardBlock,
                        null,
                        _react2['default'].createElement(
                            _reactstrap.CardText,
                            null,
                            _react2['default'].createElement(
                                'h3',
                                null,
                                'Selamat datang di Webtutorial!'
                            ),
                            _react2['default'].createElement(
                                'p',
                                null,
                                'Web Tutorial adalah situs yang dibuat untuk menyediakan tutorial pemrograman web. Di sini tersedia berbagai petunjuk tentang cara membuat program dengan langkah-langkah yang jelas dan detail sehingga mudah dimengerti. Situs ini menyediakan tutorial dengan pendekatan '
                            ),
                            _react2['default'].createElement(
                                'h3',
                                null,
                                'Apa saja yang akan dipelajari di sini?'
                            ),
                            _react2['default'].createElement(
                                'p',
                                null,
                                'Akan ada banyak hal yang dapat Kamu dipelajari. Untuk saat ini dan beberapa waktu kedepan Kamu akan belajar berbagai tahap mulai dari mempersiapkan berbagai aplikasi yang akan dibutuhkan untuk belajar beserta petunjuk instalasinya hingga koding.'
                            )
                        )
                    )
                ),
                _react2['default'].createElement(
                    _reactstrap.Card,
                    { id: 'persiapan' },
                    _react2['default'].createElement(
                        _reactstrap.CardHeader,
                        null,
                        'Persiapan'
                    ),
                    _react2['default'].createElement(
                        _reactstrap.CardBlock,
                        null,
                        _react2['default'].createElement(
                            _reactstrap.CardText,
                            null,
                            _react2['default'].createElement(
                                'p',
                                null,
                                'Ada beberapa hal yang harus kamu siapkan untuk bisa mengikuti tutorial Web di sini. Asumsi bahwa kamu adalah pengguna sistem operasi windows. Berikut ini adalah daftarnya:'
                            ),
                            _react2['default'].createElement(
                                'ul',
                                null,
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    'kode editor',
                                    _react2['default'].createElement(
                                        'p',
                                        null,
                                        'kode editor adalah aplikasi untuk menyimpan hasil tulisan kode kamu. biasanya, kode editor memiliki tambahan efek yaitu ',
                                        _react2['default'].createElement(
                                            'i',
                                            null,
                                            'syntax highlighter'
                                        ),
                                        ' yang dapat membuat setiap kata dalam kode menjadi berwarna tergantung dari jenisnya masing-masing.'
                                    ),
                                    _react2['default'].createElement(
                                        'p',
                                        null,
                                        'Berikut ini adalah beberapa kode editor populer di dunia pemrograman yang bisa kamu gunakan untuk belajar:'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        null,
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            'Atom'
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            'Bracket'
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            'Notepad++'
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            'Sublime Text'
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    'Browser',
                                    _react2['default'].createElement(
                                        'p',
                                        null,
                                        'Browser adalah aplikasi untuk menjalankan aplikasi web dan melihat tampilan yang dihasilkan dari kode didalam aplikasi. Saat ini terdapat beragam browser yang tersedia. Berikut ini adalah beberapa browser yang populer dikalangan programmer website:'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        null,
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            'Google Chrome'
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            'Mozilla Firefox'
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            'Internet Explorer'
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            'Safari'
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            'Opera'
                                        )
                                    )
                                ),
                                _react2['default'].createElement(
                                    'li',
                                    null,
                                    'Server Lokal',
                                    _react2['default'].createElement(
                                        'p',
                                        null,
                                        'Server lokal digunakan terutama jika kamu ingin menjalankan aplikasi yang bekerja di sisi server(server side). Kamu akan membutuhkan server lokal jika ngoding php. Aplikasi ini biasanya juga akan mengakses data didalam database.'
                                    ),
                                    _react2['default'].createElement(
                                        'p',
                                        null,
                                        'Di bawah ini adalah server lokal yang dapat kamu install dengan instan.'
                                    ),
                                    _react2['default'].createElement(
                                        'ul',
                                        null,
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            'Xampp'
                                        ),
                                        _react2['default'].createElement(
                                            'li',
                                            null,
                                            'Wampp'
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Beranda;
})(_react2['default'].Component);

exports['default'] = Beranda;
module.exports = exports['default'];