import { decrement, increment, increrementByValue } from "./redux/features/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hook"



function App() {

  const { count } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  const isDivisibleByFive = () => {
    return count % 5 === 0;
  };

  return (
    <div className="mx-auto h-screen justify-centerm items-center w-full">
      <h1 className="text-3xl font-extrabold text-red-700 mx-auto text-center py-10">React with Redux</h1>
      <div className="mx-auto flex justify-center items-center w-full">
        <button onClick={() => dispatch(increment())} className="btn px-2 py-3 text-white
         bg-orange-300 text-center rounded-md font-semibold">Increment</button>
        <h2 className="mr-5 ml-5 text-3xl">{count}</h2>
        <button onClick={() => dispatch(decrement())} className="btn px-2 py-3 text-white
         bg-blue-300 text-center rounded-md font-semibold">Decrement</button>

        {/*  */}
        <button onClick={() => dispatch(increrementByValue(5))} className="btn px-2 py-3 text-white
         bg-orange-300 text-center rounded-md font-semibold">Increment by value</button>
        <h2 className="mr-5 ml-5 text-3xl">{count}</h2>
        <button onClick={() => dispatch(decrement())} className="btn px-2 py-3 text-white
         bg-blue-300 text-center rounded-md font-semibold">Decrement</button>
      </div>
      <div>
        {isDivisibleByFive() ? <button className="btn px-2 py-3 text-white
         bg-blue-300 text-center rounded-md font-semibold">Mohiuddin</button> : "hi"}
      </div>
    </div>
  )
}

export default App
