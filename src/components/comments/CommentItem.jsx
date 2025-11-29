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
      <div className={`bg-gradient-to-br ${depth > 2 ? 'from-slate-700 via-gray-700 to-slate-600' : 'from-slate-800 via-purple-900/20 to-blue-900/20'} rounded-lg p-${depth > 2 ? '2' : '3'} mb-2 border ${depth > 2 ? 'border-slate-500/30' : 'border-purple-500/20'} backdrop-blur-sm`}>
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center">
            <Avatar 
              name={comment.authorName || comment.author?.name || 'U'} 
              size={depth === 0 ? 'lg' : depth === 1 ? 'md' : depth === 2 ? 'sm' : 'xs'}
            />
            <div className="ml-2">
              <p className={`text-white font-medium ${depth > 2 ? 'text-xs' : 'text-sm'}`}>
                {comment.authorName || comment.user?.name || 'User'}
                {comment.replyToUser && (
                  <span className="text-blue-400 ml-1">→ {comment.replyToUser}</span>
                )}
              </p>
              <p className="text-gray-400 text-xs">{new Date(comment.createdAt).toLocaleString()}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {hasReplies && isTopLevel && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleCommentVisibility(comment.id)}
              >
                {isHidden ? `View ${totalRepliesCount} more ${totalRepliesCount === 1 ? 'reply' : 'replies'}` : 'Hide'}
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setReplyingTo(replyingTo === comment.id ? null : comment.id);
                setReplyText('');
              }}
            >
              Reply
            </Button>
          </div>
        </div>
        <p className={`text-gray-300 ${depth > 2 ? 'text-xs' : 'text-sm'} ml-${depth > 2 ? '6' : '9'} break-words`}>
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