function HomePage() {
  return (
    <section className="panel">
      <h2>When To Use useMemo</h2>
      <p>
        useMemo caches a computed value between renders. It is useful when a calculation is expensive and
        the inputs do not change often.
      </p>

      <h3>Use it when</h3>
      <ul>
        <li>You run costly loops, sorting, grouping, or transformation on large datasets.</li>
        <li>You pass derived objects or arrays to memoized child components and need stable references.</li>
        <li>You want to avoid recomputing the same value when unrelated state changes.</li>
      </ul>

      <h3>Avoid it when</h3>
      <ul>
        <li>The computation is cheap and runs fast anyway.</li>
        <li>You are adding it blindly without a measurable bottleneck.</li>
        <li>The dependency array changes almost every render, so cache reuse is minimal.</li>
      </ul>

      <p className="note">
        Rule of thumb: profile first, then add useMemo where it reduces real work.
      </p>
    </section>
  )
}

export default HomePage
