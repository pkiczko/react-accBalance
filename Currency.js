import React from 'react';
import stone from './lil_stone.png';
import shell from './lil_shell2.png';

const Currency = (props) => {
let {src, clickz} = props;
let source;
if (src==='stone') {
  source = stone;
}
else {
  source = shell
}
return <img src={source} alt={src} onClick={clickz} />

};

export default Currency;
