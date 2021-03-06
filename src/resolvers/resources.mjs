import { getCachedResult } from '../caching.mjs'
import { computeEntityUsage } from '../analysis/index.mjs'

import { getOtherKey } from '../helpers.mjs'
export default {
    allYears: async (parent, args, context, info) => {
        const allYears = await getCachedResult(computeEntityUsage, context.db, [
            `resources.${getOtherKey(parent.id)}`
        ])
        return allYears
    },
    year: async (parent, args, context, info) => {
        const allYears = await getCachedResult(computeEntityUsage, context.db, [
            `resources.${getOtherKey(parent.id)}`
        ])
        return allYears.find(y => y.year === args.year)
    }
}
