import React from 'react'
import '../App.css'

import Sections from './Sections'
import AddNewSection from './Add_New_Section'

class Main_Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            all_sections: [],
            showAddSection: false
        };
    }

    add_new = () => {
        this.setState({showAddSection: true})
    }

    componentDidMount(){
        const json = JSON.parse(window.localStorage.getItem("LOCALSTORAGE_KEY"));
        if(json !== undefined && json !== null)
            this.setState({ all_sections: Object.keys(json)})
        else{
            var sample_data =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var sample  = {};
            sample.category = sample_data;
            window.localStorage.setItem("LOCALSTORAGE_KEY", JSON.stringify(sample));
            window.location.reload();
        }
    }

    render(){   
        var add_section = "";
        if(this.state.showAddSection){
            add_section = <AddNewSection />
        }  

        return(
            <div>
                <h1>Search feature:</h1>
                <button className="new_section" onClick={this.add_new}>Add New Section</button>
                {add_section}

                <h3>All sections available</h3>
                {
                    this.state.all_sections.map((info,index) => {
                        return <Sections section={info} index={index}/>
                    })
                }
            </div>
        )
    }
}

export default Main_Page;