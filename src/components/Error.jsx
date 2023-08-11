import { useData } from "../contexts/MainContext";

function Error() {
  const { errorMsg } = useData();

  return (
    <div className="bg-red-500 mt-6 w-3/12 p-6 text-2xl flex outline outline-white  flex-col items-center gap-6">
      <p>Current status: {errorMsg}</p>
      <p>Failed to fetch Question Data!</p>
    </div>
  );
}

export default Error;
