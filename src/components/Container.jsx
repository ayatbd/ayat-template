const Container = ({ children }) => {
  return (
    <div className="max-w-[2520px] overflow-hidden mx-auto xl:px-20 md:px-10 sm:px-2 px-4 box">
      {children}
    </div>
  );
};

export default Container;
