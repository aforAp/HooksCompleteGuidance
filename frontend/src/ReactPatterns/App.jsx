import Accordion from "./components/Accordion";
import SearchableList from "./components/SearchableList/SearchableList.jsx";
import { PLACES } from "./places.ts";

import "./index.css";
import Place from "./components/Place.jsx";
function App() {
  const savannnaImg = "/assets/african-savanna.jpg";
  const amazonImg = "/assets/amazon-river.jpg";
  const caribbeanImg = "/assets/caribbean-beach.jpg";
  const desertImg = "/assets/desert-dunes.jpg";
  const forestImg = "/assets/forest-waterfall.jpg";
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="experience" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We got 20 years of experience
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>You can't go wrong with us.</p>
                <p>
                  We are in the business of providing excellent service for over
                  20 years.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="local-guides" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              We working with local guides
            </Accordion.Title>
            <Accordion.Content className="accordion-item-content">
              <article>
                <p>We are not doing this along from our office.</p>
                <p>
                  Instead we are working with local guides to provide you with
                  the best experience possible.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={["item 1", "item 2"]} itemKeyFn={(item) => item}>
          {(item) => <Place item={item} />}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
