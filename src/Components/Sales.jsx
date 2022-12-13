import React from 'react'
import Title from '../Utilis/Title'
import Item from '../Utilis/Item'
const Sales = ({endpoint}) => {
  return (
    <div>
            <Title title = {endpoint.title}/>
            <Item items = {endpoint.items}/> ; 
    </div>
  )
}

export default Sales
