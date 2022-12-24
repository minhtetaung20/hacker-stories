import Item from "./Item";

export default function List({ stories, onRemoveItem }) {
  return (
    <ul>
      {stories.map((item) => {
        return (
          <Item item={item} key={item.objectID} onRemoveItem={onRemoveItem} />
        );
      })}
    </ul>
  );
}
