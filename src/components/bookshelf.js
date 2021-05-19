import React from 'react'
import Book from './book'
import books from './book-list'

function BookShelf() {
  
  return (
    <section className='bookshelf'>
      {/* CREATING EACH BOOK OBJECT INDIVIDUALLY */}
      {/* <Book img_src="https://images-na.ssl-images-amazon.com/images/I/51VU-ask3QS._SX376_BO1,204,203,200_.jpg"
      title="Oh, The Places You'll Go"
      author="Dr. Seuss">
        <p>From soaring to high heights and seeing great sights to being left in a Lurch on a prickle-ly perch, Dr. Seuss addresses life’s ups and downs with his trademark humorous verse and whimsical illustrations.The inspiring and timeless message encourages readers to find the success that lies within, no matter what challenges they face. A perennial favorite and a perfect gift for anyone starting a new phase in their life!</p>
      </Book>
      
      <Book img_src="https://m.media-amazon.com/images/P/B08GJZDP4V.01._SCLZZZZZZZ_SX500_.jpg"
      title="Zero Fail; The Rise and Fall of the Secret Service"
      author="Carol Leonnig">
        <p>Carol Leonnig has been reporting on the Secret Service for The Washington Post for most of the last decade, bringing to light the secrets, scandals, and shortcomings that plague the agency today—from a toxic work culture to dangerously outdated equipment to the deep resentment within the ranks at key agency leaders, who put protecting the agency’s once-hallowed image before fixing its flaws. But the Secret Service wasn’t always so troubled.</p>
      </Book>

      <Book img_src="https://m.media-amazon.com/images/P/B0952DZ46D.01._SCLZZZZZZZ_SX500_.jpg"
      title="Irresistible Revolution"
      author="Matthew Lohmeier">
        <p>Irresistible Revolution is a timely and bold contribution from an active-duty Space Force lieutenant colonel who sees the impact of a neo-Marxist agenda at the ground level within our armed forces. In it, author Matthew Lohmeier provides answers to many important questions that Americans are currently asking: Is systemic racism a reality, or is much of our talk about race merely a rhetorical tool used to divide Americans? Why has the Defense Department suddenly shifted to a focus on extremism within the ranks?</p>
      </Book> */}

      {/* ITERATING THROUGH A LIST OF BOOKS USING UNIQUE KEY */}
      {/* {books.map((book) =>{
        return <Book key={book.id} book={book} />
      })}; */}

      {/* ITERATING THROUGH A LIST OF BOOKS USING INDEX */}
      {/* {books.map((book, index) =>{
        return <Book key={index} book={book} />
      })} */}

      {/* PASSING ARGUMENTS USING SPREAD OPERATOR */}
      {books.map((book) =>{
        return <Book key={book.id} {...book} />
      })};
    </section>
  );
}

export default BookShelf;