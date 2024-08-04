import React from "react";

class ConfirmButton extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isConfirmed: false,
        };

        // this.handelConfirm = this.handelConfirm.bind(this);  //방법1
    }

    //방법1
    // handelConfirm(){  
    //     this.setState((prevState)=> ({
    //         isConfirmed: !prevState.isConfirmed,
    //     }));
    // }

    //방법2 : 클래스 필드 문법
    handelConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render(){
        return(
            <button
            onClick={this.handelConfirm}
            disabled={this.state.isConfirmed}>
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButton;