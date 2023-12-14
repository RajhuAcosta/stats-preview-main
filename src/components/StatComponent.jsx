const StatComponent = ({ value, heading }) => {
  return (
    <div className="py-3.5">
      <h3 className="text-white font-['Inter'] text-2xl font-bold mb-1">
        {value}
      </h3>
      <h4 className="font-['Lexend_Deca'] text-[13.5px] font-light text-[hsla(0,0%,100%,0.6)] tracking-widest">
        {heading}
      </h4>
    </div>
  );
};
export default StatComponent;
