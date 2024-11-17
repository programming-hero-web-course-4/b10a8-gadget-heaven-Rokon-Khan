import error from "../assets/404.gif";
const Error = () => {
  return (
    <div>
      <div className="max-w-[1024px] h-full mx-auto">
        <img className="w-ful h-full" src={error} alt="error" />
      </div>
    </div>
  );
};

export default Error;
