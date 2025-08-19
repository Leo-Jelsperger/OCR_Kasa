interface Props {
  tags: string[];
}

export default function LogementTags({tags}: Props) {
  return (
    <div className="logement-tags">
      {tags.map((tag) => {
        return <div className="tag">{tag}</div>;
      })}
    </div>
  );
}
