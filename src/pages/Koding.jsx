import React from 'react';
import {
    Card,
    CardHeader,
    CardBlock,
    CardText
} from 'reactstrap';

class Koding extends React.Component
{
    render()
    {
        return(
            <Card>
                <CardHeader className="bg-success text-white">
                    Cara Menulis Kode
                </CardHeader>
                <CardBlock>
                    <CardText>
                        Masukkan kode kedalam software editor kode. 
                        Contohnya untuk membuat dokumen html, masukkan kode di bawah ini:
                        <pre>
                            &lt;h1&gt;Selamat datang&lt;/h1&gt;
                        </pre>
                        Masukkan kode di atas ke dalam kode editor, kemudian simpan dengan nama <code>index.html</code>. 
                        Selanjutnya, buka dokumen <code>index.html</code> ini menggunakan browser.
                        <div className="form-group">
                            <a className="btn btn-success btn-sm float-right" href="https://github.com/webtutorial/builder" target="blank">edit</a>
                        </div>
                    </CardText>
                </CardBlock>
            </Card>
        );
    }
}

export default Koding;