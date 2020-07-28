import React from 'react'
import '../App.css'

import SelectedString from './Selected_String'

class Search_Section extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showSearchBox : false,
            string_data: [],
            ori_data: [],
            select_data: []
        };
    }

    componentDidMount(){
        const json = JSON.parse(window.localStorage.getItem("LOCALSTORAGE_KEY"));
        if(json !== undefined){
            this.setState({ string_data: json[this.props.section]});
            this.setState({ ori_data: json[this.props.section]});
        }
    }

    handleClick = () => {
        this.setState({showSearchBox: true});
    }

    selectOption = (e) => {
        var select_str = e.currentTarget.innerText;
        var str_arr = [...this.state.select_data];
        if(!str_arr.includes(select_str)){
            str_arr.push(select_str);
        }
        this.setState({select_data: str_arr});
    }

    searchAction = (e) => {
        if(e.target.value !== ""){
            var filter_results = this.state.ori_data.filter(info => {
                return this.checkName(info, e.target.value);
            })
            this.setState({string_data: filter_results})
        }
        else if(e.keyCode === '8'){
            this.delete_action(this.state.select_data.length - 1);
        }
    }

    delete_selection = (e) =>{
        var item = e.target.parentElement.querySelector("span").innerText;
        this.delete_action(0, item)
    }

    delete_action = (index, item) => {
        var select_arr = [...this.state.select_data];

        if(item !== undefined)
            index = select_arr.indexOf(item);

        var final = select_arr.splice(index, 1);
        console.log(final);
        this.setState({select_data: select_arr});        
    }

    checkName = (name, str) => {
        if (name.toUpperCase().indexOf(str.toUpperCase()) > -1) {
            return true;
        } else {
            return false;
        }
    }

    render(){
        return(
            <div className="main-container">
                <div className="container">
                    { 
                        this.state.select_data.map((str, index) => {
                            return  <SelectedString 
                                        delete_selection={this.delete_selection}
                                        str = {str}
                                        index = {index}
                                    />
                        })
                    }

                    <input className="searchBar" 
                        placeholder="Type to search"
                        onKeyDown={this.searchAction}
                    />
                </div>
                <br/> 
                <div className="strings">
                    { 
                        this.state.string_data.map((str, index) => {
                            return  <li className="all_str_list" 
                                        key={"key_"+index}
                                        onClick={this.selectOption}>
                                        {str}
                                    </li>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Search_Section;