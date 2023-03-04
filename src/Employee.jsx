import React from 'react'
import propTypes from 'prop-types'

const Employee =({name,age})=> {
  return (
    <div>
      {/* <h1>{props.name}</h1>
      <h1>{props.age}</h1> */}

      <h1>{name}</h1>
      <h1>{age}</h1>
    </div>
  )
}

Employee.propTypes={

    name:propTypes.string,
    age:propTypes.number
}

Employee.defaultProps ={

    name:"Name",
    age:0
}

export default Employee
