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
                    <CardHeader className="bg-success text-white">Pengenalan</CardHeader>
                    <CardBlock>
                        <CardText>
                            <h3>Selamat datang di Webtutorial!</h3>
                            <p>Web Tutorial adalah situs yang dibuat untuk menyediakan tutorial 
                                pemrograman web. Di sini tersedia berbagai petunjuk tentang 
                                cara membuat program dengan langkah-langkah yang jelas sehingga mudah dimengerti.</p>
                            <h3>Apa saja yang akan dipelajari di sini?</h3>
                            <p>
                                Akan ada banyak hal yang dapat Kamu dipelajari. 
                                Untuk saat ini dan beberapa waktu kedepan Kamu akan belajar berbagai tahap 
                                mulai dari mempersiapkan berbagai aplikasi yang akan dibutuhkan untuk belajar 
                                beserta petunjuk instalasinya hingga koding.
                            </p>
                            <a className="btn btn-success btn-sm float-right" href="https://github.com/webtutorial/builder" target="blank">edit</a>
                        </CardText>
                    </CardBlock>
                </Card>
            </div>
        );
    }
}

export default Beranda;