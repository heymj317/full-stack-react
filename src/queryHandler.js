function queryHandler(userInput) {
    let nodes = [];
    const searchTerm = encodeURIComponent(`${userInput}`);
    console.log('from queryHandler.js searchTerm: ', searchTerm);

    if (isValidUrl(userInput)) { //USER INPUT VALIDATION
        alert("Searching!");
        fetch(`http://localhost:5049/query/${searchTerm}`)
            .then((response) => response.text())
            .then((data) => { //RESTAPI QUERY (SEARCH DB FIRST, SCRAPE IF NEEDED)
                return data;
            }).then(data => { //
                let paths = data;
                let result = [];
                let level = { result };
                // console.log('queyHandler.js data: ', data);
                //HIERARCHY/TREE BUILDER------
                // for (var i = 0; i < data.length; i++) {
                //     const url = data[i]['url'];
                //     url.split('/').reduce((r, name, i, a) => {
                //         if (!r[name]) {
                //             r[name] = { result: [] };
                //             r.result.push({ text: name, children: r[name].result })
                //         }

                //         return r[name];
                //     }, level)
                // }

                console.log('queryHandler.js data: ', data)
                nodes = result;

                // //MANIPULATE DOM AND DISPLAY
                // let $container = $('#results_container').empty();
                // let $jstree_demo_div = $(`<div id="jstree_demo_div"></div>`);
                // $jstree_demo_div.html(`<div id="jstree_demo_div"><ul></ul></div>`);
                // $jstree_demo_div.appendTo($container);

                // $('#jstree_demo_div').jstree({
                //     'core': {
                //         'data': nodes
                //     }
                // });

                return data;
            })
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