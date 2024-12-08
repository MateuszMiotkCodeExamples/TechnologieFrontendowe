// app/utils/resource.js
import { createResource } from './createResource';

const threeSecondsToGnar = new Promise(resolve =>
    setTimeout(() => resolve({ gnar: "gnarly!" }), 3000)
);

export const resource = createResource(threeSecondsToGnar);