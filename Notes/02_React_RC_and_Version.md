# React RC and Version

## What is React RC?

- **RC** means **Release Candidate**.
- A React release candidate is a prerelease package published before the final stable version.
- It is intended for testing and early feedback, with the goal of catching issues before the official stable release.
- RC builds usually have version strings like `18.3.0-rc.0` or `19.0.0-rc.1`.

## How React Versioning Works

React follows **semantic versioning** in the form:

- `major.minor.patch`

Meaning:
- `major` version changes may include breaking API changes or major rewrites.
- `minor` version changes add new features in a backward-compatible way.
- `patch` version changes contain bug fixes and small improvements.

## Stable vs RC

- A **stable version** is ready for production use, for example `react@18.2.0`.
- An **RC version** is for testing upcoming releases, for example `react@19.0.0-rc.0`.
- Use RC versions if you want to validate your app against the next React release, but avoid them in critical production deployments unless you have a specific need.

## What is React Canary?

- **React Canary** is the most cutting-edge prerelease channel for React.
- It contains the latest changes and experiments before they appear in release candidates.
- Canary builds are updated frequently and may be unstable, so they are best used by library authors and contributors who need to test upcoming API changes early.
- A canary version string can look like `react@canary` or `react@19.0.0-canary.0`.

## Why Use an RC?

- To try new React features before the stable release.
- To test compatibility with your components and library dependencies.
- To provide early feedback to the React team if you find bugs.

## Example

- Install stable React:
  - `npm install react react-dom`
- Install a release candidate:
  - `npm install react@19.0.0-rc.0 react-dom@19.0.0-rc.0`

## Summary

React RC is a prerelease version that gives early access to new features while still being close to the final API. React version numbers denote stability and compatibility, with stable releases recommended for production and RC builds recommended for testing.