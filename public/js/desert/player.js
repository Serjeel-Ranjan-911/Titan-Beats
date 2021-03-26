const getPath = (cb, mood) => {
    fetch("/music", {
        method: "post",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ mood: mood }),
    })
        .then(res => {
            return res.json();
        })
        .then(data => {
            cb(data.path);
        });
};

export { getPath };
