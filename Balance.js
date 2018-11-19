import React from 'react';
import Currency from './Currency.js';

const Balance = (props) => {

  let {into, out} = props;
  console.log('props', props);
  let total = 0;
  for (let i=0; i< into.length; i++) {
    if(into[i].currency === 'stone') {
      total+= into[i].amount/10;
    }
    else {
      total+= into[i].amount;
    }
  }
  for (let j=0; j< out.length; j++) {
    if(out[j].currency === 'stone') {
      total-= out[j].amount/10;
    }
    else {
      total-= out[j].amount;
    }
  }
if (-1<total && total<1) { return <div className='balance'><h3>Balance</h3>
 {Math.round((total % 1)*10)} <Currency src='stone' /></div>; }

else
  {console.log('total', total);
  return <div className='balance'><h3>Balance</h3>{Math.round(total)} <Currency src='shell' /> {Math.round((total % 1)*10)} <Currency src='stone' /></div>;
}
};


export default Balance;
