import React from 'react';
import { connect } from 'react-redux';
import { createCategory } from './action/category-actions';

import  CategoryForm from './component/category-form';



 class App extends React.Component {
    render(){
        return(
            <div>
              <CategoryForm onComplete={this.props.mappedCategoryCreate}/>
                  {this.props.categories.map(current => <p>{current.name}</p>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
     // Jerome - anything I return here will become props
     return {
         categories: state,
     }
};
const mapDispatchToProps = (dispatch) => {
    return {
        mappedCategoryCreate: (category) => {
            dispatch(createCategory(category.name));
        }
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(App);

