class Gallery extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: "http://localhost:5000/static/images/TestSet/",
      extension: ".jpg",
      index: Math.ceil(Math.random()*299)
    };
    this.style = {
      width: "100%",
      height: "100%",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat"
    }
  }
  decreaseIndex(e) {
    if (this.state.index <= 0) return;
    this.setState({index: this.state.index-1});
  }
  increaseIndex(e) {
    if (this.state.index >= 299) return;
    this.setState({index: this.state.index+1});
  }
  getImageName(){
    const s = "00000" + this.state.index;
    const n = s.length;
    return s.slice(n-5,n);
  }

  componentDidMount(){
    this.props.glEventHub.on( 'prev-clicked', this.decreaseIndex.bind(this) );
    this.props.glEventHub.on( 'next-clicked', this.increaseIndex.bind(this) );
  }

  render(){
    const background = this.state.url + this.getImageName() + this.state.extension;
    this.style.backgroundImage = "url("+background+")";

    return <div style={this.style}></div>
  }
}

export default Gallery;
