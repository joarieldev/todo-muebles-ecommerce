import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="container col-md-10 mx-auto col-lg-5">
      <section className="card text-center my-5 p-2">
        <div className="p-4">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} alt="React logo" />
          </a>
        </div>
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
          Vite + React
        </h1>
        <button
          className="btn btn-primary"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
          Click on the Vite and React logos to learn more
        </p>
      </section>
    </main>
  )
}

export default App
