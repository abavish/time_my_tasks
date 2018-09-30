import React from 'react'
import TimerForm from './TimerForm'

class ToggleableTimerForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      isOpen: false,
    }

    this.handleFormOpen = this.handleFormOpen.bind(this)
  }

  handleFormOpen() {
    this.setState({ isOpen: true })
  }
  render(){
    if (this.state.isOpen){
      return(
        <TimerForm />
      )
    } else{
      return(
        <div className='ui basic content center aligned segment'>
          <button className='ui basic button icon'
            onClick={this.handleFormOpen}
          >
            <i className='plus icon' />
          </button>
        </div>
      )
    }
  }
}

export default ToggleableTimerForm
