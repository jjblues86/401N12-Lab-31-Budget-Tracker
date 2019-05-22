import React from 'react';
import CategoryForm from "../component/category-form";
import CategoryItem from "../component/category-item";

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
        };
    }

    addCard = () => {
        return(
            <ul>
                {
                    this.state.name.map(currentName => {
                        return <CategoryItem card={currentName}
                                             handleRemoveCard={this.handleRemoveCard}
                                             />
                    })
                }
            </ul>
        )
    };




    handleChange = (event) => {
        const {value} = event.target;
        this.setState({name: value});


    } ;
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onComplete(this.state);
    };

    handleRemoveCard = card => {
        this.setState(previousState => ({
            names: previousState.name.filter(currentName => currentName.id !==card.id),
        }));
    };

    handleAddName = card => {
      this.setState((previousState) => {
          return {
              names: [...previousState.name, {
                  ...card,
                  id: Math.random(),
                  createdOn: new Date(),
              }],
          }
      });
    };

    render() {
        return(
            <main>
                <CategoryForm handleComplete={this.handleAddName}/>
            </main>
        )
    }
}