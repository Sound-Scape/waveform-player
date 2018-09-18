const React = require('react');
const styles = require('../../styles/titleContainer.css');

const Title = (props) => (
  <div className={styles['wp-title']}>
    <div>{props.title}</div>
  </div>
);

module.exports = Title;
