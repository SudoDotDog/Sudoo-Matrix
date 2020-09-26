# Add Operation

`Sudoo-Matrix` support add operation. Add operation only can process a matrix with the same size.

## Basic Usage

For matrix typed with `string` or `number`, add operation can be run at the default setting.

```ts
import { matrixAdd, Matrix } from "@sudoo/matrix";

const result: Matrix<number> = matrixAdd(
    [
        [1, 1],
        [1, 1],
    ],
    [
        [1, 2],
        [3, 4],
    ],
);
```

The `result` variable type for the above code is

```ts
[
    [2, 3],
    [4, 5],
]
```

## Function Override Usage

For matrix type other than `string` or `number`, add operation much run with an override add function.

```ts
import { matrixAdd, Matrix } from "@sudoo/matrix";

const result: Matrix<number> = matrixAdd(
    [
        [true, true],
        [true, true],
    ],
    [
        [true, false],
        [true, false],
    ],
    (a: boolean, b: boolean) => {
        return Number(a) + Number(b);
    },
);
```

The `result` variable type for the above code is

```ts
[
    [2, 1],
    [2, 1],
]
```
