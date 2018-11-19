import React from 'react';
import Currency from './Currency';
import Balance from './Balance';
import './App.css';

class AccountBalance extends React.Component {
  state = {
    inputText: '',
    inputAmount: '',
    incomeArray: [],
    expenseArray: [],
    currency: 'stone'
  }

  addIncomes = () =>{
    let data = {description:this.state.inputText,amount:parseInt(this.state.inputAmount),currency:this.state.currency};
    //this.state.incomeArray.push(data);̈́
    this.setState({
      incomeArray: [...this.state.incomeArray,data],
    });
  }
  giveIncomes = () =>{
    let data = {description:this.state.inputText,amount:parseInt(this.state.inputAmount),currency:this.state.currency};
    //this.state.expenseArray.push(data);
    this.setState({
      expenseArray: [...this.state.expenseArray,data],
    });
  }



  userInputText = (e) =>{
    this.setState({
    inputText:e.target.value
  });
  }

  userInputAmount = (e) =>{
    if (!isNaN(e.target.value)) {
    this.setState({
      inputAmount:e.target.value
    })
    return e.target.value;}
    else {alert('insert a number!');
      e.target.value = '';
      }
  }
  changeCurrency = (e) => {
    if (this.state.currency === 'stone') {
      this.setState({
        currency:'shell'
      })
    }
    else {
      this.setState({
        currency:'stone'
      });
    }


  }
  popItIn = (e) => {
    console.log('e.key = ', e.target.id);
    let i = e.target.id;
    let newArray = this.state.incomeArray;
    let removed = newArray.splice(i, 1);
    console.log('removed',removed);
    this.setState({
        incomeArray: newArray,
      });

    }
popItOut = (e) => {
      let i = e.target.id;
      let newArray = this.state.expenseArray;
      let removed = newArray.splice(i, 1);
      console.log('removed',removed);
      this.setState({
      expenseArray: newArray,
    });
  }


  render() {
    return (
      <div className="The-balancer">

        <div className='asking'>Whaaat?</div>
        <input type="text" onChange={this.userInputText} />

        <div className='asking'>How MANY!?</div>
        <input type="text" onChange={this.userInputAmount} />
        <Currency src={this.state.currency} clickz={this.changeCurrency} />

      <button onClick={this.addIncomes}>Take</button>
      <button onClick={this.giveIncomes}>Give</button>
      <hr />
      <main className='down_under'>
        <div className='incomes'>
          <h3>In</h3>
          {this.state.incomeArray.map((el,i) => {return <div key={"id-"+i}>
            {el.description} <span className='balance'>{el.amount}</span>
            <Currency src={el.currency} /> <button id={i} onClick={this.popItIn}>X</button>
            </div>})}
        </div>
        <div className='expenses'>
          <h3>Out</h3>
          {this.state.expenseArray.map((el,i) => {return <div key={"id-"+i}>
            {el.description} <span className='balance'>{el.amount}</span>
            <Currency src={el.currency} /> <button id={i} onClick={this.popItOut}>X</button>
            </div>})}

        </div>
      </main>
      <Balance into={this.state.incomeArray} out={this.state.expenseArray} />
      </div>
      );
    }
  }

export default AccountBalance;
