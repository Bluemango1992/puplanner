const TabBar = ({
    tabs = ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    onTabClick = () => {}
  }: {
    tabs?: string[],
    onTabClick?: (index: number) => void
  }) => (
    <div className="flex flex-1 justify-around">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className="flex items-center justify-center p-3 bg-white rounded-t-md text-xs hover:bg-slate-200 active:bg-slate-300"
          onClick={() => onTabClick(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );

  export default TabBar;