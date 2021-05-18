export const addToQueue = (queue) => {
    return $.ajax({
      method: "POST",
      url: `/api/queues`,
      data: {queue}
    });
};

export const fetchQueues = () => {
    return $.ajax({
      method: "GET",
      url: `/api/queues`,
    });
};


export const removeQueueItem = (queue) => {
  return $.ajax({
    method: "DELETE",
    url: `api/queues/${queue.film_id}`,
    data: {queue}
  });
};