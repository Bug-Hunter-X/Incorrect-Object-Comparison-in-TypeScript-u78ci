# Incorrect Object Comparison in TypeScript

This repository demonstrates a common error in TypeScript when comparing objects, specifically the failure to handle nested objects correctly.

## Bug Description
The `compareObjects` function uses strict equality (`===`) to compare objects.  This approach fails when comparing objects with nested structures, as it doesn't recursively compare nested object properties.  The comparison only succeeds if both objects refer to the same instance in memory, not if they have the same property values.

## Solution
The `bugSolution.ts` file provides a corrected `compareObjects` function that addresses this issue by recursively comparing nested objects using a depth-first approach. 

This solution ensures that the function accurately compares the structure and values of objects regardless of whether they are primitive types or nested objects.
