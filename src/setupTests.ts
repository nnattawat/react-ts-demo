// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'; // ES6
import React from 'react';

global.React = React;
global.renderer = renderer;
