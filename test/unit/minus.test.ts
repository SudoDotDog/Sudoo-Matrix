/**
 * @author WMXPY
 * @namespace Matrix
 * @description Minus
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { matrixMinus } from '../../src';
import { Matrix } from '../../src/declare';

describe('Given [Minus Matrix] function', (): void => {

    const chance: Chance.Chance = new Chance('matrix-add');

    it('should be able to throw when invalid adding', (): void => {

        const left: Matrix<number> = [
            [chance.natural(), chance.natural()],
            [chance.natural(), chance.natural()],
        ];
        const right: Matrix<number> = [
            [chance.natural(), chance.natural()],
        ];

        const runner: () => any = () => matrixMinus(left, right);

        expect(runner).to.be.throw("[Sudoo-Matrix] Only matrixes with same size can minus");
    });

    it('should be able to add two matrix together', (): void => {

        const left: Matrix<number> = [
            [1, 2],
            [3, 4],
        ];
        const right: Matrix<number> = [
            [2, 1],
            [4, 3],
        ];

        const result: Matrix<number> = matrixMinus(left, right);

        expect(result).to.be.deep.equal([
            [-1, 1],
            [-1, 1],
        ]);
    });
});
