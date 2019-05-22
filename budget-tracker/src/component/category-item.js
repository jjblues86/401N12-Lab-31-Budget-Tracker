import React from 'react';
import CategoryForm from './category-form';

export default class CategoryItem extends React.Component {
    render() {
        // const {handleUpdateCards} = this.props;
        const currentCard = this.props.name;
    return(
        <li key={currentCard.id}> {currentCard.name} : {currentCard.content}

            <button>Edit</button>
            <button onClick={this.props.handleRemoveCard.bind(null, currentCard)}>Remove</button>
            <CategoryForm/>
    </li>
    )
}
        };