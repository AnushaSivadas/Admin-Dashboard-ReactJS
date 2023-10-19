import React from 'react'
import './Cards.css'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { AiOutlineFileDone } from 'react-icons/ai'
import { LuWallet } from 'react-icons/lu'
import { HiOutlineShoppingBag } from 'react-icons/hi'



const Cards = () => {
  return (
    <div className='cards'>
      <div class="card">
        <AiOutlineDollarCircle className="card-icon" />
        <div className="card-details">
          <span>Earning</span>
          <p>&#36;198k</p>
          <div><span className='green'>&#8593; 37.8%</span> this month</div>
        </div>
      </div>
      <div class="card">
        <AiOutlineFileDone className="card-icon" />
        <div className="card-details">
          <span>Orders</span>
          <p>&#36;2.4k</p>
          <div><span className='red'>&#8595; 2%</span> this month</div>
        </div>
      </div>
      <div class="card">
        <LuWallet className="card-icon" />
        <div className="card-details">
          <span>Balance</span>
          <p>&#36;2.4k</p>
          <div><span className='red'>&#8595; 2%</span> this month</div>
        </div>
      </div>
      <div class="card">
        <HiOutlineShoppingBag className="card-icon" />
        <div className="card-details">
          <span>Total Sales</span>
          <p>&#36;89k</p>
          <div><span className='green'>&#8593; 11%</span> this month</div>
        </div>
      </div>

    </div>
  )
}

export default Cards