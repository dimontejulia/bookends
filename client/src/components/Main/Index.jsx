import React from 'react';
import Carousel from '../Carousel';
import '../../index.scss';
import headerIllustration from './header_illustration.png';
import Button from 'react-bootstrap/Button';

export default function Index(props) {
  const { carouselBooks } = props;
  // Object of arrays (key is category)

  const parsedList =
    //Map out Object keys (Title of carousel)
    carouselBooks &&
    Object.keys(carouselBooks).map((category) => (
      // Build component w. book list key value
      <Carousel
        carouselTitle={carouselBooks[category]['catTitle']}
        carouselBooks={carouselBooks[category]['books']}
        setUserBooks={props.setUserBooks}
        newBook={props.newBook}
        show={props.show}
        setShow={props.setShow}
        clubs={props.clubs}
        setClubBook={props.setClubBook}
        user={props.user}
        setNews={props.setNews}
      />
    ));
  return (
    <div>
      <section className='main__header'>
        <div>
          <img
            className='headerIllustration'
            alt='bookends header'
            src={headerIllustration}
          />
        </div>
        <div className='wave'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
              class='shape-fill'
            ></path>
          </svg>
        </div>
      </section>
      <section className='header__tagline'>
        <div className='header__content'>
          <h1>Your Favourite Books, One Shelf</h1>
          {/* <div className="header__button_group">
            <Button className="header__individual-button" variant="primary">
              My Shelf
            </Button>
            <Button className="header__individual-button" variant="primary">
              Search Books
            </Button>
          </div> */}
        </div>
        <br />
        <svg
          width='78px'
          height='12px'
          viewBox='0 0 78 12'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
        >
          <title>Group 6</title>
          <g
            id='Page-1'
            stroke='none'
            stroke-width='1'
            fill='none'
            fill-rule='evenodd'
          >
            <g
              id='Desktop-HD'
              transform='translate(-681.000000, -579.000000)'
              fill='#1B2531'
            >
              <g id='Group-6' transform='translate(681.000000, 579.000000)'>
                <circle id='Oval' cx='39' cy='6' r='6'></circle>
                <circle id='Oval-Copy' cx='6' cy='6' r='6'></circle>
                <circle id='Oval-Copy-2' cx='72' cy='6' r='6'></circle>
              </g>
            </g>
          </g>
        </svg>
      </section>
      {parsedList}
    </div>
  );
}
