/**
 * @author WMXPY
 * @namespace Matrix
 * @description Add
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';

describe('Given [Add] function', (): void => {

    const chance: Chance.Chance = new Chance('matrix-add');

    it('Placeholder', (): void => {

        expect(chance.string()).to.be.not.equal(chance.string());
    });
});
