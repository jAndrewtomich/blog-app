import React from 'react'

const Book = (props) => {
  const { img_src, title, author, desc } = props
  //const children = props.children

  //attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
  }
  const mouseOverHandler = () => {
    console.log('mouseover!');
  }
  const complexExample = (author) => {
    console.log(author);
  }

  return (
    <article className='book'>
      <img src={ img_src}  alt={title}/>
      <h1 onClick={()=> console.log(title)}>{ title }</h1>
      <h4>{ author }</h4>
      <h6>{ desc }</h6>
      <button className="btn btn-outline-primary" type="button" onClick={clickHandler} onMouseOver={mouseOverHandler}>
        reference example
      </button>
      <button className="btn btn-outline-primary" type="button" onClick={()=>complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;