const React = require('react');
const styles = require('../../styles/titleContainer.css');

const Playbutton = (props) => {
  const { isPlaying, playPause } = props;
  return (
    <div className={styles["button-container"]}>
      <div className={`${styles['wp-playbutton']} cursor`} onClick={playPause}>
        {!isPlaying && <div className={styles["wp-play"]} onClick={playPause} />}
        {isPlaying &&
          (
          <div>
            <div className={styles["wp-pause1"]} onClick={playPause} />
            <div className={styles["wp-pause2"]} onClick={playPause} />
          </div>
          )
        }
      </div>
    </div>
  );
};

module.exports = Playbutton;
