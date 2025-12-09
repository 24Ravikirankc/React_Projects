import React from 'react'

function NameList() {
    const names = ['ravi', 'kiran', 'theju']
    const nameList = names.map(name=> <h2>{name}</h2>)
  return (
    <div>{nameList}
{/* {
    // names.map(name => <h2>{name}</h2>)
} */}


    </div>
  )
}

export default NameList



