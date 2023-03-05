import React from 'react'
import ReactDOM from 'react-dom';

const Home = () => {
    return (
        <div>
            <div>
                {/* ======= Header ======= */}
                <header id="header" className="sticky-top d-flex align-items-center">
                    <div id='home' className="container d-flex align-items-center justify-content-between">
                        <div className="logo">
                            <h1><a href="#">KONDANGIN.ID</a></h1>
                            {/* Uncomment below if you prefer to use an image logo */}
                            {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                        </div>
                        <nav id="navbar" className="navbar">
                            <ul>
                                <li><a className="nav-link scrollto active" href="#home">Beranda</a></li>
                                <li><a className="nav-link scrollto" href="#tentang">Tentang Kami</a></li>
                                <li><a className="nav-link scrollto" href="#fitur">Fitur</a></li>
                                <li><a className="nav-link scrollto " href="#testi">Testimonial </a></li>
                                {/* <li><a class="nav-link scrollto" href="blog.html">Blog</a></li> */}
                                <li><a className="nav-link scrollto " href="#paket">Pilihan Paket</a></li>
                                <li><a className="nav-link scrollto" href="#harga">Harga</a></li>

                                <li><a className="nav-link scrollto" href="#kontak">Kontak</a></li>
                                {/* <li><a className="nav-link scrollto" href="contact.html">Login</a></li>
                                <li><a className="getstarted scrollto" href="todos.html">Buat Undangan</a></li> */}
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle" />
                        </nav>{/* .navbar */}
                    </div>
                </header>{/* End Header */}
                {/* ======= Hero Section ======= */}
                <section id="hero" className="d-flex align-items-center">
                    <div className="container mb-5">
                        <div className="row">
                            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                <h1 data-aos="fade-up">KONDANGIN.ID</h1>
                                <h2 data-aos="fade-up" data-aos-delay={400}>Bagikan Momen Bahagiamu Dengan Mudah, Cepat, Elegan Bersama <strong>KONDANGIN.ID</strong></h2>
                                <div data-aos="fade-up" data-aos-delay={800}>
                                    <button type="button" className="btn btn-get-started scrollto " disabled>
                                        Buat Undangan
                                    </button>
                                    {/* <a href="#about" class="btn-get-started scrollto" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Get Started</a> */}
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 d-flex justify-content-center" data-aos="fade-left" data-aos-delay={200}>
                                <video src="https://wedew.id/themes/wedew-public/assets/images/hero.mp4" loading="eager" autoPlay loop playsInline muted style={{ width: 337, objectFit: 'contain' }} />
                                {/* <img src="assets/img/undangan.png" class="img-fluid animated" alt=""> */}
                            </div>
                        </div>
                    </div>
                </section>{/* End Hero */}
                <main id="main">
                    {/* ======= Clients Section ======= */}
                    {/* <section id="clients" class="clients clients">
<div class="container">

  <div class="row">

    <div class="col-lg-2 col-md-4 col-6">
      <img src="assets/img/clients/client-1.png" class="img-fluid" alt="" data-aos="zoom-in">
    </div>

    <div class="col-lg-2 col-md-4 col-6">
      <img src="assets/img/clients/client-2.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100">
    </div>

    <div class="col-lg-2 col-md-4 col-6">
      <img src="assets/img/clients/client-3.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="200">
    </div>

    <div class="col-lg-2 col-md-4 col-6">
      <img src="assets/img/clients/client-4.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="300">
    </div>

    <div class="col-lg-2 col-md-4 col-6">
      <img src="assets/img/clients/client-5.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="400">
    </div>

    <div class="col-lg-2 col-md-4 col-6">
      <img src="assets/img/clients/client-6.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="500">
    </div>

  </div>

</div>
    </section> */}
                    {/* End Clients Section */}
                    {/* ======= About Us Section ======= */}
                    <section id="tentang" className="about">
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Tentang Kami</h2>
                            </div>
                            <br />
                            <div className="row content">
                                <div className="col-lg-6" data-aos="fade-up" data-aos-delay={150}>
                                    <p>
                                        KONDANGIN.ID merupakan sebuah Platform Digitalisasi Pernikahan yang membuat pernikahan kamu menjadi lebih bermakna dan Up to Date dengan berbagai macam layanan yang disediakan seperti Web-Invitation, E-Guestbook &amp; RSVP, E-Angpao, Dashboard User dan Cinematic Wedding Live Streaming yang bisa kamu dapatkan di dalam satu paket
                                    </p>
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay={300}>
                                    <ul>
                                        <li><i className="ri-check-double-line" /> Smart System</li>
                                        <li><i className="ri-check-double-line" /> Harga Terjangkau</li>
                                        <li><i className="ri-check-double-line" /> Banyak Pilihan Tema</li>
                                        <li><i className="ri-check-double-line" /> Tim Support Responsif</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>{/* End About Us Section */}
                    {/* ======= Counts Section ======= */}
                    <section id="counts" className="counts">
                        <div className="container">
                            <div className="row">
                                <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay={150}>
                                    <img src="assets/img/about/about.png" alt className="img-fluid" />
                                </div>
                                <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay={300}>
                                    <div className="content d-flex flex-column justify-content-center">
                                        <div className="row">
                                            <div className="col-md-6 d-md-flex align-items-md-stretch">
                                                <div className="count-box">
                                                    <i className="bi bi-emoji-smile" />
                                                    <span data-purecounter-start={0} data-purecounter-end={65} data-purecounter-duration={1} className="purecounter" />
                                                    <p><strong>Smart System</strong> KONDANGIN.ID memiliki sistem yang mudah digunakan dan mendukung kustomisasi yang sangat fleksibel. Anda bisa mengatur undangan sesuai keinginan dan keperluan.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-md-flex align-items-md-stretch">
                                                <div className="count-box">
                                                    <i className="bi bi-journal-richtext" />
                                                    <span data-purecounter-start={0} data-purecounter-end={85} data-purecounter-duration={1} className="purecounter" />
                                                    <p><strong>Harga Terjangkau</strong> Anda tidak akan menemukan layanan undangan online lain yang lebih murah dari Datengdong dengan kualitas layanan yang setara.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-md-flex align-items-md-stretch">
                                                <div className="count-box">
                                                    <i className="bi bi-clock" />
                                                    <span data-purecounter-start={0} data-purecounter-end={18} data-purecounter-duration={1} className="purecounter" />
                                                    <p><strong>Banyak Pilihan Tema</strong> Tersedia banyak pilihan tema siap pakai yang dapat di sesuaikan dengan selera Anda kapan saja tanpa batas.</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-md-flex align-items-md-stretch">
                                                <div className="count-box">
                                                    <i className="bi bi-award" />
                                                    <span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={1} className="purecounter" />
                                                    <p><strong>Tim Support Responsif</strong> Tidak perlu menunggu lama, selesaikan masalah Anda dengan cepat secara real time melalui live chat whatsapp bersama tim support kami.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{/* End .content*/}
                                </div>
                            </div>
                        </div>
                    </section>{/* End Counts Section */}
                    {/* ======= Services Section ======= */}
                    <section id="services" className="services">
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>layanan kami</h2>
                                <p>Desain Kekinian, Pernikahan Makin Berkesan Dan Tampil Baik. Sangat Responsive Disemua Perangkat Digital.</p><br />
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                                        <div className="icon"><i className="bx bxl-dribbble" /></div>
                                        <h4 className="title"><a href>Digital Wedding Invitation</a></h4>
                                        <p className="description">Digital invitation atau undangan digital merupakan undangan yang dibuat dalam bentuk website sehingga mempermudah calon pengantin dalam menyebarkan kabar pernikahannya</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                                        <div className="icon"><i className="bx bx-file" /></div>
                                        <h4 className="title"><a href>Digital Wedding Album</a></h4>
                                        <p className="description">Digital Wedding Album merupakan foto album pernikahan yang diabadikan dalam bentuk digital dan dapat dikelola dengan mudah untuk memomen pernikahan terindah</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
                                        <div className="icon"><i className="bx bx-tachometer" /></div>
                                        <h4 className="title"><a href>Digital Guest Book</a></h4>
                                        <p className="description">Untuk mempermudah anda dalam pengelolaan jumlah tamu yang dapat hadir dan tidak hadir</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                    <div className="icon-box" data-aos="fade-up" data-aos-delay={400}>
                                        <div className="icon"><i className="bx bx-world" /></div>
                                        <h4 className="title"><a href>Digital Gift</a></h4>
                                        <p className="description">Untuk memberikan informasi kepada tamu yang tidak bisa hadir yang mau memberikan hadiah pernikahan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Services Section */}
                    {/* ======= More Services Section ======= */}
                    {/* <section id="more-services" class="more-services">
<div class="container">

  <div class="row">
    <div class="col-md-6 d-flex align-items-stretch">
      <div class="card" style='background-image: url("assets/img/more-services-1.jpg");' data-aos="fade-up" data-aos-delay="100">
        <div class="card-body">
          <h5 class="card-title"><a href="">Lobira Duno</a></h5>
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
          <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
        </div>
      </div>
    </div>
    <div class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
      <div class="card" style='background-image: url("assets/img/more-services-2.jpg");' data-aos="fade-up" data-aos-delay="200">
        <div class="card-body">
          <h5 class="card-title"><a href="">Limere Radses</a></h5>
          <p class="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.</p>
          <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
        </div>
      </div>

    </div>
    <div class="col-md-6 d-flex align-items-stretch mt-4">
      <div class="card" style='background-image: url("assets/img/more-services-3.jpg");' data-aos="fade-up" data-aos-delay="100">
        <div class="card-body">
          <h5 class="card-title"><a href="">Nive Lodo</a></h5>
          <p class="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores.</p>
          <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
        </div>
      </div>
    </div>
    <div class="col-md-6 d-flex align-items-stretch mt-4">
      <div class="card" style='background-image: url("assets/img/more-services-4.jpg");' data-aos="fade-up" data-aos-delay="200">
        <div class="card-body">
          <h5 class="card-title"><a href="">Pale Treda</a></h5>
          <p class="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem.</p>
          <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
        </div>
      </div>
    </div>
  </div>

</div>
    </section> */}
                    {/* End More Services Section */}
                    {/* ======= Features Section ======= */}
                    <section id="fitur" className="features">
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>FITUR KAMI</h2>
                                <p>Website Undangan Digital KONDANGIN.ID disertai dengan berbagai fitur yang dapat memudahkan kamu dalam mengundang orang-orang terdekat ke acara spesialmu.</p>
                                <br />
                            </div>
                            <div className="row" data-aos="fade-up" data-aos-delay={300}>
                                <div className="col-lg-3 col-md-4">
                                    <div className="icon-box">
                                        <i className="bi bi-geo-alt-fill" style={{ color: 'red' }} />
                                        <h3><a href>Navigasi</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                    <div className="icon-box">
                                        <i className="ri-calendar-todo-line" style={{ color: '#47aeff' }} />
                                        <h3><a href>Countdown Wedding</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                    <div className="icon-box">
                                        <i className="bi bi-envelope-paper-heart" style={{ color: 'rgb(225, 69, 95)' }} />
                                        <h3><a href>Quotes &amp; Doa</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                                    <div className="icon-box">
                                        <i className="bi bi-phone-flip" style={{ color: '#47aeff' }} />
                                        <h3><a href>Mobile Friendly</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="bi bi-images" style={{ color: 'rgb(225, 69, 95)' }} />
                                        <h3><a href>Galeri Foto &amp; Video</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="bi bi-music-note-list" style={{ color: '#47aeff' }} />
                                        <h3><a href>Backsound Music</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="bi bi-pin-map-fill" style={{ color: 'rgb(225, 69, 95)' }} />
                                        <h3><a href>Lokasi &amp; Waktu Resepsi</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="bi bi-people-fill" style={{ color: '#47aeff' }} />
                                        <h3><a href>Biodata Pasangan</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="bi bi-journal-bookmark-fill" style={{ color: 'rgb(225, 69, 95)' }} />
                                        <h3><a href>Buku Tamu</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="bi bi-clock-history" style={{ color: '#47aeff' }} />
                                        <h3><a href>Story Love Timeline</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="bi bi-pencil-square" style={{ color: 'rgb(225, 69, 95)' }} />
                                        <h3><a href>Custom Nama Tamu</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="bi bi-envelope-heart" style={{ color: '#47aeff' }} />
                                        <h3><a href>Amplop Digital</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        <i className="bi bi-envelope-heart" style={{ color: '#47aeff' }} />
                                        <i class='bx bx-message-alt-edit' style={{ color: 'rgb(225, 69, 95)' }}></i>
                                        <h3><a href>Unlimited Edit</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        {/* <i className="bi bi-envelope-heart"  /> */}
                                        <i class='bx bx-broadcast' style={{ color: '#47aeff' }}></i>
                                        <h3><a href>Live Streaming</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        {/* <i className="bi bi-envelope-heart" style={{ color: '#47aeff' }} /> */}
                                        <i class='bx bx-book-open' style={{ color: 'rgb(225, 69, 95)' }}></i>
                                        <h3><a href>RSVP</a></h3>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 mt-4">
                                    <div className="icon-box">
                                        {/* <i className="bi bi-envelope-heart" style={{ color: '#47aeff' }} /> */}
                                        <i class='bx bx-info-circle' style={{ color: '#47aeff' }} ></i>
                                        <h3><a href>Informasi Acara</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Features Section */}
                    {/* ======= Testimonials Section ======= */}
                    <section id="testi" className="testimonials section-bg">
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Testimonials</h2>
                                <p>Apa kata mereka tentang pelayanan KONDANGIN.ID ?</p>
                            </div>




                            <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="testimonial-wrap">
                                            <div className="testimonial-item">
                                                <img src="assets/img/testimonials/silver.jpg" className="testimonial-img" alt />
                                                <h3>Desta & Silvi</h3>
                                                <h4>Manager Operasional Daihatsu</h4>
                                                <p>
                                                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                    Pelayanan ramah, cepat, dan berani saya bilang ini yg terbaik.
                                                    Sempet bingung waktu milih mau pakai jasa siapa untuk undangan online, dan akhirnya kecantol banget sama desain dan contoh" undangan online dari KONDANGIN.ID ini.
                                                    Uda siap"in semuanya dari 3 hari sebelum pesen, dan saat apply pun sepertinya itu malam jam 23.00 WITA, ga nyangka dong karena sempat bingung, chat admin, dan jam malam pun masih ngebales whatsapp saya. Apply plus transfer tengah malem, eeh besok paginya kelar dong....ga nyangka, ditinggal tidur doang uda kelar hahaha
                                                    Dengan segala revisi yang aku bilang pelan", dan ternyata KLOP laah undangannya, suka banget laah pokoknya! TERBAIKKKK
                                                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                                                </p>
                                            </div>
                                        </div>
                                    </div>{/* End testimonial item */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-wrap">
                                            <div className="testimonial-item">
                                                <img src="assets/img/testimonials/a.jpg" className="testimonial-img" alt />
                                                <h3>Sara Wilsson</h3>
                                                <h4>Designer</h4>
                                                <p>
                                                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                    Sebelumnya gak ada bayangan sama sekali mau buat undangan online dimana. Dan akhirnya direferensikan sama temen dan coba hub adminnya Acarakami. Adminnya fast respond, ramah, sabar, mau menerima masukan dan sabar menerima requestan dari kami. Pilihan designnya juga banyak dan keren2. Sempet bikin kami bingung mau memilih yang mana hehe. Hasilnya bagus, cepet dan kreatif. Astungkara semakin sukses ya KONDANGIN.ID. Terima kasih atas bantuannya. Rahajeng
                                                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                                                </p>
                                            </div>
                                        </div>
                                    </div>{/* End testimonial item */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-wrap">
                                            <div className="testimonial-item">
                                                <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt />
                                                <h3>Jena Karlis</h3>
                                                <h4>Store Owner</h4>
                                                <p>
                                                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                                                </p>
                                            </div>
                                        </div>
                                    </div>{/* End testimonial item */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-wrap">
                                            <div className="testimonial-item">
                                                <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt />
                                                <h3>Matt Brandon</h3>
                                                <h4>Freelancer</h4>
                                                <p>
                                                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                                                </p>
                                            </div>
                                        </div>
                                    </div>{/* End testimonial item */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-wrap">
                                            <div className="testimonial-item">
                                                <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt />
                                                <h3>John Larson</h3>
                                                <h4>Entrepreneur</h4>
                                                <p>
                                                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                                                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                                                </p>
                                            </div>
                                        </div>
                                    </div>{/* End testimonial item */}
                                </div>
                                <div className="swiper-pagination" />
                            </div>
                        </div>
                    </section>{/* End Testimonials Section */}
                    {/* ======= Portfolio Section ======= */}
                    <section id="paket" className="portfolio">
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Pilihan Paket</h2>
                                <p>Pasangan Berbahagia Yang Merayakannya Bersama Kami</p><br />
                            </div>
                            <div className="row" data-aos="fade-up" data-aos-delay={200}>
                                <div className="col-lg-12 d-flex justify-content-center">
                                    <ul id="portfolio-flters">
                                        <li data-filter="*" className="filter-active">Semua Paket</li>
                                        <li data-filter=".filter-app">Paket Bronze</li>
                                        <li data-filter=".filter-card">Paket Silver</li>
                                        <li data-filter=".filter-web">Paket Diamond</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={400}>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/bronze/a.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Bronze Satu</h4>
                                            <p>Preview</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/bronze/a.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus" /></a>
                                                <a href="https://hi.ngantenstory.com/bronze-1/?to=Calon+Nganten" title="More Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/bronze/Bronze2.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Bronze Dua</h4>
                                            <p>Preview</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/bronze/Bronze2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
                                                <a href="https://hi.ngantenstory.com/bronze-2/?to=Calon+Nganten" title="More Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/bronze/Bronze3.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Bronze Tiga</h4>
                                            <p>Preview</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/bronze/Bronze3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus" /></a>
                                                <a href="https://hi.ngantenstory.com/bronze-4/?to=Calon+Nganten" title="More Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/silver/silver1.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Silver Satu</h4>
                                            <p>Preview</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/silver/silver1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus" /></a>
                                                <a href="https://hi.ngantenstory.com/silver-1/?to=Calon+Nganten" title="More Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/silver/silver2.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Silver Dua</h4>
                                            <p>Preview</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/silver/silver2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus" /></a>
                                                <a href="https://hi.ngantenstory.com/silver-2/?to=Calon+Nganten" title="More Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/silver/silver3.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Silver Tiga</h4>
                                            <p>Preview</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/silver/silver3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus" /></a>
                                                <a href="hhttps://hi.ngantenstory.com/silver-3/?to=Calon+Nganten" title="More Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/gold/gold1.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Gold Satu</h4>
                                            <p>Preview</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/gold/gold1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus" /></a>
                                                <a href="https://hi.ngantenstory.com/gold-2/?to=Calon+Nganten" title="More Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/gold/gold2.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Gold Dua</h4>
                                            <p>Preview</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/gold/gold2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus" /></a>
                                                <a href="https://hi.ngantenstory.com/gold-4/?to=Calon+Nganten" title="More Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/gold/gold3.jpg" className="img-fluid" alt />
                                        <div className="portfolio-info">
                                            <h4>Gold Tiga</h4>
                                            <p>Preview</p>
                                            <div className="portfolio-links">
                                                <a href="assets/img/gold/gold3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
                                                <a href="https://hi.ngantenstory.com/gold-3/?to=Calon+Nganten" title="More Details"><i className="bx bx-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Portfolio Section */}
                    {/* ======= Team Section ======= */}
                    {/* <section id="team" class="team section-bg">
<div class="container">

  <div class="section-title" data-aos="fade-up">
    <h2>Team</h2>
    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
  </div>

  <div class="row">

    <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
      <div class="member" data-aos="fade-up" data-aos-delay="100">
        <div class="member-img">
          <img src="assets/img/team/team-1.jpg" class="img-fluid" alt="">
          <div class="social">
            <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="member-info">
          <h4>Walter White</h4>
          <span>Chief Executive Officer</span>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
      <div class="member" data-aos="fade-up" data-aos-delay="200">
        <div class="member-img">
          <img src="assets/img/team/team-2.jpg" class="img-fluid" alt="">
          <div class="social">
            <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="member-info">
          <h4>Sarah Jhonson</h4>
          <span>Product Manager</span>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
      <div class="member" data-aos="fade-up" data-aos-delay="300">
        <div class="member-img">
          <img src="assets/img/team/team-3.jpg" class="img-fluid" alt="">
          <div class="social">
            <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="member-info">
          <h4>William Anderson</h4>
          <span>CTO</span>
        </div>
      </div>
    </div>

    <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
      <div class="member" data-aos="fade-up" data-aos-delay="400">
        <div class="member-img">
          <img src="assets/img/team/team-4.jpg" class="img-fluid" alt="">
          <div class="social">
            <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="member-info">
          <h4>Amanda Jepson</h4>
          <span>Accountant</span>
        </div>
      </div>
    </div>

  </div>

</div>
    </section> */}
                    {/* End Team Section */}
                    {/* ======= Pricing Section ======= */}
                    <section id="harga" className="pricing">
                        <div className="container">
                            <div className="section-title">
                                <h2>Harga</h2>
                                <p>Maksimalkan Kebahagianmu Dengan Harga Pilihanmu</p><br />
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="box recommended" data-aos="zoom-in-right" data-aos-delay={200}>
                                        <h3>Paket Promo Prelaunch</h3>
                                        <h4><sup>Rp.</sup><b style={{ textDecorationLine: 'line-through' }}>199.000</b> </h4>
                                        <h4><sup>Rp.</sup>130.000</h4>
                                        <ul>
                                            <li>Quotes</li>
                                            <li>Informasi Acara</li>
                                            <li>Navigasi Lokasi</li>
                                            <li>Profile Pasangan</li>
                                            <li>Countdown Timer</li>
                                            <li>Max 5 Foto Gallery</li>
                                            <li>Wedding Gift</li>
                                            <li>Ucapan</li>
                                            <li>3x Edit</li>
                                            <li>Background Music</li>
                                            <li>1 Video</li>
                                        </ul>
                                        <div className="btn-wrap">
                                            <a href="#" className="btn-buy">Pesan Sekarang</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                                    <div className="box" data-aos="zoom-in" data-aos-delay={100}>
                                        <h3>Premium</h3>
                                        <h4><sup>Rp.</sup>220.000</h4>
                                        <ul>
                                            <li>Quotes</li>
                                            <li>Informasi Acara</li>
                                            <li>Navigasi Lokasi</li>
                                            <li>Profile Pasangan</li>
                                            <li>Countdown Timer</li>
                                            <li>Max 10 Foto Gallery</li>
                                            <li>Wedding Gift</li>
                                            <li>Ucapan</li>
                                            <li>Add to google calender</li>
                                            <li>Unlimited Edit</li>
                                            <li>Background Music</li>
                                            <li>2 Video</li>
                                            <li>Love Story</li>
                                            <li>RSVP</li>
                                        </ul>
                                        <div className="btn-wrap">
                                            <a role='link' className="btn-buy" aria-disabled={true}>Coming Soon</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                    <div className="box" data-aos="zoom-in-left" data-aos-delay={200}>
                                        <h3>Platinum</h3>
                                        <h4><sup>Rp.</sup>280.000</h4>
                                        <ul>
                                            <li>Quotes</li>
                                            <li>Informasi Acara</li>
                                            <li>Navigasi Lokasi</li>
                                            <li>Profile Pasangan</li>
                                            <li>Countdown Timer</li>
                                            <li>Max 30 Foto Gallery</li>
                                            <li>Wedding Gift</li>
                                            <li>Ucapan</li>
                                            <li>Add to google calender</li>
                                            <li>Unlimited Edit</li>
                                            <li>Background Music Custom</li>
                                            <li>3 Video</li>
                                            <li>Love Story</li>
                                            <li>RSVP</li>
                                            <li>Live Streaming</li>
                                        </ul>
                                        <div className="btn-wrap">
                                            <a role='link' className="btn-buy" aria-disabled={true}>Coming Soon</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End Pricing Section */}
                    {/* ======= F.A.Q Section ======= */}
                    <section id="faq" className="faq">
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>Frequently Asked Questions</h2>
                            </div>
                            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                                <div className="col-lg-5">
                                    <i className="ri-question-line" />
                                    <h4>Bagaimana cara buat undangan digital?</h4>
                                </div>
                                <div className="col-lg-7">
                                    <p>
                                        Pilih paket yang diinginkan, klik pesan, masukkan data dirimu &amp; pilih metode pembayarannya. Setelah pembayaran terverifikasi, kamu dapat mulai memasukkan data dirimu &amp; pasangan, data acara, foto-foto dan undanganmu langsung jadi dan dapat disebarkan.
                                    </p>
                                </div>
                            </div>{/* End F.A.Q Item*/}
                            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
                                <div className="col-lg-5">
                                    <i className="ri-question-line" />
                                    <h4>Berapa Lama Proses Pembuatannya</h4>
                                </div>
                                <div className="col-lg-7">
                                    <p>
                                        Untuk pembuatan undangan digital hanya membutuhkan waktu sekitar 10 menit untuk mengisi data-data yang diperlukan dan undangan digital kamu sudah siap untuk disebarkan.
                                    </p>
                                </div>
                            </div>{/* End F.A.Q Item*/}
                            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={300}>
                                <div className="col-lg-5">
                                    <i className="ri-question-line" />
                                    <h4>Apakah data yang sudah dimasukkan bisa diubah kembali?</h4>
                                </div>
                                <div className="col-lg-7">
                                    <p>
                                        Ya, data yang sudah kamu masukkan dapat kamu ubah sewaktu-waktu tanpa ada batasan.
                                    </p>
                                </div>
                            </div>{/* End F.A.Q Item*/}
                            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={400}>
                                <div className="col-lg-5">
                                    <i className="ri-question-line" />
                                    <h4>Apakah bisa di bantu untuk pengisian informasi dan kelengkapan undangan?</h4>
                                </div>
                                <div className="col-lg-7">
                                    <p>
                                        Kami senantiasa siap membantu kamu apabila ada kesulitan dalam pengisian data/informasi undangan. Silahkan hubungi kami melalui WhatsApp apabila membutuhkan bantuan.
                                    </p>
                                </div>
                            </div>{/* End F.A.Q Item*/}
                            <div className="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={500}>
                                <div className="col-lg-5">
                                    <i className="ri-question-line" />
                                    <h4>Apa yang dimaksud Garansi 7 Hari Uang Kembali?</h4>
                                </div>
                                <div className="col-lg-7">
                                    <p>
                                        Jika dalam 7 hari sejak pendaftaran kamu merasa bahwa KONDANGIN.ID kurang sesuai dengan kebutuhanmu atau kamu kurang puas, kami akan mengembalikan uangmu 100%, cukup dengan WhatsApp tim kami.
                                    </p>
                                </div>
                            </div>{/* End F.A.Q Item*/}
                        </div>
                    </section>{/* End F.A.Q Section */}
                    {/* ======= Contact Section ======= */}
                    <section id="kontak" className="contact">
                        <div className="container">
                            <div className="section-title" data-aos="fade-up">
                                <h2>kontak kami</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                                    <div className="contact-about">
                                        <h3>KONDANGIN.ID</h3>
                                        <p>KONDANGIN.ID merupakan sebuah Platform Digitalisasi Pernikahan yang membuat pernikahan kamu menjadi lebih bermakna dan Up to Date dengan berbagai macam layanan yang disediakan seperti Web-Invitation, E-Guestbook &amp; RSVP, E-Angpao, Dashboard User dan Cinematic Wedding Live Streaming yang bisa kamu dapatkan di dalam satu paket.</p>
                                        {/* <div className="social-links">
                                            <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                                            <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                                            <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                                            <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="info">
                                        <div>
                                            <i className="ri-map-pin-line" />
                                            <p>Jakarta Pusat<br /></p>
                                        </div>
                                        <div>
                                            <i className="ri-mail-send-line" />
                                            <p>-</p>
                                        </div>
                                        <div>
                                            <i className="ri-phone-line" />
                                            <p>0853-2641-3810 <br /> 0896-7904-8560</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay={300}>
                                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                                        </div>
                                        <div className="my-3">
                                            <div className="loading">Loading</div>
                                            <div className="error-message" />
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div className="text-center"><button type="submit">Send Message</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <a href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="float" target="_blank">
                            <i class="fa fa-whatsapp my-float"></i>
                        </a>
                    </section>{/* End Contact Section */}

                </main>{/* End #main */}
                {/* ======= Footer ======= */}
                <footer id="footer">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-6 text-lg-left text-center">
                                <div className="copyright">
                                    © Copyright <strong>KONDANGAN.ID</strong>. All Rights Reserved
                                </div>
                                <div className="credits">
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>{/* End Footer */}
                <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
                {/* Modal Harga */}
                <div className="modal fade" id="hargaku" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Daftar Harga</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                {/* ======= Pricing Section ======= */}
                                <section id="pricing" className="pricing">
                                    <div className="container">
                                        <div className="row">
                                            <div className="section-title">
                                                <h2>Harga</h2><br /><br />
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="box" data-aos="zoom-in-right" data-aos-delay={200}>
                                                    <h3>Free</h3>
                                                    <h4><sup>$</sup>0<span> / month</span></h4>
                                                    <ul>
                                                        <li>Aida dere</li>
                                                        <li>Nec feugiat nisl</li>
                                                        <li>Nulla at volutpat dola</li>
                                                        <li className="na">Pharetra massa</li>
                                                        <li className="na">Massa ultricies mi</li>
                                                    </ul>
                                                    <div className="btn-wrap">
                                                        <a href="#" className="btn-buy">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                                                <div className="box recommended" data-aos="zoom-in" data-aos-delay={100}>
                                                    <h3>Business</h3>
                                                    <h4><sup>$</sup>19<span> / month</span></h4>
                                                    <ul>
                                                        <li>Aida dere</li>
                                                        <li>Nec feugiat nisl</li>
                                                        <li>Nulla at volutpat dola</li>
                                                        <li>Pharetra massa</li>
                                                        <li className="na">Massa ultricies mi</li>
                                                    </ul>
                                                    <div className="btn-wrap">
                                                        <a href="#" className="btn-buy">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                                                <div className="box" data-aos="zoom-in-left" data-aos-delay={200}>
                                                    <h3>Developer</h3>
                                                    <h4><sup>$</sup>29<span> / month</span></h4>
                                                    <ul>
                                                        <li>Aida dere</li>
                                                        <li>Nec feugiat nisl</li>
                                                        <li>Nulla at volutpat dola</li>
                                                        <li>Pharetra massa</li>
                                                        <li>Massa ultricies mi</li>
                                                    </ul>
                                                    <div className="btn-wrap">
                                                        <a href="#" className="btn-buy">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>{/* End Pricing Section */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Understood</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal Order Now */}
                {/* Modal */}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Pilih Momenmu</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <table className="table table-bordered border-info">
                                    <tbody><tr className="table-info">
                                        <th scope="col" className="table-info text-center">FITUR</th>
                                        <th scope="col" className="table-info text-center">PAKET BASIC</th>
                                        <th scope="col" className="table-info text-center">PAKET PREMIUM</th>
                                    </tr>
                                    </tbody><tbody>
                                        <tr>
                                            <td className="text-center">Include Basic</td>
                                            <td className="text-center"><i className="bi bi-check-lg" /></td>
                                            <td className="text-center"><i className="bi bi-check-lg" /></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">Preset/Design standart Quotes</td>
                                            <td className="text-center"><i className="bi bi-check-lg" /></td>
                                            <td className="text-center"><i className="bi bi-check-lg" /></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">Amplop digital</td>
                                            <td className="text-center"><i className="bi bi-x-lg" /></td>
                                            <td className="text-center"><i className="bi bi-check-lg" /></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">Buku Tamu</td>
                                            <td className="text-center"><i className="bi bi-x-lg" /></td>
                                            <td className="text-center"><i className="bi bi-check-lg" /></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">Background Music (list only)</td>
                                            <td className="text-center"><i className="bi bi-x-lg" /></td>
                                            <td className="text-center"><i className="bi bi-check-lg" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-success">Pilih</button>
                            </div>
                        </div>
                    </div>
                </div></div>

        </div>
    )
}

export default Home


if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
