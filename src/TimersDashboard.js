import React from 'react'
import EditableTimerList from './EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm'
import { v4 } from 'uuid'

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
  }
  render(){
    return(
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList 
            timers={this.state.timers}
          />
          <ToggleableTimerForm
            isOpen={true}
          />
        </div>
      </div>
    )
  }
}

export default TimersDashboard
