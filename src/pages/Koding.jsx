import React from 'react';
import {
    Card,
    CardHeader,
    CardBlock,
    CardTitle,
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
                    </CardText>
                </CardBlock>
            </Card>
        );
    }
}

export default Koding;