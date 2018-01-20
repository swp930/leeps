import React from 'react'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'

class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      profit:1,
      user:0,
      count:1,
      stoc:0,
      cumul:1.00,
      data:[]
    }
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }

  tick(){
    var n = Math.random()*1;
    n = n.toFixed(2);
    var p = (1-Math.pow(this.state.user-n,2))
    p = p.toFixed(2)
    var num = +p + +this.state.cumul
    num = num.toFixed(2)
    var arr = this.state.data;
    arr.push({time:this.state.count, prof: p, stoc: n, user: this.state.user})
    arr.map(n => {
      console.log(n)
    })
    this.setState({
      profit: p,
      cumul: num,
      count: this.state.count+1,
      data: arr
    })
  }
  startTimer() {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }
  stopTimer() {
    clearInterval(this.timer)
  }
  resetTimer() {
    this.setState({profit:1,
                   cumul:1,
                   data:[]})
  }
  onChange(event) {
    this.setState({
      user: event.target.value
    })
  }
  render() {
    var arr = this.state.data
    var rows = arr.map(n => {
      return (
        <TableRow key={n.id}>
          <TableCell>{n.time}</TableCell>
          <TableCell>{n.stoc}</TableCell>
          <TableCell>{n.user}</TableCell>
          <TableCell>{n.prof}</TableCell>
        </TableRow>
      )
    })
    return (
      <div style={{textAlign:"center"}}>
      <div className='timer'>
        <h1>Cumul {this.state.cumul}</h1>
        <h1>Profit {this.state.profit}</h1>
        <TextField
          onChange={this.onChange.bind(this)}
          className="click"
          label="Enter a number between 0 and 1"
          margin="normal"/>
        <div>
          <Button onClick={this.startTimer.bind(this)}>Start</Button>
          <Button onClick={this.stopTimer.bind(this)}>Stop</Button>
          <Button onClick={this.resetTimer.bind(this)}>Reset</Button>
        </div>
      </div>
      <br />
      <center>
      <Table style={{width:"700px", textAlign:"center"}}>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Stoch. value</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Profit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{backgroundColor:"#E3F2FD"}}>
              {rows}
        </TableBody>
      </Table>
      </center>
      </div>
    )
  }
}

export default Timer
