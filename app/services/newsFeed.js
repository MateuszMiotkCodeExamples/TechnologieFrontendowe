const subscribers = [];

const newsFeed = {
    subscribe: (callback) => {
        subscribers.push(callback);
        // Symulacja nowego postu co 5 sekund
        const interval = setInterval(() => {
            const newPost = {
                id: Date.now(),
                title: `Post #${Date.now()}`,
                content: "To jest nowy post."
            };
            subscribers.forEach(sub => sub(newPost));
        }, 5000);
        return () => clearInterval(interval);
    },
    unsubscribe: (callback) => {
        const index = subscribers.indexOf(callback);
        if (index > -1) {
            subscribers.splice(index, 1);
        }
    }
};

export default newsFeed;