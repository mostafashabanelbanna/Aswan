import StaticContent from "./static-content";
import StaticContentDetails from "./static-content-details";

const StaticContentHome = (props) => {
    let id=props.match.params.id
    let title=props.match.params.title
    let code = props.match?.params?.code
    let name = props.match?.params?.name
  return (
    <div>
      <StaticContent id={id} title={title} code={code} name={name} />
      {/* <StaticContentDetails code={code}/> */}
    </div>
  );
};

export default StaticContentHome;