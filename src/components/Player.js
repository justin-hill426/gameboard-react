import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {
  
  //for using propTypes in the class
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number,
    isHighScore: PropTypes.bool
  };

  render() {
    console.log(this.props.name + ' rendered');
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>✖</button>
          <Icon isHighScore={this.props.isHighScore}/>
          { this.props.name }
        </span>
      
      <Counter score={this.props.score}
          changeScore={this.props.changeScore}
          index={this.props.index}
      />
      </div>
    );
  } 
}



export default Player;