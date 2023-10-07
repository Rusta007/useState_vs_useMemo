# useState_vs_useMemo
Created with CodeSandbox
useState is used to manage state variables (count and number) that trigger component re-renders when their values change.
In the UseState component, the handleButton function is called directly in JSX, causing it to be recomputed on every render, even if count or number didn't change.
useMemo is used to memoize the result of an expensive computation (count * 2) and optimize performance.
In the UseMemo component, the memoized value (handleButton) is recalculated only when the count state changes. This avoids unnecessary recomputations.
Use Case:
#### useMemo is useful when you have expensive calculations or computations in your component that depend on certain variables. It ensures that those calculations are only performed when the dependencies change, improving performance and preventing redundant calculations
