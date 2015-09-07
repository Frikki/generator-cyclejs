/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line

const DIALOGUE_NAME = `yeoman-test`;

let idSuffix = 0;

function makeCycleId() {
  return `${DIALOGUE_NAME}-${idSuffix++}`;
}

function intent(DOM, cycleId) {
  return {
    isClicked$: DOM.select(`.${cycleId}`).events(`click`)
      .map(() => true)
      .startWith(false),
  };
}

function model(actions) {
  return actions.isClicked$.map(isClicked => {
    return {
      data: isClicked ?
        <span style={{whiteSpace: `nowrap`}}>I was clicked</span> :
        `Click me!`,
    };
  });
}

function view({props$, state$}, cycleId) {
  return props$.combineLatest(
    state$,
    (props, state) => ( // eslint-disable-line
      <div className={`${cycleId} ${DIALOGUE_NAME}`}>
        {props.text} {state.data}
      </div>
    )
  );
}

function <%= moduleNameCamelized %>({DOM, props$}, optCycleId = makeCycleId()) {
  const cycleId = optCycleId.trim();
  const actions = intent(DOM, cycleId);
  const state$ = model(actions);

  return {
    DOM: view({props$, state$}, cycleId),
  };
}

export default <%= moduleNameCamelized %>;
