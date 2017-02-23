import { Button, Segment } from 'semantic-ui-react'

class Navigation extends React.Component {
  constructor(props){
    super(props);
    this.styles = {
      segment: { boxShadow: "none", height: "100%", textAlign: "center" }
    };
  }

  emitPrevClicked(){this.props.glEventHub.emit( 'prev-clicked', {self: this});}
  emitNextClicked(){this.props.glEventHub.emit( 'next-clicked', {self: this});}

  render(){
    const handlePrevClicked = this.emitPrevClicked.bind(this);
    const handleNextClicked = this.emitNextClicked.bind(this);

    return (
        <Segment style={this.styles.segment} >
          <Button circular icon='chevron left' content="Previous"
            onClick={handlePrevClicked} />
          <Button circular icon='chevron right' content="Next"
            onClick={handleNextClicked} />
        </Segment>
    )
  }
}

export default Navigation;
