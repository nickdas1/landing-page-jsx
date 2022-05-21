export default function ServiceBlock(props) {
  return (
    <div>
      <img src={props.url} alt={props.title} />
      <p>{props.title}</p>
    </div>
  );
}
