import React from "react";

class Customer extends React.Component {
    render(){
        //실제로 그려지는 내용이 여기에 담김
        return(
            //내부가 2개 이상일 경우 <div> 같은 태그로 감싸야 오류가 발생하지 않음.
            <div> 
                <CustomerProfile id={this.props.id} name={this.props.name} image={this.props.image}/>
                <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
            </div>
        )
    }
}

class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render(){
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}
export default Customer;