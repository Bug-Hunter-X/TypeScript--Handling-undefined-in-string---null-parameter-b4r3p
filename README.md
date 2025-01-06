# TypeScript: Handling undefined in string | null parameter

This example demonstrates a common issue in TypeScript when dealing with parameters that can be a string, null, or undefined.  The function `printName` is designed to handle null values gracefully, but it throws an error when passed `undefined` because the type guard `if (name)` only checks for nullish values. 

The solution shows how to explicitly check for both null and undefined to resolve the error.