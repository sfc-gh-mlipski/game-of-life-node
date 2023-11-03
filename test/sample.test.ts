import {someCode} from "../src/sample";

describe('sample', () => {
    it('should work', () => {
        expect(someCode()).toEqual("result")
    });
});