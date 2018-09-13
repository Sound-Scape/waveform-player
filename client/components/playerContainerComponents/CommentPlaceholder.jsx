const React = require('react');
const Comment = require('./CommentAvatar.jsx');

const CommentPlaceholder = (props) => {
  const { comments } = props;
  console.log(comments);
  return (
    <div>
      <div className="wp-comment-placeholder">
      <hr/>
        {comments.map(comment => <Comment comment={comment} />)}
      </div>
    </div>
  );
};

module.exports = CommentPlaceholder;
