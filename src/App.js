import UseMemo from "./Hooks/useMemo";
import UseState from "./Hooks/useState";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <UseState />
      <hr />
      <UseMemo />
      <hr />
      <>
        <h3>As a result,</h3>
        <dl>
          <b>Without Use useMemo</b>
          <dd>
            Without using the useMemo when we click on "Number" button the page
            rerender again it's okay but the function of "Computed Value" it
            invoked every time that means it's not related to "Number" but it's
            still invoked the function.
          </dd>
          <dd>
            Which means with the help of useState hook you can manage or update
            the state to preventing the render and controlled the performance of
            site to use the useMemo hooks.
          </dd>
        </dl>
      </>
    </div>
  );
}
