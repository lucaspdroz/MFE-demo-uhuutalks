import { createSignal } from 'solid-js'

export default () => {
    const [count, setCount] = createSignal(0)
    return (
        <div>
            <h2>Solid</h2>
            <p>Count = {count()}</p>
            <button onClick={() => setCount(count() + 1)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">add One </button>
        </div>
    )
}