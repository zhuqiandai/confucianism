---
tags: [functional]
---

`type classes` and `instance`

## type classes

Definition: specifying a set of functions or constrant names, together with their respective types, that must exist for every type that belongs to the class

e.g. `Equals`

## instance

Laws:

- **Reflexivity** `equals(x, x) === true`
- **Symmetry** `equals(x, y) === equals(y, x)`
- **Transitivity** `equals(x, y) && equals(y, z) === equals(x, z)`
