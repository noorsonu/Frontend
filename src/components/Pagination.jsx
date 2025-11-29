const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  indexOfFirstPost, 
  indexOfLastPost, 
  totalPosts 
}) => {
  if (totalPages <= 1) return null;

  return (
    <>
      <div className="flex flex-wrap justify-center items-center mt-8 sm:mt-12 gap-2 sm:gap-4">
        <button
          onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer text-sm sm:text-base"
        >
          Previous
        </button>

        <div className="flex flex-wrap gap-1 sm:gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => onPageChange(index + 1)}
              className={`px-2 py-1 sm:px-3 sm:py-2 rounded-lg transition-colors cursor-pointer text-sm sm:text-base ${
                currentPage === index + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer text-sm sm:text-base"
        >
          Next
        </button>
      </div>

      <div className="text-center mt-6 pb-5">
        <p className="text-gray-400 text-sm">
          Showing {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, totalPosts)} of {totalPosts} posts
        </p>
      </div>
    </>
  );
};

export default Pagination;