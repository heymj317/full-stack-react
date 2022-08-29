import React from 'react';
import TreeMenu from 'react-simple-tree-menu';
/* import Tree from 'react-d3-tree'; */

const Results = props => {

    console.log('Results component: ', props.data);
    return (
        <div url={props.url}>
            <TreeMenu data={props.data} />
        </div>

    );
};

export default Results;