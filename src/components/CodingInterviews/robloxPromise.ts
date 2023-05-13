class MyPromise {
    constructor(executor) {
      this.status = 'pending';
      this.value = undefined;
      this.reason = undefined;
  
      const resolve = (value) => {
        if (this.status === 'pending') {
          this.status = 'fulfilled';
          this.value = value;
        }
      };
  
      const reject = (reason) => {
        if (this.status === 'pending') {
          this.status = 'rejected';
          this.reason = reason;
        }
      };
  
      try {
        executor(resolve, reject);
      } catch (error) {
        reject(error);
      }
    }
  
    then(onFulfilled, onRejected) {
      onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
      onRejected = typeof onRejected === 'function' ? onRejected : (reason) => { throw reason; };
  
      if (this.status === 'fulfilled') {
        return new MyPromise((resolve, reject) => {
          try {
            const result = onFulfilled(this.value);
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        });
      }
  
      if (this.status === 'rejected') {
        return new MyPromise((resolve, reject) => {
          try {
            const result = onRejected(this.reason);
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        });
      }
  
      if (this.status === 'pending') {
        return new MyPromise((resolve, reject) => {
          this.onFulfilledCallbacks.push(() => {
            try {
              const result = onFulfilled(this.value);
              if (result instanceof MyPromise) {
                result.then(resolve, reject);
              } else {
                resolve(result);
              }
            } catch (error) {
              reject(error);
            }
          });
  
          this.onRejectedCallbacks.push(() => {
            try {
              const result = onRejected(this.reason);
              if (result instanceof MyPromise) {
                result.then(resolve, reject);
              } else {
                resolve(result);
              }
            } catch (error) {
              reject(error);
            }
          });
        });
      }
    }
  
    catch(onRejected) {
      return this.then(null, onRejected);
    }
  }
  