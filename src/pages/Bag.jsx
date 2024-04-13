import React, { useEffect, useState } from 'react'
import "./Bag.css"
import ShopBagItem from '../components/ShopBagItem.jsx'
import toast, { Toaster, ToastBar } from 'react-hot-toast';


export default function Bag({games, reference}) {

  const notify = () => {

    toast.success("Check Out Successful!", {
      position: "top-right"
    });
  }

  const [total, setTotal] = useState(0)

  const handleTotalPayment = () => {
    return games
    .map(game=> game.price * (1-game.discount))
    .reduce ((accumulator, currentValue) => accumulator + currentValue, 0)
    .toFixed(2)
    
  }

  useEffect(()=>{
    setTotal(handleTotalPayment())
  }, [games])



  return (
    <section id="bag" className="bag" ref={reference}>
        <div className="container-fluid">
          <div className="row mb-3">
            <h1>Bag</h1>
          </div>
        </div>
      
        { 
          games.length === 0 ? (
            <div className="row">
            <h2>Your Bag is empty</h2>
            </div>
          ) : (
            <>
            <div className="row">
              <div className="table-responsive">
              <table className="shop-bag-table table table-borderless align-midle">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Preview</th>
                    <th scope="col">Game</th>
                    <th scope="col">Price</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                 <tbody>
                  {games.map((game, index) => (
                    <ShopBagItem index={index} key={game._id} game={game}/>
                  ))}
                 </tbody>
              </table>
              </div>
            </div>
            <div className="row d-flex justify-content-between mt-5">
              <div className="col-lg-2 d-flex align-items-center">
                  <p className="item-count">Total Items: {games.length}</p>
              </div>
              <div className="col-lg-10 d-flex justify-content-end">
                <div className="payment">
                  Total: {total}
                  <a href="#" onClick={(notify)}>
                  <Toaster>
                    
                    {(t) => (
                      <ToastBar
                        toast={t}
                        style={{
                          fontSize:15,
                          fontWeight:700,
                          ...t.style,
                          animation: t.visible ? 'custom-enter 1s ease' : 'custom-exit 1s ease',
                        }}
                        />
                      )}
                      
                   </Toaster>
                      Check Out 
                    <i className="bi bi-wallet-fill"></i></a>
                </div>
              </div>
            </div>
            
            </>
          )
        }
       
    </section>
  )
}

