import "./title.scss";

function Title() {
  return (
    <header className="title__header">
      <h1 className="title__header-title">BOXING</h1>
      <img
        src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/gloves.png`}
        alt="boxing gloves"
      />
      <h1 className="title__header-title">TRAINER</h1>
    </header>
  );
}

export default Title;
