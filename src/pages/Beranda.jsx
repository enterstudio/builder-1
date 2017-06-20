import React from 'react';
import {
    Card,
    CardHeader,
    CardBlock,
    CardTitle,
    CardText
} from 'reactstrap';

import './css/Beranda.css';

class Beranda extends React.Component
{
    render()
    {
        return(
            <div>
                <Card id="pengenalan">
                    <CardHeader>Pengenalan</CardHeader>
                    <CardBlock>
                        <CardText>
                            <h3>Selamat datang di Webtutorial!</h3>
                            <p>Web Tutorial adalah situs yang dibuat untuk menyediakan tutorial 
                                pemrograman web. Di sini tersedia berbagai petunjuk tentang 
                                cara membuat program dengan langkah-langkah yang jelas 
                                dan detail sehingga mudah dimengerti. Situs ini menyediakan tutorial dengan 
                                pendekatan </p>
                            <h3>Apa saja yang akan dipelajari di sini?</h3>
                            <p>
                                Akan ada banyak hal yang dapat Kamu dipelajari. 
                                Untuk saat ini dan beberapa waktu kedepan Kamu akan belajar berbagai tahap 
                                mulai dari mempersiapkan berbagai aplikasi yang akan dibutuhkan untuk belajar 
                                beserta petunjuk instalasinya hingga koding.
                            </p>
                        </CardText>
                    </CardBlock>
                </Card>
                <Card id="persiapan">
                    <CardHeader>Persiapan</CardHeader>
                    <CardBlock>
                        <CardText>
                            <p>
                                Ada beberapa hal yang harus kamu siapkan untuk bisa mengikuti 
                                tutorial Web di sini. Asumsi bahwa kamu adalah pengguna sistem operasi windows. 
                                Berikut ini adalah daftarnya:
                            </p>
                            <ul>
                                <li>kode editor
                                    <p>kode editor adalah aplikasi untuk menyimpan hasil tulisan kode kamu. 
                                        biasanya, kode editor memiliki tambahan efek yaitu <i>syntax highlighter</i> yang dapat membuat setiap kata dalam kode menjadi berwarna tergantung dari 
                                        jenisnya masing-masing.
                                    </p>
                                    <p>Berikut ini adalah beberapa kode editor populer di dunia pemrograman 
                                    yang bisa kamu gunakan untuk belajar:</p>
                                    <ul>
                                        <li>Atom</li>
                                        <li>Bracket</li>
                                        <li>Notepad++</li>
                                        <li>Sublime Text</li>
                                    </ul>
                                </li>
                                <li>Browser
                                    <p>Browser adalah aplikasi untuk menjalankan aplikasi web 
                                        dan melihat tampilan yang dihasilkan dari kode didalam aplikasi.
                                    Saat ini terdapat beragam browser yang tersedia. Berikut ini adalah beberapa 
                                    browser yang populer dikalangan programmer website:</p>
                                    <ul>
                                        <li>Google Chrome</li>
                                        <li>Mozilla Firefox</li>
                                        <li>Internet Explorer</li>
                                        <li>Safari</li>
                                        <li>Opera</li>
                                    </ul>
                                </li>
                                <li>Server Lokal
                                    <p>
                                        Server lokal digunakan terutama jika kamu ingin menjalankan aplikasi 
                                        yang bekerja di sisi server(server side). Kamu akan membutuhkan 
                                        server lokal jika ngoding php. Aplikasi ini biasanya juga akan 
                                        mengakses data didalam database.
                                    </p>
                                    <p>
                                        Di bawah ini adalah server lokal yang dapat kamu install dengan instan. 
                                    </p>
                                    <ul>
                                        <li>Xampp</li>
                                        <li>Wampp</li>
                                    </ul>
                                </li>
                            </ul>
                        </CardText>
                    </CardBlock>
                </Card>
            </div>
        );
    }
}

export default Beranda;