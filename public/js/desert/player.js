const getPath = (cb, mood) => {
    let data = { mood: mood };

    fetch("/music", {
        method: "POST",
        body: data,
        dataType: "json",
    })
        .then(res => {
            return res.json();
        })
        .then(data => {
            cb(data.path);
        });
};

export { getPath };
