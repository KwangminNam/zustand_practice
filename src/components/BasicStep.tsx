import { useBearStore } from "../stores/bearStore";

export default function BasicStep() {
  const { bears , increaseBears ,decreaseBears } = useBearStore();
  // 구조분해 할당으로 가능  const bears2 = useBearStore(state => state.bears)

  return (
    <div>
      <button onClick={increaseBears}>+</button>
      <h1>{bears}</h1>
      <button onClick={decreaseBears}>-</button>
    </div>
  )
}
