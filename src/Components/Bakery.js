import React from 'react'
import TypesList from './TypesList'
import Types from './Bakery-Data'
import '../styles/Bakery.css'

function Bakery() {
    return (
        <div className='BAkery-body'>
<div className='Bakery-intro'>

<h2>Enjoy our daily offers</h2>
<p>Buy 3, get 1 free</p>
<p> Buy 5, get 2 free</p>
<p>By 7, get 3 free</p>
<div className='discount' color="white">
<p className='copounp'>Use the code "BAN"<br></br> to get 20% discount</p>
</div>
</div>


<div className='cards-wrapper'>
<h3>Types</h3>
        <div className="Bakery-cards">
           
        {Types.map((item, id) => (
          <TypesList
            src={item.src}
            price={item.price}
            key={id}
            title={item.title}
            id={item.id}
          />
        ))}
      </div></div></div>
    )
}

export default Bakery
