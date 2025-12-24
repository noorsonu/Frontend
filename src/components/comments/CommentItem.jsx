import React from 'react';
import ReplyForm from './ReplyForm';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';

const CommentItem = ({ 
  comment, 
  depth = 0, 
  replyingTo, 
  setReplyingTo, 
  replyText, 
  setReplyText, 
  submitReply, 
  hiddenComments, 
  toggleCommentVisibility 
}) => {
  const hasReplies = comment.replies && comment.replies.length > 0;
  const isHidden = hiddenComments[comment.id] || false;
  const isTopLevel = depth === 0;

  const countAllReplies = (replies) => {
    return replies.reduce((total, reply) => {
      return total + 1 + (reply.replies ? countAllReplies(reply.replies) : 0);
    }, 0);
  };

  const totalRepliesCount = hasReplies ? countAllReplies(comment.replies) : 0;

  const getIndentStyle = (depth) => {
    if (depth === 0) return '';
    if (depth <= 2) return `ml-${Math.min(depth * 4, 8)} border-l-2 border-gray-600 pl-2`;
    return 'ml-6 border-l border-gray-500 pl-2';
  };

  const getAvatarSize = (depth) => {
    if (depth === 0) return 'w-7 h-7 text-sm';
    if (depth === 1) return 'w-6 h-6 text-xs';
    if (depth === 2) return 'w-5 h-5 text-xs';
    return 'w-4 h-4 text-xs';
  };

  return (
    <div className={getIndentStyle(depth)}>
      <div className={`bg-gray-800/60 rounded-lg p-2 sm:p-3 mb-2 border border-gray-600/30 hover:bg-gray-800/80 transition-colors duration-200`}>
        <div className="flex items-start justify-between mb-1.5">
          <div className="flex items-center gap-2">
            <Avatar 
              name={comment.authorName || comment.author?.name || 'U'} 
              size={depth === 0 ? 'md' : 'sm'}
            />
            <div>
              <p className="text-white font-medium text-sm">
                {comment.authorName || comment.user?.name || 'User'}
                {comment.replyToUser && (
                  <span className="text-blue-400 ml-1 text-xs">→ {comment.replyToUser}</span>
                )}
              </p>
              <p className="text-gray-400 text-xs">{new Date(comment.createdAt).toLocaleString()}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {hasReplies && isTopLevel && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleCommentVisibility(comment.id)}
                className="text-xs px-2 py-1"
              >
                {isHidden ? `+${totalRepliesCount}` : 'Hide'}
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setReplyingTo(replyingTo === comment.id ? null : comment.id);
                setReplyText('');
              }}
              className="text-xs px-2 py-1"
            >
              Reply
            </Button>
          </div>
        </div>
        <p className="text-gray-300 text-sm ml-8 break-words leading-relaxed">
          {comment.content}
        </p>
      </div>

      {replyingTo === comment.id && (
        <ReplyForm
          replyText={replyText}
          setReplyText={setReplyText}
          onSubmit={() => submitReply(comment.id, comment.authorName)}
          onCancel={() => setReplyingTo(null)}
        />
      )}

      {hasReplies && !isHidden && (
        <div className="space-y-1">
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              depth={depth + 1}
              replyingTo={replyingTo}
              setReplyingTo={setReplyingTo}
              replyText={replyText}
              setReplyText={setReplyText}
              submitReply={submitReply}
              hiddenComments={hiddenComments}
              toggleCommentVisibility={toggleCommentVisibility}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;