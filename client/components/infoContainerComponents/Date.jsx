const React = require('react');
const Moment = require('moment');
const styles = require('../../styles/infoContainer.css');

const Date = (props) => {
  const time = Moment(props.date).fromNow();
  return (
    <div className={styles["wp-date"]}>
      <div>{time}</div>
    </div>
  );
};

module.exports = Date;
