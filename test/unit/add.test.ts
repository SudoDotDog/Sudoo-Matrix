/**
 * @author WMXPY
 * @namespace Matrix
 * @description Add
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { matrixAdd } from '../../src/add';
import { Matrix } from '../../src/declare';

describe('Given [Add] function', (): void => {

    const chance: Chance.Chance = new Chance('matrix-add');

    it('should be able to throw when invalid adding', (): void => {

        const left: Matrix<number> = [
            [chance.natural(), chance.natural()],
            [chance.natural(), chance.natural()],
        ];
        const right: Matrix<number> = [
            [chance.natural(), chance.natural()],
        ];

        const runner: () => any = () => matrixAdd(left, right);

        expect(runner).to.be.throw("[Sudoo-Matrix] Only matrixes with same size can add");
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

        const result: Matrix<number> = matrixAdd(left, right);

        expect(result).to.be.deep.equal([
            [3, 3],
            [7, 7],
        ]);
    });
});
