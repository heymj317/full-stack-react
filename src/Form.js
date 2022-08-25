import React from 'react';


const Form = props => {


    return (
        <form onSubmit={(event) => props.handleSubmit(event)} className="row clearfix g-0" id="user-form">
            <div className="col-lg-2"></div>

            <div className="col-lg-1">
                <input className="btn btn-primary btn-sm float-left ml-0" type="submit" role="button" value=" SCRAPE! " name="Search-button"></input>
            </div>
            <div className="col-lg-7">
                <input className="form-control mx-0" type="text" name="Search" placeholder="e.g. https://cnn.com" aria-label="default input example"></input>
            </div>
        </form>

    );
};

export default Form;