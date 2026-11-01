import type {GraphSpec} from './graphs';
import {radianTicks} from './graphs';

// Exact examples from the brief 128 d01, d03, d05, d07, d08 and d10 packs.
export const exponential = (x: number) => 4 * Math.exp(2 * x - 1);
export const exponentialDerivative = (x: number) => 8 * Math.exp(2 * x - 1);
export const quotient = (x: number) => Math.exp(x) / (x + 1);
export const quotientDerivative = (x: number) => x * Math.exp(x) / ((x + 1) ** 2);
export const objective = (x: number) => x + 4 / x;
export const objectiveDerivative = (x: number) => 1 - 4 / (x * x);
export const exponentialGraph: GraphSpec = {fn: exponential, x: [-0.5, 1.2], y: [0, 18], width: 800, height: 530, xTicks: [{value: 0, label: '0'}, {value: 0.5, label: '1/2'}, {value: 1, label: '1'}], yTicks: [0, 4, 8, 12, 16].map(value => ({value, label: String(value)})), label: 'f(x) = 4e^(2x−1)'};
export const logGraph: GraphSpec = {fn: Math.log, x: [-1, 5], y: [-3, 2], width: 920, height: 620, domain: [{from: 0, to: Infinity}], asymptotes: [{axis: 'x', value: 0, label: 'x = 0'}], xTicks: [0, 1, 2, 3, 4, 5].map(value => ({value, label: String(value)})), yTicks: [-3, -2, -1, 0, 1, 2].map(value => ({value, label: String(value)})), label: 'Natural logarithm, x > 0'};
export const sineGraph: GraphSpec = {fn: Math.sin, x: [0, 2 * Math.PI], y: [-1.5, 1.5], width: 1040, height: 360, xTicks: radianTicks(0, 2 * Math.PI), yTicks: [-1, 0, 1].map(value => ({value, label: String(value)})), label: 'Sine in radians'};
export const quotientGraph: GraphSpec = {fn: quotient, x: [-3, 1.3], y: [-4, 5], width: 900, height: 490, domain: [{from: -Infinity, to: -1}, {from: -1, to: Infinity}], asymptotes: [{axis: 'x', value: -1, label: 'x = −1'}], xTicks: [-3, -2, -1, 0, 1].map(value => ({value, label: String(value)})), yTicks: [-4, -2, 0, 2, 4].map(value => ({value, label: String(value)})), label: 'e^x/(x+1), x ≠ −1'};
export const objectiveGraph: GraphSpec = {fn: objective, x: [0, 4.5], y: [0, 10], width: 880, height: 620, domain: [{from: 0.5, to: 4, includeFrom: true, includeTo: true}], markers: [{x: 0.5, y: 8.5, kind: 'included'}, {x: 2, y: 4, kind: 'included'}, {x: 4, y: 5, kind: 'included'}], xTicks: [{value: 0.5, label: '1/2'}, {value: 2, label: '2'}, {value: 4, label: '4'}], yTicks: [0, 4, 5, 8.5, 10].map(value => ({value, label: String(value)})), label: 'x + 4/x on [1/2,4]'};
