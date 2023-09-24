import React, { useEffect, useState } from "react";
import axios from "axios";

function NewsAPI() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=7e475d1f69804e9596c1462a7b36f68e"
      )
      .then((res) => {
        console.log(res.data.articles);
        setNews(res.data.articles.slice(0, 10));
        console.log("SONUÇ", news);
      });
  }, []);

  return (
    <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to="6"
          aria-label="Slide 7"
        ></button>
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to="7"
          aria-label="Slide 8"
        ></button>
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to="8"
          aria-label="Slide 9"
        ></button>
        <button
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide-to="9"
          aria-label="Slide 10"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active slider-item">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            className="d-block w-100 slider-img"
            alt="Slide 1"
          />
          <div className="carousel-caption top-0 mt-4">
            <p className="mt-5 fs-6 text-uppercase">{news[0]?.author}</p>
            <h1 className="display-6 fw-normal text-capitalize">
              {news[0]?.title}
            </h1>
            <button className="btn btn-primary px-4 py-2 fs-5 mt-5">
              <a href={news[0]?.url} target="blank">
                Haberi İncele
              </a>
            </button>
          </div>
        </div>

        <div className="carousel-item active slider-item">
          <img
            src="https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1986&q=80"
            className="d-block w-100 slider-img"
            alt="Slide 2"
          />
          <div className="carousel-caption top-0 mt-4">
            <p className="mt-5 fs-6 text-uppercase">{news[1]?.author}</p>
            <h1 className="display-6 fw-normal text-capitalize">
              {news[1]?.title}
            </h1>
            <button className="btn btn-primary px-4 py-2 fs-5 mt-5">
              <a href={news[1]?.url} target="blank">
                Haberi İncele
              </a>
            </button>
          </div>
        </div>
        <div className="carousel-item active slider-item">
          <img
            src="https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            className="d-block w-100 slider-img"
            alt="Slide 3"
          />
          <div className="carousel-caption top-0 mt-4">
            <p className="mt-5 fs-6 text-uppercase">{news[2]?.author}</p>
            <h1 className="display-6 fw-normal text-capitalize">
              {news[2]?.title}
            </h1>
            <button className="btn btn-primary px-4 py-2 fs-5 mt-5">
              <a href={news[2]?.url} target="blank">
                Haberi İncele
              </a>
            </button>
          </div>
        </div>
        <div className="carousel-item active slider-item">
          <img
            src="https://images.unsplash.com/photo-1576400883215-7083980b6193?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80"
            className="d-block w-100 slider-img"
            alt="Slide 4"
          />
          <div className="carousel-caption top-0 mt-4">
            <p className="mt-5 fs-6 text-uppercase">{news[3]?.author}</p>
            <h1 className="display-6 fw-normal text-capitalize">
              {news[3]?.title}
            </h1>
            <button className="btn btn-primary px-4 py-2 fs-5 mt-5">
              <a href={news[3]?.url} target="blank">
                Haberi İncele
              </a>
            </button>
          </div>
        </div>
        <div className="carousel-item active slider-item">
          <img
            src="https://images.unsplash.com/photo-1626908013351-800ddd734b8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80"
            className="d-block w-100 slider-img"
            alt="Slide 5"
          />
          <div className="carousel-caption top-0 mt-4">
            <p className="mt-5 fs-6 text-uppercase">{news[4]?.author}</p>
            <h1 className="display-6 fw-normal text-capitalize">
              {news[4]?.title}
            </h1>
            <button className="btn btn-primary px-4 py-2 fs-5 mt-5">
              <a href={news[4]?.url} target="blank">
                Haberi İncele
              </a>
            </button>
          </div>
        </div>
        <div className="carousel-item active slider-item">
          <img
            src="https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            className="d-block w-100 slider-img"
            alt="Slide 6"
          />
          <div className="carousel-caption top-0 mt-4">
            <p className="mt-5 fs-6 text-uppercase">{news[5]?.author}</p>
            <h1 className="display-6 fw-normal text-capitalize">
              {news[5]?.title}
            </h1>
            <button className="btn btn-primary px-4 py-2 fs-5 mt-5">
              <a href={news[5]?.url} target="blank">
                Haberi İncele
              </a>
            </button>
          </div>
        </div>
        <div className="carousel-item active slider-item">
          <img
            src="https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            className="d-block w-100 slider-img"
            alt="Slide 7"
          />
          <div className="carousel-caption top-0 mt-4">
            <p className="mt-5 fs-6 text-uppercase">{news[6]?.author}</p>
            <h1 className="display-6 fw-normal text-capitalize">
              {news[6]?.title}
            </h1>
            <button className="btn btn-primary px-4 py-2 fs-5 mt-5">
              <a href={news[6]?.url} target="blank">
                Haberi İncele
              </a>
            </button>
          </div>
        </div>
        <div className="carousel-item active slider-item">
          <img
            src="https://images.unsplash.com/photo-1556691421-cf15fe27a0b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            className="d-block w-100 slider-img"
            alt="Slide 8"
          />
          <div className="carousel-caption top-0 mt-4">
            <p className="mt-5 fs-6 text-uppercase">{news[7]?.author}</p>
            <h1 className="display-6 fw-normal text-capitalize">
              {news[7]?.title}
            </h1>
            <button className="btn btn-primary px-4 py-2 fs-5 mt-5">
              <a href={news[7]?.url} target="blank">
                Haberi İncele
              </a>
            </button>
          </div>
        </div>
        <div className="carousel-item active slider-item">
          <img
            src="https://images.unsplash.com/photo-1562575214-da9fcf59b907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80"
            className="d-block w-100 slider-img"
            alt="Slide 9"
          />
          <div className="carousel-caption top-0 mt-4">
            <p className="mt-5 fs-6 text-uppercase">{news[8]?.author}</p>
            <h1 className="display-6 fw-normal text-capitalize">
              {news[8]?.title}
            </h1>
            <button className="btn btn-primary px-4 py-2 fs-5 mt-5">
              <a href={news[8]?.url} target="blank">
                Haberi İncele
              </a>
            </button>
          </div>
        </div>
        <div className="carousel-item active slider-item">
          <img
            src="https://images.unsplash.com/photo-1490971588422-52f6262a237a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            className="d-block w-100 slider-img"
            alt="Slide 10"
          />
          <div className="carousel-caption top-0 mt-4">
            <p className="mt-5 fs-6 text-uppercase">{news[9]?.author}</p>
            <h1 className="display-6 fw-normal text-capitalize">
              {news[9]?.title}
            </h1>
            <button className="btn btn-primary px-4 py-2 fs-5 mt-5">
              <a href={news[9]?.url} target="blank">
                Haberi İncele
              </a>
            </button>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#hero-carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#hero-carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default NewsAPI;
