import React from 'react'
import { NavLink } from "react-router-dom";

export  function TotalAndNextAction({total}) {
  function handleClick(ev){
    if (total===0) ev.preventDefault();
  }
    return (
        <section className="total-next-action">
        <h3>סך הכל בסל הקניות</h3>
        <div className="total">
          <div>סך הכל:</div>
          <div>₪ {total}</div>
        </div>
        <NavLink onClick={(ev)=>handleClick(ev)} to={{ pathname: "/checkout", state: { fromNavBar: false } }}>
          <div className={`checkout-btn ${total===0?'disabled':''}`}>
            <span></span>
            לרכישה
            </div>
        </NavLink>
      </section>
    )
}
