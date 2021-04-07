import React,{ useState } from "react";

import { ReactComponent as Arrow } from "../assets/icons/arrow.svg";

export function CartBtnMobile({onToggle}) {

  return (
    <div className="cart-toggle-mobile" >
      <div className="img-container">
        <Arrow/>
      </div>
      <div className="white-block">סל קניות</div>
    </div>
  );
}
// "מינימום הזמנה: 50 ש”ח    |   
//  משלוחים יוצאים בימי שישי לאזור גוש דן והסביבה   |    
//  להזמנות מיוחדות ובירורים התקשרו: 054-569-0088"