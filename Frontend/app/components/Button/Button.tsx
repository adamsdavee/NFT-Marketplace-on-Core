import React from 'react'

import Style from './Button.module.css'

function Button({btnName, handleClick}: {btnName: string, handleClick: any}) {
  return (
    <div>
      <button className={Style.button} onClick={() => {}}>
        {btnName}
      </button>
    </div>
  )
}

export default Button