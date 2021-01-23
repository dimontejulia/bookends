import React from "react";
import Carousel from "../Carousel";
import "../../index.scss";

export default function Index(props) {
  const { carouselBooks } = props;
  // Object of arrays (key is category)

  const parsedList =
    //Map out Object keys (Title of carousel)
    carouselBooks &&
    Object.keys(carouselBooks).map((category) => (
      // Build component w. book list key value
      <Carousel
        carouselTitle={carouselBooks[category]["catTitle"]}
        carouselBooks={carouselBooks[category]["books"]}
        setUserBooks={props.setUserBooks}
        newBook={props.newBook}
        show={props.show}
        setShow={props.setShow}
        clubs={props.clubs}
        setClubBook={props.setClubBook}
      />
    ));
  return (
    <div>
      <section className="main__header">
        <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      {parsedList}
    </div>
  );
}
