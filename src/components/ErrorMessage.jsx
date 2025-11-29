const ErrorMessage = ({ error, onRetry }) => (
  <div className="text-center py-12">
    <p className="text-red-400 text-lg">{error}</p>
    <button
      onClick={onRetry}
      className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
    >
      Retry
    </button>
  </div>
);

export default ErrorMessage;