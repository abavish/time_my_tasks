import React from 'react'
import EditableTimerList from './EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm'
import { v4 } from 'uuid'
// import helpers from './helpers.js'

class TimersDashboard extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      timers: [
        {
          title: 'Practice squat',
          project: 'Gym Chores',
          id: v4(),
          elapsed: 5456099,
          runningSince: Date.now(),
        },
        {
          title: 'Bake squash',
          project: 'Kitchen Chores',
          id: v4(),
          elapsed: 1273998,
          runningSince: null,
        }
      ],
    }

    this.handleCreateFormSubmit = this.handleCreateFormSubmit.bind(this)
    this.createTimer = this.createTimer.bind(this)
  }

  handleCreateFormSubmit(timer){
    this.createTimer(timer)
  }

  createTimer(timer){
    const t = window.helpers.newTimer(timer)
    this.setState({
      timers: this.state.timers.concat(t),
    })
  }
  render(){
    // console.log(window.helpers)
    return(
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList 
            timers={this.state.timers}
          />
          <ToggleableTimerForm
            onFormSubmit={this.handleCreateFormSubmit}
          />
        </div>
      </div>
    )
  }
}

export default TimersDashboard
