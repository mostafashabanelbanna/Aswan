import DirectoratesContainer from "./directorates-services-container";

const DirectoratesHome = (props) => {
  let id = props.match.params.id;
  let name = props.match.params.name;
  return (
    <div>
      <DirectoratesContainer id={id} name={name} />
    </div>
  );
};

export default DirectoratesHome;
