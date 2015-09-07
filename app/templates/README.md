# <%= moduleName %>

> My <%= superb %> module

## Installation

```shell
$ npm install --save <%= moduleName %>
```

## Usage

```js
import <%= moduleNameCamelized %> from '<%= moduleName %>';

const <%= moduleNameCamelized %>Instance = <%= moduleNameCamelized %>({DOM});
```

## API

### <%= moduleNameCamelized %>({DOM, props$}, optNamespace)

#### DOM

Type: `Function`

DOM driver function.

#### props$

Type: `Observable`

Sequence of properties.

#### optNamespace

Type: `String`
Default: `n++`, `let n = 0;`

Optional CSS class name as namespace.

## Licence

MIT © [<%= name %>](<%= websiteUrl %>) 
