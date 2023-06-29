/* eslint-disable react/prop-types */
const Tittle = ({ tittle, tittleDesc }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="bg-[#f5df4e] text-center py-1 px-2 font-bold mb-3">
        {tittle}
      </p>
      <h2 className="text-5xl mb-12 font-bold bg-gradient-to-r from-indigo-500 to-pink-600 text-transparent bg-clip-text">
        {tittleDesc}
      </h2>
    </div>
  );
};

export default Tittle;
