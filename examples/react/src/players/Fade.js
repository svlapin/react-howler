import React from 'react'
import ReactHowler from 'ReactHowler'
import Button from '../components/Button'

class Fade extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playing: false
    }
    this.handlePlay = this.handlePlay.bind(this)
    this.handlePause = this.handlePause.bind(this)
    this.fadeDown = this.fadeDown.bind(this)
    this.setRef = this.setRef.bind(this)
  }

  handlePlay () {
    this.setState({
      playing: true
    })
    // set default volume as it's affected by .fade()
    this.howler.volume(1)
  }

  handlePause () {
    this.setState({
      playing: false
    })
  }

  fadeDown () {
    this.howler.fade(this.howler.volume(), 0, 5000)
    // this is to simulate any change in the holder component, so
    // componentWillReceiveProps is fired inside ReactHowler
    this.setState({
      dummyProperty: true
    })
  }

  setRef (ref) {
    this.howler = ref.howler
  }

  render () {
    return (
      <div>
        <ReactHowler
          src={['sound.ogg', 'sound.mp3']}
          playing={this.state.playing}
          ref={this.setRef}
        />
        <Button onClick={this.handlePlay}>Play</Button>
        <Button onClick={this.handlePause}>Pause</Button>
        <Button onClick={this.fadeDown}>Fade down</Button>
      </div>
    )
  }
}

export default Fade
