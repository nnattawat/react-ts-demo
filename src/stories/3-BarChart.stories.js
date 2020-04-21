import React from 'react';
import { withKnobs, text, number, object } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import BarChart from '../components/barChart';

export default {
  title: 'Bar Chart',
  decorators: [withKnobs, withA11y],
  component: BarChart
};


export const BasicBarChart = () => <BarChart
  width={number("width", 1000)}
  height={number("height", 300)}
  bars={object('bars', bars)}
  xAxis={text('xAxis', 'province')}
  data={object('data', data)}
/>;

const bars = [
  {dataKey: 'confirmed', fill: '#8884d8'},
  {dataKey: 'recovered', fill: '#82ca9d'},
  {dataKey: 'deaths', fill: 'red'}
];

const data = [
  {
    "city": "",
    "province": "Australian Capital Territory",
    "country": "Australia",
    "lastUpdate": "2020-04-20 23:44:50",
    "keyId": "Australian Capital Territory, Australia",
    "confirmed": 103,
    "deaths": 3,
    "recovered": 88
  },
  {
    "city": "",
    "province": "New South Wales",
    "country": "Australia",
    "lastUpdate": "2020-04-20 23:44:50",
    "keyId": "New South Wales, Australia",
    "confirmed": 2926,
    "deaths": 26,
    "recovered": 1379
  },
  {
    "city": "",
    "province": "Northern Territory",
    "country": "Australia",
    "lastUpdate": "2020-04-20 23:44:50",
    "keyId": "Northern Territory, Australia",
    "confirmed": 28,
    "deaths": 0,
    "recovered": 9
  },
  {
    "city": "",
    "province": "Queensland",
    "country": "Australia",
    "lastUpdate": "2020-04-20 23:44:50",
    "keyId": "Queensland, Australia",
    "confirmed": 1015,
    "deaths": 6,
    "recovered": 738
  },
  {
    "city": "",
    "province": "South Australia",
    "country": "Australia",
    "lastUpdate": "2020-04-20 23:44:50",
    "keyId": "South Australia, Australia",
    "confirmed": 435,
    "deaths": 4,
    "recovered": 331
  },
  {
    "city": "",
    "province": "Tasmania",
    "country": "Australia",
    "lastUpdate": "2020-04-20 23:44:50",
    "keyId": "Tasmania, Australia",
    "confirmed": 180,
    "deaths": 7,
    "recovered": 67
  },
  {
    "city": "",
    "province": "Victoria",
    "country": "Australia",
    "lastUpdate": "2020-04-20 23:44:50",
    "keyId": "Victoria, Australia",
    "confirmed": 1319,
    "deaths": 14,
    "recovered": 1172
  },
  {
    "city": "",
    "province": "Western Australia",
    "country": "Australia",
    "lastUpdate": "2020-04-20 23:44:50",
    "keyId": "Western Australia, Australia",
    "confirmed": 541,
    "deaths": 7,
    "recovered": 340
  }
];

