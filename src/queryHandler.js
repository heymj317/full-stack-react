

async function queryHandler(userInput) {
    let items = [];
    let result = [];
    const searchTerm = encodeURIComponent(`${userInput}`);
    console.log('from queryHandler.js searchTerm: ', searchTerm);
    const tree = [{
        key: "Start",
        label: "Start",
        nodes: result
    }]

    if (isValidUrl(userInput)) { //USER INPUT VALIDATION
        fetch(`http://localhost:5048/query/${searchTerm}`, {
            mode: 'cors',
            method: 'get'
        })
            .then((response) => response.json())
            .then((data) => { //RESTAPI QUERY (SEARCH DB FIRST, SCRAPE IF NEEDED)
                return data;
            }).then(data => { //
                let paths = data;

                let level = { result };

                //HIERARCHY/TREE BUILDER------
                for (var i = 0; i < data.length; i++) {
                    const url = data[i]['url'];
                    url.split('/').reduce((r, name, i, a) => {
                        if (!r[name]) {
                            r[name] = { result: [] };
                            r.result.push({ key: name, label: name, nodes: r[name].result })
                        }

                        return r[name];
                    }, level)
                }

                return data;
            })
        return tree;
    } else {
        alert('please enter a valid url e.g. https://cnn.com');
    };
}

//URL VALIDATION CHECK
const isValidUrl = urlString => {
    var a = document.createElement('a');
    a.href = urlString;
    return (a.host && a.host != window.location.host);
}

export default queryHandler;