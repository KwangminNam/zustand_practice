import { useCateStore } from "../stores/catStroe";

export default function SecondStep() {
  const {
    cats: { bigCats, smallCats },
    increaseBigCats,
    increaseSmallCats
  } = useCateStore();

  return (
    <div>
      <h1>BIG CAT:{bigCats}</h1>
      <button onClick={increaseBigCats}>+</button>
      <h1>SMALL CAT:{smallCats}</h1>
      <button onClick={increaseSmallCats}>+</button>
    </div>
  );
}
