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
                <CardHeader className="bg-success text-white">Instalasi Software</CardHeader>
                <CardBlock>
                    <CardText>
                        <p>
                            Sebelum mulai membuat aplikasi web, Kamu harus menginstall beberapa software 
                            yang dibutuhkan, yaitu aplikasi teks editor dan browser. 
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
                        </ul>
                        <p>
                            Pilih salah satu diantara pilihan teks editor dan browser yang
                            telah disebutkan, kamu juga dapat menginstall aplikasi diluar pilihan 
                            yang disediakan selama memiliki fasilitas dan fungsi utama tidak jauh berbeda 
                            dengan pilihan di atas.
                        </p>
                    </CardText> 
                </CardBlock>
            </Card>
        );
    }
}
export default Instalasi;