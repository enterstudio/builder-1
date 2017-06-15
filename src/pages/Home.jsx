import React from 'react';

class Home extends React.Component
{
    render()
    {
        return(
            <div>
                <div id="intro"></div>
                <h3>Selamat datang di website tutorial pemrograman web!</h3>
                <p>Web Tutorial adalah situs yang dibuat untuk menyediakan tutorial 
                    pemrograman web. Di sini, Disediakan berbagai petunjuk tentang 
                    cara membuat program dengan langkah-langkah yang jelas 
                    dan detail sehingga mudah dimengerti.</p>
                <p>Kamu tidak perlu bingung terhadap segala macam persiapan 
                    yang harus dilakukan, karena di situs ini disediakan 
                    panduan bagi pengunjung dengan level pengetahuan mulai dari benar-benar awam</p>
                <h3>Apa saja yang akan dipelajari di sini?</h3>
                <p>
                Akan ada banyak hal yang dapat Kamu dipelajari. 
                Untuk saat ini dan beberapa waktu kedepan Kamu akan belajar berbagai tahap 
                mulai dari mempersiapkan berbagai aplikasi yang akan dibutuhkan untuk belajar</p>
            </div>
        );
    }
}

export default Home;