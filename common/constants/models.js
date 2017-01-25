import Immutable from 'immutable';
// Immutable.Record() -> like as fromJS(),but enforce a specific set of allowed string keys, and have default values.
export const CounterState = Immutable.Record({ count: 0 });