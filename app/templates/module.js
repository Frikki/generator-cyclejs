import cuid from 'cuid';
import intent from './<%= moduleName %>/intent.js';
import model from './<%= moduleName %>/model.js';
import view from './<%= moduleName %>/view.js';

const DIALOGUE_NAME = `<%= moduleName %>`;

function <%= moduleNameCamelized %>({DOM, props$}) {
  const id = cuid();
  const actions = intent(DOM, id);
  const state$ = model(props$, actions);

  return {
    DOM: view(state$, id),
    id,
    state$,
  };
}

export {DIALOGUE_NAME};

export default <%= moduleNameCamelized %>;
