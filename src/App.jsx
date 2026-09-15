function App() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Mijn website</a>
          <div className="d-flex gap-3">
            <a className="nav-link d-inline-block" href="#">Home</a>
            <a className="nav-link d-inline-block" href="#over-ons">Over ons</a>
            <a className="nav-link d-inline-block" href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <h1 className="text-dark">Hello World!</h1>
      </div>
    </>
  )
}

export default App