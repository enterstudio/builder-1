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
                            Sebelum mulai membuat aplikasi web, Kamu harus menginstall beberapa software 
                            yang dibutuhkan, yaitu aplikasi teks editor dan browser. 
                            Berikut ini diberikan contoh software yang digunakan untuk 
                            membuat sebuah aplikasi web.
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
                            Pilih salah satu diantara pilihan teks editor dan browser yang
                            telah disebutkan, kamu juga dapat menginstall aplikasi diluar pilihan 
                            yang disediakan selama memiliki fasilitas dan fungsi utama tidak jauh berbeda 
                            dengan pilihan di atas.
                        <div class="form-group">
                            <a className="btn btn-success btn-sm float-right" href="https://github.com/webtutorial/builder" target="blank">edit</a>
                        </div>
                    </CardText> 
                </CardBlock>
            </Card>
        );
    }
}
export default Instalasi;