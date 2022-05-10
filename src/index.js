import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const info ={
  image : 'https://www.w3schools.com/images/w3lynx_200.png',
  title : 'Ashes',
  text  : 'From The Ashes We Shall Rise',

}
function Poster({image, title ,text}){
    return(
      <div className='container'>
        <div className='image'>
          <img src= {image} alt='code'/>
        </div>
        <div className='title'>{title}</div>
        <div className='text'>{text}</div>
      </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Poster image={info.image}
            title={info.title}
            text={info.text}/>
  </div>
);


