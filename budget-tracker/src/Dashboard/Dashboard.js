import React from 'react';
// import CategoryForm from "../component/category-form";

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
        };
    }
    handleChange = (event) => {
        const {value} = event.target;
        this.setState({name: value});


    } ;
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onComplete(this.state);
    };

    render() {
        return(
            <main>
                {/*<CategoryForm />*/}
            </main>
        )
    }
}