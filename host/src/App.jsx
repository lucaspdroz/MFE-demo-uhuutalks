import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SafeComponent from "./Error/SafeComponent"

// import HeaderElement from 'remote/HeaderElement'
const HeaderElement = lazy(() => import('remote/HeaderElement'))
const VueApp = lazy(() => import('vue_count/VueApp'))


const App = () => {
  return (
    <div className="container">
      {/* <HeaderElement title="Componente Sincrono, só funciona Local" /> */}
      <div>Name: host</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>


      <Suspense fallback={<p>loading...</p>}>
        <SafeComponent>
          <VueApp />
        </SafeComponent>
      </Suspense>

      {/* Jeito correto, usando asyncronismo e tratativa de erros */}
      {/* É recomendado que no fallback seja adicionado um skelleton */}
      <Suspense fallback={<p>loading...</p>}>
        <SafeComponent>
          <HeaderElement title="Componente Assync, com tratativa de erros, esse é o cara!" />
        </SafeComponent>
      </Suspense>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));
