
const TabBar = ({ dateRanges, currentDateRange, setCurrentDateRange }) => {

  const formatDateRange = (dateRange) => {
    const [start, end] = dateRange.dateRange.split(' to ');
    const startDate = new Date(start);
    const endDate = new Date(end);
    const startOptions = { month: 'short', day: 'numeric' };
    const endOptions = { month: 'short', day: 'numeric' };
    const formattedStart = startDate.toLocaleString('en-US', startOptions);
    const formattedEnd = endDate.toLocaleString('en-US', endOptions);
    return `${formattedStart} - ${formattedEnd}`;
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-2">
      {dateRanges.map((dateRange, index) => (
        <button
          key={index}
          className={`px-2 py-1 text-sm rounded-md ${
            currentDateRange.dateRange === dateRange.dateRange
              ? 'bg-white text-gray-800'
              : 'bg-gray-200 text-gray-600'
          }`}
          onClick={() => setCurrentDateRange(dateRange)}
        >
          <span>{formatDateRange(dateRange)}</span>
        </button>
      ))}
    </div>
  );
};

export default TabBar;