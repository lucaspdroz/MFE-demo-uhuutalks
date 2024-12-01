import React, { Suspense, lazy, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import SafeComponent from "./Error/SafeComponent"
import "./index.css";

const HeaderElement = lazy(() => import('remote/HeaderElement'))
import VueApp from 'vue_count/VueApp'
import CounterWrapper from 'solidjs/CounterWrapper'

const App = () => {
  const vueRef = useRef(null)
  const solidRef = useRef(null)

  useEffect(() => {
    VueApp(vueRef.current)
    CounterWrapper(solidRef.current)
  }, [])

  return (
    <div className="container">
      <div>Name: host</div>
      {/* Jeito correto, usando asyncronismo e tratativa de erros */}
      {/* É recomendado que no fallback seja adicionado um skelleton */}
      <Suspense fallback={<p>loading...</p>}>
        <SafeComponent>
          <div className="react">
            <HeaderElement title="Componente Assync, com tratativa de erros, esse é o cara!" />
          </div>
        </SafeComponent>
      </Suspense>
      <Suspense fallback={<p>loading...</p>}>
        <SafeComponent>
          <div className="vue" ref={vueRef}></div>
        </SafeComponent>
      </Suspense>
      <Suspense fallback={<p>loading...</p>}>
        <SafeComponent>
          <div className="solid" ref={solidRef}></div>
        </SafeComponent>
      </Suspense>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));
