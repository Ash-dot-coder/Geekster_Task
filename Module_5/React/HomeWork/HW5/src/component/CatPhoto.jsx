import "./CatPhoto.css";

const CatPhoto = (props) => {
  const handleClick = () => {
    props.onImageClick(props.image); 
  };

  return (
    <>
      
      <div className="photos">
        <a href="#" onClick={(e) => e.preventDefault()}>
          <img src={props.image} alt="Cat" onClick={handleClick} />
        </a>
      </div>
    </>
  );
};

export default CatPhoto;
