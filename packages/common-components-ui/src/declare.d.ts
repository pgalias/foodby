declare module 'lodash.uniqueid' {
  import { uniqueId, debounce } from '@types/lodash';

  export default uniqueId;
}

declare module 'lodash.debounce' {
  export default debounce;
}
