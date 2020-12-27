import React, { Component } from 'react';
import Header from '../Header/';
import Snake from '../../components/Snake/';
import Food from '../../components/Food';
import {
  GridStyled,
  OverLapWrapper,
  OverLapWrapperBg,
  OverLapWrapperBox,
  GameArea,
  GameBoardRow,
} from './GameBoardStyle';

const getRandomCoordinates = (border) => {
  let min = 1;
  let x =
    Math.floor(
      (Math.random() * ((border && border.width - 50) || 1) + min) / 2,
    ) * 2;
  let y =
    Math.floor(
      (Math.random() * ((border && border.height - 50) || 1) + min) / 2,
    ) * 2;
  return [x, y];
};

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playPause: false,
      food: [],
      speed: 200,
      direction: 'RIGHT',
      overLap: true,
      snakeDots: [
        [0, 0],
        [2, 0],
      ],
      timer: 3,
      border: {
        width: null,
        height: null,
      },
    };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    document.onkeydown = this.onKeyDown;
    document.onkeyup = this.onKeyUp;
    this.setState({
      border: {
        height: this.myRef.current.clientHeight,
        width: this.myRef.current.clientWidth,
      },
      food: getRandomCoordinates({
        height: this.myRef.current.clientHeight,
        width: this.myRef.current.clientWidth,
      }),
    });
    this.startGameTimer = setInterval(
      () => this.setState(({ timer }) => ({ timer: timer - 1 })),
      1000,
    );
    setTimeout(() => {
      clearInterval(this.startGameTimer);
      this.setState(() => ({
        overLap: false,
      }));
      this.startGame();
    }, 3000);
  }
  playPauseGame = () => {
    const { playPause } = this.state;
    if (playPause) {
      this.setState({ playPause: !playPause }, () => {
        this.startGame();
      });
    } else {
      this.setState({ playPause: !playPause }, () => {
        this.pauseGame();
      });
    }
  };
  startGame = () => {
    this.timeInterval = setInterval(this.moveSnake, this.state.speed);
  };
  pauseGame = () => {
    clearInterval(this.timeInterval);
  };
  componentDidUpdate() {
    this.checkIfOutOfBorders();
    this.checkIfCollapsed();
    this.checkIfEat();
  }
  onKeyUp = (e) => {
    e = e || window.event;
    if (e.keyCode === 32) {
      //your code
      this.playPauseGame();
    }
  };

  onKeyDown = (e) => {
    e = e || window.event;
    if (!this.state.playPause) {
      switch (e.keyCode) {
        case 38:
          if (this.state.direction !== 'DOWN') {
            this.setState(() => ({ direction: 'UP' }));
          }
          break;
        case 40:
          if (this.state.direction !== 'UP') {
            this.setState(() => ({ direction: 'DOWN' }));
          }
          break;
        case 37:
          if (this.state.direction !== 'RIGHT') {
            this.setState(() => ({ direction: 'LEFT' }));
          }
          break;
        case 39:
          if (this.state.direction !== 'LEFT') {
            this.setState(() => ({ direction: 'RIGHT' }));
          }
          break;
        default:
          return;
      }
    }
  };

  moveSnake = () => {
    if (!this.state.playPause) {
      let dots = [...this.state.snakeDots];
      let head = dots[dots.length - 1];
      switch (this.state.direction) {
        case 'RIGHT':
          head = [head[0] + 22, head[1]];
          break;
        case 'LEFT':
          head = [head[0] - 22, head[1]];
          break;
        case 'DOWN':
          head = [head[0], head[1] + 22];
          break;
        case 'UP':
          head = [head[0], head[1] - 22];
          break;
        default:
          return;
      }
      dots.push(head);
      dots.shift();
      this.setState({
        snakeDots: dots,
      });
    }
  };

  checkIfOutOfBorders() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    const {
      border: { width, height },
    } = this.state;
    if (head[0] >= width || head[1] >= height || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }

  checkIfCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach((dot) => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        this.onGameOver();
      }
    });
  }

  checkIfEat() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (Math.abs(head[0] - food[0]) < 13 && Math.abs(head[1] - food[1]) < 13) {
      this.setState(() => ({
        food: getRandomCoordinates(this.state.border),
      }));
      this.enlargeSnake();
      this.increaseSpeed();
    }
  }

  enlargeSnake() {
    let { snakeDots } = this.state;
    snakeDots.unshift(snakeDots[0]);
    this.setState({
      snakeDots,
    });
  }

  increaseSpeed() {
    if (this.state.speed > 50) {
      this.setState(
        {
          speed: this.state.speed - 10,
        },
        () => {
          this.pauseGame();
          this.startGame();
        },
      );
    }
  }

  onGameOver() {
    this.pauseGame();
    alert(`Game Over. Score is ${this.state.snakeDots.length - 2}`);
    this.setState(() => ({
      snakeDots: [
        [0, 0],
        [22, 0],
      ],
      direction: 'RIGHT',
      speed: 200,
    }));
    this.startGame();
  }
  render() {
    const { overLap, snakeDots, food, timer, direction } = this.state;
    const childrenWrapper = () => (
      <OverLapWrapperBox>
        <h1>{timer}</h1>
      </OverLapWrapperBox>
    );
    return (
      <GridStyled fluid>
        <Header
          playPauseChange={this.playPauseGame}
          score={snakeDots.length - 2}
        />
        <GameBoardRow>
          {overLap && (
            <OverLapWrapper>
              {childrenWrapper()}
              <OverLapWrapperBg />
            </OverLapWrapper>
          )}
          <GameArea ref={this.myRef}>
            <Snake snakeDots={snakeDots} direction={direction} />
            <Food dot={food} />
          </GameArea>
        </GameBoardRow>
      </GridStyled>
    );
  }
}
export default GameBoard;
