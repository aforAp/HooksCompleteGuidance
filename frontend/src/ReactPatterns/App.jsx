import Accordion from "./components/Accordion";
import "./index.css";
function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item
            id="experience"
            className="accordion-item"
            title="We got 20 years of experience"
          >
            <article>
              <p>You can't go wrong with us.</p>
              <p>
                We are in the business of providing excellent service for over
                20 years.
              </p>
            </article>
          </Accordion.Item>
          <Accordion.Item
            id="local-guides"
            className="accordion-item"
            title="We working with local guides"
          >
            <article>
              <p>We are not doing this along from our office.</p>
              <p>
                Instead we are working with local guides to provide you with the
                best experience possible.
              </p>
            </article>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
