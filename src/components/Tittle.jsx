/* eslint-disable react/prop-types */
const Tittle = ({ tittle, tittleDesc }) => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <p
        data-aos="zoom-in"
        className="bg-[#f5df4e] text-center capitalize py-1 px-4 font-bold mb-3"
      >
        {tittle}
      </p>
      <h2
        data-aos="zoom-in"
        className="md:text-5xl text-2xl mb-12 py-2 font-bold text-pink-600 bg-clip-text"
      >
        {tittleDesc}
      </h2>
    </div>
  );
};

export default Tittle;
