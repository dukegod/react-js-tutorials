import React from 'react'
import Myrefs from './index';

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
        <Myrefs ref={ 
          (rf)=>{
            this.parentRf = rf
          }
        }></Myrefs>
      </div>
    )
  }
}