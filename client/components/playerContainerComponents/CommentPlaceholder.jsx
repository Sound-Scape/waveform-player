const React = require('react');
const CommentAvatar = require('./CommentAvatar.jsx');

const CommentPlaceholder = (props) => {
  const { comments } = props;
  console.log(comments);
  return (
    <div>
      <div className="wp-comment-placeholder">
      <hr/>
        {comments.map(comment => <CommentAvatar comment={comment} />)}
      </div>
    </div>
  );
};

module.exports = CommentPlaceholder;
