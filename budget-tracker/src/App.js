import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { createCategory } from './action/category-actions';
import Landing from './Landing/Landing';
import Dashboard from './Dashboard/Dashboard';

import  CategoryForm from './component/category-form';

 class App extends React.Component {
    render(){
        const LANDING_ROUTE = '/';
        return(
            <main>
                <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to={LANDING_ROUTE}>Landing</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                    </ul>
                </nav>
                    <Route exact path={LANDING_ROUTE} component={Landing}/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                </BrowserRouter>
            <div>
            <CategoryForm onComplete={this.props.mappedCategoryCreate}/>
                { this.props.category.map(current => <p>{current.name}</p>)}
            </div>

                </main>
    )
    }
}

const mapStateToProps = (state) => {
     // Jerome - anything I return here will become props
     return {
         category: state.category,
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

