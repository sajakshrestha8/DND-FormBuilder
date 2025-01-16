import { useDrag } from "react-dnd";
import InputFeild from "../../Components/InputFeild/InputFeild";
import Select from "../../Components/Select/Select";
import ItemTypes from "../../Constants";
import { Children } from "react";

const ComponentCollection = ({ item }) => {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { item },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    [item]
  );
  return (
    <>
      <div ref={dragRef}>
        <div>{item.label}</div>
      </div>
    </>
  );
};

export default ComponentCollection;
