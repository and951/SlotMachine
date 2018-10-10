import React, { Component } from 'react'
import {
  getLatLng
} from 'react-places-autocomplete';
import Reel from '../Reel'
import './styles.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import { SLOT } from "../../utils/general.constants"
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      target: 5,
      duration: 3000,
      turn: false,
      actualTheme: 1,
      slotSize: SLOT.SLOT_SIZE,
      fixedSlots: [0, 0, 0],
      fixedPos: [0, 0, 0],
      slotsOptions: [],
      positionOptions: [],
      slotPosition: [0, 0, 0],
      debuggerOptions: false,
      coins: 34,
      finished: 0,
      winningLane: [],
      winningLine: 0,
      winningRule: ""

    };
    this.setFixedPos = this.setFixedPos.bind(this);
    this.setFixedSlot = this.setFixedSlot.bind(this);
    this.getPrice = this.getPrice.bind(this);
    this.toogleDebugger = this.toogleDebugger.bind(this);
    this.toogleTheme = this.toogleTheme.bind(this);

  }
  /**
 * This method set the fixedPosition by a given one
 * @param {int} pActualPosition 
 */
  setFixedPos(pFixedPosition, pSlotIndex) {
    let { fixedPos, positionOptions } = this.state;
    fixedPos[pSlotIndex] = pFixedPosition.value;
    positionOptions[pSlotIndex] = pFixedPosition;
    this.setState({
      fixedPos
    })
  }

  /**
 * This method set the fixedSlot by a given one
 * @param {int} pFixedSlot 
 */
  setFixedSlot(pFixedSlot, pSlotIndex) {
    let { fixedSlots, slotsOptions } = this.state;
    fixedSlots[pSlotIndex] = pFixedSlot.value;
    slotsOptions[pSlotIndex] = pFixedSlot;
    this.setState({
      fixedSlots,
      slotsOptions

    })
  }
  /**
   * This method is in charge of checking it there is any wining price according to selected positions
   */
  getPrice(pFinished) {
    if (pFinished == 2) {
      let winningLane = [], price = this.state.coins, winningRule = "", winningLine = 0
      //Analyzing prices in bottom lane
      let bottomLine = this.state.slotPosition.join(" ");
      let bottomWinningPrice = Object.keys(SLOT.THEMES[this.state.actualTheme].payTable[2].rules).filter((currentRule) => { return new RegExp(currentRule).test(bottomLine) })[0];
      if (bottomWinningPrice) {

        price = price + SLOT.THEMES[this.state.actualTheme].payTable[2].rules[bottomWinningPrice].price;
        winningLane = this.state.slotPosition;
        winningLine = 2;
        winningRule = bottomWinningPrice;

      } else {

        //Analyzing prices in top lane
        let topLine = this.state.slotPosition.map(actualElement => actualElement + 2).join(" ");
        let topWinningPrice = Object.keys(SLOT.THEMES[this.state.actualTheme].payTable[0].rules).filter((currentRule) => { return new RegExp(currentRule).test(topLine) })[0];
        if (topWinningPrice) {
          price = price + SLOT.THEMES[this.state.actualTheme].payTable[0].rules[topWinningPrice].price;
          winningLane = this.state.slotPosition.map(actualElement => actualElement + 2);
          winningLine = 0;
          winningRule = topWinningPrice;
        } else {
          //Analyzing prices in center lane
          let centerLine = this.state.slotPosition.map(actualElement => actualElement + 1).join(" ");
          let centerWinningPrice = Object.keys(SLOT.THEMES[this.state.actualTheme].payTable[1].rules).filter((currentRule) => { return new RegExp(currentRule).test(centerLine) })[0];
          if (centerWinningPrice) {

            price = price + SLOT.THEMES[this.state.actualTheme].payTable[1].rules[centerWinningPrice].price;
            winningLane = this.state.slotPosition.map(actualElement => actualElement + 1);
            winningLine = 1;
            winningRule = centerWinningPrice;
          }
        }
      }


      this.setState({

        target: 5,
        duration: 3000,
        turn: false,
        slotSize: SLOT.SLOT_SIZE,
        fixedSlots: [0, 0, 0],
        fixedPos: [0, 0, 0],
        slotsOptions: [],
        positionOptions: [],
        slotPosition: [0, 0, 0],
        debuggerOptions: false,
        coins: price,
        winningLane,
        winningLine,
        winningRule


      })
    }

  }
  /**
   * This is a method in charge of toogle the debugger options
   */
  toogleDebugger() {
    let { debuggerOptions } = this.state;
    debuggerOptions = !debuggerOptions;

    this.setState({
      debuggerOptions
    })

  }
  /**
   * This is a method in charge of toogle the actualTheme 
   */
  toogleTheme() {
    let { actualTheme } = this.state;
    actualTheme = actualTheme == 0 ? 1 : 0;

    this.setState({
      actualTheme
    })

  }
  /**This method is in charge of generating the random numbers and spin the reels
   * 
   */
  spin() {
    let { slotPosition, coins } = this.state;
    if (!this.state.debuggerOptions) {
      for (let counter = 0; counter < SLOT.amountOfReels; counter++) {
        const actualSlotPos = Math.floor(Math.random() * (SLOT.THEMES[this.state.actualTheme].slots.length));
        slotPosition[counter] = actualSlotPos;
      }
    } else {
      slotPosition = this.state.fixedSlots;
    }

    this.setState({
      slotPosition,
      turn: true,
      coins: (coins - 1)
    })

  }
  render() {
    return (
      <div>
        <div class="stars">
          <h1>
            <em>STAR CASINO</em>
          </h1>
        </div>
        <div className="container">
          <section class="row">
            <br className=" separator " /></section>
          <section class="row">
            {this.state.slotPosition.map((actualSlot, index) => {
              return (<div className="grid-2">
                {this.state.debuggerOptions &&
                  <div>
                    <Dropdown
                      options={SLOT.THEMES[this.state.actualTheme].slots.map((actualSlot, index) => { return { value: index, label: actualSlot.name } })}
                      onChange={(select) => { this.setFixedSlot(select, index) }} value={this.state.slotsOptions[index]}
                      placeholder="SELECT A SLOT"
                      className="dropdown" />

                    <Dropdown
                      options={SLOT.THEMES[this.state.actualTheme].payTable.map((actualRule, index) => { return { value: actualRule.movement, label: actualRule.name } })}
                      onChange={(select) => { this.setFixedPos(select, index) }} value={this.state.positionOptions[index]}
                      placeholder="SELECT A POSITION"
                      className="dropdown" />
                    <h1>{`${this.state.slotPosition[index]} + ${this.state.fixedPos[index]} < 0 ? ${SLOT.THEMES[this.state.actualTheme].slots.length} : ${this.state.slotPosition[index] + this.state.fixedPos[index]}`} </h1>
                  </div>

                }

                <Reel
                  className="slot"
                  onEnd={() => { this.getPrice(index) }}
                  //Adding 500 miliseconds the reels will 
                  duration={this.state.duration + (500 * index)}
                  target={this.state.slotPosition[index] + this.state.fixedPos[index] < 0 ? SLOT.THEMES[this.state.actualTheme].slots.length : this.state.slotPosition[index] + this.state.fixedPos[index]}
                  turn={this.state.turn}
                >
                  {SLOT.THEMES[this.state.actualTheme].slots.map(({ icon, color }, slotIndex) => (
                    <div className={`slot-item ${(this.state.winningLane[index] == slotIndex) ? color : 'gray'}`} >
                      <img className="slotIcon" src={icon}></img>
                    </div>
                  ))}
                </Reel>
              </div>)
            })}
            <div className="grid-4">
              {SLOT.THEMES[this.state.actualTheme].payTable.map((actualRow, index) => {
                return (<div>
                  <h1 className="gray">{actualRow.name}</h1>
                  <table >
                    <thead>
                      <tr>
                        <th><h2>RULE</h2></th>
                        <th></th>
                        <th><h2>PRICE</h2></th>
                      </tr>
                    </thead>
                    <tbody>

                      {Object.keys(actualRow.rules).map((actualRule) => {
                        return (
                          <tr className={(this.state.winningLine == index && this.state.winningRule == actualRule) ? actualRow.rules[actualRule].color : ""}>
                            <td className={actualRule.color} >{actualRow.rules[actualRule].label}</td>
                            <td>:</td>

                            <td>{actualRow.rules[actualRule].price}</td>
                          </tr>)

                      })}
                    </tbody>
                  </table>

                </div>)
              })}
            </div>
            <section class="row">
              <br className="blue separator " /></section>
            <section class="row">
              <div className="grid-2">
                <input
                  className="coins yellow"
                  value={this.state.coins}
                />
              </div>
              <div className="grid-2">
                <AwesomeButton action={() => this.spin()} type="secondary">BET</AwesomeButton>

              </div>
              <div className="grid-2">
                <AwesomeButton action={() => this.toogleDebugger()} type="primary">DEBUGGER</AwesomeButton>

              </div>
              <div className="grid-2">
                <AwesomeButton action={() => this.toogleTheme()} type="primary">THEME</AwesomeButton>

              </div>
              <div className="grid-4">
              </div>
            </section>

          </section>



        </div >
      </div >

    )
  }

}




export default MainApp
