// app/utils/safe.js

export function safe(fn) {
    try {
        fn();
    } catch (error) {
        if (error instanceof Promise) {
            error.then(() => safe(fn));
        } else {
            throw error;
        }
    }
}
