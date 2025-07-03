const Container = ({ children, bg }) => {
  return (
    <div className={`${bg && ''} max-w-7xl mx-auto md:px-20 px-4`}>
      {children}
    </div>
  );
};

export default Container