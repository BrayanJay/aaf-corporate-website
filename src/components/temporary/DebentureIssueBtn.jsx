//import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { HashLink } from "react-router-hash-link";

const DebentureIssueBtn = ({ left, right, top, bottom, navigation, children }) => {
    //const { t } = useTranslation();
    //const data = t("tempData", { returnObjects: true });
  return (
    <div
      className={` ${top ? `top-${top}` : ""} ${bottom ? `bottom-${bottom}` : ""} ${
        left ? `left-${left}` : ""
      } ${right ? `right-${right}` : ""}`}
    >
        <HashLink smooth to={navigation}>
      <button className="rounded-full bg-lightbluegradient hover:bg-darkbluegradient hover:shadow-lg hover:shadow-white/20 text-white px-4 py-2 shadow-lg absolute z-30">
        {children || "Debenture Issue 2024"}
      </button>
      </HashLink>
    </div>
  );
};

// Add PropTypes validation
DebentureIssueBtn.propTypes = {
  left: PropTypes.string, // Optional, should be a string
  right: PropTypes.string, // Optional, should be a string
  top: PropTypes.string, // Optional, should be a string
  bottom: PropTypes.string, // Optional, should be a string
  navigation: PropTypes.string.isRequired, // Required, should be a string
  children: PropTypes.node, // Optional, can be a React node (text, JSX, etc.)
};

// Provide default props
DebentureIssueBtn.defaultProps = {
  left: null,
  right: null,
  top: null,
  bottom: null,
  children: null,
};

export default DebentureIssueBtn;
