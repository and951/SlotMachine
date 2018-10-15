/*!
 * Use is subject to license terms.
 * Filename: Reel.js
 */

/*
 * Author:      andresjimqui@gmail.com
 * Date:        08/10/2018
 * Description: This component is a Reel 
 */
import React from 'react';
import PropTypes from 'prop-types';
import { SLOT } from "../../utils/general.constants"
import { findDOMNode } from 'react-dom';


class Reel extends React.Component {
  constructor() {
    super();
    this.state = {
      scrollPos: SLOT.SLOT_SIZE * 2,
      desiredPos: 0,
      actualPos: 0,
      startTime: 0,
      scrollHeigth: SLOT.SLOT_SIZE * 5,
      clientHeight: SLOT.SLOT_SIZE * 3,
      slotSize: SLOT.SLOT_SIZE,
      maxSpeed: SLOT.SLOT_SIZE
    }
    this.targetRefs = [];
    this.spin = this.spin.bind(this);
    this.goToSlot = this.goToSlot.bind(this);
  }

  /**
   * This method is in charge of doing the spinning animation during a certain amount of time. 
   * At soons as it finishes it will call the go to slot function.
   * @param {timestamp} pTimestamp 
   */
  spin(pTimestamp) {
    const elapsed = Date.now() - this.state.startTime;
    if (elapsed > this.props.duration) {
      requestAnimationFrame(this.goToSlot);
      return;
    }

    //The speed will be calculated according to the porcentage of the current spin.
    let porcentage = elapsed / this.props.duration;
    let speed = porcentage < 0.9 ? this.state.maxSpeed - (this.state.maxSpeed * porcentage) : this.state.maxSpeed * 0.3;

    //Calculating the actual position. Also it reach the bottom then it will be continue at the top.
    let actualPosition = this.state.actualPos < this.state.scrollHeight - this.state.clientHeight ? this.state.actualPos + speed : 0;
    this.setState({
      actualPos: actualPosition
    }, () => {
      this.setScrollPos(actualPosition)
      requestAnimationFrame(this.spin)
    })

  }
  /**
   * This method moves the 
   * @param {timestamp} pTimestamp 
   */
  goToSlot(pTimestamp) {
    let speed = this.state.maxSpeed * 0.1;
    if (this.state.actualPos > this.state.desiredPos - speed && this.state.actualPos < this.state.desiredPos + speed) {
      this.props.onEnd();
      return;
    }

    let actualPosition = this.state.actualPos < this.state.scrollHeight - this.state.clientHeight ? this.state.actualPos + speed : 0;
    this.setState({
      actualPos: actualPosition
    }, () => {
      this.setScrollPos(actualPosition)
      requestAnimationFrame(this.spin)
    })

  }
  /**
 * This method set the scroll top by a given aposition
 * @param {int} pActualPosition 
 */
  setScrollPos(pActualPosition) {
    findDOMNode(this.containerReference).scrollTop = pActualPosition;
  }

  componentDidUpdate(prevProps) {

    if (this.props == prevProps || !this.props.turn) return;

    this.setScrollPos(this.state.slotSize * 2);

    let desiredPos = this.state.slotSize * this.props.target;

    let startTime = Date.now();
    let scrollHeight = findDOMNode(this.containerReference).scrollHeight;
    let clientHeight = this.state.clientHeight;
    this.setState({
      startTime,
      desiredPos: desiredPos > scrollHeight - clientHeight ? scrollHeight - clientHeight - 1 : desiredPos,
      scrollHeight,
      clientHeight
    }, () => {
      /**
      The window.requestAnimationFrame() method tells the browser that you wish to perform an animation 
      and requests that the browser call a specified function to update an animation before the next repaint.

      It is better to use than 
        *The browser can optimize it, so animations will be smoother
      *Animations Only Run When Visible. 
     */
      window.requestAnimationFrame(this.spin);
    })
  }



  render() {
    return (
      <div
        className={this.props.className}
        ref={containerReference => (this.containerReference = containerReference)}
      >
        {
          /*
          This block is the same as the last one. It is added  to get the looping illusion going.
          */
          React.cloneElement(this.props.children[this.props.children.length - 1], { ref: ref => (this.targetRefs[0] = ref) })


        }
        {
          React.cloneElement(this.props.children[this.props.children.length - 2], { ref: ref => (this.targetRefs[0] = ref) })
        }
        {this.props.children.map((child, index) =>
          React.cloneElement(child, { ref: ref => (this.targetRefs[index] = ref) }))}
        {/*
          These blocks are the same as the first blocks. As the the top one this is to get the looping illusion going.
          */

          React.cloneElement(this.props.children[0], { ref: ref => (this.targetRefs[0] = ref) })
        }
        {
          React.cloneElement(this.props.children[1], { ref: ref => (this.targetRefs[0] = ref) })
        }



      </div>

    );
  }
}

Reel.defaultProps = {
  duration: 3000,
  onEnd: () => {

  },
};

Reel.propTypes = {
  duration: PropTypes.number,
  target: PropTypes.number.isRequired,
  onEnd: PropTypes.func,
};

export default Reel;