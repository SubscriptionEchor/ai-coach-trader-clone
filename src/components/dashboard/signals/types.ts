```typescript
export interface Signal {
  pair: string;
  type: 'long' | 'spot';
  time: string;
  entryPrices: string[];
  exitPrices: string[];
  stopLoss: string;
  leverage?: string;
}
```