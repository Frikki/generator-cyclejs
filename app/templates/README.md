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

### <%= moduleNameCamelized %>({DOM, props$}, optCycleId)

#### DOM

Type: `Function`

DOM driver function.

#### props$

Type: `Observable`

Sequence of properties.

#### optCycleId

Type: `String`
Default: `` `${<%= moduleName %>}-${idSuffix++}` ``, `let idSuffix = 0;`

Optional CSS class name as cycle Id.

#### Returns

Type: `Object`

`{DOM, state$}`

## Licence

MIT © [<%= name %>](<%= websiteUrl %>) 
