import {create} from 'zustand';


const useStore = create(
    (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
    })  

);


export default function GetCount() {

const {count, increment, decrement} = useStore();

return(
    <>
    <h1>Total Counts are: {count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </>
);
}
