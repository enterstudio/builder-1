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
                                Text Editor : Sublime Text<br/>
                                <img className="img-thumbnail" src={require('../img/sublime-text.jpg')}/>
                            </li>
                            <li>
                                Browser : Mozilla Firefox<br/>
                                <img className="img-thumbnail" src={require('../img/mozilla-firefox.jpg')}/>
                            </li>
                            <li>
                                Server lokal : Xampp<br/>
                                <img className="img-thumbnail" src={require('../img/xampp.jpg')}/>
                            </li>
                        </ul>
                        <p>
                            Silahkan menginstall aplikasi sesuai dengan contoh di atas, atau jika kamu 
                            memiliki selera yang lain, silahkan mencari alternatifnya.
                        </p>
                    </CardText> 
                </CardBlock>
            </Card>
        );
    }
}
export default Instalasi;