/**
 * Creates a queue object with the specified concurrency.
 * Tasks added to the queue are processed in parallel (up to the concurrency limit).
 * If all workers are in progress, the task is queued until one becomes available.
 * Once a worker completes a task, that task's callback is called.
 * @param {Array} queue
 * @param {Number} concurrency
 */
export const asyncQueue = (queue, concurrency = 3, results = []) => {
  const processQueue = queue.slice(0, concurrency);
  return Promise.allSettled(processQueue.map(q => q.request.apply(this, [...q.arguments])))
    .then(resp => {
      processQueue.forEach((q, index) => {
        q?.callback?.(resp[index]);
      });
      results.push(...resp);
      return results;
    })
    .finally(() => {
      const newQueue = queue.slice(concurrency);
      if (newQueue.length) {
        return asyncQueue(newQueue, concurrency, results);
      }
    });
};