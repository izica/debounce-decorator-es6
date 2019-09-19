const debounce = (duration = 500) => {
    return (target, name, descriptor) => {
        return {
            configurable: true,
            enumerable: true,
            writable: true,
            initializer: () => function (...args) {
                return new Promise((resolve) => {
                    if (this.timeout) {
                        clearTimeout(this.timeout);
                    }
                    this.timeout = setTimeout(() => {
                        const promiseOrResult = descriptor.initializer().apply(this, args);
                        if (promiseOrResult.then !== undefined) {
                            promiseOrResult.then(result => {
                                resolve(result);
                            });
                        } else {
                            resolve(promiseOrResult);
                        }
                    }, duration);
                });
            }
        };
    };
};

export default debounce;
