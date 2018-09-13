const React = require('react');

const CommentAvatar = (props) => {
  const { userImage, timePosted } = props.comment;
  console.log(props.comment);
  const commentStyle = {
    position: 'absolute',
    left: timePosted,
    border: '2px solid black',
    height: '70px',
  };  
  const avatarStyle = {
    position: 'absolute',
    backgroundImage: `url(${userImage})`,
    backgroundSize: '100% 100%',
    width: '22px',
    height: '22px',
  };
  return (
    <div className="comment" style={commentStyle}>
      <div className="wp-comment-avatar" style={avatarStyle}>
      </div>
    </div>
  );
};


module.exports = CommentAvatar;
