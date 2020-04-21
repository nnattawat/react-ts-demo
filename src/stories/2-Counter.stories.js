import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number } from "@storybook/addon-knobs";
import Counter from '../components/counter';

export default {
  title: 'Counter',
  decorators: [withKnobs],
  component: Counter
};

export const BasicCount = () => <Counter
  count={number("Count", 2)}
  subtractText={text("Subtract Text", 'subtract')}
  addText={text("Add Text", 'add')}
  onChange={action('count changed')}
/>;
