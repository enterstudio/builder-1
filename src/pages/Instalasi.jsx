import React from 'react';

import {
    Card,
    CardHeader,
    CardBlock,
    CardTitle,
    CardText
} from 'reactstrap';

class Instalasi extends React.Component
{
    render()
    {
        return(
            <Card>
                <CardHeader>Instalasi Software</CardHeader>
                <CardBlock>
                    <CardText>
                        <p>
                            Sebelum mulai membuat aplikasi web, Kamu harus menginstall beberapa software 
                            yang dibutuhkan, yaitu aplikasi teks editor, browser, dan server lokal. 
                            Pilih salah satu diantara pilihan teks editor, browser, dan server lokal yang
                            telah disebutkan sebelumnya, kamu juga dapat menginstall aplikasi diluar pilihan 
                            yang disediakan selama memiliki fasilitas dan fungsi utama tidak jauh berbeda 
                            dengan pilihan tadi.
                        </p>
                        <p>
                            Berikut ini diberikan contoh software yang digunakan untuk 
                            membuat sebuah aplikasi web.
                        </p>
                        <ul>
                            <li>
                                Teks Editor atau kode editor(pilih salah satu):
                                <ul>
                                    <li>Atom</li>
                                    <li>Bracket</li>
                                    <li>Nodepad++</li>
                                    <li>Sublime Text</li>
                                </ul>
                            </li>
                            <li>
                                Browser(pilih salah satu):
                                <ul>
                                    <li>Google Chrome</li>
                                    <li>Mozilla Firefox</li>
                                    <li>Safari</li>
                                    <li>VIvaldi</li>
                                </ul>
                            </li>
                            <li>
                                Server lokal(pilih salah satu):
                                <ul>
                                    <li>XAMPP</li>
                                    <li>WAMPP</li>
                                </ul>
                            </li>
                        </ul>
                        <p>
                            Silahkan menginstall aplikasi sesuai dengan pilihan di atas.
                        </p>
                    </CardText> 
                </CardBlock>
            </Card>
        );
    }
}
export default Instalasi;