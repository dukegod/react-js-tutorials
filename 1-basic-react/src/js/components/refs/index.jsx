import React from 'react'
import Myrefs from './ref';

export default class ParentRefs extends React.Component{
  constructor(props) {
    super(props)
  }

  handle() {
    console.log(this.parentRf)
    this.parentRf()
  }

  render() {
    return(
      <div>
        <h2> 来自父组件的关怀 </h2>
        <Myrefs ref={ 
          (rf)=>{
            console.log(rf);
            this.parentRf = rf
          }
        }></Myrefs>
      </div>
    )
  }
}