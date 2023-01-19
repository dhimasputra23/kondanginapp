import React from 'react';
import ReactDOM from 'react-dom';

const Aboutme = () => {
  return (
    <div>
 <main id="main">
  {/* ======= Breadcrumbs Section ======= */}
  <section className="breadcrumbs">
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="section-title" data-aos="fade-up">
          <h2>Tentang Kami</h2>
        </div>
      </div>
    </div>
  </section>{/* End Breadcrumbs Section */}
  {/* ======= About Us Section ======= */}
  <section id="about" className="about">
    <div className="container">
      <div className="row content">
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={150}>
          <p>
            KONDANGIN.ID merupakan sebuah Platform Digitalisasi Pernikahan yang membuat pernikahan kamu menjadi lebih bermakna dan Up to Date dengan berbagai macam layanan yang disediakan seperti Web-Invitation, E-Guestbook &amp; RSVP, E-Angpao, Dashboard User dan Cinematic Wedding Live Streaming yang bisa kamu dapatkan di dalam satu paket
          </p>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay={300}>
          <ul>
            <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
            <li><i className="ri-check-double-line" /> Duis aute irure dolor in reprehenderit in voluptate velit</li>
            <li><i className="ri-check-double-line" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
          </ul>
          {/* <a href="#" class="btn-learn-more">Learn More</a> */}
        </div>
      </div>
    </div>
  </section>{/* End About Us Section */}
  {/* ======= Counts Section ======= */}
  <section id="counts" className="counts">
    <div className="container">
      <div className="row">
        <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay={150}>
          <img src="/assets/img/counts-img.svg" alt className="img-fluid" />
        </div>
        <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay={300}>
          <div className="content d-flex flex-column justify-content-center">
            <div className="row">
              <div className="col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-emoji-smile" />
                  <span data-purecounter-start={0} data-purecounter-end={65} data-purecounter-duration={1} className="purecounter" />
                  <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                </div>
              </div>
              <div className="col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-journal-richtext" />
                  <span data-purecounter-start={0} data-purecounter-end={85} data-purecounter-duration={1} className="purecounter" />
                  <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                </div>
              </div>
              <div className="col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-clock" />
                  <span data-purecounter-start={0} data-purecounter-end={18} data-purecounter-duration={1} className="purecounter" />
                  <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                </div>
              </div>
              <div className="col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-award" />
                  <span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={1} className="purecounter" />
                  <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                </div>
              </div>
            </div>
          </div>{/* End .content*/}
        </div>
      </div>
    </div>
  </section>{/* End Counts Section */}
</main>{/* End #main */}

    </div>
  )
}

export default Aboutme

if (document.getElementById('aboutMe')) {
    ReactDOM.render(<Aboutme />, document.getElementById('aboutMe'));
}