import demoIcon from "./btnDemo.svg";

const BtnDemo = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={demoIcon} alt="" />
      Check Live
    </a>
  );
};

export default BtnDemo;
