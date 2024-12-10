import VerifCode from "../assets/VerifCode.png";

const VerificationCode = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-[#738FFD] rounded-lg shadow-xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[85rem] h-[35rem] flex">
        {/* Left Section */}
        <div className="w-1/2 h-full flex flex-col justify-center items-center text-white p-8 sm:p-16 lg:p-32">
          <h1 className="font-extrabold text-xl sm:text-3xl text-center mb-10">
            VERIFICATION CODE
          </h1>
          <p className="font-semibold text-sm sm:text-lg text-center sm:mb-16">
            We have send your code to
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-[#cad7fdb3] rounded-2xl flex justify-center items-center w-1/3 h-3/4 mx-auto my-auto">
          <img
            src={VerifCode}
            alt="Verification Code"
            className="w-96 h-96 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;
