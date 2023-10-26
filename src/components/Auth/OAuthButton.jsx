import { BsApple, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { authServices } from "services/auth.services";
import { tokenServices } from "services/token.services";
import PropTypes from "prop-types";

const OAuth = ({ type }) => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    (async () => {
      try {
        const res = await authServices.handleGoogleOauth();
        if (res) {
          if (type === "signup") {
            navigate("/login");
            return;
          }
          tokenServices.setAccessToken(res);
          navigate("/");
        }
      } catch (error) {
        alert(error);
        console.error(error);
      }
    })();
  };

  return (
    <>
      {[BsApple, FcGoogle, BsFacebook].map((Icon, index) => {
        return (
          <div
            key={index}
            className="w-20 h-20 grid place-items-center bg-white p-6 rounded-[20px] drop-shadow-[2px_4px_4px_rgba(0,0,0,0.07)] cursor-pointer"
          >
            <Icon
              size="2.25em"
              fill={index < 2 ? "inherit" : "#0866FF"}
              onClick={() => {
                if (index === 1) {
                  handleGoogleLogin();
                }
              }}
            />
          </div>
        );
      })}
    </>
  );
};

export default OAuth;

OAuth.propTypes = {
  type: PropTypes.string.isRequired,
};
