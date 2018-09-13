const React = require('react');

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

    const wrapperStyle = {
      position: 'absolute',
      left: timePosted,
      height: '50px',
      width: '400px',
      zIndez: 0,
    };
    const avatarStyle = {
      position: 'absolute',
      backgroundImage: `url(${userImage})`,
      backgroundSize: '100% 100%',
      borderRadius: this.state.radius,
      width: '22px',
      height: '22px',
      zIndex: 1,
    };
    const commentStyle = {
      position: 'absolute',
      bottom: '-5px',
      left: '9px',
    };
    const userStyle = {
      display: 'inline-block',
      color: '#f50',
      // fontSize: '12px',
      font: '12px/1.4 "Lucida Grande","Lucida Sans Unicode","Lucida Sans",Garuda,Verdana,Tahoma,sans-serif',
    };

    const textStyle = {
      display: 'inline-block',
      color: '#fff',
      // fontSize: '12px',
      font: '12px/1.4 "Lucida Grande","Lucida Sans Unicode","Lucida Sans",Garuda,Verdana,Tahoma,sans-serif',
      marginLeft: '10px',
    };

    const streakStyle = {
      content: '',
      position: 'absolute',
      height: '38px',
      bottom: 0,
      left: 0,
      width: '1px',
      display: 'block',
      backgroundImage: 'linear-gradient(rgba(255,85,0,.95),rgba(255,85,0,.1))',
    };

    return (
      <div className="comment-wrapper" style={wrapperStyle}>
         {this.state.visible && <div className="comment-streak" style={streakStyle} />}

        <div className="wp-comment-avatar" style={avatarStyle} onMouseEnter={this.showComment.bind(this)} onMouseLeave={this.hideComment.bind(this)}/>
        
        {this.state.visible &&
          (
            <div className="wp-comment" style={commentStyle}>
              <div className="wp-comment-user" style={userStyle}>{user}</div>
              <div className="wp-comment-text" style={textStyle}>{'   ' + text}</div>
            </div>
          )
         }
      </div>
    );  
  }
}

module.exports = Comment;
