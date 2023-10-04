import { useStateStore } from "@/store/StateStore";

export default function MapSideBar() {
  const state = useStateStore((state) => state.state);

  return (
    <>
      <div className="hidden md:block w-72 h-screen border-l p-4">
        {state.length === 0 ? <p>Clique em um estado</p> : state}
      </div>

      <div className="absolute md:hidden bottom-0 left-1/2 -translate-x-1/2 w-full h-32 text-center border py-4">
        {state.length === 0 ? <p>Clique em um estado</p> : state}
      </div>
    </>
  );
}
