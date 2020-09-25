/**
 * @author WMXPY
 * @namespace Matrix
 * @description Util
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';

describe('Given [Util] helper functions', (): void => {

    const chance: Chance.Chance = new Chance('matrix-util');

    it('Placeholder', (): void => {

        expect(chance.string()).to.be.not.equal(chance.string());
    });
});
