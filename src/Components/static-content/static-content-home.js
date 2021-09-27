import StaticContent from "./static-content";
import StaticContentDetails from "./static-content-details";

const StaticContentHome = (props) => {
    let id=props.match.params.id
    let title=props.match.params.title
  return (
    <div>
      <StaticContent id={id} title={title} />
      {/* <StaticContentDetails code={code}/> */}
    </div>
  );
};

export default StaticContentHome;