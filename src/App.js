import logo from './logo.svg'
import './App.css'
import NavBar from './components/navbar'
import React from 'react'
import Counters from './components/Counters'
class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  }
  constructor() {
    super()
    console.log('App - Construtcotr')
  }
  componentDidMount() {
    console.log('App - Mounted')
  }
  handleDelete = (counterId) => {
    console.log('Event Handler Called' + counterId)
    const counters = this.state.counters.filter((c) => c.id !== counterId)
    this.setState({ counters })
  }
  handleIncrement = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })
  }
  handleReset = () => {
    const counters = [...this.state.counters]
    counters.map((counter) => {
      counter.value = 0
    })
    this.setState({ counters })
  }
  render() {
    console.log('App - rendered')
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    )
  }
}
export default App
