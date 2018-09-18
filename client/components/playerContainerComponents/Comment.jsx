const React = require('react');
const styles = require('../../styles/playerContainer.css');

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      radius: '0%',
    };
  }

  showComment() {
    this.setState({
      visible: true,
      radius: '100%',
    });
  }

  hideComment() {
    this.setState({
      visible: false,
      radius: '0%',
    });
  }

  render() {
    const {
      userImage,
      timePosted,
      text,
      user,
    } = this.props.comment;

    /*
      Refactoring all of my css into styled components is a stretch goal
      for this weekend.
    */

    const wrapperStyle = {
      position: 'absolute',
      left: timePosted,
      top: '0px',
      height: '45px',
      width: '400px',
      zIndez: 0,
    };
    const avatarStyle = {
      position: 'absolute',
      backgroundImage: `url(${userImage})`,
      backgroundSize: '100% 100%',
      borderRadius: this.state.radius,
      width: '19px',
      height: '19px',
      zIndex: 1,
    };

    return (
      <div className={styles["wp-comment-wrapper"]} style={wrapperStyle}>
         {this.state.visible && <div className={styles["wp-comment-streak"]} />}
        <div className={styles["wp-comment-avatar"]} style={avatarStyle} onMouseEnter={this.showComment.bind(this)} onMouseLeave={this.hideComment.bind(this)}/>
        {this.state.visible &&
          (
            <div className={styles["wp-comment"]}>
              <div className={styles["wp-comment-user"]} >{user}</div>
              <div className= {styles["wp-comment-text"]} >{text}</div>
            </div>
          )
         }
      </div>
    );  
  }
}

module.exports = Comment;
