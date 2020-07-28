import React from 'react'
import '../App.css'

import SearchSection from './Search_Section'


class Sections extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showSearch: false,
        };
    }

    handleEvent = () => {
        var status = this.state.showSearch;
        this.setState({showSearch: !status});
    }

    render(){    
        var searchSection = "";  
        if(this.state.showSearch){
            searchSection = <SearchSection section={this.props.section}/>
        }  

        return(
            <div>
                <li key={"key_" + this.props.index} className="section_list" onClick={this.handleEvent}>
                    {this.props.section}
                </li>
                {searchSection}
            </div>
        )
    }
}

export default Sections;