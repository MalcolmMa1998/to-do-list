import React, {Component, Fragment} from 'react';
import TodoItem from "./TodoItem";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <span>输入内容</span>
                    <input value={this.state.inputValue}
                           onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>Submit</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <div>
                                    <TodoItem content={item}
                                              index={index}
                                              deleteItem={this.handleItemDelete.bind(this)}
                                    />
                                </div>

                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e) {
        this.setState({
                inputValue: e.target.value
            }
        )
        // console.log(this.state.inputValue)
    }

    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
}

export default App;
