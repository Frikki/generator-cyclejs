/** @jsx hJSX */

import {hJSX} from '@cycle/dom'; // eslint-disable-line

function model(props$, actions) {
  return props$.combineLatest(
    actions.isClicked$,
    (props, isClicked) => ({
      data: isClicked ?
        <span style={{whiteSpace: `nowrap`}}>I was clicked</span> :
        `Click me!`,
      text: props.text,
    })
  );
}

export default model;
