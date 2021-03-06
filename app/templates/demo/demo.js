/** @jsx hJSX */

import {Rx} from '@cycle/core';
import {hJSX} from '@cycle/dom'; // eslint-disable-line
import <%= moduleNameCamelized %> from '../<%= moduleName %>.js';

function demo({DOM}) {
  const <%= moduleNameCamelized %>Instance = <%= moduleNameCamelized %>(
    {DOM, props$: Rx.Observable.just({
      text: `Unicorns cycle on rainbows!`,
    })}
  );

  return {
    DOM: Rx.Observable.combineLatest(
      <%= moduleNameCamelized %>Instance.DOM,
      <%= moduleNameCamelized %>Instance.state$,
      (<%= moduleNameCamelized %>VTree, <%= moduleNameCamelized %>State) => ( // eslint-disable-line
        <div className=
               {`template-DemoPages_sectionContainer isVertical isCentered`}>
          <h4>Default</h4>
          <section className={`template-DemoPages_verticalSection`}>
            {<%= moduleNameCamelized %>VTree}

            <p>The <%= moduleName %> state data is: {<%= moduleNameCamelized %>State.data}</p>
          </section>
        </div>
      )
    ),
  };
}

export default demo;
