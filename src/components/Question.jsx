import { useData } from "../contexts/MainContext";

function Question() {
  const { data, index } = useData();

  return (
    <div className="	tracking-widest	bg-cyan-950	  border-2  p-4 mx-4 sm:mx-0  mb-2 sm:w-4/12 text-center rounded-2xl text-xl ">
      <p>{data[index].question}</p>
    </div>
  );
}

export default Question;
