import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushi.map(sushi => 
          <Sushi
            key={sushi.id} 
            id={sushi.id}
            name={sushi.name}
            price={sushi.price}
            image={sushi.img_url}
            eatenSushi={props.eatenSushi} 
            eatSushi={props.eatSushi}
          />
        )}
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer