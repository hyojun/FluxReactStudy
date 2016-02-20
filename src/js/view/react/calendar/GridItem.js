import React from 'react';

const FORMAT_DAY = 'MM월 DD일';

export default class GridItem extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    const {day, className, renderDay} = this.props;
    return(
      <div
        className={className}
        onClick={this._onClick()}
      >
      {renderDay(day.day)}
      </div>
    );
  }
  _onClick(){
    return () => {
      console.log('test');
    };
  }
}

GridItem.propTypes = {
  day: React.PropTypes.object.isRequired,
  className: React.PropTypes.string.isRequired,
  renderDay: React.PropTypes.func
};
GridItem.defaultProps = {
  renderDay: day => day.format(FORMAT_DAY)
};
