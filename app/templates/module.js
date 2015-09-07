/** @jsx hJSX */

import {Rx} from '@cycle/core';
import {hJSX} from '@cycle/dom'; // eslint-disable-line

const DIALOGUE_NAME = `<%= moduleName %>`;

let n = 0;

function randomNamespace() {
  return `${n++}`;
}

function <%= moduleNameCamelized %>({DOM, props$}, optNamespace = randomNamespace()) {
  const namespace = optNamespace.trim();

  return {
    DOM: props$.map(
      (props) => ( // eslint-disable-line
        <div className={`${namespace} ${DIALOGUE_NAME}`}>
          {props.text}
        </div>
      )
    ),
  };
}

export default <%= moduleNameCamelized %>;
