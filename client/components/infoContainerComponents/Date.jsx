const React = require('react');
const Moment = require('moment');

const Date = (props) => {
  const time = Moment(props.date).fromNow();
  return (
    <div className="wp-date">
      <div>{time}</div>
    </div>
  );
};

module.exports = Date;
