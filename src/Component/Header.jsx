import React from 'react'
import propTypes from 'prop-types'

const Header=(props)=> {
  return (
    <div>
      <h1 style={{textShadow:"1px -4px lightgrey"}}>{props.name}</h1>
    </div>
  )
}

Header.propTypes={

    name:propTypes.string   
}

Header.defaultProps={
    name:"no-movie"
}
export default Header
