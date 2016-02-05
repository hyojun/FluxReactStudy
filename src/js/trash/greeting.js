import ReactDOM from 'react-dom';

export default ReactDOM.createClass({
  render: function() {
    return (
      <div className='greeting'>
        Hello, {this.props.name}!!!
      </div>
    );
  }
});
