import React, {useContext} from 'react'
import { goods } from '../pictures'
import { ItemsContex } from '../../ProductContex/ItemsContex'
import ChartItems from './ChartItems'
import chartsty from './Chart.module.css'

const Charts = () => {
  const {  cartItems } = useContext(ItemsContex);
  return (
    <div>
      <p>Your Chart Items</p>
      <div className={chartsty.common}>
        <div className={chartsty.item}>
        {goods.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <ChartItems data={product} />
          }
        })}
      </div>
      </div>
    </div>
  )
}

export default Charts