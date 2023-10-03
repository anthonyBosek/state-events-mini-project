const Button = ({ txt, className, setCategory }) => {
  return (
    <button className={className} onClick={() => setCategory(txt)}>
      {txt}
    </button>
  );
};

export default Button;
