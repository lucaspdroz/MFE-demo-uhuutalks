import { createSignal } from 'solid-js'
import img from '../assets/solid.png'

export default () => {
    const [count, setCount] = createSignal(0)
    return (
        <>
            <h2>Solid</h2>
            <img src={img}/>
            <p>Count = {count()}</p>
            <button onClick={() => setCount(count() + 1)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">add One </button>
        </>
    )
}