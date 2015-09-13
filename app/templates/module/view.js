/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line
import {DIALOGUE_NAME} from '../<%= moduleName %>.js';

function view(state$, id) {
  return state$.map((state) => ( // eslint-disable-line
      <div className={`${id} ${DIALOGUE_NAME}`}>
        {state.text} {state.data}
      </div>
    )
  );
}

export default view;
