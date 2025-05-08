import { Link } from "react-router-dom";

interface props {
  auth: string;
}

const LoginBtn: React.FC<props> = ({ auth }) => {
  return (
    <>
      <Link to={"/home"}>
        {" "}
        <button className="bg-primary w-100 text-white font-bold p-4 mt-5  mb-3 text-sm">
          {auth}
        </button>
      </Link>
    </>
  );
};

export default LoginBtn;
