import React from 'react'

class TimerForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      title: this.props.title || '',
      project: this.props.project || '',
    }

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleProjectChange = this.handleProjectChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleTitleChange(event){
    this.setState({
      title: event.target.value,
    })
  }

  handleProjectChange(event){
    this.setState({
      project: event.target.value,
    })
  }

  handleSubmit(){
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.title,
      project: this.state.project,
    })
  }
  render(){
    const submitText = this.props.id ? 'Update' : 'Create'
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>Title</label>
              <input type='text' value={this.state.title} onChange={this.handleTitleChange} />
            </div>
            <div className='field'>
              <label>Project</label>
              <input type='text' value={this.state.project} onChange={this.handleProjectChange} />
            </div>
            <div className='ui two bottom attached buttons'>
              <button className='ui basic blue button' onClick={this.handleSubmit}>
                {submitText}
              </button>
              <button className='ui basic red button' onClick={this.props.onFormClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TimerForm
