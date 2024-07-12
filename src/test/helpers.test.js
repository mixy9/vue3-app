import {sum} from "../utils/helpers.ts";
import { expect, test, it } from 'vitest'

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})