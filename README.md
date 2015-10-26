# is-subchars

> Predicate that returns true if all characters are found in provided string.

# Install

```bash
npm install is-subchars
```

```bash
bower install is-subchars
```

# Usage

```javascript
const isSubchars = require('is-subchars');

console.log(isSubchars(`who`, `hello world`)); // true
console.log(isSubchars(`foo`, `hello world`)); // false
console.log(isSubchars(`I will kill you.`, `I really like you, I'll do what you said.`)); // true
```

# Test

```bash
npm test
```

# License

MIT
