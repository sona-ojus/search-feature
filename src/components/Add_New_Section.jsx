import React from 'react'
import '../App.css'

class Add_New_Section extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showSearch: false,
        };
    }

    handleEvent = () => {
        var section_name = document.getElementById('section_name').value;
        var section_vals = document.getElementById('section_vals').value.split(',');
        var json = JSON.parse(window.localStorage.getItem("LOCALSTORAGE_KEY"));
        json[section_name] = section_vals;

        var valid = JSON.stringify(json);
        window.localStorage.setItem(
            "LOCALSTORAGE_KEY",
            valid
        )
        window.location.reload();
    }

    render(){ 
        return(
            <div className="add_new_section">
                <label>Section Name</label>
                <input type="text" id="section_name"/>
                <label>Enter all values (comma separated) :</label>
                <input type="text" id="section_vals"/>
                <button onClick={this.handleEvent}>Add</button>
            </div>
        )
    }
}

export default Add_New_Section;