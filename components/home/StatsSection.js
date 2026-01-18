export default function StatsSection() {
  const squareDecor = Array.from({ length: 4 });

  return (
    <section className="stats" aria-labelledby="stats-heading">
      <div className="stats__grid">
        {squareDecor.map((_, index) => (
          <span
            key={`stats-square-${index}`}
            className="square stats__square"
            aria-hidden="true"
          />
        ))}

        <div className="stats__cell stats__title">
          <h2 id="stats-heading">
            <span>
              <span className="design">DESIGNING</span>
              <span className="and">AND</span>
            </span>
            <span className="blue building">BUILDING</span>
          </h2>
        </div>

        <div className="stats__cell stats-cell__mob stats__count">
          <div className="counter" aria-label="17564">
            <span className="counter-digit">1</span>
            <span className="counter-digit three-first">7</span>
            <span className="counter-digit five-first">5</span>
            <span className="counter-digit two-first">6</span>
            <div className="stats-digit text-block">
              <p className="counter-digit four-first">4</p>
            </div>
          </div>
          <div className="text-block">
            <p className="stats__label">RESIDENTIAL</p>
          </div>
        </div>

        <div className="stats__cell stats__text">
          <div className="text-block">
            <p>
              From concept to implementation, architecture means embracing a
              wide variety of projects, styles, and challenges, each
              contributing to a richer understanding of the built environment.
            </p>
          </div>
        </div>

        <div className="stats__cell stats-cell__mob">
          <div className="counter" aria-label="125">
            <span className="counter-digit">1</span>
            <span className="counter-digit">2</span>
            <div className="stats-digit text-block">
              <p className="counter-digit">5</p>
            </div>
          </div>
          <div className="text-block">
            <p className="stats__label">Master Plans Feasibility</p>
          </div>
        </div>

        <div className="stats__cell stats-cell__mob">
          <div className="counter" aria-label="554">
            <span className="counter-digit">5</span>
            <span className="counter-digit eight-second">5</span>
            <div className="stats-digit text-block">
              <p className="counter-digit seven-second">4</p>
            </div>
          </div>
          <div className="text-block">
            <p className="stats__label">CIVIC PROJECTS</p>
          </div>
        </div>

        <div className="stats__cell stats-cell__mob">
          <div className="counter" aria-label="125">
            <span className="counter-digit">1</span>
            <span className="counter-digit">2</span>
            <div className="stats-digit text-block">
              <p className="counter-digit">5</p>
            </div>
          </div>
          <div className="text-block">
            <p className="stats__label">COMMERCIAL PROJECTS</p>
          </div>
        </div>

        <div className="stats__cell stats-cell__mob stats__cell--end">
          <div className="counter" aria-label="4096">
            <span className="counter-digit two-third">4</span>
            <span className="counter-digit five-third">0</span>
            <span className="seven-third" aria-hidden="true">
              7
            </span>
            <span className="counter-digit one-third">9</span>
            <div className="stats-digit text-block">
              <p className="counter-digit six-third">6</p>
            </div>
          </div>
          <div className="text-block">
            <p className="stats__label">Education Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
